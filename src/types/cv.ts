export interface Profile {
  name: string;
  context: string;
  cluster: string;
  user: string;
  k9sRev: string;
  k8sRev: string;
  contact: {
    email: string;
    github: string;
    phone: string;
    location: string;
  };
  certifications: string[];
}

export interface Namespace {
  name: string;
  displayName: string;
  role: string;
  period: string;
  location: string;
}

export interface LogEntry {
  level: 'INFO' | 'SUCCESS' | 'WARNING' | 'ERROR';
  message: string;
}

export interface Pod {
  namespace: string;
  role: string;
  name: string;
  status: 'Running' | 'Completed' | 'Error';
  ready: string;
  restarts: number;
  age: string;
  cpu: string;
  mem: string;
  description: string;
  technologies: string[];
  logs: LogEntry[];
}

export interface Node {
  name: string;
  status: 'Ready' | 'NotReady';
  role: string;
  version: string;
  pods: number;
  cpu: string;
  mem: string;
  age: string;
}

export interface CVData {
  profile: Profile;
  namespaces: Namespace[];
  pods: Pod[];
  nodes: Node[];
  secret: {
    quote: string;
    author: string;
  };
}

export type View = 'pods' | 'describe' | 'logs' | 'nodes' | 'help' | 'secret' | 'contact';
