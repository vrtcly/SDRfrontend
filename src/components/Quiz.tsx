import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { QuizData, Section, Question } from '../data/quizData';
import PDFButton from './PDFButton';

interface QuizProps {
  data: QuizData;
}

const Quiz: React.FC<QuizProps> = ({ data }) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: boolean }>({});

  const currentSection: Section = data[currentSectionIndex];
  const currentQuestion: Question = currentSection?.questions[currentQuestionIndex];

  const handleNext = () => {
    // Calculate score for the current question
    const questionScore = Object.entries(selectedOptions).reduce((total, [optionIndex, isSelected]) => {
      if (isSelected) {
        return total + currentQuestion.options[parseInt(optionIndex)].points;
      }
      return total;
    }, 0);

    setScore(score + questionScore);
    setSelectedOptions({});

    if (currentQuestionIndex < currentSection.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentSectionIndex < data.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
      setCurrentQuestionIndex(0);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleOptionSelect = (optionIndex: number) => {
    if (currentQuestion.multiSelect) {
      setSelectedOptions(prev => ({
        ...prev,
        [optionIndex]: !prev[optionIndex]
      }));
    } else {
      setSelectedOptions({ [optionIndex]: true });
    }
  };

  return (
    <div className="Quiz p-6 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
      {!quizCompleted ? (
        <>
          <h2 className="text-2xl font-bold mb-4 text-orange-500">{currentSection.sectionTitle}</h2>
          <p className="mb-4 font-semibold">Section Points: {currentSection.sectionPoints}</p>
          <div className="mb-6">
            <h4 className="text-xl font-semibold mb-3 text-green-600">{currentQuestion.questionText}</h4>
            {currentQuestion.options.map((option, oIndex) => (
              <label key={oIndex} className="block mb-2">
                <input
                  type={currentQuestion.multiSelect ? "checkbox" : "radio"}
                  checked={selectedOptions[oIndex] || false}
                  onChange={() => handleOptionSelect(oIndex)}
                  className="mr-2"
                />
                <span>{option.label} ({option.points} points)</span>
              </label>
            ))}
          </div>
          <Button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleNext}
          >
            Next
          </Button>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
          <p className="text-xl mb-4">Your score: {score}</p>
          <PDFButton score={score} />
        </div>
      )}
    </div>
  );
};

export default Quiz;