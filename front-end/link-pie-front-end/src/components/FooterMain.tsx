import React from 'react';

interface FooterProps {
  logoSrc?: string | null; // optional and can be null
}

const Footer: React.FC<FooterProps> = ({ logoSrc }) => {
  return (
  <footer className="text-white py-12 mt-24" style={{backgroundColor:'oklch(58.5% 0.233 277.117)'}}>
    <div className="container mx-auto mt-16 capitalize">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          {logoSrc && <img src={logoSrc} alt="LUP Logo" className="w-16 h-16" />}
        </div>
        <ul className="flex space-x-4" role="navigation">
          <li><a href="#" className="hover:underline" aria-label="About Us">About</a></li>
          <li><a href="#" className="hover:underline" aria-label="Privacy Policy">Privacy Policy</a></li>
          <li><a href="#" className="hover:underline" aria-label="Contact Us">Contact</a></li>
        </ul>
      </div>
      <hr className="border-t-1 mx-auto" />
      <div className="mt-8 text-center text-sm">
        &copy; {new Date().getFullYear()} LinkPi. All rights reserved.
      </div>
    </div>
  </footer>
);
}

export default Footer;
