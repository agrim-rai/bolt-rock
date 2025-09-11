import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertCircle, MapPin, Calendar } from 'lucide-react';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { mines } from '../data/mines';
import { generateReport } from '../utils/generateReport';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Report } from '../types';

export function PredictNow() {
  const navigate = useNavigate();
  const [selectedMine, setSelectedMine] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [reports, setReports] = useLocalStorage<Report[]>('reports', []);

  const handleGenerateReport = async () => {
    if (!selectedMine) return;

    setIsGenerating(true);
    
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const report = generateReport(selectedMine);
    setReports(prev => [report, ...prev]);
    
    setIsGenerating(false);
    navigate(`/report/${report.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">AI Rockfall Prediction</h1>
          <p className="text-lg text-gray-600">
            Select a mining site to generate a comprehensive risk assessment report
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <h2 className="text-xl font-semibold">Select Mining Operation</h2>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {mines.map((mine) => (
                <div
                  key={mine.id}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                    selectedMine === mine.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedMine(mine.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{mine.name}</h3>
                      <div className="flex items-center text-sm text-gray-600 mt-1">
                        <MapPin size={14} className="mr-1" />
                        {mine.location}, {mine.country}
                      </div>
                      <div className="flex items-center text-sm text-gray-600 mt-1">
                        <Calendar size={14} className="mr-1" />
                        Last Inspection: {new Date(mine.lastInspection).toLocaleDateString()}
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      mine.riskLevel === 'low' ? 'bg-green-100 text-green-800' :
                      mine.riskLevel === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {mine.riskLevel.toUpperCase()}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {selectedMine && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="flex items-center">
                  <AlertCircle className="h-5 w-5 text-blue-600 mr-2" />
                  <div className="text-sm text-blue-800">
                    <strong>Selected:</strong> {mines.find(m => m.id === selectedMine)?.name}
                    <br />
                    Our AI will analyze geological data, weather patterns, and historical incidents to generate a comprehensive risk report.
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-center">
              <Button
                size="lg"
                onClick={handleGenerateReport}
                disabled={!selectedMine || isGenerating}
                className="px-8 py-3"
              >
                {isGenerating ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2" />
                    Generating AI Analysis...
                  </>
                ) : (
                  'Generate Risk Report'
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* What to Expect */}
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold">What to Expect in Your Report</h2>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Risk Assessment</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Overall risk score and level</li>
                  <li>• Probability predictions with confidence intervals</li>
                  <li>• Risk timeline and critical periods</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Environmental Analysis</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Weather pattern correlation</li>
                  <li>• Temperature and rainfall impact</li>
                  <li>• Seasonal risk variations</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Visual Analytics</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Interactive risk maps</li>
                  <li>• Trend charts and predictions</li>
                  <li>• Risk zone visualization</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Actionable Insights</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Preventive action recommendations</li>
                  <li>• Monitoring frequency suggestions</li>
                  <li>• Safety protocol updates</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}