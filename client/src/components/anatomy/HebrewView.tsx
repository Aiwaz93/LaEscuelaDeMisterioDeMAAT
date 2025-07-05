import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { hebrewData } from './data/hebrewData';

export function HebrewView() {
  const [selectedLetter, setSelectedLetter] = React.useState(hebrewData[0]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <Card className="bg-black/40 border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white">Las 22 Letras Hebreas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {hebrewData.map((letter, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedLetter(letter)}
                  className={`w-full p-3 rounded-lg text-left transition-colors ${
                    selectedLetter.name === letter.name
                      ? 'bg-blue-500/20 border border-blue-500/50'
                      : 'bg-gray-800/50 hover:bg-gray-700/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-bold text-blue-400">{letter.symbol}</span>
                      <span className="text-white font-medium">{letter.name}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {letter.number}
                    </Badge>
                  </div>
                  <p className="text-gray-300 text-sm mt-1">{letter.bodyPart}</p>
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
              <span className="text-3xl text-blue-400">{selectedLetter.symbol}</span>
              {selectedLetter.name}
              <Badge variant="outline" className="text-blue-400 border-blue-400">
                Letra {selectedLetter.number}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-white mb-2">Descripción</h4>
              <p className="text-gray-300">{selectedLetter.description}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">Correspondencia Corporal</h4>
              <p className="text-gray-300">{selectedLetter.bodyPart}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">Valor Numérico</h4>
              <p className="text-gray-300">{selectedLetter.numericalValue}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">Carta del Tarot</h4>
              <p className="text-gray-300">{selectedLetter.tarotCard}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">Significado</h4>
              <p className="text-gray-300">{selectedLetter.meaning}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">Atributos</h4>
              <div className="flex flex-wrap gap-2">
                {selectedLetter.attributes.map((attr, index) => (
                  <Badge key={index} variant="outline" className="text-blue-400 border-blue-400">
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