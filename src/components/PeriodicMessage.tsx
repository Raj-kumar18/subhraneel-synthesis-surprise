
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
    { symbol: 'Lo', number: '∞', name: 'Love', color: 'from-pink-400 via-red-400 to-rose-400', glow: 'shadow-pink-500/50' },
    { symbol: 'Ha', number: '😊', name: 'Happiness', color: 'from-yellow-400 via-orange-400 to-amber-400', glow: 'shadow-yellow-500/50' },
    { symbol: 'Tr', number: '🤝', name: 'Trust', color: 'from-blue-400 via-cyan-400 to-teal-400', glow: 'shadow-blue-500/50' },
    { symbol: 'Jo', number: '😄', name: 'Joy', color: 'from-purple-400 via-violet-400 to-fuchsia-400', glow: 'shadow-purple-500/50' },
    { symbol: 'Un', number: '💕', name: 'Unity', color: 'from-green-400 via-emerald-400 to-lime-400', glow: 'shadow-green-500/50' },
    { symbol: 'Bl', number: '🙏', name: 'Blessing', color: 'from-indigo-400 via-blue-400 to-sky-400', glow: 'shadow-indigo-500/50' }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold text-white mb-12 text-center bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent animate-pulse">
        Periodic Table of Wedding Wishes
      </h2>

      <Card className="bg-white/10 backdrop-blur-xl border-white/30 shadow-2xl mb-10 relative overflow-hidden">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl"></div>
        
        <CardContent className="p-12 relative z-10">
          <h3 className="text-4xl font-bold text-center text-white mb-8 animate-bounce">CONGRATULATIONS</h3>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-3 justify-center">
            {periodicElements[0].map((element, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 rounded-xl p-4 text-center border-2 border-white/40 hover:scale-110 transition-all duration-500 shadow-lg hover:shadow-blue-500/50 relative overflow-hidden"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Sparkle effect */}
                <div className="absolute top-1 right-1 text-yellow-300 animate-ping">✨</div>
                
                <div className="text-sm text-blue-100 font-bold">{element.number}</div>
                <div className="text-2xl font-bold text-white">{element.symbol}</div>
                <div className="text-xs text-blue-100 truncate font-semibold">{element.name}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <h3 className="text-4xl font-bold text-center text-white mb-8 animate-pulse">
        Special Wedding Elements
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {weddingElements.map((element, index) => (
          <Card key={index} className={`bg-white/10 backdrop-blur-xl border-white/30 shadow-xl hover:scale-110 transition-all duration-500 ${element.glow} relative overflow-hidden`}>
            {/* Background glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${element.color.replace('400', '500/20')} blur-xl`}></div>
            
            <CardContent className="p-8 text-center relative z-10">
              <div className={`inline-block bg-gradient-to-br ${element.color} rounded-2xl p-6 mb-6 border-2 border-white/30 shadow-2xl transform hover:rotate-12 transition-all duration-300`}>
                <div className="text-lg text-white opacity-90 font-bold">{element.number}</div>
                <div className="text-4xl font-bold text-white">{element.symbol}</div>
              </div>
              <h4 className="text-2xl font-bold text-white mb-3">{element.name}</h4>
              <p className="text-base text-blue-200 bg-white/10 rounded-lg p-3 border border-white/20">
                Essential element for a perfect marriage
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-indigo-500/20 backdrop-blur-xl border-white/30 shadow-2xl relative overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-yellow-300 rounded-full opacity-30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        <CardContent className="p-12 text-center relative z-10">
          <h3 className="text-3xl font-bold text-white mb-6 animate-bounce">Chemical Formula for Marriage</h3>
          <div className="text-6xl font-bold text-yellow-300 mb-6 animate-pulse filter drop-shadow-lg">
            2❤️ + 1💒 → ∞💕
          </div>
          <div className="bg-gradient-to-r from-white/10 to-white/5 rounded-xl p-6 border border-white/20">
            <p className="text-xl text-blue-200 font-semibold">
              When two hearts combine in the presence of love,<br />
              they create an infinite bond that lasts forever!
            </p>
          </div>
          <div className="mt-8 text-5xl animate-bounce">
            💕⚗️💕⚗️💕
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PeriodicMessage;
