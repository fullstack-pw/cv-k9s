import type { ReactNode } from 'react';

interface Column<T> {
  key: keyof T | string;
  header: string;
  width?: string;
  render?: (item: T, isSelected: boolean) => ReactNode;
}

type RowStatus = 'running' | 'completed' | 'default';

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  selectedIndex: number;
  title: string;
  onSelect?: (item: T, index: number) => void;
  getRowStatus?: (item: T) => RowStatus;
}

function getRowClasses(status: RowStatus, isSelected: boolean): string {
  if (isSelected) {
    if (status === 'running') {
      return 'bg-[color:var(--color-k9s-cyan)] text-[color:var(--color-k9s-bg)]';
    }
    if (status === 'completed') {
      return 'bg-gray-500 text-[color:var(--color-k9s-bg)]';
    }
    return 'bg-[color:var(--color-k9s-cyan)] text-[color:var(--color-k9s-bg)]';
  }

  if (status === 'running') {
    return 'text-[color:var(--color-k9s-cyan)] hover:bg-[color:var(--color-k9s-cyan)] hover:text-[color:var(--color-k9s-bg)]';
  }
  if (status === 'completed') {
    return 'text-gray-500 hover:bg-gray-500 hover:text-[color:var(--color-k9s-bg)]';
  }
  return 'text-[color:var(--color-k9s-text)] hover:bg-[color:var(--color-k9s-bg-light)]';
}

export function Table<T>({
  columns,
  data,
  selectedIndex,
  title,
  getRowStatus,
}: TableProps<T>) {
  return (
    <div className="flex flex-col flex-1 mx-2 border-2 border-[color:var(--color-k9s-border)] overflow-hidden">
      <div className="text-center py-1 text-[color:var(--color-k9s-cyan)] font-bold">
        {title}
      </div>

      <div className="flex bg-[color:var(--color-k9s-bg-light)] py-1 px-2 text-[color:var(--color-k9s-text)] text-xs">
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
        {data.map((item, rowIdx) => {
          const status = getRowStatus?.(item) ?? 'default';
          const isSelected = rowIdx === selectedIndex;
          return (
            <div
              key={rowIdx}
              className={`flex py-0.5 px-2 text-xs cursor-pointer ${getRowClasses(status, isSelected)}`}
            >
              {columns.map((col, colIdx) => (
                <div
                  key={String(col.key)}
                  className={`${col.width || 'flex-1'} ${colIdx === 0 ? '' : 'pl-2'} truncate`}
                >
                  {col.render
                    ? col.render(item, isSelected)
                    : String((item as Record<string, unknown>)[col.key as string] ?? '')}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
