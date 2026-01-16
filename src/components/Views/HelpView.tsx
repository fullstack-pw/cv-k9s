export function HelpView() {
  const shortcuts = [
    { key: 'j / ↓', description: 'Move down' },
    { key: 'k / ↑', description: 'Move up' },
    { key: 'Enter', description: 'Select / Describe' },
    { key: 'd', description: 'Describe selected pod' },
    { key: 'l', description: 'View logs (achievements)' },
    { key: ':', description: 'Open command bar' },
    { key: 'Esc', description: 'Go back / Close' },
    { key: '?', description: 'Show this help' },
    { key: 'q', description: 'Show contact info' },
  ];

  const commands = [
    { cmd: ':pods', description: 'View work experience' },
    { cmd: ':nodes', description: 'View skills' },
    { cmd: ':help', description: 'Show help' },
    { cmd: ':contact', description: 'Show contact information' },
    { cmd: ':secret', description: '???' },
    { cmd: ':q', description: 'Show contact info' },
  ];

  return (
    <div className="flex-1 mx-2 border border-[color:var(--color-k9s-border)] overflow-auto">
      <div className="text-center py-1 text-[color:var(--color-k9s-cyan)] border-b border-[color:var(--color-k9s-border)]">
        Help
      </div>

      <div className="p-4 text-sm space-y-6">
        <div>
          <h3 className="text-[color:var(--color-k9s-cyan)] mb-3">Keyboard Shortcuts</h3>
          <div className="space-y-1">
            {shortcuts.map((s, idx) => (
              <div key={idx} className="flex">
                <span className="w-32 text-[color:var(--color-k9s-yellow)]">{s.key}</span>
                <span className="text-[color:var(--color-k9s-text)]">{s.description}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[color:var(--color-k9s-cyan)] mb-3">Commands</h3>
          <div className="space-y-1">
            {commands.map((c, idx) => (
              <div key={idx} className="flex">
                <span className="w-32 text-[color:var(--color-k9s-green)]">{c.cmd}</span>
                <span className="text-[color:var(--color-k9s-text)]">{c.description}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 text-[color:var(--color-k9s-text-dim)] text-xs">
          Press <span className="text-[color:var(--color-k9s-cyan)]">Esc</span> to go back
        </div>
      </div>
    </div>
  );
}
