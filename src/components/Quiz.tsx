"use client"
import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import Prism from 'react-syntax-highlighter';

const questionnaire = [
    {
        question: "Ma formation en 2023 ?",
        options: ["ESIEA", "BTS SNIR", "STi2D"],
        answer: "ESIEA"
    },
    {
        question: "Quel framework est basé sur JavaScript ?",
        options: ["Symfony", "Django", "Svelte"],
        answer: "Svelte"
    },
    {
        type: "code",
        question: "Quel est le résultat de ce code ?",
        code: `const arr = [1, 2, 3, 4];
const result = arr.reduce((sum, num) => 
    sum + num, 0);
console.log(result);`,
        language: "javascript",
        options: ["24", "10"],
        answer: "10"
    },
];

// Composant QCM
export const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [quizCompleted, setQuizCompleted] = useState(false);

    const handleOptionChange = (option: string) => {
        setSelectedOption(option);
    };

    const handleNext = () => {
        if (selectedOption === questionnaire[currentQuestionIndex].answer) {
            setScore(score + 1);
        }
        if (currentQuestionIndex < questionnaire.length - 1) {
            setSelectedOption('');
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setQuizCompleted(true);
        }
    };

    const handleRestart = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setSelectedOption('');
        setQuizCompleted(false);
    };

    const currentQuestion = questionnaire[currentQuestionIndex];
    const isCodeQuestion = 'code' in currentQuestion;

    return (
        <div className="flex-1 flex flex-col justify-center overflow-hidden">
            {!quizCompleted ? (
                <div className="flex flex-col h-full">
                    <div className="mb-4">
                        <div className="flex items-center justify-between p-4 pb-0">
                            <span className="text-xs font-medium dark:text-amber-500 text-white">
                                Question {currentQuestionIndex + 1}/{questionnaire.length}
                            </span>
                            <span className="text-xs font-medium bg-gray-500/20 dark:bg-amber-500/10 dark:text-amber-500 text-white px-2 py-0.5 rounded-full">
                                Score: {score}
                            </span>
                        </div>
                        <h3 className="text-sm font-semibold mt-2 mb-4">{currentQuestion.question}</h3>

                        {isCodeQuestion ? (
                            <div className="flex flex-col md:flex-row gap-3">
                                <div className="rounded-md overflow-hidden border border-gray-700/50 flex-shrink-0 w-full md:w-1/2">
                                    <Prism
                                        language={currentQuestion.language}
                                        customStyle={{
                                            margin: 0,
                                            padding: '10px',
                                            fontSize: '12px',
                                            borderRadius: '3px',
                                            height: '100%',
                                            minHeight: '100px',
                                        }}
                                    >
                                        {String(currentQuestion.code)}
                                    </Prism>
                                </div>
                                <div className="flex flex-col gap-2 w-full md:w-1/2">
                                    {currentQuestion.options.map((option, index) => {
                                        const isLastOption = index === currentQuestion.options.length - 1;
                                        const isLastQuestion = currentQuestionIndex === questionnaire.length - 1;

                                        const showButtonInline = isLastOption && isLastQuestion;

                                        return (
                                            <div key={index} className={`flex ${showButtonInline ? 'items-center gap-2' : 'flex-col'}`}>
                                                <button
                                                    onClick={() => handleOptionChange(option)}
                                                    className={`w-full text-left p-3 rounded-md transition-all ${selectedOption === option
                                                        ? 'bg-white dark:bg-amber-500 dark:text-white text-[#0284C7]'
                                                        : 'dark:bg-gray-800/30 dark:hover:bg-gray-800/50 text-gray-300'
                                                        }`}
                                                >
                                                    <span className="flex items-center">
                                                        <span className={`inline-flex items-center justify-center h-5 w-5 rounded-full mr-3 text-xs ${selectedOption === option ? 'bg-gray-500/20 dark:text-amber-500 text-[#0284C7]' : 'bg-gray-700 text-gray-300'
                                                            }`}>
                                                            {String.fromCharCode(65 + index)}
                                                        </span>
                                                        {option}
                                                    </span>
                                                </button>
                                                {showButtonInline && (
                                                    <button
                                                        onClick={handleNext}
                                                        disabled={!selectedOption}
                                                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${selectedOption
                                                            ? 'bg-white dark:bg-amber-500 dark:hover:bg-amber-600 dark:text-white text-[#0284C7]'
                                                            : 'text-white/20 text-gray-500 dark:bg-gray-700/50 dark:text-gray-500 cursor-not-allowed'
                                                            }`}
                                                    >
                                                        Terminer
                                                    </button>
                                                )}
                                            </div>
                                        );
                                    })}
                                    {currentQuestionIndex < questionnaire.length - 1 && (
                                        <button
                                            onClick={handleNext}
                                            disabled={!selectedOption}
                                            className={`px-4 py-2 rounded-md text-sm font-medium transition-all self-end ${selectedOption
                                                ? 'bg-white dark:bg-amber-500 dark:hover:bg-amber-600 dark:text-white text-[#0284C7]'
                                                : 'text-white/20 text-gray-500 dark:bg-gray-700/50 dark:text-gray-500 cursor-not-allowed'
                                                }`}
                                        >
                                            Suivant
                                        </button>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-2">
                                {currentQuestion.options.map((option, index) => {
                                    const isLastOption = index === currentQuestion.options.length - 1;
                                    const isLastQuestion = currentQuestionIndex === questionnaire.length - 1;

                                    const showButtonInline = isLastOption && isLastQuestion;

                                    return (
                                        <div key={index} className={`flex ${showButtonInline ? 'items-center gap-2' : 'flex-col'}`}>
                                            <button
                                                onClick={() => handleOptionChange(option)}
                                                className={`w-full text-left p-3 rounded-md transition-all ${selectedOption === option
                                                    ? 'bg-white dark:bg-amber-500 dark:text-white text-[#0284C7]'
                                                    : 'dark:bg-gray-800/30 dark:hover:bg-gray-800/50 text-gray-300'
                                                    }`}
                                            >
                                                <span className="flex items-center">
                                                    <span className={`inline-flex items-center justify-center h-5 w-5 rounded-full mr-3 text-xs ${selectedOption === option ? 'bg-gray-500/20 dark:bg-white dark:text-amber-500 text-[#0284C7]' : 'bg-white text-[#0284C7] dark:bg-gray-700 dark:text-gray-300'
                                                        }`}>
                                                        {String.fromCharCode(65 + index)}
                                                    </span>
                                                    {option}
                                                </span>
                                            </button>
                                            {showButtonInline && (
                                                <button
                                                    onClick={handleNext}
                                                    disabled={!selectedOption}
                                                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${selectedOption
                                                        ? 'bg-white dark:bg-amber-500 dark:hover:bg-amber-600 dark:text-white text-[#0284C7]'
                                                        : 'text-white/20 text-gray-500 dark:bg-gray-700/50 dark:text-gray-500 cursor-not-allowed'
                                                        }`}
                                                >
                                                    Terminer
                                                </button>
                                            )}
                                        </div>
                                    );
                                })}
                                {currentQuestionIndex < questionnaire.length - 1 && (
                                    <button
                                        onClick={handleNext}
                                        disabled={!selectedOption}
                                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all self-end ${selectedOption
                                            ? 'bg-white dark:bg-amber-500 dark:hover:bg-amber-600 dark:text-white text-[#0284C7]'
                                            : 'text-white/70 bg-gray-50/20 text-gray-500 dark:bg-gray-700/50 dark:text-gray-500 cursor-not-allowed'
                                            }`}
                                    >
                                        Suivant
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div className="text-center flex flex-col justify-center items-center h-full">
                    <div className="w-16 h-16 mb-4 rounded-full bg-gray-500/20 dark:bg-amber-500/20 flex items-center justify-center">
                        <span className="text-2xl dark:text-amber-500 text-white">
                            {Math.round((score / questionnaire.length) * 100)}%
                        </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Quiz terminé !</h3>
                    <p className="text-white text-sm mb-3">
                        Votre score : <span className="font-bold dark:text-amber-500 text-white">{score}</span> / {questionnaire.length}
                    </p>
                    {score === questionnaire.length && (
                        <div className="dark:bg-amber-500/10 dark:text-amber-500 text-white rounded-md px-4 py-2 text-sm mb-4 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Parfait ! Vous avez tout bon !
                        </div>
                    )}
                    <button
                        onClick={handleRestart}
                        className="mt-2 bg-white dark:bg-amber-500 dark:hover:bg-amber-600 dark:text-white text-[#0284C7] px-6 py-2 rounded-md transition-colors font-medium flex items-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        Recommencer
                    </button>
                </div>
            )}
        </div>
    );
};