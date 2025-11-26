import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 border-t border-gray-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <div className="mb-4">
            <Logo
              className="h-14"
              light={true}
              />
          </div>

          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Kainos Investment Limited. All rights reserved.
          </p>
        </div>
        
        <div className="flex gap-6 text-xs text-gray-400">
          {/* 추후에 추가 */}
          {/* <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          <a href="#" className="hover:text-white transition-colors">SFC Disclosure</a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;