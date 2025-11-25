import React from 'react';
import { SectionProps } from '../types';
import { Target, Hourglass, Shield, TrendingUp } from 'lucide-react';

const InvestmentApproach: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-24 md:py-32 bg-gray-50 text-gray-900 scroll-mt-20">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <h4 className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-4">
            02 / Investment Approach
          </h4>
          <h2 className="text-3xl md:text-5xl font-serif text-gray-900 mb-8 leading-tight">
            Our Investment Philosophy
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We are dedicated to the principles of value investing. Our objective is to achieve superior long-term rates of return while emphasizing capital preservation.
          </p>
        </div>

        {/* Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
            {/* Card 1: Value Investing */}
            <div className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-gray-200 flex items-center justify-center rounded-sm text-gray-900">
                    <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-semibold">Value Oriented</h3>
                <p className="text-gray-600 leading-7 text-sm">
                    We view stocks as fractional ownership of businesses. We seek to invest in high-quality companies when they are trading at a significant discount to their intrinsic value, providing us with a "Margin of Safety."
                </p>
            </div>

            {/* Card 2: Long-Term Perspective */}
            <div className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-gray-200 flex items-center justify-center rounded-sm text-gray-900">
                    <Hourglass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-semibold">Long-Term Perspective</h3>
                <p className="text-gray-600 leading-7 text-sm">
                    Time is our ally. We look beyond short-term market volatility and quarterly earnings cycles. By maintaining a multi-year horizon, we can capitalize on market inefficiencies that short-term market participants often overlook.
                </p>
            </div>

            {/* Card 3: Capital Preservation */}
            <div className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-gray-200 flex items-center justify-center rounded-sm text-gray-900">
                    <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-semibold">Capital Preservation</h3>
                <p className="text-gray-600 leading-7 text-sm">
                    We define risk not as volatility, but as the permanent loss of capital. Our rigorous research process focuses intensely on downside protection before considering upside potential.
                </p>
            </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gray-200 mb-24"></div>

        {/* Process / Strategy Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div>
                <h3 className="text-2xl font-serif mb-6">A Disciplined Process</h3>
                <div className="space-y-8">
                    <div className="flex gap-4">
                        <span className="text-xl font-bold text-gray-300">01</span>
                        <div>
                            <h4 className="text-lg font-bold mb-2">Original Research</h4>
                            <p className="text-gray-600 text-sm">We conduct independent, bottom-up fundamental research. We do not rely on wall street reports but form our own conviction based on analyzing financial statements, competitive advantages, and management quality.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                         <span className="text-xl font-bold text-gray-300">02</span>
                        <div>
                            <h4 className="text-lg font-bold mb-2">Concentrated Portfolio</h4>
                            <p className="text-gray-600 text-sm">We focus our capital on our highest conviction ideas. Diversification is used intelligently, but we believe that excessive diversification dilutes returns and suggests a lack of conviction.</p>
                        </div>
                    </div>
                     <div className="flex gap-4">
                         <span className="text-xl font-bold text-gray-300">03</span>
                        <div>
                            <h4 className="text-lg font-bold mb-2">Contrarian Mindset</h4>
                            <p className="text-gray-600 text-sm">We are often selling when others are buying, and buying when others are selling. We have the discipline to act against the crowd when the data supports our thesis.</p>
                        </div>
                    </div>
                </div>
             </div>
             
             {/* Quote Block */}
             <div className="bg-gray-900 p-12 text-white relative overflow-hidden">
                <TrendingUp className="absolute top-6 right-6 text-white/10 w-24 h-24" />
                <blockquote className="relative z-10">
                    <p className="text-xl font-serif italic leading-relaxed mb-6">
                        "The stock market is a device for transferring money from the impatient to the patient."
                    </p>
                    <footer className="text-sm uppercase tracking-widest text-gray-400">
                        — Investment Philosophy
                    </footer>
                </blockquote>
             </div>
        </div>

      </div>
    </section>
  );
};

export default InvestmentApproach;