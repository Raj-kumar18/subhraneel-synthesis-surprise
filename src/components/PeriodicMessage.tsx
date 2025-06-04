
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const PeriodicMessage = () => {
  const periodicElements = [
    // CONGRATULATIONS
    [
      { symbol: 'C', number: 6, name: 'Carbon' },
      { symbol: 'O', number: 8, name: 'Oxygen' },
      { symbol: 'N', number: 7, name: 'Nitrogen' },
      { symbol: 'Ga', number: 31, name: 'Gallium' },
      { symbol: 'Ra', number: 88, name: 'Radium' },
      { symbol: 'Tc', number: 43, name: 'Technetium' },
      { symbol: 'U', number: 92, name: 'Uranium' },
      { symbol: 'La', number: 57, name: 'Lanthanum' },
      { symbol: 'Ti', number: 22, name: 'Titanium' },
      { symbol: 'O', number: 8, name: 'Oxygen' },
      { symbol: 'N', number: 7, name: 'Nitrogen' },
      { symbol: 'S', number: 16, name: 'Sulfur' }
    ]
  ];

  const weddingElements = [
    { symbol: 'Lo', number: '∞', name: 'Love', color: 'from-pink-400 to-red-400' },
    { symbol: 'Ha', number: '😊', name: 'Happiness', color: 'from-yellow-400 to-orange-400' },
    { symbol: 'Tr', number: '🤝', name: 'Trust', color: 'from-blue-400 to-green-400' },
    { symbol: 'Jo', number: '😄', name: 'Joy', color: 'from-purple-400 to-pink-400' },
    { symbol: 'Un', number: '💕', name: 'Unity', color: 'from-green-400 to-blue-400' },
    { symbol: 'Bl', number: '🙏', name: 'Blessing', color: 'from-indigo-400 to-purple-400' }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-white mb-8 text-center bg-gradient-to-r from-green-300 to-teal-300 bg-clip-text text-transparent">
        Periodic Table of Wedding Wishes
      </h2>

      <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl mb-8">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold text-center text-white mb-6">CONGRATULATIONS</h3>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-2 justify-center">
            {periodicElements[0].map((element, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg p-3 text-center border-2 border-white/30 hover:scale-105 transition-transform duration-300"
              >
                <div className="text-xs text-blue-100">{element.number}</div>
                <div className="text-xl font-bold text-white">{element.symbol}</div>
                <div className="text-xs text-blue-100 truncate">{element.name}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <h3 className="text-3xl font-bold text-center text-white mb-6">
        Special Wedding Elements
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {weddingElements.map((element, index) => (
          <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 shadow-xl hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 text-center">
              <div className={`inline-block bg-gradient-to-br ${element.color} rounded-lg p-4 mb-4`}>
                <div className="text-sm text-white opacity-80">{element.number}</div>
                <div className="text-3xl font-bold text-white">{element.symbol}</div>
              </div>
              <h4 className="text-lg font-bold text-white">{element.name}</h4>
              <p className="text-sm text-blue-200 mt-2">
                Essential element for a perfect marriage
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Chemical Formula for Marriage</h3>
          <div className="text-4xl font-bold text-yellow-300 mb-4">
            2❤️ + 1💒 → ∞💕
          </div>
          <p className="text-lg text-blue-200">
            When two hearts combine in the presence of love,<br />
            they create an infinite bond that lasts forever!
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PeriodicMessage;
