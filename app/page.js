'use client'
import Link from 'next/link';
import { useState } from 'react';

function Feature({ title, desc, icon }) {
  return (
    <div className="flex items-start gap-4 rounded-lg border border-neutral-800 bg-neutral-900/50 p-6">
      <div className="text-2xl">{icon}</div>
      <div>
        <h3 className="font-semibold text-neutral-50">{title}</h3>
        <p className="text-neutral-300 text-sm">{desc}</p>
      </div>
    </div>
  );
}

function Testimonial({ quote, name, role }) {
  return (
    <div className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-6">
      <div className="mb-3 text-brand-500">★ ★ ★ ★ ★</div>
      <p className="mb-4 text-neutral-200">{quote}</p>
      <div className="text-sm text-neutral-400">{name} — {role}</div>
    </div>
  );
}

export default function HomePage() {
  const [annual, setAnnual] = useState(true);
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 p-10 text-center">
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-xl bg-neutral-900 text-3xl">✔︎</div>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
            Easily organize your thoughts and visualize
          </h1>
          <p className="text-neutral-300">
            Turn ideas into beautiful, shareable mind maps. Drag, connect, and collaborate in seconds.
          </p>
          <div className="flex justify-center gap-3">
            <Link href="/create" className="rounded-md bg-brand-600 px-4 py-2 font-semibold text-white hover:bg-brand-700">Get started</Link>
            <Link href="/templates" className="rounded-md border border-neutral-700 px-4 py-2 hover:bg-neutral-900">Browse templates</Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="grid gap-4 sm:grid-cols-3">
        <Feature title="Structured Planning" icon="🧭" desc="Transform your ideas into clear mind maps." />
        <Feature title="Collaborate Effectively" icon="👥" desc="Share and work together with teammates." />
        <Feature title="Boost Productivity" icon="📈" desc="Streamline your workflow and focus on what matters." />
      </section>

      {/* Testimonials */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Join a community of creative thinkers</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Testimonial quote="This tool makes brainstorming fun!" name="Emma R." role="Designer" />
          <Testimonial quote="Mind mapping has changed my workflow!" name="Ryan T." role="Creator" />
          <Testimonial quote="I can organize my thoughts better now!" name="Sofia L." role="Marketer" />
          <Testimonial quote="Keeps me focused and productive." name="Liam J." role="Coordinator" />
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Pricing</h2>
          <PricingToggle annual={annual} setAnnual={setAnnual} />
        </div>
        <PricingGrid annual={annual} />
      </section>
    </div>
  );
}

function PricingToggle({ annual, setAnnual }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className={!annual ? 'text-white' : 'text-neutral-400'}>Monthly</span>
      <button
        onClick={() => setAnnual((v) => !v)}
  className="relative h-6 w-12 overflow-hidden rounded-full bg-neutral-800 ring-1 ring-neutral-700"
        aria-label="Toggle billing period"
  aria-pressed={annual}
      >
  <span className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-transform ${annual ? 'translate-x-6' : 'translate-x-0'}`} />
      </button>
      <span className={annual ? 'text-white' : 'text-neutral-400'}>Yearly <span className="text-brand-500">(save 20%)</span></span>
    </div>
  );
}

function PricingGrid({ annual }) {

  const plans = [
    {
      name: 'Free',
      monthly: 0,
      popular: false,
      features: [
        'Up to 3 mind maps',
        'Basic templates',
        'Community access',
      ],
      cta: 'Get started',
    },
    {
      name: 'Plus',
      monthly: 6,
      popular: false,
      features: [
        '20 mind maps',
        'Template library',
        'PNG export',
        '1 collaborator/map',
      ],
      cta: 'Choose Plus',
    },
    {
      name: 'Pro',
      monthly: 12,
      popular: true,
      features: [
        'Unlimited mind maps',
        'Export PNG • SVG • PDF',
        '5 collaborators/map',
        'Priority support',
      ],
      cta: 'Choose Pro',
    },
    {
      name: 'Team',
      monthly: 49,
      note: 'Includes 5 seats; +$9 per extra seat (annual).',
      popular: false,
      features: [
        'Shared workspaces & permissions',
        'Unlimited maps & version history',
        'Role-based access',
        'Email support',
      ],
      cta: 'Start Team',
    },
  ];

  const priceText = (p) => {
    if (p.monthly === 0) return '$0';
    const m = p.monthly;
    if (annual) {
      const discounted = Math.round(m * 0.8 * 100) / 100; // 20% off
      return `$${discounted}`;
    }
    return `$${m}`;
  };

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {plans.map((p) => (
        <div key={p.name} className="relative rounded-xl border border-neutral-800 bg-neutral-900/40 p-6">
          {p.popular && (
            <span className="absolute right-4 top-4 rounded bg-brand-600 px-2 py-0.5 text-xs font-semibold">Popular</span>
          )}
          <h3 className="mb-1 text-lg font-semibold">{p.name}</h3>
          <div className="mb-1 text-3xl font-bold">{priceText(p)}<span className="text-base font-normal text-neutral-400">/mo</span></div>
          {p.monthly > 0 && (
            <div className="mb-4 text-xs text-neutral-400">{annual ? 'Billed annually (save 20%)' : 'Billed monthly'}</div>
          )}
          {p.note && <div className="mb-2 text-xs text-neutral-400">{p.note}</div>}
          <ul className="mb-4 space-y-2 text-sm text-neutral-300">
            {p.features.map((f) => (
              <li key={f} className="flex items-center gap-2"><span>✓</span> {f}</li>
            ))}
          </ul>
          <button className="w-full rounded-md border border-neutral-700 px-4 py-2 hover:bg-neutral-800">{p.cta}</button>
        </div>
      ))}
    </div>
  );
}
