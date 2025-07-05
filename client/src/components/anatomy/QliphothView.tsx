import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { qliphothData } from './data/qliphothData';

export function QliphothView() {
  const [selectedQliphah, setSelectedQliphah] = React.useState(qliphothData[0]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <Card className="bg-black/40 border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white">Los Diez Qliphoth</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {qliphothData.map((qliphah, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedQliphah(qliphah)}
                  className={`w-full p-3 rounded-lg text-left transition-colors ${
                    selectedQliphah.name === qliphah.name
                      ? 'bg-red-500/20 border border-red-500/50'
                      : 'bg-gray-800/50 hover:bg-gray-700/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">{qliphah.name}</span>
                    <Badge variant="destructive" className="text-xs">
                      {index + 1}
                    </Badge>
                  </div>
                  <p className="text-gray-300 text-sm mt-1">{qliphah.bodyPart}</p>
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
              {selectedQliphah.name}
              <Badge variant="destructive">
                Qliphah
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-white mb-2">Descripción</h4>
              <p className="text-gray-300">{selectedQliphah.description}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">Correspondencia Corporal</h4>
              <p className="text-gray-300">{selectedQliphah.bodyPart}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">Letra Hebrea</h4>
              <p className="text-gray-300">{selectedQliphah.hebrewLetter}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">Carta del Tarot</h4>
              <p className="text-gray-300">{selectedQliphah.tarotCard}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">Elemento</h4>
              <p className="text-gray-300">{selectedQliphah.element}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">Atributos</h4>
              <div className="flex flex-wrap gap-2">
                {selectedQliphah.attributes.map((attr, index) => (
                  <Badge key={index} variant="destructive">
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