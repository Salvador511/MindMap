export const metadata = {
  title: 'About – MindMap Maker',
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-12">
      <section className="space-y-4">
        <h1 className="text-2xl font-bold">About MindMap Maker</h1>
        <p className="text-neutral-300">
          MindMap Maker helps you capture ideas fast and turn them into clear, connected mind maps. It runs entirely in your browser for instant start-up and private drafts.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <Card title="What you can do" items={[
            'Start from templates or a blank map',
            'Add, connect, and rearrange nodes with drag-and-zoom',
            'Rename nodes inline with local auto‑save',
            'Export options (PNG/SVG/PDF) – coming soon',
          ]} />
          <Card title="Built with" items={[
            'Next.js (App Router) & React 18',
            'Tailwind CSS for styling',
            'React Flow (@xyflow/react) editor',
          ]} />
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Our mission</h2>
        <p className="text-neutral-300">
          Build simple, effective tools that help you think better and move faster—with a focus on clarity, speed, and zero-friction UX.
        </p>
      </section>

      <section className="space-y-4">
        <h2 id="team" className="text-xl font-semibold">Super Casa Club&apos;s Team</h2>
        <p className="text-neutral-300">MindMap Maker is crafted by a small, hands-on team. Here&apos;s who does what:</p>
        <div className="grid gap-4 sm:grid-cols-3">
          <TeamCard
            name="Alejandra Mandujano Cano de lor Rios"
            role="Product & Design"
            about="Drives product direction and UX. Focused on simple flows, accessible UI, and a delightful editor experience."
          />
          <TeamCard
            name="Roberto Rocha Reza"
            role="Engineering"
            about="Implements editor features, performance, and data model. Enjoys systems that feel fast and reliable."
          />
          <TeamCard
            name="Salvador Orozco Gonzalez"
            role="Engineering & DX"
            about="Works on architecture, tooling, and integrations. Keeps the stack lean and maintainable."
          />
        </div>
      </section>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Roadmap (short-term)</h2>
        <ul className="list-disc space-y-1 pl-5 text-neutral-300">
          <li>Export to PNG/SVG/PDF and import/export JSON</li>
          <li>Node styling panel (colors, shapes) and labeled edges</li>
          <li>Templates manager and quick-start flows</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Say hello</h2>
        <p className="text-neutral-300">
          Got feedback or ideas? We&apos;d love to hear from you.
        </p>
        <a className="inline-block rounded-md border border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-900" href="mailto:hello@example.com">Contact us</a>
      </section>
    </div>
  );
}

function Card({ title, items }) {
  return (
    <div className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-4">
      <h3 className="mb-2 font-semibold">{title}</h3>
      <ul className="list-disc space-y-1 pl-5 text-neutral-300">
        {items.map((i) => (<li key={i}>{i}</li>))}
      </ul>
    </div>
  );
}

function TeamCard({ name, role, about }) {
  const initials = name.split(' ').map((p) => p[0]).slice(0, 2).join('');
  return (
    <div className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-4">
      <div className="mb-3 flex items-center gap-3">
        <div className="grid h-9 w-9 place-items-center rounded-md bg-brand-600 text-sm font-bold text-white">{initials}</div>
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-xs text-neutral-400">{role}</div>
        </div>
      </div>
      <p className="text-sm text-neutral-300">{about}</p>
    </div>
  );
}
