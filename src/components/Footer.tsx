// components/Footer.tsx
import React from 'react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className={`py-6 ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>© 2025 박정수. All rights reserved.</p>
        <p className="mt-2 text-sm">
          Built with Next.js, React, and Tailwind CSS. Deployed on Vercel.
        </p>
      </div>
    </footer>
  );
};

export default Footer;