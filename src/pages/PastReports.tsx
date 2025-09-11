import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, AlertCircle, TrendingUp, Eye } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Report } from '../types';

export function PastReports() {
  const [reports] = useLocalStorage<Report[]>('reports', []);

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'low': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'high': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getRiskIcon = (level: string) => {
    switch (level) {
      case 'low': return <TrendingUp size={16} />;
      case 'medium': return <AlertCircle size={16} />;
      case 'high': return <AlertCircle size={16} />;
      default: return <AlertCircle size={16} />;
    }
  };

  if (reports.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Past Reports</h1>
            <p className="text-lg text-gray-600">View and manage your previous risk assessment reports</p>
          </div>

          <Card className="text-center py-12">
            <CardContent>
              <AlertCircle size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Reports Yet</h3>
              <p className="text-gray-600 mb-6">
                You haven't generated any risk assessment reports yet. 
                Start by creating your first prediction analysis.
              </p>
              <Link to="/predict">
                <Button>Generate First Report</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Past Reports</h1>
            <p className="text-gray-600">You have {reports.length} risk assessment report{reports.length !== 1 ? 's' : ''}</p>
          </div>
          <Link to="/predict">
            <Button>Generate New Report</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((report) => (
            <Card key={report.id} className="hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1 truncate">
                      {report.mineName}
                    </h3>
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <Calendar size={14} className="mr-1" />
                      {new Date(report.timestamp).toLocaleDateString()}
                    </div>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium flex items-center ${getRiskColor(report.riskLevel)}`}>
                    {getRiskIcon(report.riskLevel)}
                    <span className="ml-1">{report.riskLevel.toUpperCase()}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Risk Score</span>
                    <span className="font-bold text-lg">{report.riskScore}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        report.riskLevel === 'low' ? 'bg-green-500' :
                        report.riskLevel === 'medium' ? 'bg-yellow-500' :
                        'bg-red-500'
                      }`}
                      style={{ width: `${report.riskScore}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Probability</span>
                    <span className="font-medium">{report.predictions.probability}%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Confidence</span>
                    <span className="font-medium">{report.predictions.confidence}%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Timeframe</span>
                    <span className="font-medium">{report.predictions.timeframe}</span>
                  </div>
                </div>

                <Link to={`/report/${report.id}`}>
                  <Button variant="secondary" size="sm" className="w-full">
                    <Eye size={16} className="mr-2" />
                    View Full Report
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}