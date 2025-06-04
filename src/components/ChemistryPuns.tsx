
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ChemistryPuns = () => {
  const [currentPun, setCurrentPun] = useState(0);
  
  const chemistryPuns = [
    {
      setup: "Why did the chemist marry their lab partner?",
      punchline: "Because they had great chemistry together! 🧪💕",
      reaction: "Exothermic reaction detected! ♨️",
      bgColor: "from-pink-500/20 to-red-500/20"
    },
    {
      setup: "What did Oxygen say to Hydrogen at the wedding?",
      punchline: "We make a perfect H₂O! Now let's bond! 💧❤️",
      reaction: "Highly stable compound formed! ⚛️",
      bgColor: "from-blue-500/20 to-cyan-500/20"
    },
    {
      setup: "Why are chemists great at relationships?",
      punchline: "They know all about bonding and reactions! 💑🔬",
      reaction: "Ionic attraction successful! ⚡",
      bgColor: "from-purple-500/20 to-indigo-500/20"
    },
    {
      setup: "What's a chemist's favorite type of wedding?",
      punchline: "One with lots of chemistry and no toxic reactions! 💒✨",
      reaction: "pH perfectly balanced! 🎯",
      bgColor: "from-green-500/20 to-emerald-500/20"
    },
    {
      setup: "Why did the organic chemist have a great marriage?",
      punchline: "Because they understood complex structures and strong bonds! 🧬💍",
      reaction: "Covalent bonding achieved! 🔗",
      bgColor: "from-yellow-500/20 to-orange-500/20"
    },
    {
      setup: "What did the professor say about marriage?",
      punchline: "It's like a good experiment - requires the right conditions and constant care! 🔬❤️",
      reaction: "Successful synthesis complete! ✅",
      bgColor: "from-teal-500/20 to-cyan-500/20"
    }
  ];

  const nextPun = () => {
    setCurrentPun((prev) => (prev + 1) % chemistryPuns.length);
  };

  const prevPun = () => {
    setCurrentPun((prev) => (prev - 1 + chemistryPuns.length) % chemistryPuns.length);
  };

  useEffect(() => {
    const interval = setInterval(nextPun, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-5xl font-bold text-white mb-12 text-center bg-gradient-to-r from-pink-300 via-yellow-300 to-orange-300 bg-clip-text text-transparent animate-pulse">
        Chemistry Puns & Wedding Wishes
      </h2>

      <Card className={`bg-gradient-to-r ${chemistryPuns[currentPun].bgColor} backdrop-blur-xl border-white/30 shadow-2xl mb-10 relative overflow-hidden transform hover:scale-105 transition-all duration-500`}>
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: '20px',
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            >
              {['🧪', '⚗️', '🔬', '💕', '✨'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
        
        <CardContent className="p-12 relative z-10">
          <div className="text-center min-h-[400px] flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-blue-200 mb-8 animate-fade-in">
                {chemistryPuns[currentPun].setup}
              </h3>
              <div className="text-4xl font-bold text-white mb-8 animate-bounce bg-gradient-to-r from-white/10 to-white/5 rounded-2xl p-6 border border-white/20">
                {chemistryPuns[currentPun].punchline}
              </div>
              <div className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-xl p-6 border border-yellow-300/30">
                <p className="text-2xl text-yellow-300 italic font-bold animate-pulse">
                  {chemistryPuns[currentPun].reaction}
                </p>
              </div>
            </div>
            
            <div className="flex justify-center space-x-6 mt-8">
              <Button
                onClick={prevPun}
                className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white px-8 py-4 rounded-2xl shadow-lg hover:scale-110 transition-all duration-300 text-lg font-bold"
              >
                ← Previous
              </Button>
              <Button
                onClick={nextPun}
                className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-8 py-4 rounded-2xl shadow-lg hover:scale-110 transition-all duration-300 text-lg font-bold"
              >
                Next →
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <Card className="bg-white/10 backdrop-blur-xl border-white/30 shadow-xl hover:scale-105 transition-all duration-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl"></div>
          <CardContent className="p-8 relative z-10">
            <h3 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center">
              <span className="text-3xl mr-3">📋</span>
              Wedding Lab Report
            </h3>
            <div className="space-y-3 text-blue-200 bg-white/10 rounded-xl p-6 border border-white/20">
              <p className="text-lg"><strong className="text-yellow-300">Experiment:</strong> Marriage Formation</p>
              <p className="text-lg"><strong className="text-yellow-300">Reactants:</strong> Two Hearts ❤️❤️</p>
              <p className="text-lg"><strong className="text-yellow-300">Catalyst:</strong> Love 💕</p>
              <p className="text-lg"><strong className="text-yellow-300">Product:</strong> Eternal Happiness ∞😊</p>
              <p className="text-lg"><strong className="text-yellow-300">Yield:</strong> 100% Success Rate! 🎉</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-xl border-white/30 shadow-xl hover:scale-105 transition-all duration-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-teal-500/20 blur-xl"></div>
          <CardContent className="p-8 relative z-10">
            <h3 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center">
              <span className="text-3xl mr-3">🧪</span>
              Chemical Properties
            </h3>
            <div className="space-y-3 text-blue-200 bg-white/10 rounded-xl p-6 border border-white/20">
              <p className="text-lg"><strong className="text-yellow-300">Stability:</strong> Extremely High</p>
              <p className="text-lg"><strong className="text-yellow-300">Reactivity:</strong> Only with Happiness</p>
              <p className="text-lg"><strong className="text-yellow-300">Melting Point:</strong> Never! ❄️</p>
              <p className="text-lg"><strong className="text-yellow-300">Boiling Point:</strong> Always Bubbling with Joy</p>
              <p className="text-lg"><strong className="text-yellow-300">Half-life:</strong> Infinite ♾️</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-indigo-500/20 backdrop-blur-xl border-white/30 shadow-2xl relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-300 rounded-full opacity-40 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${1 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        <CardContent className="p-12 text-center relative z-10">
          <h3 className="text-3xl font-bold text-white mb-6 animate-bounce">Final Reaction Equation</h3>
          <div className="text-5xl font-bold text-yellow-300 mb-8 animate-pulse filter drop-shadow-lg">
            Prof. Subhraneel + Partner → Perfect Marriage + Endless Joy
          </div>
          <div className="bg-gradient-to-r from-white/10 to-white/5 rounded-2xl p-8 border border-white/20">
            <p className="text-2xl text-blue-200 italic font-semibold">
              "May your marriage be like a well-balanced equation - <br />
              stable, productive, and yielding beautiful results!"
            </p>
          </div>
          <div className="mt-8 text-5xl animate-bounce">
            🧪💕🎉✨💫
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChemistryPuns;
