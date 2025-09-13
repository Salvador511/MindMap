'use client'
import Link from 'next/link';

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
        <h2 className="text-xl font-semibold">Choose your subscription</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { name: 'Basic', price: 15, features: ['5 mind maps monthly', 'Template library', 'Community access'] },
            { name: 'Standard', price: 12, badge: 'Popular', features: ['10 mind maps monthly', 'Template library', 'Community access'] },
            { name: 'Advanced', price: 24, features: ['Unlimited mind maps', 'Template library', 'Community access'] },
          ].map((p) => (
            <div key={p.name} className="relative rounded-xl border border-neutral-800 bg-neutral-900/40 p-6">
              {p.badge && (
                <span className="absolute right-4 top-4 rounded bg-brand-600 px-2 py-0.5 text-xs font-semibold">{p.badge}</span>
              )}
              <h3 className="mb-2 text-lg font-semibold">{p.name} Plan</h3>
              <div className="mb-4 text-3xl font-bold">${p.price}<span className="text-base font-normal text-neutral-400">/mo</span></div>
              <ul className="mb-4 space-y-2 text-sm text-neutral-300">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><span>✓</span> {f}</li>
                ))}
              </ul>
              <button className="w-full rounded-md border border-neutral-700 px-4 py-2 hover:bg-neutral-800">Select</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
