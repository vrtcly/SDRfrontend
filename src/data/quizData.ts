export interface Option {
  label: string;
  points: number;
}

export interface Question {
  questionText: string;
  options: Option[];
  multiSelect?: boolean;
  isTextEntry?: boolean;
}

export interface Section {
  sectionTitle: string;
  sectionPoints: number;
  questions: Question[];
}

export type QuizData = Section[];

export const quizData: QuizData = [
  {
    sectionTitle: "Target Market",
    sectionPoints: 200,
    questions: [
      {
        questionText: "Do you have relationships in the market with any of the following? (Select all that apply)",
        options: [
          { label: "Practitioners", points: 10 },
          { label: "Analysts", points: 10 },
          { label: "Governors", points: 10 },
          { label: "Advocates", points: 10 },
          { label: "Ideologues", points: 10 },
          { label: "Educators", points: 10 },
          { label: "Organizers", points: 10 },
          { label: "Influencers", points: 10 },
          { label: "Moderators", points: 10 },
          { label: "Broadcasters", points: 10 },
          { label: "Producers", points: 10 },
          { label: "Creators", points: 10 },
          { label: "Stores", points: 10 },
          { label: "Channels", points: 10 },
          { label: "Hubs", points: 10 },
        ],
        multiSelect: true,
      },
      {
        questionText: "List 3 competitors:",
        options: [
          { label: "Competitor 1", points: 10 },
          { label: "Competitor 2", points: 10 },
          { label: "Competitor 3", points: 10 },
        ],
        isTextEntry: true,
      },
      {
        questionText: "Where has your company been mentioned? (Select all that apply)",
        options: [
          { label: "Blogs", points: 5 },
          { label: "Press", points: 10 },
          { label: "Newsletters", points: 5 },
          { label: "Podcasts", points: 10 },
          { label: "Events", points: 5 },
          { label: "News Networks", points: 15 },
        ],
        multiSelect: true,
      },
    ],
  },
  {
    sectionTitle: "Business Model",
    sectionPoints: 110,
    questions: [
      {
        questionText: "What is your service/solution type?",
        options: [
          { label: "SaaS", points: 10 },
          { label: "Mobility", points: 10 },
          { label: "Consumer Product", points: 10 },
          { label: "Other", points: 5 },
        ],
      },
      {
        questionText: "What is your business model?",
        options: [
          { label: "Freemium", points: 15 },
          { label: "Subscription", points: 20 },
          { label: "One-Time Payment", points: 10 },
          { label: "Licensing", points: 15 },
        ],
      },
      {
        questionText: "How big is your Target Market (Total Addressable Market - TAM)?",
        options: [
          { label: "$0 to $1M", points: 5 },
          { label: "$1M to $10M", points: 10 },
          { label: "$10M to $100M", points: 15 },
          { label: "$100M+", points: 20 },
        ],
      },
      {
        questionText: "How big is your Small Addressable Market (SAM)?",
        options: [
          { label: "$0 to $500K", points: 5 },
          { label: "$500K to $5M", points: 10 },
          { label: "$5M to $50M", points: 15 },
          { label: "$50M+", points: 20 },
        ],
      },
    ],
  },
  // ... Add the remaining sections here following the same structure
];