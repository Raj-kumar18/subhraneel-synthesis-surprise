
import React, { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import MolecularStructure from './MolecularStructure';
import PeriodicMessage from './PeriodicMessage';
import ChemistryPuns from './ChemistryPuns';

const ChemistryWeddingGift = () => {
  const [currentView, setCurrentView] = useState('main');
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    setShowAnimation(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Floating particles background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-300 rounded-full opacity-70 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {currentView === 'main' && (
          <div className={`text-center transition-all duration-1000 ${showAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-8">
              <h1 className="text-6xl font-bold text-white mb-4 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                The Chemistry of Love
              </h1>
              <div className="flex items-center justify-center gap-2 text-2xl text-yellow-300 mb-6">
                <Heart className="w-8 h-8 text-red-400 animate-pulse" />
                <span>C₂₅H₃₂N₆O₄</span>
                <Heart className="w-8 h-8 text-red-400 animate-pulse" />
              </div>
              <p className="text-xl text-blue-200 mb-2">A Special Wedding Gift For</p>
              <h2 className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                Prof. Subhraneel Mukherjee Sir
              </h2>
              <p className="text-lg text-blue-200">Master of Organic & Inorganic Chemistry</p>
              <p className="text-lg text-blue-200">IIT JEE Mentor Extraordinaire</p>
            </div>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl mb-8 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-yellow-300 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Wedding Congratulations!</h3>
                  <Sparkles className="w-8 h-8 text-yellow-300 ml-3" />
                </div>
                <p className="text-lg text-blue-100 leading-relaxed mb-6">
                  Just like how two elements combine to form a stable compound, 
                  may your union create the most beautiful and enduring bond! 
                  Your dedication to teaching chemistry has inspired countless students, 
                  and now you're about to embark on the most wonderful reaction of your life.
                </p>
                <div className="text-3xl font-bold text-yellow-300 mb-4">
                  H₂ + O₂ → H₂O + 💕
                </div>
                <p className="text-sm text-blue-200 italic">
                  "Where love is the catalyst for a perfect reaction"
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Button
                onClick={() => setCurrentView('molecules')}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-6 text-lg font-semibold rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105"
              >
                🧪 Love Molecules
              </Button>
              <Button
                onClick={() => setCurrentView('periodic')}
                className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white py-6 text-lg font-semibold rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105"
              >
                ⚛️ Periodic Wishes
              </Button>
              <Button
                onClick={() => setCurrentView('puns')}
                className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white py-6 text-lg font-semibold rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105"
              >
                😄 Chemistry Puns
              </Button>
            </div>

            <div className="text-center">
              <p className="text-blue-200 text-lg mb-4">
                "May your marriage have all the right elements for a perfect reaction!"
              </p>
              <p className="text-yellow-300 text-sm">
                With love and best wishes from your grateful students 💝
              </p>
            </div>
          </div>
        )}

        {currentView === 'molecules' && (
          <div className="text-center">
            <Button
              onClick={() => setCurrentView('main')}
              className="mb-6 bg-white/20 hover:bg-white/30 text-white"
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
              className="mb-6 bg-white/20 hover:bg-white/30 text-white"
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
              className="mb-6 bg-white/20 hover:bg-white/30 text-white"
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
