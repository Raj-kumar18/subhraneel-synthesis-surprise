
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
    
    // Generate more complex particle system
    const newParticles = [...Array(50)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
      type: ['✨', '💫', '⭐', '💎', '🌟'][Math.floor(Math.random() * 5)]
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 via-indigo-900 to-pink-900 relative overflow-hidden">
      {/* Enhanced floating particles background */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute animate-pulse opacity-70"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              fontSize: `${particle.size * 4}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))'
            }}
          >
            {particle.type}
          </div>
        ))}
      </div>

      {/* Floating chemistry symbols */}
      <div className="absolute inset-0 pointer-events-none">
        {['H₂O', 'CO₂', 'NaCl', 'C₆H₁₂O₆', 'NH₃', 'CaCO₃'].map((formula, i) => (
          <div
            key={i}
            className="absolute text-white/20 text-2xl font-bold animate-bounce"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 2) * 30}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '4s'
            }}
          >
            {formula}
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {currentView === 'main' && (
          <div className={`text-center transition-all duration-1000 ${showAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-8 relative">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-pink-400/20 blur-3xl rounded-full"></div>
              
              <h1 className="text-7xl font-bold text-white mb-6 bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent animate-pulse relative z-10">
                The Chemistry of Love
              </h1>
              
              <div className="flex items-center justify-center gap-4 text-3xl text-yellow-300 mb-8 animate-bounce">
                <Heart className="w-10 h-10 text-red-400 animate-pulse" fill="currentColor" />
                <span className="font-mono bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  C₂₅H₃₂N₆O₄
                </span>
                <Heart className="w-10 h-10 text-red-400 animate-pulse" fill="currentColor" />
              </div>
              
              <div className="space-y-2">
                <p className="text-2xl text-blue-200 mb-2 animate-fade-in">A Special Wedding Gift For</p>
                <h2 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent animate-scale-in">
                  Prof. Subhraneel Mukherjee Sir
                </h2>
                <div className="space-y-1">
                  <p className="text-xl text-blue-200 animate-fade-in" style={{animationDelay: '0.5s'}}>
                    🧪 Master of Organic & Inorganic Chemistry
                  </p>
                  <p className="text-xl text-blue-200 animate-fade-in" style={{animationDelay: '1s'}}>
                    🎯 IIT JEE Mentor Extraordinaire
                  </p>
                </div>
              </div>
            </div>

            <Card className="bg-white/10 backdrop-blur-xl border-white/30 shadow-2xl mb-8 max-w-3xl mx-auto transform hover:scale-105 transition-all duration-500 relative overflow-hidden">
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-xl"></div>
              
              <CardContent className="p-10 relative z-10">
                <div className="flex items-center justify-center mb-8">
                  <Sparkles className="w-10 h-10 text-yellow-300 mr-4 animate-spin" />
                  <h3 className="text-3xl font-bold text-white">Wedding Congratulations!</h3>
                  <Sparkles className="w-10 h-10 text-yellow-300 ml-4 animate-spin" />
                </div>
                
                <p className="text-xl text-blue-100 leading-relaxed mb-8 animate-fade-in">
                  Just like how two elements combine to form a stable compound, 
                  may your union create the most beautiful and enduring bond! 
                  Your dedication to teaching chemistry has inspired countless students, 
                  and now you're about to embark on the most wonderful reaction of your life.
                </p>
                
                <div className="text-5xl font-bold text-yellow-300 mb-6 animate-pulse">
                  H₂ + O₂ → H₂O + 💕
                </div>
                
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-4 border border-white/20">
                  <p className="text-lg text-blue-200 italic">
                    "Where love is the catalyst for a perfect reaction"
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <Button
                onClick={() => setCurrentView('molecules')}
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white py-8 text-xl font-bold rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-110 hover:shadow-blue-500/50 border-2 border-white/20"
              >
                <div className="flex flex-col items-center">
                  <span className="text-3xl mb-2">🧪</span>
                  <span>Love Molecules</span>
                </div>
              </Button>
              
              <Button
                onClick={() => setCurrentView('periodic')}
                className="bg-gradient-to-r from-green-500 via-teal-500 to-cyan-500 hover:from-green-600 hover:via-teal-600 hover:to-cyan-600 text-white py-8 text-xl font-bold rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-110 hover:shadow-green-500/50 border-2 border-white/20"
              >
                <div className="flex flex-col items-center">
                  <span className="text-3xl mb-2">⚛️</span>
                  <span>Periodic Wishes</span>
                </div>
              </Button>
              
              <Button
                onClick={() => setCurrentView('puns')}
                className="bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 hover:from-pink-600 hover:via-red-600 hover:to-orange-600 text-white py-8 text-xl font-bold rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-110 hover:shadow-pink-500/50 border-2 border-white/20"
              >
                <div className="flex flex-col items-center">
                  <span className="text-3xl mb-2">😄</span>
                  <span>Chemistry Puns</span>
                </div>
              </Button>
            </div>

            <Card className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl border-white/30 shadow-2xl max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-4">
                  <Gift className="w-8 h-8 text-yellow-300 mr-3 animate-bounce" />
                  <Star className="w-6 h-6 text-yellow-300 animate-pulse" />
                  <Gift className="w-8 h-8 text-yellow-300 ml-3 animate-bounce" />
                </div>
                <p className="text-blue-200 text-xl mb-4 font-semibold">
                  "May your marriage have all the right elements for a perfect reaction!"
                </p>
                <p className="text-yellow-300 text-lg">
                  With love and best wishes from your grateful students 💝✨
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {currentView === 'molecules' && (
          <div className="text-center">
            <Button
              onClick={() => setCurrentView('main')}
              className="mb-8 bg-white/20 hover:bg-white/30 text-white backdrop-blur-lg border-white/30 px-8 py-4 text-lg rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
            >
              ← Back to Main
            </Button>
            <MolecularStructure />
          </div>
        )}

        {currentView === 'periodic' && (
          <div className="text-center">
            <Button
              onClick={() => setCurrentView('main')}
              className="mb-8 bg-white/20 hover:bg-white/30 text-white backdrop-blur-lg border-white/30 px-8 py-4 text-lg rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
            >
              ← Back to Main
            </Button>
            <PeriodicMessage />
          </div>
        )}

        {currentView === 'puns' && (
          <div className="text-center">
            <Button
              onClick={() => setCurrentView('main')}
              className="mb-8 bg-white/20 hover:bg-white/30 text-white backdrop-blur-lg border-white/30 px-8 py-4 text-lg rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
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
