import React from 'react';
import { SectionProps } from '../types';
import { Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gray-200 shadow-sm">
          
          {/* Contact Info */}
          <div className="bg-white p-12 md:p-16 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">
                03 / Contact
              </h4>
              <h2 className="text-4xl font-serif text-gray-900 mb-12">Get in touch</h2>
              
              <div className="space-y-10">
                <div className="flex gap-6">
                  <MapPin className="w-6 h-6 text-gray-400 mt-1" />
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wide text-gray-900 mb-2">Office Address</h3>
                    <p className="text-gray-600 font-light">
                      Suite 1117, Sun House<br />
                      90 Connaught Road Central<br />
                      Sheung Wan, Hong Kong
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <Mail className="w-6 h-6 text-gray-400 mt-1" />
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wide text-gray-900 mb-2">Inquiries</h3>
                    <a href="mailto:davidkim@kainosinvestment.com" className="text-gray-600 hover:text-gray-900 hover:underline transition-colors font-light">
                      davidkim@kainosinvestment.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <Clock className="w-6 h-6 text-gray-400 mt-1" />
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wide text-gray-900 mb-2">Office Hours</h3>
                    <p className="text-gray-600 font-light">
                      Mon - Fri: 09:00 - 18:00 HKT<br />
                      Closed on Public Holidays
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100">
               <p className="text-xs text-gray-400">
                 All inquiries will be responded to within 24 hours.
               </p>
            </div>
          </div>

          {/* Map Image */}
          <div className="relative h-96 lg:h-auto bg-gray-200 overflow-hidden group">
            <img 
              src="/kainos_map_eng_nopin.png" 
              alt="Map image" 
              className="w-full h-full object-cover filter  contrast-125 transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Map Pin Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
               <div className="relative">
                 <div className="w-4 h-4 bg-black rounded-full border-2 border-white shadow-lg animate-ping absolute top-0 left-0"></div>
                 <div className="w-4 h-4 bg-black rounded-full border-2 border-white shadow-lg relative z-10"></div>
               </div>
            </div>

            <div className="absolute bottom-6 left-6 bg-white py-2 px-4 shadow-md text-xs font-semibold tracking-wide">
             Sheung Wan
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;