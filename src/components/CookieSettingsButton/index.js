import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

// A small button that re-opens the cookie consent banner so users can
// change or withdraw their choice. Used inside the Privacy Policy page.
export default function CookieSettingsButton() {
  return (
    <BrowserOnly>
      {() => (
        <button
          type="button"
          onClick={() => window.openCookieConsent && window.openCookieConsent()}
          style={{
            fontWeight: 600,
            padding: '0.5rem 1rem',
            borderRadius: 8,
            border: '1px solid var(--ifm-color-primary)',
            background: 'transparent',
            color: 'var(--ifm-color-primary)',
            cursor: 'pointer',
          }}>
          Change cookie preferences
        </button>
      )}
    </BrowserOnly>
  );
}
