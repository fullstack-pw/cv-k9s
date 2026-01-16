import type { Pod, Namespace } from '../../types/cv';
import { Table } from '../Terminal';
import { StatusIndicator } from '../Terminal';

interface PodsViewProps {
  pods: Pod[];
  namespaces: Namespace[];
  selectedIndex: number;
}

export function PodsView({ pods, namespaces, selectedIndex }: PodsViewProps) {
  const getNamespaceDisplay = (nsName: string) => {
    const ns = namespaces.find(n => n.name === nsName);
    return ns?.displayName || nsName;
  };

  const columns = [
    {
      key: 'namespace' as const,
      header: 'NAMESPACE',
      width: 'w-48',
      render: (pod: Pod) => (
        <span className="text-[color:var(--color-k9s-purple)]">
          {getNamespaceDisplay(pod.namespace)}
        </span>
      ),
    },
    {
      key: 'name' as const,
      header: 'NAME',
      width: 'w-56',
    },
    {
      key: 'ready' as const,
      header: 'READY',
      width: 'w-16',
    },
    {
      key: 'status' as const,
      header: 'STATUS',
      width: 'w-24',
      render: (pod: Pod) => <StatusIndicator status={pod.status} />,
    },
    {
      key: 'restarts' as const,
      header: 'RESTARTS',
      width: 'w-20',
    },
    {
      key: 'cpu' as const,
      header: 'CPU',
      width: 'w-16',
      render: (pod: Pod) => (
        <span className={pod.status === 'Running' ? 'text-[color:var(--color-k9s-green)]' : 'text-[color:var(--color-k9s-text-dim)]'}>
          {pod.cpu}
        </span>
      ),
    },
    {
      key: 'mem' as const,
      header: 'MEM',
      width: 'w-16',
      render: (pod: Pod) => (
        <span className={pod.status === 'Running' ? 'text-[color:var(--color-k9s-blue)]' : 'text-[color:var(--color-k9s-text-dim)]'}>
          {pod.mem}
        </span>
      ),
    },
    {
      key: 'age' as const,
      header: 'AGE',
      width: 'w-20',
    },
  ];

  return (
    <Table
      columns={columns}
      data={pods}
      selectedIndex={selectedIndex}
      title={`pods(all)[${pods.length}]`}
    />
  );
}
