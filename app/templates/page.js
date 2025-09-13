'use client'
import Link from 'next/link';

const templates = [
  {
    id: 'project',
    title: 'Project Management',
    desc: 'Organize tasks and milestones efficiently.',
    img: 'https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=600&auto=format&fit=crop',
  },
  { id: 'brainstorm', title: 'Creative Brainstorming', desc: 'Unleash creativity with a vibrant template.', img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=600&auto=format&fit=crop' },
  { id: 'education', title: 'Educational', desc: 'Ideal for students and teachers.', img: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=600&auto=format&fit=crop' },
  { id: 'personal', title: 'Personal Goals', desc: 'Track growth and achievements.', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop' },
  { id: 'business', title: 'Business Strategy', desc: 'Plan and execute strategies effectively.', img: 'https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=600&auto=format&fit=crop' },
  { id: 'todo', title: 'To-Do List', desc: 'Keep daily tasks organized and manageable.', img: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=600&auto=format&fit=crop' },
];

export default function TemplatesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Choose Your Mind Map Template</h1>
        <Link href="/create" className="rounded-md border border-neutral-700 px-3 py-1.5 hover:bg-neutral-800">Create New Mindmap</Link>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {templates.map((t) => (
          <div key={t.id} className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-4">
            <img src={t.img} alt="" className="mb-4 h-36 w-full rounded-md object-cover" />
            <h3 className="font-semibold">{t.title}</h3>
            <p className="mb-4 text-sm text-neutral-300">{t.desc}</p>
            <Link href={`/create?template=${t.id}`} className="inline-block rounded-md bg-brand-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-brand-700">
              Use template
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
