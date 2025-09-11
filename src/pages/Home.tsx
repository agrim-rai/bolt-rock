import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Brain, Shield, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';

export function Home() {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms analyze geological data and weather patterns to predict rockfall risks.'
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-orange-600" />,
      title: 'Early Warning System',
      description: 'Real-time monitoring and instant alerts help mining operations take preventive action before incidents occur.'
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: 'Enhanced Safety',
      description: 'Protect workers and equipment with comprehensive risk assessment and safety recommendations.'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-purple-600" />,
      title: 'Operational Efficiency',
      description: 'Optimize mining operations by understanding risk patterns and planning accordingly.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              AI-Driven Rockfall<br />
              <span className="text-blue-300">Prediction System</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Revolutionizing mining safety through advanced artificial intelligence. 
              Predict, prevent, and protect with our cutting-edge rockfall risk assessment technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/predict">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
                  Predict Now
                </Button>
              </Link>
              <Link to="/team">
                <Button size="lg" variant="secondary" className="px-8 py-3">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Challenge</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Open-pit mining operations face significant safety risks from unexpected rockfalls. 
              Traditional monitoring methods are reactive and often insufficient to prevent accidents 
              that can result in equipment damage, operational delays, and most importantly, loss of life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safety Risks</h3>
              <p className="text-gray-600">Unpredictable rockfalls threaten worker safety and equipment</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Operational Costs</h3>
              <p className="text-gray-600">Reactive measures lead to expensive downtime and repairs</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Limited Prediction</h3>
              <p className="text-gray-600">Traditional methods cannot predict future rockfall events</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Solution</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              RockfallAI combines machine learning, geological expertise, and real-time monitoring 
              to provide accurate predictions and actionable insights for mining operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-200">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Impact & Goals</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
              <p className="text-lg font-semibold mb-2">Accident Reduction</p>
              <p className="text-gray-600">Predicted reduction in rockfall-related incidents</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">$2.5M</div>
              <p className="text-lg font-semibold mb-2">Cost Savings</p>
              <p className="text-gray-600">Average annual savings per mining operation</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
              <p className="text-lg font-semibold mb-2">Prediction Accuracy</p>
              <p className="text-gray-600">AI model accuracy in risk assessment</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Revolutionize Your Mining Safety?</h2>
          <p className="text-xl mb-8">
            Join the mining operations already using AI to prevent rockfall incidents
          </p>
          <Link to="/predict">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
              Start Prediction Analysis
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}