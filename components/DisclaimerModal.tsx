import React, { useState, useEffect } from 'react';
import { ShieldAlert, Check } from 'lucide-react';

interface DisclaimerModalProps {
  onAccept: () => void;
}

const DisclaimerModal: React.FC<DisclaimerModalProps> = ({ onAccept }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isVisible]);

  const handleEnter = () => {
    if (isChecked) {
      setIsVisible(false);
      onAccept();
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95 p-4 backdrop-blur-sm">
      <div className="w-full max-w-2xl bg-white shadow-2xl overflow-hidden border border-gray-200">
        <div className="bg-gray-900 p-6 flex items-center gap-3">
          <ShieldAlert className="text-white h-6 w-6" />
          <h2 className="text-xl font-serif text-white tracking-wide">IMPORTANT DISCLAIMER</h2>
        </div>
        
        <div className="p-8 max-h-[60vh] overflow-y-auto custom-scrollbar">
          <div className="prose prose-sm max-w-none text-gray-600 space-y-4">
            <p className="font-bold text-gray-900">
              PLEASE READ THIS DISCLAIMER CAREFULLY. BY CLICKING "I AGREE" BELOW, YOU ARE CONFIRMING THAT YOU ARE A PROFESSIONAL INVESTOR.
            </p>
            
            <p>
              The information contained on this website is for information purposes only and does not constitute an offer or solicitation to sell any shares or interests in any funds managed by Kainos Capital Limited ("Kainos").
            </p>
            
            <p>
              <strong>Regulatory Status:</strong> Kainos Investment is licensed by the Securities and Futures Commission of Hong Kong (the "SFC"). The content of this website has not been reviewed by the SFC.
            </p>
            
            <p>
              <strong>Professional Investors Only:</strong> This website is intended solely for use by "Professional Investors" as defined in the Securities and Futures Ordinance (Cap. 571) of Hong Kong and its subsidiary legislation. Persons who do not fall within this definition should not proceed.
            </p>
            
            <p>
              <strong>Investment Risk:</strong> Investment involves risk. Past performance is not indicative of future performance. You should read the relevant offering documents for details, including the risk factors, before making any investment decision.
            </p>
            
            <p>
              By accessing this website, you represent and warrant that you are observing the applicable laws and regulations of your relevant jurisdiction.
            </p>
          </div>
        </div>

        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <label className="flex items-start gap-3 cursor-pointer group select-none">
            <div className="relative flex items-center">
              <input 
                type="checkbox" 
                className="peer sr-only"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              <div className="w-5 h-5 border-2 border-gray-400 peer-checked:border-gray-900 peer-checked:bg-gray-900 transition-all rounded-sm flex items-center justify-center">
                <Check className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100" />
              </div>
            </div>
            <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
              I confirm that I am a <strong>Professional Investor</strong> and I have read, understood, and accept the terms of this disclaimer.
            </span>
          </label>

          <button
            onClick={handleEnter}
            disabled={!isChecked}
            className={`mt-6 w-full py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-300 ${
              isChecked 
                ? 'bg-gray-900 text-white hover:bg-gray-800 shadow-lg' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Enter Site
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;