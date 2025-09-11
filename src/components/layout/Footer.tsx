import React from 'react';
import { Mountain, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Mountain className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">RockfallAI</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              AI-driven rockfall prediction system helping mining operations prevent accidents 
              and protect lives through advanced machine learning and real-time monitoring.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/predict" className="hover:text-white transition-colors">Predict Now</a></li>
              <li><a href="/reports" className="hover:text-white transition-colors">Past Reports</a></li>
              <li><a href="/maps" className="hover:text-white transition-colors">Risk Maps</a></li>
              <li><a href="/team" className="hover:text-white transition-colors">Our Team</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@rockfallai.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 RockfallAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}