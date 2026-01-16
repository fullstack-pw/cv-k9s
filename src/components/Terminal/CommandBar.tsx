import { useState, useEffect, useRef } from 'react';

interface CommandBarProps {
  isOpen: boolean;
  onClose: () => void;
  onCommand: (command: string) => void;
}

const COMMANDS = ['pods', 'nodes', 'help', 'secret', 'contact', 'q'];

export function CommandBar({ isOpen, onClose, onCommand }: CommandBarProps) {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
      setInput('');
      setSuggestions([]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (input.length > 0) {
      const filtered = COMMANDS.filter(cmd =>
        cmd.toLowerCase().startsWith(input.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [input]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      if (cmd) {
        onCommand(cmd);
      }
      setInput('');
      onClose();
    } else if (e.key === 'Escape') {
      setInput('');
      onClose();
    } else if (e.key === 'Tab' && suggestions.length > 0) {
      e.preventDefault();
      setInput(suggestions[0]);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-12 left-0 right-0 mx-2 bg-[color:var(--color-k9s-bg-light)] border border-[color:var(--color-k9s-cyan)] p-2">
      <div className="flex items-center gap-2">
        <span className="text-[color:var(--color-k9s-cyan)]">:</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none text-[color:var(--color-k9s-text)] text-sm"
          placeholder="Enter command..."
          autoComplete="off"
          spellCheck={false}
        />
      </div>
      {suggestions.length > 0 && (
        <div className="mt-1 text-xs text-[color:var(--color-k9s-text-dim)]">
          Suggestions: {suggestions.join(', ')}
        </div>
      )}
    </div>
  );
}
