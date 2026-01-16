import type { Node } from '../../types/cv';
import { Table } from '../Terminal';
import { StatusIndicator } from '../Terminal';

interface NodesViewProps {
  nodes: Node[];
  selectedIndex: number;
}

export function NodesView({ nodes, selectedIndex }: NodesViewProps) {
  const columns = [
    {
      key: 'name' as const,
      header: 'NAME',
      width: 'w-40',
      render: (node: Node) => (
        <span className="text-[color:var(--color-k9s-cyan)]">{node.name}</span>
      ),
    },
    {
      key: 'status' as const,
      header: 'STATUS',
      width: 'w-20',
      render: (node: Node) => <StatusIndicator status={node.status} />,
    },
    {
      key: 'role' as const,
      header: 'ROLE',
      width: 'w-48',
      render: (node: Node) => (
        <span className="text-[color:var(--color-k9s-purple)]">{node.role}</span>
      ),
    },
    {
      key: 'version' as const,
      header: 'VERSION',
      width: 'w-24',
      render: (node: Node) => (
        <span className={node.version === 'Expert' ? 'text-[color:var(--color-k9s-green)]' : 'text-[color:var(--color-k9s-yellow)]'}>
          {node.version}
        </span>
      ),
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
      render: (node: Node) => (
        <span className="text-[color:var(--color-k9s-green)]">{node.cpu}</span>
      ),
    },
    {
      key: 'mem' as const,
      header: 'MEM',
      width: 'w-16',
      render: (node: Node) => (
        <span className="text-[color:var(--color-k9s-blue)]">{node.mem}</span>
      ),
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
    />
  );
}
