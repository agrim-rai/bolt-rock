import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download, Share2, AlertTriangle, TrendingUp, Thermometer, CloudRain } from 'lucide-react';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { RiskMeter } from '../components/charts/RiskMeter';
import { RiskChart } from '../components/charts/RiskChart';
import { RiskMap } from '../components/maps/RiskMap';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Report as ReportType } from '../types';
import { mines } from '../data/mines';

export function Report() {
  const { reportId } = useParams();
  const [reports] = useLocalStorage<ReportType[]>('reports', []);
  
  const report = reports.find(r => r.id === reportId);
  const mine = report ? mines.find(m => m.id === report.mineId) : null;

  if (!report || !mine) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Report Not Found</h1>
          <p className="text-gray-600 mb-8">The requested report could not be found.</p>
          <Link to="/reports">
            <Button>View All Reports</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link to="/reports">
              <Button variant="secondary" size="sm">
                <ArrowLeft size={16} className="mr-2" />
                Back to Reports
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{report.mineName}</h1>
              <p className="text-sm text-gray-600">
                Generated: {new Date(report.timestamp).toLocaleString()}
              </p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button variant="secondary" size="sm">
              <Share2 size={16} className="mr-2" />
              Share
            </Button>
            <Button variant="secondary" size="sm">
              <Download size={16} className="mr-2" />
              Export PDF
            </Button>
          </div>
        </div>

        {/* Risk Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <RiskMeter score={report.riskScore} level={report.riskLevel} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Weather Conditions</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CloudRain className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-sm">Rainfall</span>
                  </div>
                  <span className="font-semibold">{report.weatherData.rainfall}mm</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Thermometer className="h-5 w-5 text-red-600 mr-2" />
                    <span className="text-sm">Temperature</span>
                  </div>
                  <span className="font-semibold">{report.weatherData.temperature}°C</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                    <span className="text-sm">Humidity</span>
                  </div>
                  <span className="font-semibold">{report.weatherData.humidity}%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Prediction Details</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-600">Rockfall Probability</div>
                  <div className="text-2xl font-bold text-red-600">{report.predictions.probability}%</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Time Frame</div>
                  <div className="font-semibold">{report.predictions.timeframe}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Confidence Level</div>
                  <div className="font-semibold text-green-600">{report.predictions.confidence}%</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Risk Probability Trends</h3>
            </CardHeader>
            <CardContent>
              <RiskChart />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Risk Zone Map</h3>
            </CardHeader>
            <CardContent>
              <RiskMap 
                center={mine.coordinates}
                mines={[{
                  id: mine.id,
                  name: mine.name,
                  coordinates: mine.coordinates,
                  riskLevel: report.riskLevel
                }]}
              />
            </CardContent>
          </Card>
        </div>

        {/* Insights and Recommendations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center">
                <AlertTriangle className="h-5 w-5 text-orange-600 mr-2" />
                <h3 className="text-lg font-semibold">AI Insights</h3>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {report.insights.map((insight, index) => (
                  <li key={index} className="text-sm text-gray-700 flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    {insight}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center">
                <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                <h3 className="text-lg font-semibold">Recommendations</h3>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {report.recommendations.map((recommendation, index) => (
                  <li key={index} className="text-sm text-gray-700 flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    {recommendation}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}