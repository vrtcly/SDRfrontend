import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { QuizData } from '../types/quiz';
import PDFButton from './PDFButton';

interface QuizProps {
  data: QuizData;
}

const Quiz: React.FC<QuizProps> = ({ data }) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const currentSection = data[currentSectionIndex];
  const currentQuestion = currentSection?.questions[currentQuestionIndex];

  const handleNext = () => {
    if (currentQuestionIndex < currentSection.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentSectionIndex < data.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
      setCurrentQuestionIndex(0);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleOptionSelect = (points: number) => {
    setScore(score + points);
  };

  return (
    <div className="Quiz">
      {!quizCompleted ? (
        <>
          <h2 className="SectionTitle">{currentSection.sectionTitle}</h2>
          <p className="SectionPoints">Points: {currentSection.sectionPoints}</p>
          <div className="Question">
            <h4 className="QuestionText">{currentQuestion.questionText}</h4>
            {currentQuestion.options.map((option, oIndex) => (
              <label key={oIndex} className="Option">
                <input
                  type="radio"
                  name="quizOption"
                  onChange={() => handleOptionSelect(option.points)}
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
          <Button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={handleNext}
          >
            Next
          </Button>
        </>
      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          <p>Your score: {score}</p>
          <PDFButton score={score} />
        </div>
      )}
    </div>
  );
};

export default Quiz;