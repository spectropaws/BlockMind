import React from 'react';
import { Info } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const BestTipsForUpload = () => {
  const tips = [
    'Take clear, well-lit photos',
    'Focus on the affected area',
    'Include some healthy parts for comparison',
    'Take multiple photos from different angles if needed'
  ];

  return (
    <Card className="w-full max-w-xl mx-auto bg-blue-50">
      <CardContent className="p-4">
        <div className="flex items-start space-x-3">
          <Info className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-blue-800 mb-2">For Best Results</h3>
            <ul className="space-y-2 text-blue-700">
              {tips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-blue-600">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BestTipsForUpload;