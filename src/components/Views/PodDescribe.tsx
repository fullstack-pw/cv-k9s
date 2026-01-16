import type { Pod, Namespace } from '../../types/cv';

interface PodDescribeProps {
  pod: Pod;
  namespace: Namespace | undefined;
}

export function PodDescribe({ pod, namespace }: PodDescribeProps) {
  return (
    <div className="flex-1 mx-2 border border-[color:var(--color-k9s-border)] overflow-auto">
      <div className="text-center py-1 text-[color:var(--color-k9s-cyan)] border-b border-[color:var(--color-k9s-border)]">
        Describe({namespace?.displayName || pod.namespace}/{pod.name})
      </div>

      <div className="p-4 text-sm font-mono space-y-1">
        <div className="flex">
          <span className="text-[color:var(--color-k9s-cyan)] w-32">Name:</span>
          <span>{pod.name}</span>
        </div>
        <div className="flex">
          <span className="text-[color:var(--color-k9s-cyan)] w-32">Namespace:</span>
          <span>{namespace?.displayName || pod.namespace}</span>
        </div>
        <div className="flex">
          <span className="text-[color:var(--color-k9s-cyan)] w-32">Role:</span>
          <span className="text-[color:var(--color-k9s-yellow)]">{namespace?.role}</span>
        </div>
        <div className="flex">
          <span className="text-[color:var(--color-k9s-cyan)] w-32">Period:</span>
          <span>{namespace?.period}</span>
        </div>
        <div className="flex">
          <span className="text-[color:var(--color-k9s-cyan)] w-32">Location:</span>
          <span>{namespace?.location}</span>
        </div>
        <div className="flex">
          <span className="text-[color:var(--color-k9s-cyan)] w-32">Status:</span>
          <span className={pod.status === 'Running' ? 'text-[color:var(--color-k9s-green)]' : 'text-[color:var(--color-k9s-yellow)]'}>
            {pod.status}
          </span>
        </div>
        <div className="flex">
          <span className="text-[color:var(--color-k9s-cyan)] w-32">Ready:</span>
          <span>{pod.ready}</span>
        </div>

        <div className="mt-4 pt-4 border-t border-[color:var(--color-k9s-border)]">
          <div className="text-[color:var(--color-k9s-cyan)] mb-2">Description:</div>
          <div className="pl-4 text-[color:var(--color-k9s-text)]">{pod.description}</div>
        </div>

        <div className="mt-4 pt-4 border-t border-[color:var(--color-k9s-border)]">
          <div className="text-[color:var(--color-k9s-cyan)] mb-2">Technologies:</div>
          <div className="pl-4 flex flex-wrap gap-2">
            {pod.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 bg-[color:var(--color-k9s-bg-light)] border border-[color:var(--color-k9s-border)] text-[color:var(--color-k9s-green)] text-xs rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-[color:var(--color-k9s-border)]">
          <div className="text-[color:var(--color-k9s-cyan)] mb-2">Metrics:</div>
          <div className="pl-4 space-y-1">
            <div className="flex">
              <span className="w-24 text-[color:var(--color-k9s-text-dim)]">CPU:</span>
              <span className="text-[color:var(--color-k9s-green)]">{pod.cpu}</span>
            </div>
            <div className="flex">
              <span className="w-24 text-[color:var(--color-k9s-text-dim)]">Memory:</span>
              <span className="text-[color:var(--color-k9s-blue)]">{pod.mem}</span>
            </div>
            <div className="flex">
              <span className="w-24 text-[color:var(--color-k9s-text-dim)]">Restarts:</span>
              <span>{pod.restarts}</span>
            </div>
            <div className="flex">
              <span className="w-24 text-[color:var(--color-k9s-text-dim)]">Age:</span>
              <span>{pod.age}</span>
            </div>
          </div>
        </div>

        <div className="mt-6 text-[color:var(--color-k9s-text-dim)] text-xs">
          Press <span className="text-[color:var(--color-k9s-cyan)]">l</span> to view logs (achievements) | <span className="text-[color:var(--color-k9s-cyan)]">Esc</span> to go back
        </div>
      </div>
    </div>
  );
}
