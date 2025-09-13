import { Suspense } from 'react';
import ClientEditor from './ClientEditor';

export const dynamic = 'force-dynamic';

export default function CreatePage() {
  return (
    <Suspense fallback={<div className="text-sm text-neutral-400">Loading…</div>}>
      <ClientEditor />
    </Suspense>
  );
}
