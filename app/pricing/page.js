import Link from 'next/link';

export const metadata = {
  title: 'Pricing • MindMap Maker',
  description: 'Simple, transparent pricing for individuals and teams.'
};

function PlanCard({ name, price, period = '/mo', note, features = [], cta, highlight = false }) {
  return (
    <div className={`relative rounded-xl border ${highlight ? 'border-brand-600' : 'border-neutral-800'} bg-neutral-900/40 p-6`}>
      {highlight && (
        <span className="absolute right-4 top-4 rounded bg-brand-600 px-2 py-0.5 text-xs font-semibold">Popular</span>
      )}
      <h3 className="mb-1 text-lg font-semibold">{name}</h3>
      <div className="mb-1 text-3xl font-bold">{price}<span className="text-base font-normal text-neutral-400">{period}</span></div>
      {note && <div className="mb-3 text-xs text-neutral-400">{note}</div>}
      <ul className="mb-4 space-y-2 text-sm text-neutral-300">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2"><span>✓</span> {f}</li>
        ))}
      </ul>
      <Link href="/create" className={`block w-full rounded-md px-4 py-2 text-center ${highlight ? 'bg-brand-600 text-white hover:bg-brand-700' : 'border border-neutral-700 hover:bg-neutral-800'}`}>{cta}</Link>
    </div>
  );
}

export default function PricingPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3 text-center">
        <h1 className="text-3xl font-bold">Pricing</h1>
        <p className="text-neutral-300">Start free. Upgrade when you need more power and collaboration.</p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <PlanCard
          name="Free"
          price="$0"
          features={[
            'Up to 3 mind maps',
            'Basic templates',
            'PNG export',
          ]}
          cta="Get started"
        />
        <PlanCard
          name="Plus"
          price="$6"
          features={[
            '20 mind maps',
            'Template library',
            'PNG export',
            '1 collaborator/map',
          ]}
          cta="Choose Plus"
        />
        <PlanCard
          name="Pro"
          price="$12"
          highlight
          features={[
            'Unlimited mind maps',
            'Export PNG • SVG • PDF',
            '5 collaborators/map',
            'Priority support',
          ]}
          cta="Choose Pro"
        />
        <PlanCard
          name="Team"
          price="$49"
          note="Includes 5 seats; +$9 per extra seat (annual)."
          features={[
            'Shared workspaces & permissions',
            'Unlimited maps & version history',
            'Role-based access',
            'Email support',
          ]}
          cta="Start Team"
        />
      </section>

      <section className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6">
        <h2 className="mb-2 text-lg font-semibold">FAQ</h2>
        <ul className="space-y-3 text-sm text-neutral-300">
          <li>
            <strong className="text-neutral-100">Can I use it for free?</strong>
            <div>Yes. The Free plan lets you create up to 3 mind maps.</div>
          </li>
          <li>
            <strong className="text-neutral-100">Can I cancel anytime?</strong>
            <div>Absolutely. You can downgrade or cancel from your account settings.</div>
          </li>
        </ul>
      </section>
    </div>
  );
}
