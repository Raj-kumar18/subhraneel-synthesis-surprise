
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ChemistryLab = () => {
  const [beakerContents, setBeakerContents] = useState([]);
  const [currentReaction, setCurrentReaction] = useState('');
  const [bubbling, setBubbling] = useState(false);

  const chemicals = [
    { name: 'Love Potion', color: 'pink', formula: '💕', effect: 'Creates eternal bond!' },
    { name: 'Joy Serum', color: 'yellow', formula: '😊', effect: 'Amplifies happiness!' },
    { name: 'Trust Catalyst', color: 'blue', formula: '🤝', effect: 'Strengthens relationships!' },
    { name: 'Unity Compound', color: 'green', formula: '💑', effect: 'Perfect harmony achieved!' }
  ];

  const addChemical = (chemical) => {
    setBeakerContents(prev => [...prev, chemical]);
    setBubbling(true);
    setCurrentReaction(`Added ${chemical.name}! ${chemical.effect}`);
    
    setTimeout(() => setBubbling(false), 2000);
    setTimeout(() => setCurrentReaction(''), 4000);
  };

  const clearBeaker = () => {
    setBeakerContents([]);
    setCurrentReaction('Beaker cleaned and ready!');
    setTimeout(() => setCurrentReaction(''), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
        Interactive Chemistry Lab
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Lab Equipment */}
        <Card className="bg-slate-800/90 backdrop-blur-lg border-white/30 shadow-2xl hover:scale-105 transition-all duration-500">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center animate-bounce">
              🧪 Love Lab Equipment
            </h3>
            
            {/* Beaker */}
            <div className="relative mx-auto w-32 h-40 mb-8">
              <div className="absolute bottom-0 w-full h-32 bg-slate-700 rounded-b-full border-4 border-cyan-400 overflow-hidden">
                {beakerContents.length > 0 && (
                  <div className={`absolute bottom-0 w-full transition-all duration-1000 ${bubbling ? 'animate-bounce' : ''}`}
                       style={{
                         height: `${Math.min(100, beakerContents.length * 25)}%`,
                         background: `linear-gradient(45deg, ${beakerContents.map(c => c.color).join(', ')})`
                       }}>
                    {bubbling && (
                      <div className="absolute top-0 w-full h-full">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} 
                               className="absolute bg-white/30 rounded-full animate-ping"
                               style={{
                                 left: `${20 + i * 10}%`,
                                 top: `${10 + (i % 2) * 20}%`,
                                 width: '8px',
                                 height: '8px',
                                 animationDelay: `${i * 0.2}s`
                               }} />
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-4xl animate-bounce">
                ⚗️
              </div>
            </div>

            {/* Current Reaction */}
            {currentReaction && (
              <div className="bg-yellow-500/20 border border-yellow-400 rounded-lg p-4 mb-4 animate-fade-in">
                <p className="text-yellow-300 text-center font-bold">{currentReaction}</p>
              </div>
            )}

            <Button onClick={clearBeaker} 
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition-all duration-300">
              Clear Beaker 🧽
            </Button>
          </CardContent>
        </Card>

        {/* Chemical Cabinet */}
        <Card className="bg-slate-800/90 backdrop-blur-lg border-white/30 shadow-2xl hover:scale-105 transition-all duration-500">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center animate-bounce">
              🏪 Chemical Cabinet
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              {chemicals.map((chemical, index) => (
                <Button key={index}
                        onClick={() => addChemical(chemical)}
                        className={`p-4 text-left bg-gradient-to-r hover:scale-105 transition-all duration-300 border border-white/20`}
                        style={{
                          background: `linear-gradient(45deg, ${chemical.color}40, ${chemical.color}20)`
                        }}>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white">{chemical.name}</div>
                      <div className="text-sm text-gray-300">{chemical.formula}</div>
                    </div>
                    <div className="text-2xl animate-pulse">{chemical.formula}</div>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Lab Results */}
      <Card className="bg-slate-800/90 backdrop-blur-lg border-purple-400/40 shadow-2xl mt-8 animate-fade-in">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Lab Analysis Report</h3>
          <div className="bg-slate-700/80 rounded-lg p-6 border border-white/20">
            <p className="text-lg text-slate-100">
              Current Mixture: {beakerContents.length > 0 ? 
                beakerContents.map(c => c.name).join(' + ') : 
                'Empty beaker - ready for love chemistry!'}
            </p>
            {beakerContents.length >= 2 && (
              <div className="mt-4 p-4 bg-green-500/20 border border-green-400 rounded-lg">
                <p className="text-green-300 font-bold text-xl">
                  🎉 Perfect Wedding Formula Detected! 🎉
                </p>
                <p className="text-green-200 mt-2">
                  Congratulations! You've created the ideal mixture for a happy marriage!
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChemistryLab;
