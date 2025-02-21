// components/Navbar.tsx
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 스크롤 위치에 따라 네비게이션 바 스타일 변경
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} 
                    ${isScrolled ? 'shadow-md' : ''} 
                    fixed top-0 w-full z-50 transition-all duration-300`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold">박정수</span>
          </div>
          
          {/* 모바일 메뉴 버튼 */}
          <div className="flex md:hidden items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md focus:outline-none"
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          
          {/* 데스크탑 네비게이션 링크 */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#about" className="hover:text-blue-500 transition-colors">소개</a>
            
            <a href="#projects" className="hover:text-blue-500 transition-colors">프로젝트</a>
            <a href="#skills" className="hover:text-blue-500 transition-colors">기술 스택</a>
            <a href="#awards" className="hover:text-blue-500 transition-colors">수상 및 대외 활동</a>
            <a href="#experience" className="hover:text-blue-500 transition-colors">경력</a>
            <a href="#contact" className="hover:text-blue-500 transition-colors">연락처</a>
            <button 
              onClick={toggleDarkMode} 
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
            >
              {darkMode ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </div>
      
      {/* 모바일 메뉴 */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#about" className="block py-2 px-4 hover:text-blue-500" onClick={() => setMobileMenuOpen(false)}>소개</a>
          
          <a href="#projects" className="block py-2 px-4 hover:text-blue-500" onClick={() => setMobileMenuOpen(false)}>프로젝트</a>
          <a href="#skills" className="block py-2 px-4 hover:text-blue-500" onClick={() => setMobileMenuOpen(false)}>기술 스택</a>
          <a href="#awards" className="block py-2 px-4 hover:text-blue-500" onClick={() => setMobileMenuOpen(false)}>수상 및 대외 활동</a>
          <a href="#experience" className="block py-2 px-4 hover:text-blue-500" onClick={() => setMobileMenuOpen(false)}>경력</a>
          <a href="#contact" className="block py-2 px-4 hover:text-blue-500" onClick={() => setMobileMenuOpen(false)}>연락처</a>
          <div className="py-2 px-4">
            <button 
              onClick={toggleDarkMode} 
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
            >
              {darkMode ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;