import type { Pod, Namespace } from '../../types/cv';
import { Table } from '../Terminal';

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

  const getRowStatus = (pod: Pod) => {
    if (pod.status === 'Running') return 'running' as const;
    if (pod.status === 'Completed') return 'completed' as const;
    return 'default' as const;
  };

  const columns = [
    {
      key: 'namespace' as const,
      header: 'NAMESPACE',
      width: 'w-48',
      render: (pod: Pod) => getNamespaceDisplay(pod.namespace),
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
    },
    {
      key: 'mem' as const,
      header: 'MEM',
      width: 'w-16',
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
      getRowStatus={getRowStatus}
    />
  );
}
