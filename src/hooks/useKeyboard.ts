import { useEffect, useCallback } from 'react';

interface UseKeyboardOptions {
  onUp: () => void;
  onDown: () => void;
  onEnter: () => void;
  onEscape: () => void;
  onDescribe: () => void;
  onLogs: () => void;
  onCommand: () => void;
  onHelp: () => void;
  onQuit: () => void;
  isCommandBarOpen: boolean;
}

export function useKeyboard({
  onUp,
  onDown,
  onEnter,
  onEscape,
  onDescribe,
  onLogs,
  onCommand,
  onHelp,
  onQuit,
  isCommandBarOpen,
}: UseKeyboardOptions) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (isCommandBarOpen) return;

      switch (e.key) {
        case 'ArrowUp':
        case 'k':
          e.preventDefault();
          onUp();
          break;
        case 'ArrowDown':
        case 'j':
          e.preventDefault();
          onDown();
          break;
        case 'Enter':
          e.preventDefault();
          onEnter();
          break;
        case 'Escape':
          e.preventDefault();
          onEscape();
          break;
        case 'd':
          e.preventDefault();
          onDescribe();
          break;
        case 'l':
          e.preventDefault();
          onLogs();
          break;
        case ':':
          e.preventDefault();
          onCommand();
          break;
        case '?':
          e.preventDefault();
          onHelp();
          break;
        case 'q':
          e.preventDefault();
          onQuit();
          break;
      }
    },
    [onUp, onDown, onEnter, onEscape, onDescribe, onLogs, onCommand, onHelp, onQuit, isCommandBarOpen]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
}
