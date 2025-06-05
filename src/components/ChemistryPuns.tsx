
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
      bgColor: "from-pink-600/20 to-red-600/20"
    },
    {
      setup: "What did Oxygen say to Hydrogen at the wedding?",
      punchline: "We make a perfect H₂O! Now let's bond! 💧❤️",
      reaction: "Highly stable compound formed! ⚛️",
      bgColor: "from-blue-600/20 to-cyan-600/20"
    },
    {
      setup: "Why are chemists great at relationships?",
      punchline: "They know all about bonding and reactions! 💑🔬",
      reaction: "Ionic attraction successful! ⚡",
      bgColor: "from-purple-600/20 to-indigo-600/20"
    },
    {
      setup: "What's a chemist's favorite type of wedding?",
      punchline: "One with lots of chemistry and no toxic reactions! 💒✨",
      reaction: "pH perfectly balanced! 🎯",
      bgColor: "from-green-600/20 to-emerald-600/20"
    },
    {
      setup: "Why did the organic chemist have a great marriage?",
      punchline: "Because they understood complex structures and strong bonds! 🧬💍",
      reaction: "Covalent bonding achieved! 🔗",
      bgColor: "from-yellow-600/20 to-orange-600/20"
    },
    {
      setup: "What did the professor say about marriage?",
      punchline: "It's like a good experiment - requires the right conditions and constant care! 🔬❤️",
      reaction: "Successful synthesis complete! ✅",
      bgColor: "from-teal-600/20 to-cyan-600/20"
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
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
        Chemistry Puns & Wedding Wishes
      </h2>

      <Card className={`bg-gradient-to-r ${chemistryPuns[currentPun].bgColor} backdrop-blur-lg border-white/20 shadow-xl mb-12 relative overflow-hidden transform hover:scale-105 transition-all duration-500`}>
        <CardContent className="p-12 relative z-10">
          <div className="text-center min-h-[350px] flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                {chemistryPuns[currentPun].setup}
              </h3>
              <div className="text-2xl md:text-3xl font-bold text-white mb-8 bg-white/10 rounded-xl p-6 border border-white/20">
                {chemistryPuns[currentPun].punchline}
              </div>
              <div className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-xl p-6 border border-yellow-400/30">
                <p className="text-xl text-yellow-300 font-bold">
                  {chemistryPuns[currentPun].reaction}
                </p>
              </div>
            </div>
            
            <div className="flex justify-center space-x-6 mt-8">
              <Button
                onClick={prevPun}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 text-lg font-semibold"
              >
                ← Previous
              </Button>
              <Button
                onClick={nextPun}
                className="bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 text-white px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 text-lg font-semibold"
              >
                Next →
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card className="bg-white/5 backdrop-blur-lg border-white/20 shadow-lg hover:scale-105 transition-all duration-300">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center">
              <span className="text-3xl mr-3">📋</span>
              Wedding Lab Report
            </h3>
            <div className="space-y-3 text-slate-200 bg-white/10 rounded-xl p-6 border border-white/20">
              <p className="text-base"><strong className="text-yellow-400">Experiment:</strong> Marriage Formation</p>
              <p className="text-base"><strong className="text-yellow-400">Reactants:</strong> Two Hearts ❤️❤️</p>
              <p className="text-base"><strong className="text-yellow-400">Catalyst:</strong> Love 💕</p>
              <p className="text-base"><strong className="text-yellow-400">Product:</strong> Eternal Happiness ∞😊</p>
              <p className="text-base"><strong className="text-yellow-400">Yield:</strong> 100% Success Rate! 🎉</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/5 backdrop-blur-lg border-white/20 shadow-lg hover:scale-105 transition-all duration-300">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center">
              <span className="text-3xl mr-3">🧪</span>
              Chemical Properties
            </h3>
            <div className="space-y-3 text-slate-200 bg-white/10 rounded-xl p-6 border border-white/20">
              <p className="text-base"><strong className="text-yellow-400">Stability:</strong> Extremely High</p>
              <p className="text-base"><strong className="text-yellow-400">Reactivity:</strong> Only with Happiness</p>
              <p className="text-base"><strong className="text-yellow-400">Melting Point:</strong> Never! ❄️</p>
              <p className="text-base"><strong className="text-yellow-400">Boiling Point:</strong> Always Bubbling with Joy</p>
              <p className="text-base"><strong className="text-yellow-400">Half-life:</strong> Infinite ♾️</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-lg border-purple-400/30 shadow-xl">
        <CardContent className="p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">Final Reaction Equation</h3>
          <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-8 font-mono bg-slate-800/30 inline-block px-6 py-4 rounded-lg border border-yellow-400/30">
            Prof. Subhraneel + Partner → Perfect Marriage + Endless Joy
          </div>
          <div className="bg-white/10 rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-slate-200 font-medium">
              "May your marriage be like a well-balanced equation - <br />
              stable, productive, and yielding beautiful results!"
            </p>
          </div>
          <div className="mt-8 text-4xl">
            🧪💕🎉✨💫
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChemistryPuns;
