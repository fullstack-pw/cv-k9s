import { useState, useCallback } from 'react';
import { Header, Footer } from './components/Layout';
import { CommandBar } from './components/Terminal';
import {
  PodsView,
  PodDescribe,
  PodLogs,
  NodesView,
  HelpView,
  SecretView,
  ContactView,
} from './components/Views';
import { useKeyboard } from './hooks';
import type { View, CVData } from './types/cv';
import cvData from './data/cv.json';

const data = cvData as CVData;

function App() {
  const [view, setView] = useState<View>('pods');
  const [selectedPodIndex, setSelectedPodIndex] = useState(0);
  const [selectedNodeIndex, setSelectedNodeIndex] = useState(0);
  const [isCommandBarOpen, setIsCommandBarOpen] = useState(false);
  const [viewHistory, setViewHistory] = useState<View[]>([]);

  const selectedPod = data.pods[selectedPodIndex];
  const selectedNamespace = data.namespaces.find(
    (ns) => ns.name === selectedPod?.namespace
  );

  const navigateTo = useCallback((newView: View) => {
    setViewHistory((prev) => [...prev, view]);
    setView(newView);
  }, [view]);

  const goBack = useCallback(() => {
    if (viewHistory.length > 0) {
      const prevView = viewHistory[viewHistory.length - 1];
      setViewHistory((prev) => prev.slice(0, -1));
      setView(prevView);
    } else if (view !== 'pods') {
      setView('pods');
    }
  }, [viewHistory, view]);

  const getMaxIndex = useCallback(() => {
    if (view === 'pods') return data.pods.length - 1;
    if (view === 'nodes') return data.nodes.length - 1;
    return 0;
  }, [view]);

  const getCurrentIndex = useCallback(() => {
    if (view === 'pods') return selectedPodIndex;
    if (view === 'nodes') return selectedNodeIndex;
    return 0;
  }, [view, selectedPodIndex, selectedNodeIndex]);

  const setCurrentIndex = useCallback((index: number) => {
    if (view === 'pods') setSelectedPodIndex(index);
    if (view === 'nodes') setSelectedNodeIndex(index);
  }, [view]);

  useKeyboard({
    onUp: () => {
      const currentIdx = getCurrentIndex();
      if (currentIdx > 0) {
        setCurrentIndex(currentIdx - 1);
      }
    },
    onDown: () => {
      const currentIdx = getCurrentIndex();
      const maxIdx = getMaxIndex();
      if (currentIdx < maxIdx) {
        setCurrentIndex(currentIdx + 1);
      }
    },
    onEnter: () => {
      if (view === 'pods') {
        navigateTo('describe');
      }
    },
    onEscape: goBack,
    onDescribe: () => {
      if (view === 'pods') {
        navigateTo('describe');
      }
    },
    onLogs: () => {
      if (view === 'pods' || view === 'describe') {
        navigateTo('logs');
      }
    },
    onCommand: () => setIsCommandBarOpen(true),
    onHelp: () => navigateTo('help'),
    onQuit: () => navigateTo('contact'),
    isCommandBarOpen,
  });

  const handleCommand = useCallback((cmd: string) => {
    switch (cmd) {
      case 'pods':
      case 'po':
        setView('pods');
        setViewHistory([]);
        break;
      case 'nodes':
      case 'no':
        setView('nodes');
        setViewHistory([]);
        break;
      case 'help':
        navigateTo('help');
        break;
      case 'secret':
        navigateTo('secret');
        break;
      case 'contact':
      case 'q':
        navigateTo('contact');
        break;
    }
  }, [navigateTo]);

  const getBreadcrumb = (): string[] => {
    if (view === 'describe') return ['describe'];
    if (view === 'logs') return ['logs'];
    return [];
  };

  const renderView = () => {
    switch (view) {
      case 'pods':
        return (
          <PodsView
            pods={data.pods}
            namespaces={data.namespaces}
            selectedIndex={selectedPodIndex}
          />
        );
      case 'describe':
        return (
          <PodDescribe
            pod={selectedPod}
            namespace={selectedNamespace}
          />
        );
      case 'logs':
        return (
          <PodLogs
            pod={selectedPod}
            namespace={selectedNamespace}
          />
        );
      case 'nodes':
        return (
          <NodesView
            nodes={data.nodes}
            selectedIndex={selectedNodeIndex}
          />
        );
      case 'help':
        return <HelpView />;
      case 'secret':
        return (
          <SecretView
            quote={data.secret.quote}
            author={data.secret.author}
          />
        );
      case 'contact':
        return <ContactView profile={data.profile} />;
      default:
        return null;
    }
  };

  return (
    <div className="h-full flex flex-col">
      <Header
        profile={data.profile}
        currentNamespace={selectedNamespace?.displayName || ''}
      />

      <div className="flex-1 flex flex-col overflow-hidden pb-2">
        {renderView()}
      </div>

      <Footer view={view} breadcrumb={getBreadcrumb()} />

      <CommandBar
        isOpen={isCommandBarOpen}
        onClose={() => setIsCommandBarOpen(false)}
        onCommand={handleCommand}
      />
    </div>
  );
}

export default App;
