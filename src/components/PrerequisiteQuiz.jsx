import { useState } from "react";
// Removed: import { Element } from "react-scroll"; // This caused the "Could not resolve" error

const questions = [
  {
    id: 1,
    question: "What is your current experience with programming?",
    options: [
      {
        id: "a",
        text: "Complete beginner (never written any code)",
        courseMatch: "python",
        score: 0,
      },
      {
        id: "b",
        text: "Some basic knowledge (tried a few tutorials)",
        courseMatch: "python",
        score: 1,
      },
      {
        id: "c",
        text: "Familiar with another language",
        courseMatch: "webdev",
        score: 2,
      },
      {
        id: "d",
        text: "Some college coursework but not confident",
        courseMatch: "python",
        score: 2,
      },
    ],
  },
  {
    id: 2,
    question: "What are your main goals for learning to code?",
    options: [
      {
        id: "a",
        text: "Build my own website or web app",
        courseMatch: "webdev",
        score: 3,
      },
      {
        id: "b",
        text: "Create games or desktop applications",
        courseMatch: "python",
        score: 3,
      },
      {
        id: "c",
        text: "Improve my job prospects",
        courseMatch: "both",
        score: 2,
      },
      {
        id: "d",
        text: "Supplement my college coursework",
        courseMatch: "both",
        score: 2,
      },
    ],
  },
  {
    id: 3,
    question: "How much time can you commit to learning each day?",
    options: [
      { id: "a", text: "Less than 1 hour", courseMatch: "python", score: 1 },
      {
        id: "b",
        text: "1-2 hours (our class duration)",
        courseMatch: "both",
        score: 3,
      },
      { id: "c", text: "2-3 hours", courseMatch: "both", score: 3 },
      { id: "d", text: "More than 3 hours", courseMatch: "both", score: 2 },
    ],
  },
  {
    id: 4,
    question:
      "Are you struggling with any specific programming topics in college?",
    options: [
      {
        id: "a",
        text: "Object-oriented programming",
        courseMatch: "python",
        score: 2,
      },
      {
        id: "b",
        text: "Web development concepts",
        courseMatch: "webdev",
        score: 2,
      },
      {
        id: "c",
        text: "Data structures and algorithms",
        courseMatch: "python",
        score: 2,
      },
      {
        id: "d",
        text: "Not in college/Not applicable",
        courseMatch: "both",
        score: 1,
      },
    ],
  },
  {
    id: 5,
    question: "What type of projects interest you most?",
    options: [
      {
        id: "a",
        text: "Websites and web applications",
        courseMatch: "webdev",
        score: 3,
      },
      {
        id: "b",
        text: "Games and interactive applications",
        courseMatch: "python",
        score: 3,
      },
      {
        id: "c",
        text: "Data analysis and visualization",
        courseMatch: "python",
        score: 2,
      },
      {
        id: "d",
        text: "Mobile apps or cross-platform tools",
        courseMatch: "webdev",
        score: 2,
      },
    ],
  },
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
      const totalScore = newAnswers.reduce(
        (sum, answer) => sum + answer.score,
        0
      );

      // Count course matches
      const courseCounts = newAnswers.reduce(
        (count, answer) => {
          if (answer.courseMatch === "both") {
            count.python = (count.python || 0) + 1;
            count.webdev = (count.webdev || 0) + 1;
          } else {
            count[answer.courseMatch] = (count[answer.courseMatch] || 0) + 1;
          }
          return count;
        },
        { python: 0, webdev: 0 }
      );

      // Determine course match
      const recommendedCourse =
        courseCounts.python > courseCounts.webdev
          ? "100 Days of Python"
          : "Web Development Bootcamp";

      // Calculate readiness percentage (max score possible is 15 based on your questions' scores)
      const maxPossibleScore = questions.reduce(
        (sum, q) => sum + Math.max(...q.options.map((o) => o.score)),
        0
      );
      const readinessPercentage = Math.round(
        (totalScore / maxPossibleScore) * 100
      );

      setResult({
        courseMatch: recommendedCourse,
        readiness: readinessPercentage,
      });

      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setShowResult(false);
    setAnswers([]);
    setResult({ courseMatch: "", readiness: 0 });
  };

  const currentQuestionData = questions[currentQuestion];

  return (
    // Changed Element to a section with id
    <section
      id="prerequisite-quiz"
      className="py-16 md:py-24 bg-gradient-to-br from-indigo-950 to-blue-900 text-white relative overflow-hidden"
    >
      {/* Decorative background circles/blobs */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-700 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-indigo-700 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="container max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white mb-4 leading-tight">
            Find Your{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Perfect Course
            </span>
          </h2>
          <p className="text-lg text-indigo-200 max-w-2xl mx-auto">
            Take this quick quiz to discover which course matches your goals and
            current skill level.
          </p>
        </div>

        <div className="bg-indigo-900 rounded-3xl shadow-2xl border border-indigo-700/50 overflow-hidden transform transition-all duration-500 ease-in-out">
          {!showResult ? (
            <div className="p-6 md:p-10">
              <div className="flex justify-between items-center mb-8">
                <div className="text-base font-semibold text-indigo-200">
                  Question {currentQuestion + 1} of {questions.length}
                </div>
                <div className="w-32 bg-indigo-700 rounded-full h-3.5 shadow-inner">
                  <div
                    className="h-3.5 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 transition-all duration-500 ease-out"
                    style={{
                      width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 leading-snug">
                {currentQuestionData.question}
              </h3>

              <div className="space-y-4">
                {currentQuestionData.options.map((option) => (
                  <button
                    key={option.id}
                    className="w-full text-left p-4 md:p-5 rounded-xl border border-indigo-700 hover:border-blue-400
                                 bg-indigo-800/60 hover:bg-indigo-700 transition-all duration-300
                                 flex items-start group relative overflow-hidden transform hover:-translate-y-1 shadow-lg"
                    onClick={() => handleAnswer(option)}
                  >
                    {/* Hover gradient effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                    <span
                      className="w-8 h-8 rounded-full bg-indigo-700 border border-indigo-500 flex items-center
                                 justify-center text-lg font-bold text-indigo-100 mr-4 flex-shrink-0 shadow-inner"
                    >
                      {option.id.toUpperCase()}
                    </span>
                    <span className="text-indigo-100 text-lg font-medium relative z-10">
                      {option.text}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="p-6 md:p-10 text-center animate-fade-in">
              <div className="mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl animate-scale-up">
                  <svg
                    className="w-12 h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  Your Perfect Match Found!
                </h3>
                <p className="text-lg text-indigo-200">
                  Based on your answers, we recommend:
                </p>
              </div>

              <div className="bg-indigo-800 rounded-2xl p-6 md:p-8 mb-8 border border-indigo-700/50 shadow-inner">
                <h4 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3">
                  {result.courseMatch}
                </h4>
                <p className="text-indigo-200 text-base mb-5">
                  This course perfectly aligns with your goals and experience
                  level.
                </p>

                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-base font-semibold text-indigo-200">
                      Your Readiness Level
                    </span>
                    <span className="text-base font-bold text-indigo-300">
                      {result.readiness}%
                    </span>
                  </div>
                  <div className="w-full bg-indigo-700 rounded-full h-3.5 shadow-inner">
                    <div
                      className={`h-3.5 rounded-full transition-all duration-700 ease-out ${
                        result.readiness >= 70
                          ? "bg-gradient-to-r from-green-400 to-green-600"
                          : result.readiness >= 40
                            ? "bg-gradient-to-r from-amber-400 to-orange-500"
                            : "bg-gradient-to-r from-red-400 to-pink-500"
                      }`}
                      style={{ width: `${result.readiness}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-indigo-200 mt-3">
                    {result.readiness >= 70
                      ? "You're all set to start this course and excel!"
                      : result.readiness >= 40
                        ? "You're well-positioned, and we'll guide you every step of the way."
                        : "No worries! We'll help you build a strong foundation from scratch."}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg transform hover:scale-105"
                >
                  Contact Us
                </a>
                <button
                  onClick={resetQuiz}
                  className="px-8 py-4 rounded-full border-2 border-indigo-500/50 text-indigo-300 font-semibold text-lg hover:bg-indigo-800 hover:border-indigo-400 transition-all duration-300 shadow-md transform hover:scale-105"
                >
                  Retake Quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite cubic-bezier(0.6, 0.01, 0.35, 1);
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        @keyframes scale-up {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-scale-up {
          animation: scale-up 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default PrerequisiteQuiz;
