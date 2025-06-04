
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
      color: "from-pink-400 to-red-400"
    },
    {
      name: "Happiness (Dopamine)",
      formula: "C₈H₁₁NO₂",
      description: "The joy you'll share in your marriage",
      structure: "💛—💛—💛\n  |   /\n💛—💛",
      color: "from-yellow-400 to-orange-400"
    },
    {
      name: "Trust (Serotonin)",
      formula: "C₁₀H₁₂N₂O",
      description: "The foundation of every strong relationship",
      structure: "💚—💚—💚\n |     |\n💚—💚—💚",
      color: "from-green-400 to-blue-400"
    },
    {
      name: "Forever (Diamond)",
      formula: "C",
      description: "Eternal bond, just like your love",
      structure: "💎—💎—💎\n |  X  |\n💎—💎—💎",
      color: "from-blue-400 to-purple-400"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMolecule((prev) => (prev + 1) % molecules.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-white mb-8 text-center bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
        Molecules of Marriage
      </h2>
      
      <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl mb-6">
        <CardContent className="p-8">
          <div className="text-center">
            <h3 className={`text-3xl font-bold mb-4 bg-gradient-to-r ${molecules[currentMolecule].color} bg-clip-text text-transparent`}>
              {molecules[currentMolecule].name}
            </h3>
            <div className="text-6xl font-mono text-white mb-4 leading-relaxed whitespace-pre-line">
              {molecules[currentMolecule].structure}
            </div>
            <p className="text-2xl text-blue-200 mb-4 font-mono">
              {molecules[currentMolecule].formula}
            </p>
            <p className="text-lg text-blue-100 italic">
              {molecules[currentMolecule].description}
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {molecules.map((molecule, index) => (
          <button
            key={index}
            onClick={() => setCurrentMolecule(index)}
            className={`p-4 rounded-lg border-2 transition-all duration-300 ${
              currentMolecule === index
                ? 'border-yellow-300 bg-white/20'
                : 'border-white/30 bg-white/10 hover:bg-white/20'
            }`}
          >
            <div className="text-white text-sm font-semibold">
              {molecule.name.split(' ')[0]}
            </div>
          </button>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-blue-200 text-lg italic">
          "Your marriage will be a perfect synthesis of all these beautiful molecules!"
        </p>
      </div>
    </div>
  );
};

export default MolecularStructure;
