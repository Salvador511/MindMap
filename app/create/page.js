"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  addEdge,
  useNodesState,
  useEdgesState,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useSearchParams } from 'next/navigation';
import EditableNode from '@/components/EditableNode';
import { randomPastel, readableText } from '@/lib/colors';

const TEMPLATES = {
  project: {
    nodes: [
      { id: '1', type: 'editable', position: { x: 0, y: 0 }, data: { label: 'Project' } },
      { id: '2', type: 'editable', position: { x: -150, y: 150 }, data: { label: 'Backlog' } },
      { id: '3', type: 'editable', position: { x: 150, y: 150 }, data: { label: 'In Progress' } },
      { id: '4', type: 'editable', position: { x: 0, y: 300 }, data: { label: 'Done' } },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2' },
      { id: 'e1-3', source: '1', target: '3' },
      { id: 'e1-4', source: '1', target: '4' },
    ],
  },
  brainstorm: {
    nodes: [
      { id: '1', type: 'editable', position: { x: 0, y: 0 }, data: { label: 'Idea' } },
      { id: '2', type: 'editable', position: { x: -200, y: 150 }, data: { label: 'Pros' } },
      { id: '3', type: 'editable', position: { x: 200, y: 150 }, data: { label: 'Cons' } },
      { id: '4', type: 'editable', position: { x: 0, y: 150 }, data: { label: 'Notes' } },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2' },
      { id: 'e1-3', source: '1', target: '3' },
      { id: 'e1-4', source: '1', target: '4' },
    ],
  },
};

const STORAGE_KEY = 'mindmap:graph';

export default function CreatePage() {
  const search = useSearchParams();
  const templateId = search.get('template');
  const [mounted, setMounted] = useState(false);

  const initial = useMemo(() => {
    if (typeof window === 'undefined') return { nodes: [], edges: [] };
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
    return (
      TEMPLATES[templateId] || {
        nodes: [{ id: '1', type: 'editable', position: { x: 0, y: 0 }, data: { label: 'Central Topic' } }],
        edges: [],
      }
    );
  }, [templateId]);

  // Enhance nodes with colors and defaults; we'll inject the onChange callback after state is created
  const enhanceNodes = useCallback(
    (nds) =>
      nds.map((n) => {
        const bg = n.data?.bg ?? randomPastel();
        const color = n.data?.color ?? readableText(bg);
        return {
          ...n,
          type: n.type ?? 'editable',
          data: { label: 'New Node', ...n.data, bg, color },
        };
      }),
    []
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(enhanceNodes(initial.nodes));
  const [edges, setEdges, onEdgesChange] = useEdgesState(initial.edges);
  const idRef = useRef(100);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ nodes, edges }));
  }, [nodes, edges]);

  // Avoid SSR/CSR markup mismatch by rendering the canvas only after mount
  useEffect(() => setMounted(true), []);

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  const onChangeNodeLabel = useCallback((id, label) => {
    setNodes((nds) => nds.map((n) => (n.id === id ? { ...n, data: { ...n.data, label } } : n)));
  }, [setNodes]);

  // Inject the onChange callback into node data after state is ready
  useEffect(() => {
    setNodes((nds) => nds.map((n) => (n.data?.onChange ? n : { ...n, data: { ...n.data, onChange: onChangeNodeLabel } })));
  }, [onChangeNodeLabel, setNodes]);

  const addNode = () => {
    const id = String(++idRef.current);
    const bg = randomPastel();
    const color = readableText(bg);
    setNodes((nds) =>
      nds.concat({
        id,
        type: 'editable',
        position: { x: Math.random() * 400 - 200, y: Math.random() * 300 },
        data: { label: 'New Node', onChange: onChangeNodeLabel, bg, color },
      })
    );
  };

  const clear = () => {
    setNodes([]); setEdges([]);
    window.localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <div className="h-[75vh] rounded-xl border border-neutral-800 bg-neutral-950">
      <div className="flex items-center justify-between gap-3 border-b border-neutral-800 p-3">
        <div className="font-semibold">Mindmap Editor</div>
        <div className="flex items-center gap-2">
          <button onClick={addNode} className="rounded-md bg-brand-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-brand-700">Add node</button>
          <button onClick={clear} className="rounded-md border border-neutral-700 px-3 py-1.5 text-sm hover:bg-neutral-900">Clear</button>
        </div>
      </div>
      <div className="h-[calc(75vh-49px)]">
        {mounted ? (
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
            nodeTypes={{ editable: EditableNode }}
          >
            <MiniMap />
            <Controls />
            <Background gap={16} />
          </ReactFlow>
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-neutral-400">Loading canvas…</div>
        )}
      </div>
    </div>
  );
}
