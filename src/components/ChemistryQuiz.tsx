
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ChemistryQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const questions = [
    {
      question: "What's Professor Subhraneel's favorite type of chemistry?",
      options: ["Organic & Inorganic", "Physical", "Analytical", "Biochemistry"],
      correct: 0,
      explanation: "Our beloved professor masters both Organic and Inorganic Chemistry!"
    },
    {
      question: "What do you call it when two chemistry teachers get married?",
      options: ["A reaction", "A compound", "Perfect chemistry", "All of the above"],
      correct: 3,
      explanation: "It's definitely all of the above - a perfect reaction creating a beautiful compound!"
    },
    {
      question: "Which element represents the bond in marriage?",
      options: ["Hydrogen", "Oxygen", "Carbon", "Love (Lv)"],
      correct: 3,
      explanation: "Love (Lv) is the most important element in any marriage!"
    },
    {
      question: "What's the pH of a perfect marriage?",
      options: ["7 (neutral)", "14 (basic)", "Perfectly balanced", "Off the scale!"],
      correct: 2,
      explanation: "A perfect marriage is always perfectly balanced in all aspects!"
    },
    {
      question: "Professor Subhraneel's greatest achievement is:",
      options: ["IIT JEE mentoring", "Chemistry expertise", "Getting married", "Inspiring students"],
      correct: 3,
      explanation: "While all are great, inspiring countless students is the most lasting impact!"
    }
  ];

  const handleAnswer = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 2000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  if (showResult) {
    return (
      <div className="max-w-4xl mx-auto">
        <Card className="bg-slate-800/90 backdrop-blur-lg border-white/30 shadow-2xl animate-fade-in">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Quiz Complete! 🎉</h2>
            <div className="text-6xl mb-6">
              {score === questions.length ? '🏆' : score >= questions.length * 0.7 ? '🥇' : '🎯'}
            </div>
            <p className="text-2xl text-cyan-300 mb-4">
              Your Score: {score}/{questions.length}
            </p>
            <p className="text-lg text-slate-200 mb-8">
              {score === questions.length ? 
                "Perfect! You know chemistry and our professor well!" :
                score >= questions.length * 0.7 ?
                "Great job! You have good chemistry knowledge!" :
                "Good effort! Keep learning chemistry!"}
            </p>
            <Button onClick={resetQuiz} 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg">
              Take Quiz Again 🔄
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
        Chemistry Wedding Quiz
      </h2>
      
      <Card className="bg-slate-800/90 backdrop-blur-lg border-white/30 shadow-2xl animate-fade-in">
        <CardContent className="p-8">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-cyan-300 font-bold">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-yellow-300 font-bold">
                Score: {score}/{questions.length}
              </span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-3 mb-6">
              <div className="bg-gradient-to-r from-cyan-400 to-blue-400 h-3 rounded-full transition-all duration-500"
                   style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }} />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-white mb-8 text-center bg-slate-700/80 p-4 rounded-lg">
            {questions[currentQuestion].question}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {questions[currentQuestion].options.map((option, index) => (
              <Button key={index}
                      onClick={() => handleAnswer(index)}
                      disabled={selectedAnswer !== null}
                      className={`p-6 text-left transition-all duration-300 border border-white/20 ${
                        selectedAnswer === index
                          ? selectedAnswer === questions[currentQuestion].correct
                            ? 'bg-green-600 hover:bg-green-700'
                            : 'bg-red-600 hover:bg-red-700'
                          : selectedAnswer !== null && index === questions[currentQuestion].correct
                            ? 'bg-green-600 hover:bg-green-700'
                            : 'bg-slate-700 hover:bg-slate-600'
                      }`}>
                <div className="flex items-center">
                  <span className="text-lg font-bold mr-3">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  <span className="text-white">{option}</span>
                  {selectedAnswer !== null && index === questions[currentQuestion].correct && (
                    <span className="ml-auto text-2xl">✅</span>
                  )}
                  {selectedAnswer === index && selectedAnswer !== questions[currentQuestion].correct && (
                    <span className="ml-auto text-2xl">❌</span>
                  )}
                </div>
              </Button>
            ))}
          </div>

          {selectedAnswer !== null && (
            <div className="bg-slate-700/80 rounded-lg p-6 border border-cyan-400/40 animate-fade-in">
              <p className="text-cyan-300 font-bold mb-2">Explanation:</p>
              <p className="text-white">{questions[currentQuestion].explanation}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ChemistryQuiz;
