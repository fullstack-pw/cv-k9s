interface StatusIndicatorProps {
  status: 'Running' | 'Completed' | 'Error' | 'Ready' | 'NotReady';
}

export function StatusIndicator({ status }: StatusIndicatorProps) {
  const colorMap = {
    Running: 'text-[color:var(--color-k9s-green)]',
    Ready: 'text-[color:var(--color-k9s-green)]',
    Completed: 'text-[color:var(--color-k9s-yellow)]',
    Error: 'text-[color:var(--color-k9s-red)]',
    NotReady: 'text-[color:var(--color-k9s-red)]',
  };

  return (
    <span className={colorMap[status]}>
      {status}
    </span>
  );
}
