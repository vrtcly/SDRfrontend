import { QuizData } from '../types/quiz';

export const quizData: QuizData = [
  {
    sectionTitle: "Technical Knowledge",
    sectionPoints: 250,
    questions: [
      {
        questionText: "What is React?",
        options: [
          { label: "A JavaScript library for building user interfaces", points: 50 },
          { label: "A programming language", points: 0 },
          { label: "A database", points: 0 },
          { label: "A server-side framework", points: 0 }
        ],
      },
      {
        questionText: "What is a hook in React?",
        options: [
          { label: "A function that lets you use state and other React features", points: 50 },
          { label: "A method for making API calls", points: 0 },
          { label: "A library for state management", points: 0 },
          { label: "A tool for styling components", points: 0 }
        ],
      },
      {
        questionText: "Which command is used to create a new React app?",
        options: [
          { label: "npm install react", points: 0 },
          { label: "npm create-react-app", points: 0 },
          { label: "npx create-react-app", points: 50 },
          { label: "npx install react-app", points: 0 }
        ],
      },
      {
        questionText: "What is JSX in React?",
        options: [
          { label: "A templating language for React", points: 0 },
          { label: "A CSS preprocessor", points: 0 },
          { label: "A syntax extension for JavaScript", points: 50 },
          { label: "A tool for optimizing React performance", points: 0 }
        ],
      },
      {
        questionText: "How do you pass data from parent to child component?",
        options: [
          { label: "Using props", points: 50 },
          { label: "Using state", points: 0 },
          { label: "Using context", points: 0 },
          { label: "Using redux", points: 0 }
        ],
      }
    ],
  },
  {
    sectionTitle: "Problem-Solving",
    sectionPoints: 250,
    questions: [
      {
        questionText: "What is the first step in solving a coding problem?",
        options: [
          { label: "Write the code immediately", points: 0 },
          { label: "Understand the problem thoroughly", points: 50 },
          { label: "Search for solutions online", points: 0 },
          { label: "Test the code for bugs", points: 0 }
        ],
      },
      {
        questionText: "How do you approach debugging a program?",
        options: [
          { label: "Review the code line by line", points: 50 },
          { label: "Immediately rewrite the entire program", points: 0 },
          { label: "Ignore the error and continue", points: 0 },
          { label: "Use a different programming language", points: 0 }
        ],
      },
      {
        questionText: "Which tool can help visualize a program's execution?",
        options: [
          { label: "A debugger", points: 50 },
          { label: "A profiler", points: 0 },
          { label: "A linter", points: 0 },
          { label: "A text editor", points: 0 }
        ],
      },
      {
        questionText: "Which algorithm is used to find the shortest path in a graph?",
        options: [
          { label: "Dijkstra's algorithm", points: 50 },
          { label: "Merge sort", points: 0 },
          { label: "Bubble sort", points: 0 },
          { label: "Binary search", points: 0 }
        ],
      },
      {
        questionText: "What is recursion?",
        options: [
          { label: "A function calling itself", points: 50 },
          { label: "A loop that never ends", points: 0 },
          { label: "A syntax error in programming", points: 0 },
          { label: "A type of sorting algorithm", points: 0 }
        ],
      }
    ],
  },
  {
    sectionTitle: "Coding Best Practices",
    sectionPoints: 250,
    questions: [
      {
        questionText: "What is the purpose of code refactoring?",
        options: [
          { label: "To improve code readability and maintainability", points: 50 },
          { label: "To change the output of the code", points: 0 },
          { label: "To reduce the size of the code", points: 0 },
          { label: "To remove all comments from the code", points: 0 }
        ],
      },
      {
        questionText: "What is the DRY principle in programming?",
        options: [
          { label: "Do not Repeat Yourself", points: 50 },
          { label: "Do not Refactor Yet", points: 0 },
          { label: "Document Readable Yield", points: 0 },
          { label: "Debugging Removes Yield", points: 0 }
        ],
      },
      {
        questionText: "Why is version control important in software development?",
        options: [
          { label: "It allows multiple developers to collaborate on the same codebase", points: 50 },
          { label: "It makes code execution faster", points: 0 },
          { label: "It removes errors automatically", points: 0 },
          { label: "It keeps the code secure from hackers", points: 0 }
        ],
      },
      {
        questionText: "What is unit testing?",
        options: [
          { label: "Testing individual components of software for functionality", points: 50 },
          { label: "A type of test for the entire system", points: 0 },
          { label: "A method for tracking code performance", points: 0 },
          { label: "An outdated testing strategy", points: 0 }
        ],
      },
      {
        questionText: "Which of the following is an example of a clean code practice?",
        options: [
          { label: "Writing clear and meaningful variable names", points: 50 },
          { label: "Using one-letter variable names", points: 0 },
          { label: "Writing all code in one function", points: 0 },
          { label: "Copy-pasting code blocks", points: 0 }
        ],
      }
    ],
  },
  {
    sectionTitle: "Project Management",
    sectionPoints: 250,
    questions: [
      {
        questionText: "What is agile development?",
        options: [
          { label: "A methodology focusing on iterative and incremental development", points: 50 },
          { label: "A design pattern for fast programming", points: 0 },
          { label: "A way to make software run faster", points: 0 },
          { label: "A tool for automating software builds", points: 0 }
        ],
      },
      {
        questionText: "What is the purpose of a project backlog?",
        options: [
          { label: "To track tasks and features to be implemented", points: 50 },
          { label: "To document bugs in the software", points: 0 },
          { label: "To store unused code", points: 0 },
          { label: "To organize files in a project", points: 0 }
        ],
      },
      {
        questionText: "What is a 'scrum' in agile methodology?",
        options: [
          { label: "A framework for managing and completing complex projects", points: 50 },
          { label: "A code review process", points: 0 },
          { label: "A way to debug code quickly", points: 0 },
          { label: "A software used for version control", points: 0 }
        ],
      },
      {
        questionText: "Which of the following is a key benefit of using project management tools like Jira or Trello?",
        options: [
          { label: "Tracking progress and managing tasks", points: 50 },
          { label: "Speeding up code compilation", points: 0 },
          { label: "Creating complex algorithms", points: 0 },
          { label: "Writing test cases automatically", points: 0 }
        ],
      },
      {
        questionText: "What is the main goal of continuous integration (CI)?",
        options: [
          { label: "To automatically test and integrate code changes", points: 50 },
          { label: "To optimize the user interface", points: 0 },
          { label: "To deploy applications on different platforms", points: 0 },
          { label: "To debug and profile code in real-time", points: 0 }
        ],
      }
    ],
  }
];