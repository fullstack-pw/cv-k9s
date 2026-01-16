import type { ReactNode } from 'react';

interface Column<T> {
  key: keyof T | string;
  header: string;
  width?: string;
  render?: (item: T) => ReactNode;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  selectedIndex: number;
  title: string;
  onSelect?: (item: T, index: number) => void;
}

export function Table<T>({
  columns,
  data,
  selectedIndex,
  title,
}: TableProps<T>) {
  return (
    <div className="flex flex-col flex-1 mx-2 border border-[color:var(--color-k9s-border)] overflow-hidden">
      <div className="text-center py-1 text-[color:var(--color-k9s-cyan)] border-b border-[color:var(--color-k9s-border)]">
        {title}
      </div>

      <div className="flex bg-[color:var(--color-k9s-bg-light)] py-1 px-2 text-[color:var(--color-k9s-text-dim)] text-xs border-b border-[color:var(--color-k9s-border)]">
        {columns.map((col, idx) => (
          <div
            key={String(col.key)}
            className={`${col.width || 'flex-1'} ${idx === 0 ? '' : 'pl-2'} truncate`}
          >
            {col.header}
          </div>
        ))}
      </div>

      <div className="flex-1 overflow-auto">
        {data.map((item, rowIdx) => (
          <div
            key={rowIdx}
            className={`flex py-0.5 px-2 text-xs cursor-pointer ${
              rowIdx === selectedIndex
                ? 'bg-[color:var(--color-k9s-cyan)] text-[color:var(--color-k9s-bg)]'
                : 'hover:bg-[color:var(--color-k9s-bg-light)]'
            }`}
          >
            {columns.map((col, colIdx) => (
              <div
                key={String(col.key)}
                className={`${col.width || 'flex-1'} ${colIdx === 0 ? '' : 'pl-2'} truncate`}
              >
                {col.render
                  ? col.render(item)
                  : String((item as Record<string, unknown>)[col.key as string] ?? '')}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
