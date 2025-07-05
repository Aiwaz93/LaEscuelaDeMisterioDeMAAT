import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { tarotData } from './data/tarotData';

export function TarotView() {
  const [selectedCard, setSelectedCard] = React.useState(tarotData[0]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <Card className="bg-black/40 border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-white">Los 22 Arcanos Mayores</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {tarotData.map((card, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCard(card)}
                  className={`w-full p-3 rounded-lg text-left transition-colors ${
                    selectedCard.name === card.name
                      ? 'bg-purple-500/20 border border-purple-500/50'
                      : 'bg-gray-800/50 hover:bg-gray-700/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-medium">{card.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {card.number}
                    </Badge>
                  </div>
                  <p className="text-gray-300 text-sm mt-1">{card.bodyPart}</p>
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
              {selectedCard.name}
              <Badge variant="outline" className="text-purple-400 border-purple-400">
                Arcano {selectedCard.number}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-white mb-2">Descripción</h4>
              <p className="text-gray-300">{selectedCard.description}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">Correspondencia Corporal</h4>
              <p className="text-gray-300">{selectedCard.bodyPart}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">Letra Hebrea</h4>
              <p className="text-gray-300">{selectedCard.hebrewLetter}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">Elemento</h4>
              <p className="text-gray-300">{selectedCard.element}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">Significado</h4>
              <p className="text-gray-300">{selectedCard.meaning}</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-2">Atributos</h4>
              <div className="flex flex-wrap gap-2">
                {selectedCard.attributes.map((attr, index) => (
                  <Badge key={index} variant="outline" className="text-purple-400 border-purple-400">
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