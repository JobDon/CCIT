import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, RotateCcw, Loader } from "lucide-react";
import Navbar from "@/components/ui/navbar";

const questions = [
  {
    id: 1,
    question: "Have you been hacked and need urgent assistance?",
    options: ["Yes", "No"],
  },
  {
    id: 2,
    question: "What are you looking for today?",
    options: [
      "Managed Security Services",
      "Professional & Advisory Services",
      "Offensive Security & Testing",
      "Threat Intelligence & Incident Response",
      "Training & Awareness",
      "General Info",
    ],
  },
];

const redirects = {
  Yes: "/contact",
  "Managed Security Services": "/services/managed-security-services",
  "Professional & Advisory Services": "/services#professional-advisory-services",
  "Offensive Security & Testing": "/services#offensive-security-testing",
  "Threat Intelligence & Incident Response": "/services#threat-intelligence-response",
  "Training & Awareness": "/services#training-awareness",
  "General Info": "/about",
};

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [redirectLink, setRedirectLink] = useState(null);

  const handleOptionClick = (option) => {
    const newAnswers = [...selectedAnswers, option];
    setSelectedAnswers(newAnswers);

    if (redirects[option]) {
      setRedirectLink(redirects[option]);
      setIsRedirecting(true);

      setTimeout(() => {
        window.location.href = redirects[option];
      }, 2000);
      return;
    }

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const resetFlow = () => {
    setCurrentStep(0);
    setSelectedAnswers([]);
    setIsRedirecting(false);
    setRedirectLink(null);
  };

  const goToPrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setSelectedAnswers(selectedAnswers.slice(0, -1));
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Keep navbar on solid black, above everything */}
      <div className="sticky top-0 z-30 bg-black">
        <Navbar />
      </div>

      {/* Backgrounded hero section begins AFTER the navbar */}
      <section className="relative min-h-[100dvh]">
        {/* Full-bleed background image (below content only) */}
        <Image
          src="/backgrounds/indexbackground.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40 pointer-events-none select-none"
        />

        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />

        {/* Optional subtle brand glow */}
        <div
          aria-hidden
          className="absolute -top-40 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(closest-side, rgba(28,10,163,0.6), rgba(28,10,163,0) 65%)",
          }}
        />

        {/* Content layer above background */}
        <div className="relative z-10">
          {/* Hero Section */}
          <div className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-24">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <motion.h1
                className="text-3xl sm:text-5xl lg:text-6xl font-medium mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                CYBER DEFENCE IS THE <br />
                <span>BEST FORM OF ATTACK</span>
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl text-gray-400 mb-12 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                COMMAND CENTRE IT LTD. Est. 2022
              </motion.p>
            </div>

            {/* Decision Tree Card */}
            <motion.div
              className="w-full max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="border border-gray-800 p-8 bg-black/20 backdrop-blur-sm">
                {/* Progress Indicator */}
                {!isRedirecting && (
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex space-x-2">
                      {questions.map((_, index) => (
                        <div
                          key={index}
                          className={`w-3 h-3 transition-colors duration-300 ${
                            index <= currentStep ? "bg-[#1C0AA3]" : "bg-gray-700"
                          }`}
                        />
                      ))}
                    </div>

                    {currentStep > 0 && (
                      <button
                        onClick={goToPrevious}
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                      >
                        Back
                      </button>
                    )}
                  </div>
                )}

                <AnimatePresence mode="wait">
                  {!isRedirecting ? (
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-xl sm:text-2xl font-medium text-white mb-8">
                        {questions[currentStep]?.question}
                      </h2>

                      <div className="space-y-3">
                        {questions[currentStep]?.options.map((option, index) => (
                          <motion.button
                            key={index}
                            onClick={() => handleOptionClick(option)}
                            className="w-full text-left px-6 py-4 hover:bg-[#1C0AA3] border border-gray-700 hover:border-[#1C0AA3] transition-all duration-200 group"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.1 }}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-white group-hover:text-white font-medium">
                                {option}
                              </span>
                              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-200" />
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <Loader className="w-12 h-12 text-[#1C0AA3] animate-spin mx-auto mb-6" />
                      <h3 className="text-xl font-medium text-white mb-2">
                        Redirecting you to the right place...
                      </h3>
                      <p className="text-gray-400 mb-6">
                        Taking you to the best resource for your needs.
                      </p>
                      <button
                        onClick={() => (window.location.href = redirectLink)}
                        className="px-6 py-3 bg-[#1C0AA3] hover:bg-[#1C0AA3]/80 text-white font-medium transition-all duration-200"
                      >
                        Continue Now
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Reset Button */}
                {(selectedAnswers.length > 0 || isRedirecting) && (
                  <div className="mt-8 pt-6 border-t border-gray-800">
                    <button
                      onClick={resetFlow}
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Start Over</span>
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}