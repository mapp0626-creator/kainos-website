import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-serif text-lg tracking-widest font-bold mb-2">KAINOS</p>
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Kainos Investment Limited. All rights reserved.
          </p>
        </div>
        
        <div className="flex gap-6 text-xs text-gray-400">
          {/* <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          <a href="#" className="hover:text-white transition-colors">SFC Disclosure</a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;