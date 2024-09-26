import { QuizData } from '../types/quiz';

export const quizData: QuizData = [
  {
    sectionTitle: "Section 1: Target Market",
    sectionPoints: 200,
    questions: [
      {
        questionText: "Do you have relationships in the market with any of the following?",
        options: [
          { label: "Leader Layer: Practitioners, Analysts, Governors", points: 30 },
          { label: "Support Layer: Advocates, Ideologues, Educators", points: 30 },
          { label: "Community Layer: Organizers, Influencers, Moderators", points: 30 },
          { label: "Publishing Layer: Broadcasters, Producers, Creators", points: 30 },
          { label: "Platform Layer: Stores, Channels, Hubs", points: 30 },
        ],
      },
      // Add more questions here as needed
    ],
  },
  // Add more sections here as needed
];