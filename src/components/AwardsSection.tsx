// src/components/AwardsSection.tsx
import React from 'react';

interface AwardsSectionProps {
  darkMode: boolean;
}

const awards = [
  {
    title: "유데미 러닝크루 2기",
    period: "2025.02.05 ~ 현재",
    organization: "유데미"
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
    title: "서울청년봉사단 봉사활동 증서 수여받음",
    period: "2024.05.17 ~ 2024.12.16",
    organization: "서울특별시"
  },
  {
    title: "제2기 강동싱글 서포터즈",
    period: "2024.03.23 ~ 2024.11.30",
    organization: "강동구1인가구지원센터"
  },
  {
    title: "IT서비스 기획 프로젝트 발표 (대상)",
    period: "2024.04.03",
    organization: "청년취업사관학교(서울경제진흥원)"
  },
  {
    title: "Graphic Master",
    period: "2024.02.22",
    organization: "한국생산성본부"
  },
  {
    title: "IT 서비스 기획자스쿨 부트캠프 (우수 PM상)",
    period: "2024.02.05",
    organization: "청년취업사관학교(서울경제진흥원)"
  },
  {
    title: "2023 강동구 숏폼 콘텐츠 공모전 (장려상)",
    period: "2023.11.22",
    organization: "서울시 강동구청"
  },
  {
    title: "멀티미디어콘텐츠제작전문가",
    period: "2023.11.01",
    organization: "한국산업인력공단"
  },
  {
    title: "서울시 중부기술교육원 기자단",
    period: "2022.09.26 ~ 2023.02.21",
    organization: "서울특별시 중부기술교육원"
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