
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
      color: "from-pink-400 to-rose-400",
      bgGlow: "from-pink-600/20 to-rose-600/20"
    },
    {
      name: "Happiness (Dopamine)",
      formula: "C₈H₁₁NO₂",
      description: "The joy you'll share in your marriage",
      structure: "💛—💛—💛\n  |   /\n💛—💛",
      color: "from-yellow-400 to-orange-400",
      bgGlow: "from-yellow-600/20 to-orange-600/20"
    },
    {
      name: "Trust (Serotonin)",
      formula: "C₁₀H₁₂N₂O",
      description: "The foundation of every strong relationship",
      structure: "💚—💚—💚\n |     |\n💚—💚—💚",
      color: "from-green-400 to-emerald-400",
      bgGlow: "from-green-600/20 to-emerald-600/20"
    },
    {
      name: "Forever (Diamond)",
      formula: "C",
      description: "Eternal bond, just like your love",
      structure: "💎—💎—💎\n |  X  |\n💎—💎—💎",
      color: "from-blue-400 to-indigo-400",
      bgGlow: "from-blue-600/20 to-indigo-600/20"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMolecule((prev) => (prev + 1) % molecules.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
        Molecules of Marriage
      </h2>
      
      <Card className="bg-slate-800/90 backdrop-blur-lg border-white/30 shadow-2xl mb-10 relative overflow-hidden transform hover:scale-105 transition-all duration-700 animate-fade-in">
        {/* Subtle glowing background effect */}
        <div className={`absolute inset-0 bg-gradient-to-r ${molecules[currentMolecule].bgGlow} blur-xl animate-pulse`}></div>
        
        <CardContent className="p-12 relative z-10">
          <div className="text-center">
            <h3 className={`text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r ${molecules[currentMolecule].color} bg-clip-text text-transparent animate-bounce`}>
              {molecules[currentMolecule].name}
            </h3>
            
            <div className="relative mb-10">
              <div className="text-5xl md:text-6xl font-mono text-white mb-8 leading-relaxed whitespace-pre-line filter drop-shadow-lg animate-pulse">
                {molecules[currentMolecule].structure}
              </div>
              {/* Enhanced sparkle effects around molecule */}
              <div className="absolute top-2 left-1/4 text-yellow-400 animate-bounce text-xl">✨</div>
              <div className="absolute top-1/4 right-1/4 text-yellow-400 animate-spin delay-1000 text-xl">⭐</div>
              <div className="absolute bottom-1/4 left-1/3 text-yellow-400 animate-pulse delay-2000 text-xl">💫</div>
              <div className="absolute top-1/2 right-1/3 text-yellow-400 animate-bounce delay-500 text-xl">✨</div>
            </div>
            
            <div className="bg-slate-700/90 rounded-xl p-6 border border-cyan-400/40 mb-8 backdrop-blur-sm animate-fade-in">
              <p className="text-2xl md:text-3xl text-cyan-300 font-mono font-bold">
                {molecules[currentMolecule].formula}
              </p>
            </div>
            
            <p className="text-lg md:text-xl text-slate-100 bg-slate-700/80 rounded-lg p-6 border border-white/30 max-w-2xl mx-auto backdrop-blur-sm">
              {molecules[currentMolecule].description}
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {molecules.map((molecule, index) => (
          <button
            key={index}
            onClick={() => setCurrentMolecule(index)}
            className={`p-6 rounded-xl border-2 transition-all duration-500 transform hover:scale-110 animate-fade-in ${
              currentMolecule === index
                ? 'border-cyan-400 bg-slate-700/90 shadow-xl shadow-cyan-400/30 backdrop-blur-sm'
                : 'border-white/40 bg-slate-800/80 hover:bg-slate-700/90 backdrop-blur-sm'
            }`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="text-white text-lg font-semibold mb-2">
              {molecule.name.split(' ')[0]}
            </div>
            <div className="text-xl animate-pulse">
              {molecule.structure.split('\n')[0].slice(0, 3)}
            </div>
          </button>
        ))}
      </div>

      <Card className="bg-slate-800/90 backdrop-blur-lg border-purple-400/40 shadow-2xl animate-fade-in hover:scale-105 transition-all duration-500">
        <CardContent className="p-10 text-center">
          <div className="flex items-center justify-center mb-6 animate-bounce">
            <span className="text-3xl animate-pulse">💖</span>
            <span className="text-3xl mx-4 animate-spin">⚗️</span>
            <span className="text-3xl animate-pulse">💖</span>
          </div>
          <p className="text-slate-100 text-xl md:text-2xl font-medium bg-slate-700/80 p-6 rounded-lg backdrop-blur-sm border border-white/20">
            "Your marriage will be a perfect synthesis of all these beautiful molecules!"
          </p>
          <div className="mt-6 text-3xl animate-bounce">
            💕✨🧪✨💕
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MolecularStructure;
