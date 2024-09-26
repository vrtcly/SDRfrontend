import React from 'react';
import { QuizData } from '../types/quiz';

interface QuizProps {
  data: QuizData;
}

const Quiz: React.FC<QuizProps> = ({ data }) => {
  return (
    <div className="Quiz">
      {data.map((section, index) => (
        <div key={index} className="Section">
          <h2 className="SectionTitle">{section.sectionTitle}</h2>
          <p className="SectionPoints">Points: {section.sectionPoints}</p>
          {section.questions.map((question, qIndex) => (
            <div key={qIndex} className="Question">
              <h4 className="QuestionText">{question.questionText}</h4>
              {question.options.map((option, oIndex) => (
                <label key={oIndex} className="Option">
                  <input type="checkbox" />
                  <span>{option.label} ({option.points} points)</span>
                </label>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Quiz;