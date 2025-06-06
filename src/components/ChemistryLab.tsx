
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ChemistryLab = () => {
  const [beakerContents, setBeakerContents] = useState([]);
  const [currentReaction, setCurrentReaction] = useState('');
  const [bubbling, setBubbling] = useState(false);
  const [labParticles, setLabParticles] = useState([]);
  const [sparkles, setSparkles] = useState([]);

  const chemicals = [
    { name: 'Love Potion', color: 'pink', formula: '💕', effect: 'Creates eternal bond!', intensity: 'high' },
    { name: 'Joy Serum', color: 'yellow', formula: '😊', effect: 'Amplifies happiness!', intensity: 'medium' },
    { name: 'Trust Catalyst', color: 'blue', formula: '🤝', effect: 'Strengthens relationships!', intensity: 'high' },
    { name: 'Unity Compound', color: 'green', formula: '💑', effect: 'Perfect harmony achieved!', intensity: 'maximum' }
  ];

  useEffect(() => {
    // Generate floating lab particles
    const newParticles = [...Array(20)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 0.8 + 0.4,
      delay: Math.random() * 3,
      duration: Math.random() * 4 + 6,
      type: ['⚛️', '🧪', '⚗️', '💫', '✨'][Math.floor(Math.random() * 5)]
    }));
    setLabParticles(newParticles);
  }, []);

  const createSparkleExplosion = () => {
    const newSparkles = [...Array(15)].map((_, i) => ({
      id: Date.now() + i,
      x: 50 + (Math.random() - 0.5) * 40,
      y: 50 + (Math.random() - 0.5) * 40,
      scale: Math.random() * 0.8 + 0.4,
      delay: Math.random() * 0.5,
      type: ['✨', '💫', '⭐', '🌟'][Math.floor(Math.random() * 4)]
    }));
    setSparkles(newSparkles);
    setTimeout(() => setSparkles([]), 3000);
  };

  const addChemical = (chemical) => {
    setBeakerContents(prev => [...prev, chemical]);
    setBubbling(true);
    setCurrentReaction(`Added ${chemical.name}! ${chemical.effect}`);
    
    // Create sparkle explosion
    createSparkleExplosion();
    
    // Intensity-based effects
    const bubbleDuration = chemical.intensity === 'maximum' ? 4000 : 
                          chemical.intensity === 'high' ? 3000 : 2000;
    
    setTimeout(() => setBubbling(false), bubbleDuration);
    setTimeout(() => setCurrentReaction(''), bubbleDuration + 2000);
  };

  const clearBeaker = () => {
    setBeakerContents([]);
    setCurrentReaction('Beaker cleaned and ready!');
    setTimeout(() => setCurrentReaction(''), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto relative">
      {/* Enhanced floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {labParticles.map((particle) => (
          <div
            key={particle.id}
            className="absolute animate-bounce opacity-20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              fontSize: `${particle.size * 2}rem`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          >
            {particle.type}
          </div>
        ))}
      </div>

      {/* Sparkle explosion effects */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className="absolute animate-ping"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              transform: `scale(${sparkle.scale})`,
              animationDelay: `${sparkle.delay}s`,
              animationDuration: '1.5s',
              fontSize: '1.5rem'
            }}
          >
            {sparkle.type}
          </div>
        ))}
      </div>

      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
        Interactive Chemistry Lab
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Enhanced Lab Equipment */}
        <Card className="bg-slate-800/90 backdrop-blur-lg border-white/30 shadow-2xl hover:scale-105 transition-all duration-500 relative overflow-hidden">
          {/* Animated background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 animate-pulse"></div>
          
          <CardContent className="p-8 relative z-10">
            <h3 className="text-2xl font-bold text-white mb-6 text-center animate-bounce">
              🧪 Love Lab Equipment
            </h3>
            
            {/* Enhanced Beaker */}
            <div className="relative mx-auto w-32 h-40 mb-8">
              <div className="absolute bottom-0 w-full h-32 bg-slate-700 rounded-b-full border-4 border-cyan-400 overflow-hidden shadow-lg shadow-cyan-400/30">
                {beakerContents.length > 0 && (
                  <div className={`absolute bottom-0 w-full transition-all duration-1000 ${bubbling ? 'animate-bounce' : ''}`}
                       style={{
                         height: `${Math.min(100, beakerContents.length * 25)}%`,
                         background: `linear-gradient(45deg, ${beakerContents.map(c => c.color).join(', ')})`,
                         boxShadow: bubbling ? `0 0 20px ${beakerContents[beakerContents.length - 1]?.color || 'cyan'}` : 'none'
                       }}>
                    {bubbling && (
                      <div className="absolute top-0 w-full h-full">
                        {[...Array(12)].map((_, i) => (
                          <div key={i} 
                               className="absolute bg-white/40 rounded-full animate-ping"
                               style={{
                                 left: `${15 + (i % 4) * 20}%`,
                                 top: `${10 + Math.floor(i / 4) * 25}%`,
                                 width: `${6 + (i % 3) * 2}px`,
                                 height: `${6 + (i % 3) * 2}px`,
                                 animationDelay: `${i * 0.15}s`,
                                 animationDuration: '1s'
                               }} />
                        ))}
                        {/* Steam effect */}
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          {[...Array(3)].map((_, i) => (
                            <div key={i}
                                 className="absolute text-white/30 animate-bounce"
                                 style={{
                                   left: `${(i - 1) * 10}px`,
                                   animationDelay: `${i * 0.3}s`,
                                   animationDuration: '2s'
                                 }}>
                              💨
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-4xl animate-bounce">
                ⚗️
              </div>
            </div>

            {/* Enhanced Current Reaction */}
            {currentReaction && (
              <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400 rounded-lg p-4 mb-4 animate-fade-in relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 animate-pulse"></div>
                <p className="text-yellow-300 text-center font-bold relative z-10 animate-bounce">{currentReaction}</p>
              </div>
            )}

            <Button onClick={clearBeaker} 
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-red-500/30">
              Clear Beaker 🧽
            </Button>
          </CardContent>
        </Card>

        {/* Enhanced Chemical Cabinet */}
        <Card className="bg-slate-800/90 backdrop-blur-lg border-white/30 shadow-2xl hover:scale-105 transition-all duration-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 animate-pulse"></div>
          
          <CardContent className="p-8 relative z-10">
            <h3 className="text-2xl font-bold text-white mb-6 text-center animate-bounce">
              🏪 Chemical Cabinet
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              {chemicals.map((chemical, index) => (
                <Button key={index}
                        onClick={() => addChemical(chemical)}
                        className={`p-4 text-left bg-gradient-to-r hover:scale-105 transition-all duration-300 border border-white/20 relative overflow-hidden group shadow-xl`}
                        style={{
                          background: `linear-gradient(45deg, ${chemical.color}40, ${chemical.color}20)`,
                          animationDelay: `${index * 0.1}s`
                        }}>
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <div className="font-bold text-white animate-pulse">{chemical.name}</div>
                      <div className="text-sm text-gray-300">{chemical.formula}</div>
                    </div>
                    <div className="text-2xl animate-bounce group-hover:animate-spin transition-all duration-300">{chemical.formula}</div>
                  </div>
                  
                  {/* Intensity indicator */}
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent to-yellow-400 transition-all duration-300"
                       style={{
                         width: chemical.intensity === 'maximum' ? '100%' : 
                                chemical.intensity === 'high' ? '75%' : '50%'
                       }}></div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Enhanced Lab Results */}
      <Card className="bg-slate-800/90 backdrop-blur-lg border-purple-400/40 shadow-2xl mt-8 animate-fade-in hover:scale-105 transition-all duration-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 animate-pulse"></div>
        
        <CardContent className="p-8 text-center relative z-10">
          <h3 className="text-2xl font-bold text-white mb-4 animate-bounce">Lab Analysis Report</h3>
          <div className="bg-slate-700/80 rounded-lg p-6 border border-white/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 animate-pulse"></div>
            
            <p className="text-lg text-slate-100 relative z-10">
              Current Mixture: {beakerContents.length > 0 ? 
                beakerContents.map(c => c.name).join(' + ') : 
                'Empty beaker - ready for love chemistry!'}
            </p>
            
            {beakerContents.length >= 2 && (
              <div className="mt-4 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400 rounded-lg animate-bounce relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 animate-pulse"></div>
                <p className="text-green-300 font-bold text-xl relative z-10 animate-pulse">
                  🎉 Perfect Wedding Formula Detected! 🎉
                </p>
                <p className="text-green-200 mt-2 relative z-10">
                  Congratulations! You've created the ideal mixture for a happy marriage!
                </p>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} 
                         className="absolute text-yellow-400 animate-ping text-xl"
                         style={{
                           left: `${20 + i * 10}%`,
                           animationDelay: `${i * 0.2}s`,
                           animationDuration: '2s'
                         }}>
                      ✨
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChemistryLab;
