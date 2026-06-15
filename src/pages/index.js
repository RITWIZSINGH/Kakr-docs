import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const sections = [
  {
    title: 'Foundations',
    to: '/docs/foundations',
    desc: 'Why shared-secret identity fails, and what PTERI replaces it with.',
  },
  {
    title: 'API Reference',
    to: '/docs/api-reference',
    desc: 'Standard and Enterprise APIs, with Postman documentation.',
  },
  {
    title: 'AI Agents & MCP',
    to: '/docs/ai-agents-and-mcp',
    desc: 'Give AI agents cryptographic authority instead of stored credentials.',
  },
  {
    title: 'SDKs & Integration',
    to: '/docs/sdks-and-integration',
    desc: 'Step-by-step guides for integrating PTERI into your stack.',
  },
  {
    title: 'Threat Model',
    to: '/docs/threat-model',
    desc: 'Phishing, SIM swaps, and replay — eliminated by design, not policy.',
  },
  {
    title: 'Product & Access',
    to: '/docs/product-and-access',
    desc: 'Pricing plans, the PTERI Wallet app, and getting your API keys.',
  },
];

export default function Home() {
  return (
    <Layout
      title="Kakr Labs Documentation"
      description="Cryptographic proof of authority — for humans and AI agents.">
      <main>
        <header className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>PTERI · Universal Trust Layer</p>
            <h1 className={styles.title}>
              Identity by <span className={styles.strike}>assertion</span>{' '}
              <span className={styles.accent}>proof</span>.
            </h1>
            <p className={styles.subtitle}>
              If a secret can be typed, it can be phished. If it can be stored,
              it can be breached. PTERI replaces shared-secret trust with
              cryptographic proof of authority — for humans and AI agents.
            </p>
            <div className={styles.actions}>
              <Link className={styles.primaryBtn} to="/docs">
                Read the docs
              </Link>
              <Link className={styles.ghostBtn} to="/docs/api-reference">
                API Reference
              </Link>
            </div>
          </div>
        </header>

        <section className={styles.grid}>
          {sections.map((s) => (
            <Link key={s.to} to={s.to} className={styles.card}>
              <h2>{s.title}</h2>
              <p>{s.desc}</p>
              <span className={styles.cardArrow}>→</span>
            </Link>
          ))}
        </section>
      </main>
    </Layout>
  );
}
