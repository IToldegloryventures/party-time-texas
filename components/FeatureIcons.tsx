'use client';

import { FileText, Search, Zap } from 'lucide-react';

const FeatureIcons = () => {
  const features = [
    {
      icon: FileText,
      title: 'NFC Engagement',
    },
    {
      icon: Search,
      title: 'Real-time Analytics',
    },
    {
      icon: Zap,
      title: 'Event Management',
    },
  ];

  return (
    <div className="relative px-4 pt-8 pb-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-center gap-12 sm:gap-16 lg:gap-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="group text-center">
                {/* Icon with Glow Effect */}
                <div className="relative mb-3 inline-flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 opacity-30 blur-md transition-opacity duration-300 group-hover:opacity-50" />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-purple-400/30 bg-purple-900/40 transition-colors duration-300 group-hover:border-purple-400/50">
                    <IconComponent className="h-6 w-6 text-white transition-colors duration-300 group-hover:text-purple-200" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-sm font-medium text-white/70 transition-colors duration-300 group-hover:text-white">
                  {feature.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeatureIcons;
