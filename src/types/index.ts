export interface Mine {
  id: string;
  name: string;
  location: string;
  country: string;
  coordinates: [number, number];
  riskLevel: 'low' | 'medium' | 'high';
  lastInspection: string;
}

export interface Report {
  id: string;
  mineId: string;
  mineName: string;
  timestamp: string;
  riskScore: number;
  riskLevel: 'low' | 'medium' | 'high';
  weatherData: {
    rainfall: number;
    temperature: number;
    humidity: number;
  };
  predictions: {
    probability: number;
    timeframe: string;
    confidence: number;
  };
  recommendations: string[];
  insights: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  date: string;
  source: string;
  image: string;
  url: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
}