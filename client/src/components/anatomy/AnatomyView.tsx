import * as React from 'react';
import { HumanBodyDiagram } from './HumanBodyDiagram';
import { InfoPanel } from './InfoPanel';
import { Card } from '@/components/ui/card';

export function AnatomyView() {
  const [selectedElement, setSelectedElement] = React.useState(null);

  function handleElementClick(element) {
    setSelectedElement(element);
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <Card className="p-6 bg-black/40 border-purple-500/30">
          <h2 className="text-xl font-bold text-white mb-4">
            Cuerpo Humano y Correspondencias Esotéricas
          </h2>
          <HumanBodyDiagram onElementClick={handleElementClick} />
        </Card>
      </div>
      <div className="lg:col-span-1">
        <InfoPanel selectedElement={selectedElement} />
      </div>
    </div>
  );
}