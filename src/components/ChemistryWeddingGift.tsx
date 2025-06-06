import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Star, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import MolecularStructure from './MolecularStructure';
import PeriodicMessage from './PeriodicMessage';
import ChemistryPuns from './ChemistryPuns';
import ChemistryLab from './ChemistryLab';
import ChemistryQuiz from './ChemistryQuiz';
import MolecularBuilder from './MolecularBuilder';

const ChemistryWeddingGift = () => {
  const [currentView, setCurrentView] = useState('main');
  const [showAnimation, setShowAnimation] = useState(false);
  const [particles, setParticles] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [magicSparkles, setMagicSparkles] = useState([]);

  useEffect(() => {
    setShowAnimation(true);
    
    // Generate enhanced particle system
    const newParticles = [...Array(25)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.8 + 0.8,
      delay: Math.random() * 5,
      duration: Math.random() * 4 + 6,
      type: ['✨', '💫', '⭐', '💎', '🔬', '⚛️', '🧪', '💕'][Math.floor(Math.random() * 8)],
      speed: Math.random() * 0.5 + 0.3
    }));
    setParticles(newParticles);

    // Mouse tracking for interactive effects
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Create magical sparkles on mouse movement
  useEffect(() => {
    const createMagicSparkle = () => {
      const newSparkle = {
        id: Date.now(),
        x: mousePosition.x * 100,
        y: mousePosition.y * 100,
        life: 0
      };
      setMagicSparkles(prev => [...prev.slice(-10), newSparkle]);
    };

    const interval = setInterval(createMagicSparkle, 200);
    return () => clearInterval(interval);
  }, [mousePosition]);

  // Clean up old sparkles
  useEffect(() => {
    const interval = setInterval(() => {
      setMagicSparkles(prev => prev.filter(sparkle => Date.now() - sparkle.id < 2000));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Enhanced floating particles background with mouse interaction */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute animate-pulse opacity-20 transition-transform duration-1000"
            style={{
              left: `${particle.x + mousePosition.x * 5}%`,
              top: `${particle.y + mousePosition.y * 3}%`,
              fontSize: `${particle.size * 2}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 15}px)`
            }}
          >
            {particle.type}
          </div>
        ))}
      </div>

      {/* Magic sparkles following mouse */}
      <div className="absolute inset-0 pointer-events-none">
        {magicSparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className="absolute animate-ping text-yellow-400"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              animationDuration: '1s',
              fontSize: '12px'
            }}
          >
            ✨
          </div>
        ))}
      </div>

      {/* Enhanced chemistry symbols and formulas with pulsing effects */}
      <div className="absolute inset-0 pointer-events-none">
        {['H₂O', 'CO₂', 'NaCl', 'C₆H₁₂O₆', 'O₂', 'N₂', 'CH₄', 'NH₃', 'C₂H₆O', 'H₂SO₄'].map((formula, i) => (
          <div
            key={i}
            className="absolute text-white/15 text-xl font-mono animate-pulse hover:text-white/30 transition-all duration-500"
            style={{
              left: `${10 + (i * 12) % 80}%`,
              top: `${15 + (i % 3) * 25}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: '8s',
              transform: `rotate(${(i % 2 === 0 ? 1 : -1) * (i % 15)}deg)`
            }}
          >
            {formula}
          </div>
        ))}
      </div>

      {/* Enhanced floating molecular structures with rotation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-8 animate-bounce"
            style={{
              left: `${5 + (i * 15) % 90}%`,
              top: `${10 + (i * 20) % 70}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${8 + (i % 3)}s`,
              transform: `rotate(${i * 30}deg)`
            }}
          >
            <div className="text-6xl text-white/10 animate-spin" style={{ animationDuration: `${15 + i}s` }}>
              {['⚛️', '🧪', '🔬', '⚗️', '💫', '🌟'][i % 6]}
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced geometric background patterns with multiple layers */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-white/5 rounded-full animate-spin"
            style={{
              width: `${200 + i * 80}px`,
              height: `${200 + i * 80}px`,
              left: `${20 + (i * 15) % 60}%`,
              top: `${10 + (i * 20) % 60}%`,
              animationDuration: `${20 + i * 5}s`,
              animationDirection: i % 2 === 0 ? 'normal' : 'reverse',
              opacity: 0.3 - (i * 0.03)
            }}
          />
        ))}
      </div>

      {/* Enhanced hexagonal pattern overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-8">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="hexPattern" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
              <polygon points="30,2 50,16 50,36 30,50 10,36 10,16" 
                       fill="none" 
                       stroke="white" 
                       strokeWidth="1"
                       opacity="0.1"/>
            </pattern>
            <pattern id="hexPatternGlow" x="0" y="0" width="80" height="70" patternUnits="userSpaceOnUse">
              <polygon points="40,2 65,21 65,49 40,68 15,49 15,21" 
                       fill="none" 
                       stroke="cyan" 
                       strokeWidth="0.5"
                       opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexPattern)" />
          <rect width="100%" height="100%" fill="url(#hexPatternGlow)" className="animate-pulse" />
        </svg>
      </div>

      {/* Enhanced DNA helix pattern with multiple helixes */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" className="opacity-15">
          <defs>
            <path id="helix" d="M0,0 Q50,25 100,0 T200,0" stroke="white" strokeWidth="2" fill="none"/>
            <path id="helixGlow" d="M0,0 Q50,25 100,0 T200,0" stroke="cyan" strokeWidth="1" fill="none"/>
          </defs>
          {[...Array(6)].map((_, i) => (
            <g key={i} transform={`translate(${i * 250}, ${i * 120})`}>
              <use href="#helix" className="animate-pulse" style={{animationDelay: `${i}s`, animationDuration: '4s'}} />
              <use href="#helix" transform="translate(0,25) scale(1,-1)" className="animate-pulse" style={{animationDelay: `${i + 1}s`, animationDuration: '4s'}} />
              <use href="#helixGlow" className="animate-pulse" style={{animationDelay: `${i + 0.5}s`, animationDuration: '6s'}} />
            </g>
          ))}
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {currentView === 'main' && (
          <div className={`text-center transition-all duration-1000 ${showAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-12 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                The Chemistry of Love
              </h1>
              
              <div className="flex items-center justify-center gap-4 text-xl text-cyan-300 mb-10 animate-bounce">
                <Heart className="w-7 h-7 text-red-400 animate-pulse" fill="currentColor" />
                <span className="font-mono text-white bg-slate-800/90 px-4 py-2 rounded-lg border border-cyan-500/40 shadow-lg backdrop-blur-sm animate-pulse">
                  C₂₅H₃₂N₆O₄
                </span>
                <Heart className="w-7 h-7 text-red-400 animate-pulse" fill="currentColor" />
              </div>
              
              <div className="space-y-4">
                <p className="text-xl text-blue-200 bg-slate-800/80 inline-block px-4 py-2 rounded-lg backdrop-blur-sm border border-white/20 animate-pulse">A Special Wedding Gift For</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent animate-pulse">
                  Prof. Subhraneel Mukherjee Sir
                </h2>
                <div className="space-y-2">
                  <p className="text-lg text-slate-200 bg-slate-800/80 inline-block px-3 py-1 rounded-lg backdrop-blur-sm border border-white/20 animate-bounce">
                    🧪 Master of Organic & Inorganic Chemistry
                  </p>
                  <p className="text-lg text-slate-200 bg-slate-800/80 inline-block px-3 py-1 rounded-lg backdrop-blur-sm border border-white/20 animate-bounce" style={{animationDelay: '0.2s'}}>
                    🎯 IIT JEE Mentor Extraordinaire
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced main card with gradient animation */}
            <Card className="bg-slate-800/90 backdrop-blur-lg border-white/30 shadow-2xl mb-10 max-w-4xl mx-auto hover:bg-slate-800/95 transition-all duration-500 hover:scale-105 animate-fade-in relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse"></div>
              <CardContent className="p-10 relative z-10">
                <div className="flex items-center justify-center mb-8 animate-bounce">
                  <Sparkles className="w-8 h-8 text-yellow-400 mr-4 animate-spin" />
                  <h3 className="text-3xl font-bold text-white">Wedding Congratulations!</h3>
                  <Sparkles className="w-8 h-8 text-yellow-400 ml-4 animate-spin" />
                </div>
                
                <p className="text-lg text-slate-100 leading-relaxed mb-8 max-w-3xl mx-auto bg-slate-700/70 p-6 rounded-lg backdrop-blur-sm border border-white/20 animate-fade-in">
                  Just like how two elements combine to form a stable compound, 
                  may your union create the most beautiful and enduring bond! 
                  Your dedication to teaching chemistry has inspired countless students, 
                  and now you're about to embark on the most wonderful reaction of your life.
                </p>
                
                <div className="text-3xl font-bold text-yellow-400 mb-6 font-mono bg-slate-700/80 inline-block px-6 py-3 rounded-lg border border-yellow-400/40 animate-pulse backdrop-blur-sm">
                  H₂ + O₂ → H₂O + 💕
                </div>
                
                <div className="bg-slate-700/80 rounded-lg p-6 border border-blue-400/30 backdrop-blur-sm">
                  <p className="text-lg text-blue-100 italic font-medium">
                    "Where love is the catalyst for a perfect reaction"
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Enhanced navigation buttons with staggered animations */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                { view: 'molecules', title: 'Love Molecules', icon: '🧪', gradient: 'from-blue-600 to-purple-600', hoverGradient: 'from-blue-700 to-purple-700', border: 'border-blue-400/40', shadow: 'hover:shadow-blue-500/30' },
                { view: 'periodic', title: 'Periodic Wishes', icon: '⚛️', gradient: 'from-green-600 to-teal-600', hoverGradient: 'from-green-700 to-teal-700', border: 'border-green-400/40', shadow: 'hover:shadow-green-500/30' },
                { view: 'puns', title: 'Chemistry Puns', icon: '😄', gradient: 'from-pink-600 to-red-600', hoverGradient: 'from-pink-700 to-red-700', border: 'border-pink-400/40', shadow: 'hover:shadow-pink-500/30' },
                { view: 'lab', title: 'Chemistry Lab', icon: '⚗️', gradient: 'from-cyan-600 to-blue-600', hoverGradient: 'from-cyan-700 to-blue-700', border: 'border-cyan-400/40', shadow: 'hover:shadow-cyan-500/30' },
                { view: 'quiz', title: 'Chemistry Quiz', icon: '🧠', gradient: 'from-orange-600 to-yellow-600', hoverGradient: 'from-orange-700 to-yellow-700', border: 'border-orange-400/40', shadow: 'hover:shadow-orange-500/30' },
                { view: 'builder', title: 'Molecule Builder', icon: '🔬', gradient: 'from-purple-600 to-indigo-600', hoverGradient: 'from-purple-700 to-indigo-700', border: 'border-purple-400/40', shadow: 'hover:shadow-purple-500/30' }
              ].map((button, index) => (
                <Button
                  key={button.view}
                  onClick={() => setCurrentView(button.view)}
                  className={`bg-gradient-to-r ${button.gradient} hover:${button.hoverGradient} text-white py-8 text-lg font-semibold rounded-xl shadow-xl transform transition-all duration-500 hover:scale-110 ${button.border} animate-fade-in ${button.shadow} relative overflow-hidden group`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex flex-col items-center relative z-10">
                    <span className="text-2xl mb-2 animate-bounce group-hover:animate-spin transition-all duration-300">{button.icon}</span>
                    <span>{button.title}</span>
                  </div>
                </Button>
              ))}
            </div>

            {/* Enhanced final card */}
            <Card className="bg-slate-800/90 backdrop-blur-lg border-purple-400/40 shadow-2xl max-w-3xl mx-auto animate-fade-in hover:scale-105 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 animate-pulse"></div>
              <CardContent className="p-10 relative z-10">
                <div className="flex items-center justify-center mb-6 animate-pulse">
                  <Gift className="w-8 h-8 text-yellow-400 mr-3 animate-bounce" />
                  <Star className="w-6 h-6 text-yellow-400 animate-spin" />
                  <Gift className="w-8 h-8 text-yellow-400 ml-3 animate-bounce" />
                </div>
                <p className="text-slate-100 text-xl mb-4 font-medium bg-slate-700/70 p-4 rounded-lg backdrop-blur-sm border border-white/20">
                  "May your marriage have all the right elements for a perfect reaction!"
                </p>
                <p className="text-yellow-400 text-lg bg-slate-700/80 inline-block px-4 py-2 rounded-lg backdrop-blur-sm border border-white/20 animate-pulse">
                  With love and best wishes from your grateful students 💝✨
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {currentView === 'molecules' && (
          <div className="text-center animate-fade-in">
            <Button
              onClick={() => setCurrentView('main')}
              className="mb-8 bg-slate-800/90 hover:bg-slate-700/95 text-white backdrop-blur-lg border-white/40 px-8 py-4 text-lg rounded-xl shadow-xl hover:scale-105 transition-all duration-300"
            >
              ← Back to Main
            </Button>
            <MolecularStructure />
          </div>
        )}

        {currentView === 'periodic' && (
          <div className="text-center animate-fade-in">
            <Button
              onClick={() => setCurrentView('main')}
              className="mb-8 bg-slate-800/90 hover:bg-slate-700/95 text-white backdrop-blur-lg border-white/40 px-8 py-4 text-lg rounded-xl shadow-xl hover:scale-105 transition-all duration-300"
            >
              ← Back to Main
            </Button>
            <PeriodicMessage />
          </div>
        )}

        {currentView === 'puns' && (
          <div className="text-center animate-fade-in">
            <Button
              onClick={() => setCurrentView('main')}
              className="mb-8 bg-slate-800/90 hover:bg-slate-700/95 text-white backdrop-blur-lg border-white/40 px-8 py-4 text-lg rounded-xl shadow-xl hover:scale-105 transition-all duration-300"
            >
              ← Back to Main
            </Button>
            <ChemistryPuns />
          </div>
        )}

        {currentView === 'lab' && (
          <div className="text-center animate-fade-in">
            <Button
              onClick={() => setCurrentView('main')}
              className="mb-8 bg-slate-800/90 hover:bg-slate-700/95 text-white backdrop-blur-lg border-white/40 px-8 py-4 text-lg rounded-xl shadow-xl hover:scale-105 transition-all duration-300"
            >
              ← Back to Main
            </Button>
            <ChemistryLab />
          </div>
        )}

        {currentView === 'quiz' && (
          <div className="text-center animate-fade-in">
            <Button
              onClick={() => setCurrentView('main')}
              className="mb-8 bg-slate-800/90 hover:bg-slate-700/95 text-white backdrop-blur-lg border-white/40 px-8 py-4 text-lg rounded-xl shadow-xl hover:scale-105 transition-all duration-300"
            >
              ← Back to Main
            </Button>
            <ChemistryQuiz />
          </div>
        )}

        {currentView === 'builder' && (
          <div className="text-center animate-fade-in">
            <Button
              onClick={() => setCurrentView('main')}
              className="mb-8 bg-slate-800/90 hover:bg-slate-700/95 text-white backdrop-blur-lg border-white/40 px-8 py-4 text-lg rounded-xl shadow-xl hover:scale-105 transition-all duration-300"
            >
              ← Back to Main
            </Button>
            <MolecularBuilder />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChemistryWeddingGift;
