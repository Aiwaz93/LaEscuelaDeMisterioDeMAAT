import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { sephirotData } from './data/sephirotData';

export function SephirotView() {
  const [selectedSephira, setSelectedSephira] = React.useState(sephirotData[0]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <Card className="bg-black/40 border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white">Las Diez Sephirot</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {sephirotData.map((sephira, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSephira(sephira)}
                  className={`w-full p-3 rounded-lg text-left transition-colors ${
                    selectedSephira.name === sephira.name
                      ? 'bg-yellow-500/20 border border-yellow-500/50'
                      : 'bg-gray-800/50 hover:bg-gray-700/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">{sephira.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {index + 1}
                    </Badge>
                  </div>
                  <p className="text-gray-300 text-sm mt-1">{sephira.bodyPart}</p>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div>
        <Card className="bg-black/40 border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              {selectedSephira.name}
              <Badge variant="outline" className="text-yellow-400 border-yellow-400">
                Sephira
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-white mb-2">Descripción</h4>
              <p className="text-gray-300">{selectedSephira.description}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">Correspondencia Corporal</h4>
              <p className="text-gray-300">{selectedSephira.bodyPart}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">Letra Hebrea</h4>
              <p className="text-gray-300">{selectedSephira.hebrewLetter}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">Carta del Tarot</h4>
              <p className="text-gray-300">{selectedSephira.tarotCard}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">Elemento</h4>
              <p className="text-gray-300">{selectedSephira.element}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">Atributos</h4>
              <div className="flex flex-wrap gap-2">
                {selectedSephira.attributes.map((attr, index) => (
                  <Badge key={index} variant="outline" className="text-yellow-400 border-yellow-400">
                    {attr}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}