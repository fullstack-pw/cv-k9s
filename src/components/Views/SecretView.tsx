interface SecretViewProps {
  quote: string;
  author: string;
}

export function SecretView({ quote, author }: SecretViewProps) {
  return (
    <div className="flex-1 mx-2 border border-[color:var(--color-k9s-border)] flex items-center justify-center">
      <div className="text-center p-8 max-w-2xl">
        <pre className="text-[color:var(--color-k9s-cyan)] text-lg mb-6 whitespace-pre-wrap font-mono">
          "{quote}"
        </pre>
        <div className="text-[color:var(--color-k9s-yellow)]">
          - {author}
        </div>
        <div className="mt-8 text-[color:var(--color-k9s-text-dim)] text-xs">
          Press <span className="text-[color:var(--color-k9s-cyan)]">Esc</span> to go back
        </div>
      </div>
    </div>
  );
}
