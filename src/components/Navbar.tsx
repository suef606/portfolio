// components/Navbar.tsx
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // 스크롤 처리를 위한 최적화된 핸들러
  const handleScroll = useCallback(() => {
    if (window.scrollY > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, []);

  useEffect(() => {
    // 스크롤 이벤트 리스너 등록 시 passive: true 옵션 추가하여 성능 개선
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // 모바일 메뉴가 열렸을 때 스크롤 방지
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // 네비게이션 항목 데이터 - 반복되는 코드 제거를 위한 배열
  const navItems = [
    { href: "#about", label: "소개" },
    { href: "#projects", label: "프로젝트" },
    { href: "#skills", label: "기술 스택" },
    { href: "#awards", label: "수상 및 대외 활동" },
    { href: "#experience", label: "경력" },
    { href: "#contact", label: "연락처" }
  ];

  return (
    <nav 
      className={`${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'} 
                ${isScrolled ? 'shadow-md' : ''} 
                fixed top-0 w-full z-50 transition-all duration-300
                ${isScrolled ? 'bg-opacity-95' : 'bg-opacity-100'}`}
      role="navigation" // 접근성 향상을 위한 role 속성 추가
      aria-label="메인 네비게이션" // 접근성 향상을 위한 aria-label 추가
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a 
              href="#" 
              className="text-2xl font-bold flex items-center"
              aria-label="홈으로 이동" // 로고 링크 접근성 향상
            >
              <span className="text-blue-500 mr-1">Su</span>
              <span>Bao</span>
            </a>
          </div>
          
          {/* 모바일 메뉴 버튼 */}
          <div className="flex md:hidden items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
              aria-controls="mobile-menu" // 컨트롤 대상 지정
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          
          {/* 데스크탑 네비게이션 링크 - 반복 코드 제거 */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item, index) => (
              <a 
                key={`desktop-nav-${index}`}
                href={item.href} 
                className="hover:text-blue-500 transition-colors font-medium px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {item.label}
              </a>
            ))}
            <button 
              onClick={toggleDarkMode} 
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
              aria-label={darkMode ? '라이트 모드로 전환' : '다크 모드로 전환'}
              aria-pressed={darkMode} // 현재 상태 표시
            >
              {darkMode ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </div>
      
      {/* 모바일 메뉴 - 애니메이션 최적화 및 접근성 개선 */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            id="mobile-menu" // aria-controls와 연결
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: 'auto' }} 
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg overflow-hidden`}
            aria-label="모바일 메뉴" // 접근성 라벨 추가
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item, index) => (
                <a 
                  key={`mobile-nav-${index}`}
                  href={item.href} 
                  className="block py-2 px-4 hover:text-blue-500 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" 
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="py-2 px-4">
                <button 
                  onClick={toggleDarkMode} 
                  className={`p-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} w-full flex justify-center`}
                  aria-label={darkMode ? '라이트 모드로 전환' : '다크 모드로 전환'}
                  aria-pressed={darkMode} // 현재 상태 표시
                >
                  {darkMode ? '🌙 라이트 모드로 전환' : '☀️ 다크 모드로 전환'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default React.memo(Navbar); // 불필요한 리렌더링 방지