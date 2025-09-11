import React, { useState } from 'react';
import { Filter, MapPin, AlertTriangle } from 'lucide-react';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { RiskMap } from '../components/maps/RiskMap';
import { mines } from '../data/mines';

export function RiskMaps() {
  const [filterLevel, setFilterLevel] = useState<'all' | 'low' | 'medium' | 'high'>('all');
  const [selectedCountry, setSelectedCountry] = useState<'all' | 'USA' | 'India'>('all');

  const filteredMines = mines.filter(mine => {
    const levelMatch = filterLevel === 'all' || mine.riskLevel === filterLevel;
    const countryMatch = selectedCountry === 'all' || mine.country === selectedCountry;
    return levelMatch && countryMatch;
  });

  const handleMineClick = (mineId: string) => {
    const mine = mines.find(m => m.id === mineId);
    if (mine) {
      alert(`Mine: ${mine.name}\nLocation: ${mine.location}, ${mine.country}\nRisk Level: ${mine.riskLevel.toUpperCase()}`);
    }
  };

  const getRiskStats = () => {
    const stats = mines.reduce((acc, mine) => {
      acc[mine.riskLevel] = (acc[mine.riskLevel] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    return stats;
  };

  const riskStats = getRiskStats();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Global Risk Maps</h1>
          <p className="text-lg text-gray-600">
            Interactive visualization of mining operations and their risk levels
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center">
              <Filter className="h-5 w-5 text-gray-600 mr-2" />
              <h3 className="text-lg font-semibold">Filters</h3>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Risk Level</label>
                <div className="flex flex-wrap gap-2">
                  {['all', 'low', 'medium', 'high'].map(level => (
                    <Button
                      key={level}
                      size="sm"
                      variant={filterLevel === level ? 'primary' : 'secondary'}
                      onClick={() => setFilterLevel(level as any)}
                      className="capitalize"
                    >
                      {level}
                    </Button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                <div className="flex flex-wrap gap-2">
                  {['all', 'USA', 'India'].map(country => (
                    <Button
                      key={country}
                      size="sm"
                      variant={selectedCountry === country ? 'primary' : 'secondary'}
                      onClick={() => setSelectedCountry(country as any)}
                    >
                      {country}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Statistics */}
          <div className="lg:col-span-1 space-y-4">
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Risk Distribution</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2" />
                    <span className="text-sm">High Risk</span>
                  </div>
                  <span className="font-semibold">{riskStats.high || 0}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2" />
                    <span className="text-sm">Medium Risk</span>
                  </div>
                  <span className="font-semibold">{riskStats.medium || 0}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2" />
                    <span className="text-sm">Low Risk</span>
                  </div>
                  <span className="font-semibold">{riskStats.low || 0}</span>
                </div>
                <div className="pt-2 border-t">
                  <div className="flex items-center justify-between font-semibold">
                    <span>Total Mines</span>
                    <span>{mines.length}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Mine List</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {filteredMines.map((mine) => (
                    <div
                      key={mine.id}
                      className="p-3 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                      onClick={() => handleMineClick(mine.id)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm truncate">{mine.name}</h4>
                          <div className="flex items-center text-xs text-gray-600 mt-1">
                            <MapPin size={12} className="mr-1" />
                            {mine.location}
                          </div>
                        </div>
                        <div className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
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
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Mining Operations Map</h3>
                <p className="text-sm text-gray-600">
                  Click on markers to view detailed information about each mining operation
                </p>
              </CardHeader>
              <CardContent>
                <div className="h-96">
                  <RiskMap 
                    mines={filteredMines}
                    onMineClick={handleMineClick}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Legend */}
            <Card className="mt-4">
              <CardContent className="py-4">
                <div className="flex items-center justify-center space-x-8">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-green-500 rounded-full mr-2" />
                    <span className="text-sm font-medium">Low Risk</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2" />
                    <span className="text-sm font-medium">Medium Risk</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-red-500 rounded-full mr-2" />
                    <span className="text-sm font-medium">High Risk</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}