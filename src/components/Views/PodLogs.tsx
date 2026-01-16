import type { Pod, Namespace } from '../../types/cv';

interface PodLogsProps {
  pod: Pod;
  namespace: Namespace | undefined;
}

export function PodLogs({ pod, namespace }: PodLogsProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'SUCCESS':
        return 'text-[color:var(--color-k9s-green)]';
      case 'WARNING':
        return 'text-[color:var(--color-k9s-yellow)]';
      case 'ERROR':
        return 'text-[color:var(--color-k9s-red)]';
      default:
        return 'text-[color:var(--color-k9s-blue)]';
    }
  };

  const generateTimestamp = (index: number) => {
    const date = new Date();
    date.setMonth(date.getMonth() - index);
    return date.toISOString();
  };

  return (
    <div className="flex-1 mx-2 border border-[color:var(--color-k9s-border)] overflow-hidden flex flex-col">
      <div className="text-center py-1 text-[color:var(--color-k9s-cyan)] border-b border-[color:var(--color-k9s-border)]">
        Logs({namespace?.displayName || pod.namespace}/{pod.name})[tail]
      </div>

      <div className="px-2 py-1 text-xs text-[color:var(--color-k9s-text-dim)] border-b border-[color:var(--color-k9s-border)]">
        Autoscroll:On &nbsp;&nbsp; FullScreen:Off &nbsp;&nbsp; Timestamps:On &nbsp;&nbsp; Wrap:On
      </div>

      <div className="flex-1 overflow-auto p-2 font-mono text-xs">
        {pod.logs.map((log, idx) => (
          <div key={idx} className="mb-1 break-words">
            <span className="text-[color:var(--color-k9s-text-dim)]">
              {`{"timestamp":"${generateTimestamp(pod.logs.length - idx)}","level":"`}
            </span>
            <span className={getLevelColor(log.level)}>{log.level}</span>
            <span className="text-[color:var(--color-k9s-text-dim)]">
              {`","service":"${pod.name}","message":"`}
            </span>
            <span className="text-[color:var(--color-k9s-text)]">{log.message}</span>
            <span className="text-[color:var(--color-k9s-text-dim)]">{`"}`}</span>
          </div>
        ))}
      </div>

      <div className="px-2 py-1 text-xs text-[color:var(--color-k9s-text-dim)] border-t border-[color:var(--color-k9s-border)]">
        Press <span className="text-[color:var(--color-k9s-cyan)]">Esc</span> to go back
      </div>
    </div>
  );
}
