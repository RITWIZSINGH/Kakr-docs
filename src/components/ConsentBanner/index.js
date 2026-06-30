import React, {useCallback, useEffect, useState} from 'react';
import {useLocation} from '@docusaurus/router';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

const CONSENT_KEY = 'ga-consent'; // stored value: 'granted' | 'denied'

function readConsent() {
  if (typeof window === 'undefined') return null;
  try {
    return window.localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
}

function writeConsent(value) {
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* localStorage may be unavailable (private mode); fail silently */
  }
}

// Injects gtag.js exactly once, and only when called (i.e. after consent).
function loadGtag(measurementId) {
  if (typeof window === 'undefined' || !measurementId) return;
  if (window.__gtagLoaded) return;
  window.__gtagLoaded = true;

  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  // eslint-disable-next-line prefer-rest-params
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    send_page_view: false, // we send pageviews manually on each route change
  });
}

export default function ConsentManager() {
  const {siteConfig} = useDocusaurusContext();
  const measurementId = siteConfig.customFields?.gaMeasurementId;

  const [consent, setConsent] = useState(null);   // 'granted' | 'denied' | null
  const [ready, setReady] = useState(false);       // becomes true after we read storage (client only)
  const [forceOpen, setForceOpen] = useState(false);
  const location = useLocation();

  // On mount (client only): read stored consent and load GA if already granted.
  useEffect(() => {
    const stored = readConsent();
    setConsent(stored);
    setReady(true);
    if (stored === 'granted') {
      loadGtag(measurementId);
    }
    // expose a global so the "Cookie settings" button can re-open the banner
    window.openCookieConsent = () => setForceOpen(true);
    return () => { delete window.openCookieConsent; };
  }, [measurementId]);

  // Send a pageview on every route change, but only with consent.
  useEffect(() => {
    if (consent === 'granted' && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [location.pathname, location.search, consent]);

  const accept = useCallback(() => {
    writeConsent('granted');
    setConsent('granted');
    setForceOpen(false);
    loadGtag(measurementId);
  }, [measurementId]);

  const reject = useCallback(() => {
    writeConsent('denied');
    setConsent('denied');
    setForceOpen(false);
  }, []);

  // Render nothing during SSR / first paint. Show the banner only when there is
  // no decision yet, or when the user re-opens it via Cookie settings.
  const visible = ready && (consent === null || forceOpen);
  if (!visible) return null;

  return (
    <div className={styles.banner} role="dialog" aria-live="polite" aria-label="Cookie consent">
      <div className={styles.text}>
        <strong className={styles.title}>We value your privacy</strong>
        <p className={styles.body}>
          We use Google Analytics to understand how visitors use our documentation
          (for example, which sections are most read). These analytics cookies load
          only if you accept. See our{' '}
          <Link to="/privacy-policy">Privacy Policy</Link> for details.
        </p>
      </div>
      <div className={styles.actions}>
        <button type="button" className={styles.reject} onClick={reject}>
          Reject
        </button>
        <button type="button" className={styles.accept} onClick={accept}>
          Accept
        </button>
      </div>
    </div>
  );
}
