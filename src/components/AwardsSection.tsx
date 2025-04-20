// src/components/AwardsSection.tsx
import React from 'react';

interface AwardsSectionProps {
  darkMode: boolean;
}

const awards = [
  {
    title: "인프런 워밍업 클럽 스터디 3기 (풀스택)",
    period: "2025.02 ~ 2025.04",
    organization: "인프런",
    award: "우수러너"
  },
  {
    title: "React와 React.Native를 활용한 초집중 프론트엔드 부트캠프",
    period: "2024.08.26 ~ 2025.01.21",
    organization: "청년취업사관학교(서울경제진흥원 주관)",
    award: "우수리더상"
  },
  {
    title: "2024년 강동구 청년네트워크 위원 활동",
    period: "2024.04.25 ~ 2024.12.31",
    organization: "서울특별시 강동구청"
  },
  {
    title: "IT서비스 기획 프로젝트 발표 (대상)",
    period: "2024.04.03",
    organization: "청년취업사관학교(서울경제진흥원)"
  },
  {
    title: "IT 서비스 기획자스쿨 부트캠프 (우수 PM상)",
    period: "2024.02.05",
    organization: "청년취업사관학교(서울경제진흥원)"
  }
];

const AwardsSection: React.FC<AwardsSectionProps> = ({ darkMode }) => {
  return (
    <section id="awards" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-10 text-center">수상 및 대외 활동</h2>
        
        <div className="space-y-6">
          {awards.map((award, index) => (
            <div 
              key={index} 
              className={`
                p-6 rounded-lg shadow-md 
                ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'}
              `}
            >
              <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
              <div className="flex justify-between items-center">
                <p className="text-base mb-1 font-medium text-gray-600">{award.organization}</p>
                <span className="text-sm text-gray-500">{award.period}</span>
              </div>
              {award.award && (
                <p className="text-sm text-blue-600 mt-1">{award.award}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;