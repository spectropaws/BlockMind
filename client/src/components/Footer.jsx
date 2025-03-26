import React from 'react';
import { Sprout, HelpCircle, Mail, FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="container mx-auto pl-10 py-12 grid md:grid-cols-3 gap-8 mt-10">
      <div>
        <div className="flex items-center mb-4">
          <Sprout className="h-8 w-8 text-primary mr-2" />
          <h3 className="text-xl font-bold text-gray-800">CropMind</h3>
        </div>
        <p className="text-gray-600">
          Revolutionizing farming with AI-powered insights and recommendations for better crop management and yield optimization.
        </p>
      </div>
      <div>
        <h4 className="font-semibold text-gray-800 mb-4">Quick Links</h4>
        <ul className="space-y-2">
          {['Home', 'Crop Recommendation', 'Disease Detection', 'Fertilizer Optimization'].map((link) => (
            <li key={link}>
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* <div>
        <h4 className="font-semibold text-gray-800 mb-4">Help Center</h4>
        <ul className="space-y-2">
          {[
            { icon: HelpCircle, text: 'FAQs' },
            { icon: Mail, text: 'Contact Support' },
            { icon: FileText, text: 'Documentation' }
          ].map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center">
              <Icon className="h-4 w-4 text-green-500 mr-2" />
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div> */}
      <div className="md:col-span-3 flex flex-col md:flex-row justify-between items-center border-t pt-4 mt-4">
        <p className="text-gray-500 text-sm">© 2025 CropMind AI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;