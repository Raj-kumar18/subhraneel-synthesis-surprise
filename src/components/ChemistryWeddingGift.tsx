
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
    const newParticles = [...Array(15)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 3,
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
            className="absolute animate-pulse opacity-40"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              fontSize: `${particle.size * 3}px`,
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
            className="absolute text-white/10 text-xl font-mono animate-pulse"
            style={{
              left: `${20 + i * 20}%`,
              top: `${25 + (i % 2) * 25}%`,
              animationDelay: `${i * 1}s`,
              animationDuration: '6s'
            }}
          >
            {formula}
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {currentView === 'main' && (
          <div className={`text-center transition-all duration-1000 ${showAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-12">
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                The Chemistry of Love
              </h1>
              
              <div className="flex items-center justify-center gap-4 text-2xl text-cyan-300 mb-10">
                <Heart className="w-8 h-8 text-red-400" fill="currentColor" />
                <span className="font-mono text-white bg-slate-800/50 px-4 py-2 rounded-lg border border-cyan-500/30">
                  C₂₅H₃₂N₆O₄
                </span>
                <Heart className="w-8 h-8 text-red-400" fill="currentColor" />
              </div>
              
              <div className="space-y-4">
                <p className="text-xl text-blue-200">A Special Wedding Gift For</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                  Prof. Subhraneel Mukherjee Sir
                </h2>
                <div className="space-y-2">
                  <p className="text-lg text-slate-300">
                    🧪 Master of Organic & Inorganic Chemistry
                  </p>
                  <p className="text-lg text-slate-300">
                    🎯 IIT JEE Mentor Extraordinaire
                  </p>
                </div>
              </div>
            </div>

            <Card className="bg-white/5 backdrop-blur-lg border-white/20 shadow-xl mb-10 max-w-4xl mx-auto hover:bg-white/10 transition-all duration-500">
              <CardContent className="p-10">
                <div className="flex items-center justify-center mb-8">
                  <Sparkles className="w-8 h-8 text-yellow-400 mr-4" />
                  <h3 className="text-3xl font-bold text-white">Wedding Congratulations!</h3>
                  <Sparkles className="w-8 h-8 text-yellow-400 ml-4" />
                </div>
                
                <p className="text-lg text-slate-200 leading-relaxed mb-8 max-w-3xl mx-auto">
                  Just like how two elements combine to form a stable compound, 
                  may your union create the most beautiful and enduring bond! 
                  Your dedication to teaching chemistry has inspired countless students, 
                  and now you're about to embark on the most wonderful reaction of your life.
                </p>
                
                <div className="text-4xl font-bold text-yellow-400 mb-6 font-mono bg-slate-800/30 inline-block px-6 py-3 rounded-lg border border-yellow-400/30">
                  H₂ + O₂ → H₂O + 💕
                </div>
                
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-6 border border-blue-400/20">
                  <p className="text-lg text-blue-200 italic font-medium">
                    "Where love is the catalyst for a perfect reaction"
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Button
                onClick={() => setCurrentView('molecules')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-8 text-lg font-semibold rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 border border-blue-400/30"
              >
                <div className="flex flex-col items-center">
                  <span className="text-2xl mb-2">🧪</span>
                  <span>Love Molecules</span>
                </div>
              </Button>
              
              <Button
                onClick={() => setCurrentView('periodic')}
                className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white py-8 text-lg font-semibold rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 border border-green-400/30"
              >
                <div className="flex flex-col items-center">
                  <span className="text-2xl mb-2">⚛️</span>
                  <span>Periodic Wishes</span>
                </div>
              </Button>
              
              <Button
                onClick={() => setCurrentView('puns')}
                className="bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 text-white py-8 text-lg font-semibold rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 border border-pink-400/30"
              >
                <div className="flex flex-col items-center">
                  <span className="text-2xl mb-2">😄</span>
                  <span>Chemistry Puns</span>
                </div>
              </Button>
            </div>

            <Card className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-lg border-purple-400/30 shadow-xl max-w-3xl mx-auto">
              <CardContent className="p-10">
                <div className="flex items-center justify-center mb-6">
                  <Gift className="w-8 h-8 text-yellow-400 mr-3" />
                  <Star className="w-6 h-6 text-yellow-400" />
                  <Gift className="w-8 h-8 text-yellow-400 ml-3" />
                </div>
                <p className="text-slate-200 text-xl mb-4 font-medium">
                  "May your marriage have all the right elements for a perfect reaction!"
                </p>
                <p className="text-yellow-400 text-lg">
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
              className="mb-8 bg-white/10 hover:bg-white/20 text-white backdrop-blur-lg border-white/30 px-8 py-4 text-lg rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
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
              className="mb-8 bg-white/10 hover:bg-white/20 text-white backdrop-blur-lg border-white/30 px-8 py-4 text-lg rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
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
              className="mb-8 bg-white/10 hover:bg-white/20 text-white backdrop-blur-lg border-white/30 px-8 py-4 text-lg rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
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
