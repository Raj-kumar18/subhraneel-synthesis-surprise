
import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Star, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import MolecularStructure from './MolecularStructure';
import PeriodicMessage from './PeriodicMessage';
import ChemistryPuns from './ChemistryPuns';

const ChemistryWeddingGift = () => {
  const [currentView, setCurrentView] = useState('main');
  const [showAnimation, setShowAnimation] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setShowAnimation(true);
    
    // Generate subtle particle system
    const newParticles = [...Array(12)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.8,
      delay: Math.random() * 4,
      duration: Math.random() * 2 + 4,
      type: ['✨', '💫', '⭐'][Math.floor(Math.random() * 3)]
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Subtle floating particles background */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute animate-pulse opacity-30"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              fontSize: `${particle.size * 2}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          >
            {particle.type}
          </div>
        ))}
      </div>

      {/* Subtle chemistry symbols */}
      <div className="absolute inset-0 pointer-events-none">
        {['H₂O', 'CO₂', 'NaCl', 'C₆H₁₂O₆'].map((formula, i) => (
          <div
            key={i}
            className="absolute text-white/8 text-lg font-mono animate-pulse"
            style={{
              left: `${15 + i * 22}%`,
              top: `${20 + (i % 2) * 30}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: '8s'
            }}
          >
            {formula}
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {currentView === 'main' && (
          <div className={`text-center transition-all duration-1000 ${showAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-12 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                The Chemistry of Love
              </h1>
              
              <div className="flex items-center justify-center gap-4 text-xl text-cyan-300 mb-10 animate-bounce">
                <Heart className="w-7 h-7 text-red-400 animate-pulse" fill="currentColor" />
                <span className="font-mono text-white bg-slate-800/70 px-4 py-2 rounded-lg border border-cyan-500/40 shadow-lg backdrop-blur-sm">
                  C₂₅H₃₂N₆O₄
                </span>
                <Heart className="w-7 h-7 text-red-400 animate-pulse" fill="currentColor" />
              </div>
              
              <div className="space-y-4">
                <p className="text-xl text-blue-200 bg-slate-800/30 inline-block px-4 py-2 rounded-lg backdrop-blur-sm">A Special Wedding Gift For</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent animate-pulse">
                  Prof. Subhraneel Mukherjee Sir
                </h2>
                <div className="space-y-2">
                  <p className="text-lg text-slate-200 bg-slate-800/40 inline-block px-3 py-1 rounded-lg backdrop-blur-sm">
                    🧪 Master of Organic & Inorganic Chemistry
                  </p>
                  <p className="text-lg text-slate-200 bg-slate-800/40 inline-block px-3 py-1 rounded-lg backdrop-blur-sm">
                    🎯 IIT JEE Mentor Extraordinaire
                  </p>
                </div>
              </div>
            </div>

            <Card className="bg-slate-800/60 backdrop-blur-lg border-white/30 shadow-2xl mb-10 max-w-4xl mx-auto hover:bg-slate-800/70 transition-all duration-500 hover:scale-105 animate-fade-in">
              <CardContent className="p-10">
                <div className="flex items-center justify-center mb-8 animate-bounce">
                  <Sparkles className="w-8 h-8 text-yellow-400 mr-4 animate-spin" />
                  <h3 className="text-3xl font-bold text-white">Wedding Congratulations!</h3>
                  <Sparkles className="w-8 h-8 text-yellow-400 ml-4 animate-spin" />
                </div>
                
                <p className="text-lg text-slate-100 leading-relaxed mb-8 max-w-3xl mx-auto bg-slate-700/30 p-6 rounded-lg backdrop-blur-sm">
                  Just like how two elements combine to form a stable compound, 
                  may your union create the most beautiful and enduring bond! 
                  Your dedication to teaching chemistry has inspired countless students, 
                  and now you're about to embark on the most wonderful reaction of your life.
                </p>
                
                <div className="text-3xl font-bold text-yellow-400 mb-6 font-mono bg-slate-700/50 inline-block px-6 py-3 rounded-lg border border-yellow-400/40 animate-pulse backdrop-blur-sm">
                  H₂ + O₂ → H₂O + 💕
                </div>
                
                <div className="bg-slate-700/40 rounded-lg p-6 border border-blue-400/30 backdrop-blur-sm">
                  <p className="text-lg text-blue-100 italic font-medium">
                    "Where love is the catalyst for a perfect reaction"
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Button
                onClick={() => setCurrentView('molecules')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-8 text-lg font-semibold rounded-xl shadow-xl transform transition-all duration-500 hover:scale-110 border border-blue-400/40 animate-fade-in hover:shadow-blue-500/30"
              >
                <div className="flex flex-col items-center">
                  <span className="text-2xl mb-2 animate-bounce">🧪</span>
                  <span>Love Molecules</span>
                </div>
              </Button>
              
              <Button
                onClick={() => setCurrentView('periodic')}
                className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white py-8 text-lg font-semibold rounded-xl shadow-xl transform transition-all duration-500 hover:scale-110 border border-green-400/40 animate-fade-in hover:shadow-green-500/30"
              >
                <div className="flex flex-col items-center">
                  <span className="text-2xl mb-2 animate-spin">⚛️</span>
                  <span>Periodic Wishes</span>
                </div>
              </Button>
              
              <Button
                onClick={() => setCurrentView('puns')}
                className="bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 text-white py-8 text-lg font-semibold rounded-xl shadow-xl transform transition-all duration-500 hover:scale-110 border border-pink-400/40 animate-fade-in hover:shadow-pink-500/30"
              >
                <div className="flex flex-col items-center">
                  <span className="text-2xl mb-2 animate-bounce">😄</span>
                  <span>Chemistry Puns</span>
                </div>
              </Button>
            </div>

            <Card className="bg-slate-800/60 backdrop-blur-lg border-purple-400/40 shadow-2xl max-w-3xl mx-auto animate-fade-in hover:scale-105 transition-all duration-500">
              <CardContent className="p-10">
                <div className="flex items-center justify-center mb-6 animate-pulse">
                  <Gift className="w-8 h-8 text-yellow-400 mr-3 animate-bounce" />
                  <Star className="w-6 h-6 text-yellow-400 animate-spin" />
                  <Gift className="w-8 h-8 text-yellow-400 ml-3 animate-bounce" />
                </div>
                <p className="text-slate-100 text-xl mb-4 font-medium bg-slate-700/30 p-4 rounded-lg backdrop-blur-sm">
                  "May your marriage have all the right elements for a perfect reaction!"
                </p>
                <p className="text-yellow-400 text-lg bg-slate-700/40 inline-block px-4 py-2 rounded-lg backdrop-blur-sm">
                  With love and best wishes from your grateful students 💝✨
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {currentView === 'molecules' && (
          <div className="text-center animate-fade-in">
            <Button
              onClick={() => setCurrentView('main')}
              className="mb-8 bg-slate-800/70 hover:bg-slate-700/80 text-white backdrop-blur-lg border-white/40 px-8 py-4 text-lg rounded-xl shadow-xl hover:scale-105 transition-all duration-300"
            >
              ← Back to Main
            </Button>
            <MolecularStructure />
          </div>
        )}

        {currentView === 'periodic' && (
          <div className="text-center animate-fade-in">
            <Button
              onClick={() => setCurrentView('main')}
              className="mb-8 bg-slate-800/70 hover:bg-slate-700/80 text-white backdrop-blur-lg border-white/40 px-8 py-4 text-lg rounded-xl shadow-xl hover:scale-105 transition-all duration-300"
            >
              ← Back to Main
            </Button>
            <PeriodicMessage />
          </div>
        )}

        {currentView === 'puns' && (
          <div className="text-center animate-fade-in">
            <Button
              onClick={() => setCurrentView('main')}
              className="mb-8 bg-slate-800/70 hover:bg-slate-700/80 text-white backdrop-blur-lg border-white/40 px-8 py-4 text-lg rounded-xl shadow-xl hover:scale-105 transition-all duration-300"
            >
              ← Back to Main
            </Button>
            <ChemistryPuns />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChemistryWeddingGift;
