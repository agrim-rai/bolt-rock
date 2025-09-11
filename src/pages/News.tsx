import React from 'react';
import { Calendar, ExternalLink } from 'lucide-react';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { newsArticles } from '../data/newsArticles';

export function News() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Mining Industry News</h1>
          <p className="text-lg text-gray-600">
            Stay updated with the latest developments in mining safety, AI technology, and industry trends
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <Card key={article.id} className="hover:shadow-lg transition-shadow duration-200">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Calendar size={14} className="mr-1" />
                  {new Date(article.date).toLocaleDateString()}
                  <span className="mx-2">•</span>
                  <span className="text-blue-600 font-medium">{article.source}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.summary}
                </p>
                
                <Button 
                  variant="secondary" 
                  size="sm" 
                  className="w-full"
                  onClick={() => window.open(article.url, '_blank')}
                >
                  Read More
                  <ExternalLink size={14} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="mt-12">
          <CardContent className="py-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Informed</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter to receive the latest updates on mining safety, 
                AI developments, and industry insights directly to your inbox.
              </p>
              <div className="flex max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
                <Button className="rounded-l-none">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}