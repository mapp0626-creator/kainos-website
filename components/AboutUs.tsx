import React from 'react';
import { SectionProps } from '../types';
import { Globe, ShieldCheck, Leaf } from 'lucide-react';

const AboutUs: React.FC<SectionProps> = ({ id }) => {
  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Border-less Investment",
      description: "We also work with investment firms in other regions to provide local expertise to our clients. We put an effort to streamline the investment process and improve efficiency."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Risk Management",
      description: "In addition to our investment philosophy, we consider risk management the most important aspect of our business. We take a holistic approach when it comes to risk management where we take into consideration for both clients’ and our firms’ for sustainability."
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "ESG",
      description: "We not only believe long-term performance of organization is affected by ESG factors, but also ESG organizations will reduce risk by fewer business disruptions and produce more reliable financial results over time. We try to find sustainability in investing by considering ESG factors."
    }
  ];

  return (
    <section id={id} className="py-24 md:py-32 bg-white text-gray-900 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Heading */}
          <div className="sticky top-32">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">
              01 / Company Overview
            </h4>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-gray-900 leading-tight">
              We define the new standard in <span className="italic text-gray-500">alternative investment</span>.
            </h2>
            <div className="h-px w-24 bg-gray-900 mb-8"></div>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              Kainos Investment is a discretionary asset manager licensed in Hong Kong focusing on enhanced value investment. Our enhanced value investment approach seeks long-term returns based on value investing philosophy – investments with the potential for sustainable earnings growth – while capitalizing on structural changes in the market, such as the global infrastructure investment opportunities.
            </p>
          </div>

          {/* Right Column: Content/Grid */}
          <div className="space-y-12">
            <div className="bg-gray-50 p-8 md:p-12 border border-gray-100">
              <p className="text-gray-700 leading-relaxed font-medium">
                "Our team brings years of investment management experience in both public and private markets. We are dedicated to provide long-term capital gains and build deep trust with our clients."
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="shrink-0 w-12 h-12 flex items-center justify-center bg-gray-100 text-gray-900 group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;