
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const MolecularStructure = () => {
  const [currentMolecule, setCurrentMolecule] = useState(0);
  
  const molecules = [
    {
      name: "Love Molecule (Oxytocin)",
      formula: "C₄₃H₆₆N₁₂O₁₂S₂",
      description: "The 'love hormone' that bonds hearts together",
      structure: "💙—💙—💙\n  |     |\n💙—💙—💙",
      color: "from-pink-400 via-red-400 to-rose-400",
      bgGlow: "from-pink-500/30 to-red-500/30"
    },
    {
      name: "Happiness (Dopamine)",
      formula: "C₈H₁₁NO₂",
      description: "The joy you'll share in your marriage",
      structure: "💛—💛—💛\n  |   /\n💛—💛",
      color: "from-yellow-400 via-orange-400 to-amber-400",
      bgGlow: "from-yellow-500/30 to-orange-500/30"
    },
    {
      name: "Trust (Serotonin)",
      formula: "C₁₀H₁₂N₂O",
      description: "The foundation of every strong relationship",
      structure: "💚—💚—💚\n |     |\n💚—💚—💚",
      color: "from-green-400 via-emerald-400 to-teal-400",
      bgGlow: "from-green-500/30 to-teal-500/30"
    },
    {
      name: "Forever (Diamond)",
      formula: "C",
      description: "Eternal bond, just like your love",
      structure: "💎—💎—💎\n |  X  |\n💎—💎—💎",
      color: "from-blue-400 via-indigo-400 to-purple-400",
      bgGlow: "from-blue-500/30 to-purple-500/30"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMolecule((prev) => (prev + 1) % molecules.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-5xl font-bold text-white mb-12 text-center bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent animate-pulse">
        Molecules of Marriage
      </h2>
      
      <Card className="bg-white/10 backdrop-blur-xl border-white/30 shadow-2xl mb-8 relative overflow-hidden transform hover:scale-105 transition-all duration-500">
        {/* Glowing background effect */}
        <div className={`absolute inset-0 bg-gradient-to-r ${molecules[currentMolecule].bgGlow} blur-2xl`}></div>
        
        <CardContent className="p-12 relative z-10">
          <div className="text-center">
            <h3 className={`text-4xl font-bold mb-6 bg-gradient-to-r ${molecules[currentMolecule].color} bg-clip-text text-transparent animate-pulse`}>
              {molecules[currentMolecule].name}
            </h3>
            
            <div className="relative mb-8">
              <div className="text-8xl font-mono text-white mb-6 leading-relaxed whitespace-pre-line animate-bounce filter drop-shadow-lg">
                {molecules[currentMolecule].structure}
              </div>
              {/* Sparkle effects around molecule */}
              <div className="absolute top-0 left-1/4 animate-ping">✨</div>
              <div className="absolute top-1/4 right-1/4 animate-pulse">⭐</div>
              <div className="absolute bottom-1/4 left-1/3 animate-bounce">💫</div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-6 border border-white/20 mb-6">
              <p className="text-3xl text-blue-200 font-mono font-bold">
                {molecules[currentMolecule].formula}
              </p>
            </div>
            
            <p className="text-xl text-blue-100 italic bg-gradient-to-r from-white/10 to-white/5 rounded-lg p-4 border border-white/10">
              {molecules[currentMolecule].description}
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        {molecules.map((molecule, index) => (
          <button
            key={index}
            onClick={() => setCurrentMolecule(index)}
            className={`p-6 rounded-2xl border-2 transition-all duration-500 transform hover:scale-110 ${
              currentMolecule === index
                ? 'border-yellow-300 bg-white/30 shadow-2xl shadow-yellow-300/50'
                : 'border-white/30 bg-white/10 hover:bg-white/20'
            }`}
          >
            <div className="text-white text-lg font-bold">
              {molecule.name.split(' ')[0]}
            </div>
            <div className="text-2xl mt-2">
              {molecule.structure.split('\n')[0].slice(0, 3)}
            </div>
          </button>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-indigo-500/20 backdrop-blur-xl border-white/30 shadow-2xl">
        <CardContent className="p-10 text-center">
          <div className="flex items-center justify-center mb-6">
            <span className="text-4xl animate-pulse">💖</span>
            <span className="text-4xl mx-4 animate-bounce">⚗️</span>
            <span className="text-4xl animate-pulse">💖</span>
          </div>
          <p className="text-blue-200 text-2xl italic font-semibold">
            "Your marriage will be a perfect synthesis of all these beautiful molecules!"
          </p>
          <div className="mt-6 text-4xl animate-bounce">
            💕✨🧪✨💕
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MolecularStructure;
