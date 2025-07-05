import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface InfoPanelProps {
  selectedElement: any;
}

export function InfoPanel({ selectedElement }: InfoPanelProps) {
  if (!selectedElement) {
    return (
      <Card className="bg-black/40 border-purple-500/30">
        <CardHeader>
          <CardTitle className="text-white">Información</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300">
            Haz clic en cualquier elemento del diagrama para ver información detallada.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-black/40 border-purple-500/30">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          {selectedElement.name}
          <Badge variant="secondary" className="ml-2">
            {selectedElement.type}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold text-white mb-2">Descripción</h4>
          <p className="text-gray-300 text-sm">{selectedElement.description}</p>
        </div>
        
        {selectedElement.bodyPart && (
          <div>
            <h4 className="font-semibold text-white mb-2">Parte del Cuerpo</h4>
            <p className="text-gray-300 text-sm">{selectedElement.bodyPart}</p>
          </div>
        )}
        
        {selectedElement.hebrewLetter && (
          <div>
            <h4 className="font-semibold text-white mb-2">Letra Hebrea</h4>
            <p className="text-gray-300 text-sm">{selectedElement.hebrewLetter}</p>
          </div>
        )}
        
        {selectedElement.tarotCard && (
          <div>
            <h4 className="font-semibold text-white mb-2">Carta del Tarot</h4>
            <p className="text-gray-300 text-sm">{selectedElement.tarotCard}</p>
          </div>
        )}
        
        {selectedElement.attributes && (
          <div>
            <h4 className="font-semibold text-white mb-2">Atributos</h4>
            <div className="flex flex-wrap gap-1">
              {selectedElement.attributes.map((attr, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {attr}
                </Badge>
              ))}
            </div>
          </div>
        )}
        
        {selectedElement.element && (
          <div>
            <h4 className="font-semibold text-white mb-2">Elemento</h4>
            <p className="text-gray-300 text-sm">{selectedElement.element}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}