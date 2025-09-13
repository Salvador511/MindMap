"use client";
import { useEffect, useRef, useState } from 'react';
import { Handle, Position } from '@xyflow/react';

export default function EditableNode({ id, data, selected }) {
  const [value, setValue] = useState(data.label ?? 'New Node');
  const inputRef = useRef(null);

  useEffect(() => setValue(data.label ?? 'New Node'), [data.label]);

  useEffect(() => {
    if (selected && inputRef.current) {
      inputRef.current.focus();
    }
  }, [selected]);

  const onBlur = () => {
    if (data?.onChange) data.onChange(id, value);
  };

  return (
    <div
      className="relative rounded-lg border px-4 py-3 shadow-sm"
      style={{
        background: data.bg || '#111827',
        color: data.color || '#F9FAFB',
        borderColor: 'rgba(255,255,255,0.08)'
      }}
    >
      {/* Connection handles */}
      <Handle type="target" position={Position.Top} style={{ background: 'var(--xy-handle-color, #94a3b8)', width: 10, height: 10 }} />
      <Handle type="source" position={Position.Bottom} style={{ background: 'var(--xy-handle-color, #94a3b8)', width: 10, height: 10 }} />

      <input
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={onBlur}
        className="w-48 bg-transparent text-center text-base font-semibold outline-none placeholder:text-neutral-400"
        placeholder="Node title"
      />
    </div>
  );
}
