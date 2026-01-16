import type { View } from '../../types/cv';

interface FooterProps {
  view: View;
  breadcrumb?: string[];
}

export function Footer({ view, breadcrumb = [] }: FooterProps) {
  const viewLabels: Record<View, string> = {
    pods: 'pod',
    describe: 'describe',
    logs: 'logs',
    nodes: 'node',
    help: 'help',
    secret: 'secret',
    contact: 'contact',
  };

  return (
    <div className="p-2 text-sm text-[color:var(--color-k9s-text-dim)] border-t border-[color:var(--color-k9s-border)]">
      <span className="text-[color:var(--color-k9s-cyan)]">&lt;{viewLabels[view]}&gt;</span>
      {breadcrumb.map((item, idx) => (
        <span key={idx}>
          <span className="mx-2">&gt;</span>
          <span className="text-[color:var(--color-k9s-cyan)]">&lt;{item}&gt;</span>
        </span>
      ))}
    </div>
  );
}
