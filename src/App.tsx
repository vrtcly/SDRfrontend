import React from 'react';
import Quiz from './components/Quiz';
import { quizData } from './data/quizData';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Quiz data={quizData} />
    </div>
  );
};

export default App;