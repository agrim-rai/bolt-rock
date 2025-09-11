import React from 'react';

interface RiskMeterProps {
  score: number;
  level: 'low' | 'medium' | 'high';
}

export function RiskMeter({ score, level }: RiskMeterProps) {
  const getColor = (level: string) => {
    switch (level) {
      case 'low': return 'text-green-600';
      case 'medium': return 'text-yellow-600';
      case 'high': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getBackgroundColor = (level: string) => {
    switch (level) {
      case 'low': return 'bg-green-500';
      case 'medium': return 'bg-yellow-500';
      case 'high': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="text-center">
      <div className="relative w-32 h-32 mx-auto mb-4">
        <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
          <div className={`w-28 h-28 rounded-full ${getBackgroundColor(level)} flex items-center justify-center`}>
            <div className="text-white">
              <div className="text-2xl font-bold">{score}</div>
              <div className="text-xs">RISK SCORE</div>
            </div>
          </div>
        </div>
      </div>
      <div className={`text-lg font-semibold uppercase ${getColor(level)}`}>
        {level} Risk
      </div>
    </div>
  );
}