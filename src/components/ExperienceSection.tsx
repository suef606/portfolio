// components/ExperienceSection.tsx
import React from 'react';
import ExperienceItem from '@/components/ExperienceItem';

interface ExperienceSectionProps {
  darkMode: boolean;
}

// 경력 데이터
const workExperiences = [
  {
    id: 1,
    title: "UX기획 & UI디자인",
    company: "넷스루",
    period: "2024.05 - 2024.08",
    details: [
      "MAiS(AI 모델 개발 및 운영 자동화 플랫폼) UI/UX 설계",
      "디자인 시스템 구축 및 표준 가이드 수립",
      "대용량 데이터 시각화 UI 최적화",
    ],
    type: "work" // type 속성 추가
  },
  {
    id: 2,
    title: "패션 용품 디자인",
    company: "다수 기업",
    period: "2013.05 - 2023.09",
    details: [
      "가방, 신발 등 패션 용품 디자인",
      "약 6년간의 제품 디자인 경력",
      "이탈리아 가방 제작 교육 참여 (1년)",
    ],
    type: "work" // type 속성 추가
  },
];

// 교육 데이터
const educationExperiences = [
  {
    id: 1,
    title: "프론트엔드 부트캠프",
    company: "서울경제진흥원",
    period: "2024.08 - 2025.01",
    details: [
      "React, Next.js, TypeScript 등 현대적인 웹 개발 기술 학습",
      "React Native/Expo를 활용한 모바일 앱 개발",
      "팀 프로젝트 '코촉촉' 개발 및 1차 MVP 완료",
      "우수리더상 수상",
    ],
    type: "education" // type 속성 추가
  },
  {
    id: 2,
    title: "IT 서비스 기획자 스쿨",
    company: "서울경제진흥원",
    period: "2023.12 - 2024.04",
    details: [
      "서비스 기획 방법론(Idea Generation, CVP, 핵심 기능 정의) 학습",
      "사용자 여정 맵 설계, 유저 스토리 작성, 기능정의서 제작",
      "'마트친구' 프로젝트 기획 및 대상 수상",
      "우수 PM상 수상",
    ],
    type: "education" // type 속성 추가
  },
];

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ darkMode }) => {
  return (
    <section id="experience" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-10 text-center">경력 및 교육</h2>
        
        {/* 경력 섹션 */}
        <h3 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          💼 경력
        </h3>
        <div className="relative border-l-4 border-blue-500 ml-6 mb-12">
          {workExperiences.map((experience) => (
            <ExperienceItem 
              key={experience.id}
              experience={experience}
              darkMode={darkMode}
            />
          ))}
        </div>
        
        {/* 교육 섹션 */}
        <h3 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          🎓 교육
        </h3>
        <div className="relative border-l-4 border-blue-500 ml-6">
          {educationExperiences.map((experience) => (
            <ExperienceItem 
              key={experience.id}
              experience={experience}
              darkMode={darkMode}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;