// components/ContactSection.tsx
import React from 'react';

interface ContactSectionProps {
  darkMode: boolean;
}

const ContactSection: React.FC<ContactSectionProps> = ({ darkMode }) => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-10 text-center">연락처</h2>
        
        <div className="flex flex-wrap justify-center">
          <a 
            href="mailto:codestudy13@gmail.com" 
            className={`flex items-center justify-center m-4 p-4 rounded-lg shadow-md ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'} transition-colors w-full sm:w-64`}
          >
            <span className="mr-3 text-xl">📧</span>
            <span>codestudy13@gmail.com</span>
          </a>
          
          <a 
            href="https://github.com/suef606" 
            className={`flex items-center justify-center m-4 p-4 rounded-lg shadow-md ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'} transition-colors w-full sm:w-64`}
            target="_blank" 
            rel="noopener noreferrer"
          >
            <span className="mr-3 text-xl">💻</span>
            <span>GitHub</span>
          </a>
          
          <a 
            href="https://open.kakao.com/o/sljZ7ihh" 
            className={`flex items-center justify-center m-4 p-4 rounded-lg shadow-md ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-100'} transition-colors w-full sm:w-64`}
            target="_blank" 
            rel="noopener noreferrer"
          >
            <span className="mr-3 text-xl">💬</span>
            <span>카카오 오픈채팅</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;