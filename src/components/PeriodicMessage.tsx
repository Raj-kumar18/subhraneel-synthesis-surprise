
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
    { symbol: 'Lo', number: '∞', name: 'Love', color: 'from-pink-400 to-rose-400', glow: 'shadow-pink-500/30' },
    { symbol: 'Ha', number: '😊', name: 'Happiness', color: 'from-yellow-400 to-orange-400', glow: 'shadow-yellow-500/30' },
    { symbol: 'Tr', number: '🤝', name: 'Trust', color: 'from-blue-400 to-cyan-400', glow: 'shadow-blue-500/30' },
    { symbol: 'Jo', number: '😄', name: 'Joy', color: 'from-purple-400 to-violet-400', glow: 'shadow-purple-500/30' },
    { symbol: 'Un', number: '💕', name: 'Unity', color: 'from-green-400 to-emerald-400', glow: 'shadow-green-500/30' },
    { symbol: 'Bl', number: '🙏', name: 'Blessing', color: 'from-indigo-400 to-blue-400', glow: 'shadow-indigo-500/30' }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent animate-pulse">
        Periodic Table of Wedding Wishes
      </h2>

      <Card className="bg-slate-800/70 backdrop-blur-lg border-white/30 shadow-2xl mb-12 relative overflow-hidden animate-fade-in hover:scale-105 transition-all duration-500">
        <CardContent className="p-10">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-10 animate-bounce bg-slate-700/40 inline-block px-6 py-3 rounded-lg backdrop-blur-sm">CONGRATULATIONS</h3>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-3 justify-center">
            {periodicElements[0].map((element, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg p-3 md:p-4 text-center border border-blue-400/40 hover:scale-110 transition-all duration-500 shadow-xl hover:shadow-blue-500/30 animate-fade-in"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="text-xs text-blue-200 font-bold">{element.number}</div>
                <div className="text-lg md:text-xl font-bold text-white animate-pulse">{element.symbol}</div>
                <div className="text-xs text-blue-200 truncate font-medium">{element.name}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-10 animate-bounce bg-slate-800/50 inline-block px-6 py-3 rounded-lg backdrop-blur-sm">
        Special Wedding Elements
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {weddingElements.map((element, index) => (
          <Card key={index} className={`bg-slate-800/60 backdrop-blur-lg border-white/30 shadow-xl hover:scale-110 transition-all duration-500 ${element.glow} animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}>
            <CardContent className="p-8 text-center">
              <div className={`inline-block bg-gradient-to-br ${element.color} rounded-xl p-6 mb-6 border border-white/40 shadow-xl transform hover:rotate-12 transition-all duration-500 animate-pulse`}>
                <div className="text-sm text-white opacity-90 font-bold">{element.number}</div>
                <div className="text-3xl font-bold text-white">{element.symbol}</div>
              </div>
              <h4 className="text-xl font-bold text-white mb-3 bg-slate-700/40 inline-block px-3 py-1 rounded-lg backdrop-blur-sm">{element.name}</h4>
              <p className="text-sm text-slate-200 bg-slate-700/50 rounded-lg p-3 border border-white/30 backdrop-blur-sm">
                Essential element for a perfect marriage
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-slate-800/70 backdrop-blur-lg border-purple-400/40 shadow-2xl animate-fade-in hover:scale-105 transition-all duration-500">
        <CardContent className="p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 animate-bounce">Chemical Formula for Marriage</h3>
          <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-8 font-mono bg-slate-700/50 inline-block px-6 py-4 rounded-lg border border-yellow-400/40 animate-pulse backdrop-blur-sm">
            2❤️ + 1💒 → ∞💕
          </div>
          <div className="bg-slate-700/50 rounded-xl p-8 border border-white/30 max-w-2xl mx-auto backdrop-blur-sm">
            <p className="text-lg md:text-xl text-slate-100 font-medium">
              When two hearts combine in the presence of love,<br />
              they create an infinite bond that lasts forever!
            </p>
          </div>
          <div className="mt-8 text-4xl animate-bounce">
            💕⚗️💕⚗️💕
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PeriodicMessage;
