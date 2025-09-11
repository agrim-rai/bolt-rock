import { Report } from '../types';
import { mines } from '../data/mines';

export function generateReport(mineId: string): Report {
  const mine = mines.find(m => m.id === mineId);
  if (!mine) throw new Error('Mine not found');

  const riskScore = Math.floor(Math.random() * 100);
  const riskLevel: 'low' | 'medium' | 'high' = 
    riskScore < 30 ? 'low' : 
    riskScore < 70 ? 'medium' : 'high';

  const insights = [
    'Geological analysis indicates increased rock joint degradation due to recent weather patterns.',
    'Seismic activity in the region has been elevated over the past 30 days.',
    'Groundwater levels have changed significantly, affecting slope stability.',
    'Recent temperature fluctuations have accelerated freeze-thaw cycles.',
    'AI model confidence level is high based on 10,000+ historical data points.'
  ];

  const recommendations = [
    'Increase monitoring frequency in high-risk zones',
    'Install additional early warning sensors',
    'Review evacuation procedures with site personnel',
    'Consider temporary access restrictions to vulnerable areas',
    'Schedule comprehensive geological survey within 30 days'
  ];

  return {
    id: `RPT-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    mineId,
    mineName: mine.name,
    timestamp: new Date().toISOString(),
    riskScore,
    riskLevel,
    weatherData: {
      rainfall: Math.floor(Math.random() * 50) + 10,
      temperature: Math.floor(Math.random() * 30) + 5,
      humidity: Math.floor(Math.random() * 40) + 40
    },
    predictions: {
      probability: Math.floor(Math.random() * 100),
      timeframe: ['24 hours', '3 days', '1 week', '2 weeks'][Math.floor(Math.random() * 4)],
      confidence: Math.floor(Math.random() * 30) + 70
    },
    recommendations: recommendations.slice(0, Math.floor(Math.random() * 3) + 2),
    insights: insights.slice(0, Math.floor(Math.random() * 3) + 2)
  };
}