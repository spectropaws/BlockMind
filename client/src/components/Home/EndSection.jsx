import React from 'react';
import { Button } from '@/components/ui/button';
import { Tractor } from 'lucide-react';

const EndSection = () => {
  return (
    <div className="bg-green-800/80 text-center py-16 px-4">
      <span className="bg-primary-foreground px-3 py-1 rounded-full text-sm mb-4 flex gap-2 items-center justify-center mx-auto w-fit">
      <Tractor />
        Join Thousands of Smart Farmers
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Ready to Transform Your Farming?
      </h2>
      <p className="text-white text-lg max-w-2xl mx-auto mb-8">
        Start using CropMind AI today and see how data-driven decisions can increase your yields and reduce costs.
      </p>
      <div className="flex justify-center space-x-4">
        <Button variant="default" className="bg-white text-green-600 hover:bg-green-50">
          Get Started Now &gt;
        </Button>
        {/* <Button variant="outline" className="border-white text-white hover:bg-green-700/30">
          Contact Us
        </Button> */}
      </div>
    </div>
  );
};

export default EndSection;