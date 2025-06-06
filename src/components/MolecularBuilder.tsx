
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const MolecularBuilder = () => {
  const [canvas, setCanvas] = useState(Array(6).fill(Array(6).fill(null)));
  const [selectedAtom, setSelectedAtom] = useState(null);
  const [builtMolecule, setBuiltMolecule] = useState('');

  const atoms = [
    { symbol: '💕', name: 'Love', color: 'pink', bonds: 2 },
    { symbol: '😊', name: 'Joy', color: 'yellow', bonds: 1 },
    { symbol: '🤝', name: 'Trust', color: 'blue', bonds: 3 },
    { symbol: '💎', name: 'Forever', color: 'cyan', bonds: 4 },
    { symbol: '🌟', name: 'Magic', color: 'purple', bonds: 1 },
    { symbol: '🔥', name: 'Passion', color: 'red', bonds: 2 }
  ];

  const molecules = {
    '💕😊': 'Happy Love Molecule',
    '💕🤝': 'Trustful Love Bond',
    '💎💕': 'Eternal Love Crystal',
    '🔥💕': 'Passionate Love',
    '🌟💕🤝': 'Magical Trust Love',
    '💎🤝💕😊': 'Perfect Marriage Compound'
  };

  const placeAtom = (row, col) => {
    if (!selectedAtom) return;
    
    const newCanvas = canvas.map((r, rowIndex) => 
      r.map((cell, colIndex) => 
        rowIndex === row && colIndex === col ? selectedAtom : cell
      )
    );
    
    setCanvas(newCanvas);
    checkMolecule(newCanvas);
  };

  const checkMolecule = (currentCanvas) => {
    const atomsInCanvas = currentCanvas.flat().filter(atom => atom !== null);
    const moleculeKey = atomsInCanvas.map(atom => atom.symbol).join('');
    
    if (molecules[moleculeKey]) {
      setBuiltMolecule(molecules[moleculeKey]);
    } else if (atomsInCanvas.length >= 2) {
      setBuiltMolecule('Unknown Compound - Keep experimenting!');
    } else {
      setBuiltMolecule('');
    }
  };

  const clearCanvas = () => {
    setCanvas(Array(6).fill(Array(6).fill(null)));
    setBuiltMolecule('');
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
        Molecular Builder
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Atom Palette */}
        <Card className="bg-slate-800/90 backdrop-blur-lg border-white/30 shadow-2xl">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              🧪 Atom Palette
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {atoms.map((atom, index) => (
                <Button key={index}
                        onClick={() => setSelectedAtom(atom)}
                        className={`p-4 border-2 transition-all duration-300 ${
                          selectedAtom?.symbol === atom.symbol 
                            ? 'border-cyan-400 bg-cyan-500/20 scale-110' 
                            : 'border-white/20 bg-slate-700 hover:bg-slate-600'
                        }`}>
                  <div className="text-center">
                    <div className="text-3xl mb-2">{atom.symbol}</div>
                    <div className="text-sm text-white font-bold">{atom.name}</div>
                    <div className="text-xs text-gray-300">Bonds: {atom.bonds}</div>
                  </div>
                </Button>
              ))}
            </div>
            
            {selectedAtom && (
              <div className="mt-6 p-4 bg-cyan-500/20 border border-cyan-400 rounded-lg">
                <p className="text-cyan-300 text-center">
                  Selected: <span className="font-bold">{selectedAtom.name}</span> {selectedAtom.symbol}
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Building Canvas */}
        <Card className="bg-slate-800/90 backdrop-blur-lg border-white/30 shadow-2xl">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              ⚗️ Molecular Canvas
            </h3>
            
            <div className="grid grid-cols-6 gap-2 mb-6 bg-slate-700/50 p-4 rounded-lg">
              {canvas.map((row, rowIndex) =>
                row.map((cell, colIndex) => (
                  <button key={`${rowIndex}-${colIndex}`}
                          onClick={() => placeAtom(rowIndex, colIndex)}
                          className="w-12 h-12 border border-gray-500 rounded bg-slate-600 hover:bg-slate-500 transition-all duration-200 flex items-center justify-center text-2xl">
                    {cell ? cell.symbol : ''}
                  </button>
                ))
              )}
            </div>
            
            <Button onClick={clearCanvas} 
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-2">
              Clear Canvas 🧽
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Results */}
      {builtMolecule && (
        <Card className="bg-slate-800/90 backdrop-blur-lg border-green-400/40 shadow-2xl mt-8 animate-fade-in">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">🧬 Molecular Analysis</h3>
            <div className="bg-green-500/20 border border-green-400 rounded-lg p-6">
              <p className="text-green-300 font-bold text-xl mb-2">
                Compound Detected: {builtMolecule}
              </p>
              {molecules[canvas.flat().filter(atom => atom !== null).map(atom => atom.symbol).join('')] && (
                <div className="mt-4 p-4 bg-yellow-500/20 border border-yellow-400 rounded-lg">
                  <p className="text-yellow-300 font-bold">
                    🎉 Perfect for a Wedding! This molecule brings joy and harmony! 🎉
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Instructions */}
      <Card className="bg-slate-800/90 backdrop-blur-lg border-blue-400/40 shadow-2xl mt-8">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-white mb-4 text-center">How to Build Molecules</h3>
          <div className="text-slate-200 space-y-2">
            <p>1. Select an atom from the palette</p>
            <p>2. Click on the canvas to place it</p>
            <p>3. Try different combinations to discover new compounds!</p>
            <p>4. Some combinations create special wedding molecules! 💒</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MolecularBuilder;
