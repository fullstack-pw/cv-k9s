import type { Node } from '../../types/cv';
import { Table } from '../Terminal';

interface NodesViewProps {
  nodes: Node[];
  selectedIndex: number;
}

export function NodesView({ nodes, selectedIndex }: NodesViewProps) {
  const getRowStatus = (node: Node) => {
    if (node.status === 'Ready') return 'running' as const;
    return 'default' as const;
  };

  const columns = [
    {
      key: 'name' as const,
      header: 'NAME',
      width: 'w-40',
    },
    {
      key: 'status' as const,
      header: 'STATUS',
      width: 'w-20',
    },
    {
      key: 'role' as const,
      header: 'ROLE',
      width: 'w-48',
    },
    {
      key: 'version' as const,
      header: 'VERSION',
      width: 'w-24',
    },
    {
      key: 'pods' as const,
      header: 'PODS',
      width: 'w-16',
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
      width: 'w-24',
    },
  ];

  return (
    <Table
      columns={columns}
      data={nodes}
      selectedIndex={selectedIndex}
      title={`nodes(all)[${nodes.length}]`}
      getRowStatus={getRowStatus}
    />
  );
}
