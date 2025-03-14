import { useState } from "react";
import { Element } from "react-scroll";

const questions = [
  {
    id: 1,
    question: "What is your current experience with programming?",
    options: [
      { id: "a", text: "Complete beginner (never written any code)", courseMatch: "python", score: 0 },
      { id: "b", text: "Some basic knowledge (tried a few tutorials)", courseMatch: "python", score: 1 },
      { id: "c", text: "Familiar with another language", courseMatch: "webdev", score: 2 },
      { id: "d", text: "Some college coursework but not confident", courseMatch: "python", score: 2 }
    ]
  },
  {
    id: 2,
    question: "What are your main goals for learning to code?",
    options: [
      { id: "a", text: "Build my own website or web app", courseMatch: "webdev", score: 3 },
      { id: "b", text: "Create games or desktop applications", courseMatch: "python", score: 3 },
      { id: "c", text: "Improve my job prospects", courseMatch: "both", score: 2 },
      { id: "d", text: "Supplement my college coursework", courseMatch: "both", score: 2 }
    ]
  },
  {
    id: 3, 
    question: "How much time can you commit to learning each day?",
    options: [
      { id: "a", text: "Less than 1 hour", courseMatch: "python", score: 1 },
      { id: "b", text: "1-2 hours (our class duration)", courseMatch: "both", score: 3 },
      { id: "c", text: "2-3 hours", courseMatch: "both", score: 3 },
      { id: "d", text: "More than 3 hours", courseMatch: "both", score: 2 }
    ]
  },
  {
    id: 4,
    question: "Are you struggling with any specific programming topics in college?",
    options: [
      { id: "a", text: "Object-oriented programming", courseMatch: "python", score: 2 },
      { id: "b", text: "Web development concepts", courseMatch: "webdev", score: 2 },
      { id: "c", text: "Data structures and algorithms", courseMatch: "python", score: 2 },
      { id: "d", text: "Not in college/Not applicable", courseMatch: "both", score: 1 }
    ]
  },
  {
    id: 5,
    question: "What type of projects interest you most?",
    options: [
      { id: "a", text: "Websites and web applications", courseMatch: "webdev", score: 3 },
      { id: "b", text: "Games and interactive applications", courseMatch: "python", score: 3 },
      { id: "c", text: "Data analysis and visualization", courseMatch: "python", score: 2 },
      { id: "d", text: "Mobile apps or cross-platform tools", courseMatch: "webdev", score: 2 }
    ]
  }
];

const PrerequisiteQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState({ courseMatch: "", readiness: 0 });

  const handleAnswer = (option) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate results
      const totalScore = newAnswers.reduce((sum, answer) => sum + answer.score, 0);
      
      // Count course matches
      const courseCounts = newAnswers.reduce((count, answer) => {
        if (answer.courseMatch === "both") {
          count.python += 1;
          count.webdev += 1;
        } else {
          count[answer.courseMatch] += 1;
        }
        return count;
      }, { python: 0, webdev: 0 });
      
      // Determine course match
      const recommendedCourse = courseCounts.python > courseCounts.webdev 
        ? "100 Days of Python"
        : "Web Development Bootcamp";
        
      // Calculate readiness percentage (max score possible is 15)
      const readinessPercentage = Math.round((totalScore / 15) * 100);
      
      setResult({
        courseMatch: recommendedCourse,
        readiness: readinessPercentage
      });
      
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setShowResult(false);
    setAnswers([]);
  };

  return (
    <Element name="prerequisite-quiz">
      <section className="py-16 bg-indigo-950 text-white">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Find Your Perfect Course</h2>
            <p className="text-lg text-indigo-200 max-w-2xl mx-auto">
              Take this quick quiz to discover which course matches your goals and current skill level
            </p>
          </div>

          <div className="bg-indigo-900 rounded-2xl shadow-xl border border-blue-500/30 overflow-hidden">
            {!showResult ? (
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-sm font-medium text-indigo-200">
                    Question {currentQuestion + 1} of {questions.length}
                  </div>
                  <div className="w-24 bg-indigo-700 rounded-full h-2.5">
                    <div 
                      className="bg-blue-500 h-2.5 rounded-full" 
                      style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-6">
                  {questions[currentQuestion].question}
                </h3>

                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option) => (
                    <button
                      key={option.id}
                      className="w-full text-left p-4 rounded-xl border border-indigo-700 hover:border-blue-400 
                      bg-indigo-800/50 hover:bg-indigo-700 transition-colors duration-200 flex items-start"
                      onClick={() => handleAnswer(option)}
                    >
                      <span className="w-6 h-6 rounded-full bg-blue-900 border border-blue-500 flex items-center 
                      justify-center text-sm font-medium text-blue-100 mr-3 mt-0.5">
                        {option.id.toUpperCase()}
                      </span>
                      <span className="text-indigo-100">{option.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="p-6 md:p-8 text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Your Results</h3>
                  <p className="text-indigo-200 mb-6">Based on your answers, we recommend:</p>
                </div>

                <div className="bg-indigo-800 rounded-xl p-6 mb-6 border border-blue-500/30">
                  <h4 className="text-xl font-bold text-blue-400 mb-2">
                    {result.courseMatch}
                  </h4>
                  <p className="text-indigo-200 mb-4">
                    This course aligns with your goals and experience level.
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-indigo-200">Readiness Level</span>
                      <span className="text-sm font-medium text-blue-300">{result.readiness}%</span>
                    </div>
                    <div className="w-full bg-indigo-700 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full ${
                          result.readiness >= 70 ? 'bg-green-400' : 
                          result.readiness >= 40 ? 'bg-amber-400' : 'bg-orange-400'
                        }`}
                        style={{ width: `${result.readiness}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-indigo-200 mt-2">
                      {result.readiness >= 70 
                        ? "You're ready to start this course!"
                        : result.readiness >= 40 
                        ? "You can start with our guidance."
                        : "We'll help you build the foundation."}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#courses" 
                    className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-300 shadow-md"
                  >
                    Explore Course
                  </a>
                  <button 
                    onClick={resetQuiz}
                    className="px-6 py-3 rounded-full border-2 border-blue-500/50 text-blue-300 font-medium hover:bg-indigo-800 transition-colors duration-300"
                  >
                    Retake Quiz
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default PrerequisiteQuiz;
