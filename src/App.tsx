import { useState, useCallback } from 'react';
import { MGrid } from './components/MGrid/MGrid';
import { SectionPanel } from './components/SectionPanel/SectionPanel';

export default function App() {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const handleSectionSelect = useCallback((id: number) => {
    setActiveSection(id);
  }, []);

  const handleClose = useCallback(() => {
    setActiveSection(null);
  }, []);

  return (
    <main style={{ width: '100%', height: '100%' }}>
      <MGrid onSectionSelect={handleSectionSelect} />
      <SectionPanel sectionId={activeSection} onClose={handleClose} />
    </main>
  );
}
