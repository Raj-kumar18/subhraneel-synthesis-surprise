
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ChemistryPuns = () => {
  const [currentPun, setCurrentPun] = useState(0);
  
  const chemistryPuns = [
    {
      setup: "Why did the chemist marry their lab partner?",
      punchline: "Because they had great chemistry together! 🧪💕",
      reaction: "Exothermic reaction detected! ♨️"
    },
    {
      setup: "What did Oxygen say to Hydrogen at the wedding?",
      punchline: "We make a perfect H₂O! Now let's bond! 💧❤️",
      reaction: "Highly stable compound formed! ⚛️"
    },
    {
      setup: "Why are chemists great at relationships?",
      punchline: "They know all about bonding and reactions! 💑🔬",
      reaction: "Ionic attraction successful! ⚡"
    },
    {
      setup: "What's a chemist's favorite type of wedding?",
      punchline: "One with lots of chemistry and no toxic reactions! 💒✨",
      reaction: "pH perfectly balanced! 🎯"
    },
    {
      setup: "Why did the organic chemist have a great marriage?",
      punchline: "Because they understood complex structures and strong bonds! 🧬💍",
      reaction: "Covalent bonding achieved! 🔗"
    },
    {
      setup: "What did the professor say about marriage?",
      punchline: "It's like a good experiment - requires the right conditions and constant care! 🔬❤️",
      reaction: "Successful synthesis complete! ✅"
    }
  ];

  const nextPun = () => {
    setCurrentPun((prev) => (prev + 1) % chemistryPuns.length);
  };

  const prevPun = () => {
    setCurrentPun((prev) => (prev - 1 + chemistryPuns.length) % chemistryPuns.length);
  };

  useEffect(() => {
    const interval = setInterval(nextPun, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-white mb-8 text-center bg-gradient-to-r from-pink-300 to-yellow-300 bg-clip-text text-transparent">
        Chemistry Puns & Wedding Wishes
      </h2>

      <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl mb-8">
        <CardContent className="p-8">
          <div className="text-center min-h-[300px] flex flex-col justify-center">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-blue-200 mb-4">
                {chemistryPuns[currentPun].setup}
              </h3>
              <div className="text-3xl font-bold text-white mb-4 animate-pulse">
                {chemistryPuns[currentPun].punchline}
              </div>
              <p className="text-lg text-yellow-300 italic">
                {chemistryPuns[currentPun].reaction}
              </p>
            </div>
            
            <div className="flex justify-center space-x-4 mt-6">
              <Button
                onClick={prevPun}
                className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full"
              >
                ← Previous
              </Button>
              <Button
                onClick={nextPun}
                className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full"
              >
                Next →
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-xl">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-white mb-4 text-center">Wedding Lab Report 📋</h3>
            <div className="space-y-2 text-blue-200">
              <p><strong>Experiment:</strong> Marriage Formation</p>
              <p><strong>Reactants:</strong> Two Hearts ❤️❤️</p>
              <p><strong>Catalyst:</strong> Love 💕</p>
              <p><strong>Product:</strong> Eternal Happiness ∞😊</p>
              <p><strong>Yield:</strong> 100% Success Rate! 🎉</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-xl">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-white mb-4 text-center">Chemical Properties 🧪</h3>
            <div className="space-y-2 text-blue-200">
              <p><strong>Stability:</strong> Extremely High</p>
              <p><strong>Reactivity:</strong> Only with Happiness</p>
              <p><strong>Melting Point:</strong> Never! ❄️</p>
              <p><strong>Boiling Point:</strong> Always Bubbling with Joy</p>
              <p><strong>Half-life:</strong> Infinite ♾️</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg border-white/20 shadow-2xl">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Final Reaction Equation</h3>
          <div className="text-4xl font-bold text-yellow-300 mb-4">
            Prof. Subhraneel + Partner → Perfect Marriage + Endless Joy
          </div>
          <p className="text-lg text-blue-200 italic">
            "May your marriage be like a well-balanced equation - <br />
            stable, productive, and yielding beautiful results!"
          </p>
          <div className="mt-6 text-2xl">🧪💕🎉</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChemistryPuns;
