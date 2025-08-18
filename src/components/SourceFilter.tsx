import React from "react";

export type SourceFilterProps = {
  sources: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
};

export default function SourceFilter({ sources, selected, onChange }: SourceFilterProps) {
  function toggle(source: string) {
    if (selected.includes(source)) {
      onChange(selected.filter((s) => s !== source));
    } else {
      onChange([...selected, source]);
    }
  }
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {sources.map((src) => (
        <button
          key={src}
          className={`px-3 py-1 rounded border text-sm transition-colors ${selected.includes(src)
            ? "bg-primary text-primary-foreground border-primary"
            : "bg-muted text-muted-foreground border-border hover:bg-primary/10"}`}
          onClick={() => toggle(src)}
          type="button"
        >
          {src}
        </button>
      ))}
    </div>
  );
}
