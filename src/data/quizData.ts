import { QuizData } from '../types/quiz';

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
        isTextEntry: true,
        options: [
          { label: "Competitor 1", points: 10 },
          { label: "Competitor 2", points: 10 },
          { label: "Competitor 3", points: 10 },
        ],
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
  {
    sectionTitle: "Product & Pricing",
    sectionPoints: 90,
    questions: [
      {
        questionText: "What is the cost of your product or service to the customer?",
        options: [
          { label: "$0 - $100", points: 5 },
          { label: "$101 - $1,000", points: 10 },
          { label: "$1,001 - $5,000", points: 15 },
          { label: "$5,001 - $10,000", points: 20 },
        ],
      },
      {
        questionText: "What is your profit margin?",
        options: [
          { label: "0-10%", points: 5 },
          { label: "11-25%", points: 10 },
          { label: "26-50%", points: 15 },
          { label: "50%+", points: 20 },
        ],
      },
      {
        questionText: "How many paying clients or users do you currently have?",
        options: [
          { label: "0-10", points: 10 },
          { label: "11-50", points: 20 },
          { label: "51-1,000", points: 30 },
          { label: "1,001-10,000", points: 40 },
        ],
      },
    ],
  },
  {
    sectionTitle: "Marketing & Sales",
    sectionPoints: 60,
    questions: [
      {
        questionText: "What is your customer acquisition cost monthly?",
        options: [
          { label: "$0 - $100", points: 5 },
          { label: "$101 - $1,000", points: 10 },
          { label: "$1,001 - $5,000", points: 15 },
          { label: "$5,001 - $10,000", points: 20 },
        ],
      },
      {
        questionText: "What marketing funnels do you currently use to attract and convert customers? (Select all that apply)",
        options: [
          { label: "Website", points: 5 },
          { label: "Social Media", points: 5 },
          { label: "Email Marketing", points: 5 },
          { label: "Search Engine Marketing (SEM)", points: 5 },
          { label: "Content Marketing", points: 5 },
          { label: "Affiliate Marketing", points: 5 },
          { label: "Events/Webinars", points: 5 },
          { label: "Direct Sales", points: 5 },
        ],
        multiSelect: true,
      },
    ],
  },
  {
    sectionTitle: "Operations & Infrastructure",
    sectionPoints: 90,
    questions: [
      {
        questionText: "What are your current business expenses? (Select all that apply)",
        options: [
          { label: "Web and Cloud Hosting service", points: 10 },
          { label: "Employee Salaries", points: 10 },
          { label: "Software Subscriptions", points: 10 },
          { label: "Insurance", points: 10 },
          { label: "Marketing", points: 10 },
          { label: "Legal and Accounting Services", points: 10 },
          { label: "Rent/Lease for Office Space", points: 10 },
          { label: "Utilities", points: 10 },
        ],
        multiSelect: true,
      },
      {
        questionText: "How much is your current operational overhead monthly?",
        options: [
          { label: "Less than $5,000", points: 5 },
          { label: "$5,000 - $50,000", points: 10 },
          { label: "$50,001 - $100,000", points: 15 },
          { label: "$100,000 - $500,000", points: 20 },
        ],
      },
    ],
  },
  {
    sectionTitle: "Team & Management",
    sectionPoints: 140,
    questions: [
      {
        questionText: "Who is on your core team?",
        options: [
          { label: "CEO", points: 5 },
          { label: "CTO", points: 5 },
          { label: "CMO", points: 5 },
          { label: "CSO", points: 5 },
          { label: "COO", points: 5 },
        ],
        multiSelect: true,
      },
      {
        questionText: "How much experience does each member have?",
        options: [
          { label: "CEO: 1-2 years", points: 5 },
          { label: "CEO: 2-5 years", points: 10 },
          { label: "CEO: 5-10 years", points: 15 },
          { label: "CEO: 10+ years", points: 20 },
          { label: "CTO: 1-2 years", points: 5 },
          { label: "CTO: 2-5 years", points: 10 },
          { label: "CTO: 5-10 years", points: 15 },
          { label: "CTO: 10+ years", points: 20 },
          { label: "CMO: 1-2 years", points: 5 },
          { label: "CMO: 2-5 years", points: 10 },
          { label: "CMO: 5-10 years", points: 15 },
          { label: "CMO: 10+ years", points: 20 },
        ],
        multiSelect: true,
      },
      {
        questionText: "What does your team specialize in?",
        options: [
          { label: "CEO: Pick one skill from list", points: 10 },
          { label: "CTO: Pick one skill from list", points: 10 },
          { label: "COO: Pick one skill from list", points: 10 },
        ],
        multiSelect: true,
      },
    ],
  },
  {
    sectionTitle: "Risk Assessment",
    sectionPoints: 70,
    questions: [
      {
        questionText: "Are you compliant with industry-specific regulations?",
        options: [
          { label: "Yes", points: 15 },
          { label: "No", points: 0 },
        ],
      },
      {
        questionText: "Do you have a dedicated team or individual responsible for legal regulatory compliance?",
        options: [
          { label: "Yes", points: 10 },
          { label: "No", points: 0 },
        ],
      },
      {
        questionText: "Do you have a dedicated team or individual responsible for tax compliance?",
        options: [
          { label: "Yes", points: 10 },
          { label: "No", points: 0 },
        ],
      },
      {
        questionText: "Do you have any outstanding legal issues?",
        options: [
          { label: "Yes", points: 0 },
          { label: "No", points: 10 },
        ],
      },
      {
        questionText: "Do you have legal representation or resources to handle regulatory issues?",
        options: [
          { label: "Yes", points: 10 },
          { label: "No", points: 0 },
        ],
      },
    ],
  },
  {
    sectionTitle: "Track Record",
    sectionPoints: 60,
    questions: [
      {
        questionText: "Has anyone on your team exited a startup before?",
        options: [
          { label: "Yes", points: 20 },
          { label: "No", points: 0 },
        ],
      },
      {
        questionText: "Has anyone on your team raised capital before?",
        options: [
          { label: "Yes", points: 20 },
          { label: "No", points: 0 },
        ],
      },
      {
        questionText: "Has your team successfully launched a product to market?",
        options: [
          { label: "Yes", points: 20 },
          { label: "No", points: 0 },
        ],
      },
    ],
  },
];