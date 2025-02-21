// src/components/Portfolio.tsx
"use client";

import React, { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from './Navbar';
import AboutSection from './AboutSection';

// React.lazy 사용하여 코드 스플리팅 - 초기 로딩 성능 향상
const ProjectsSection = lazy(() => import('./ProjectsSection'));
const SkillsSection = lazy(() => import('./SkillsSection'));
const ExperienceSection = lazy(() => import('./ExperienceSection'));
const AwardsSection = lazy(() => import('./AwardsSection'));
const ContactSection = lazy(() => import('./ContactSection'));
const Footer = lazy(() => import('./Footer'));

// 로딩 컴포넌트
const SectionLoading = () => (
  <div className="py-20 flex justify-center items-center">
    <div className="animate-pulse flex space-x-4">
      <div className="h-12 w-12 bg-blue-200 rounded-full"></div>
      <div className="space-y-4">
        <div className="h-4 bg-blue-200 rounded w-36"></div>
        <div className="h-4 bg-blue-200 rounded w-24"></div>
      </div>
    </div>
  </div>
);

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // 시스템 다크모드 감지
  useEffect(() => {
    // 컴포넌트가 마운트되면 localStorage 또는 시스템 설정으로부터 다크모드 상태 읽기
    const savedDarkMode = localStorage.getItem('darkMode');
    
    if (savedDarkMode !== null) {
      setDarkMode(savedDarkMode === 'true');
    } else {
      // 사용자 시스템 설정에 따라 초기 다크모드 설정
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(isDarkMode);
    }
    
    setMounted(true);
  }, []);
  
  // 시스템 다크모드 변경 감지
  useEffect(() => {
    if (!mounted) return;
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem('darkMode') === null) {
        setDarkMode(e.matches);
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [mounted]);
  
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', String(newDarkMode));
  };
  
  // 다크모드 클래스 추가
  useEffect(() => {
    if (mounted) {
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [darkMode, mounted]);
  
  // 마운트되기 전에는 렌더링하지 않음
  if (!mounted) {
    return null;
  }
  
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <AboutSection darkMode={darkMode} />
      
      {/* Suspense로 감싸서 코드 스플리팅된 컴포넌트 로딩 처리 */}
      <Suspense fallback={<SectionLoading />}>
        <ProjectsSection darkMode={darkMode} />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <SkillsSection darkMode={darkMode} />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <AwardsSection darkMode={darkMode} />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <ExperienceSection darkMode={darkMode} />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <ContactSection darkMode={darkMode} />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <Footer darkMode={darkMode} />
      </Suspense>
    </div>
  );
};

export default Portfolio;