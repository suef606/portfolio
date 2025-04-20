// components/SkillsSection.tsx
import React from 'react';
import Image from 'next/image'; // Next.js Image 컴포넌트 추가

interface SkillsSectionProps {
  darkMode: boolean;
}

// 스킬 데이터 및 아이콘 정의
const skillsData = [
  {
    category: 'UXUI 툴',
    skills: [
      { name: 'Adobe Photoshop', icon: '/icons/Adobe_Photoshop_CC_icon.svg' },
      { name: 'Adobe Illustrator', icon: '/icons/Adobe_Illustrator_CC_icon.svg' },
      { name: 'Figma', icon: '/icons/Figma.svg' },
    ]
  },
  {
    category: '프론트엔드',
    skills: [
      { name: 'React', icon: '/icons/react.svg' },
      { name: 'Next.js', icon: '/icons/next-dot-js.svg' },
      { name: 'TypeScript', icon: '/icons/typescript.svg' },
      { name: 'React Native / Expo', icon: '/icons/expo.svg' },
    ]
  },
  {
    category: '상태관리 / 스타일링',
    skills: [
      { name: 'Zustand', icon: '/icons/zustand.svg' },
      { name: 'React Hook Form', icon: '/icons/react-hook-form.svg' },
      { name: 'Tailwind CSS', icon: '/icons/tailwind.svg' },
      { name: 'CSS Modules', icon: '/icons/css-modules-logo.png' },
    ]
  },
  {
    category: '도구 / 배포',
    skills: [
      { name: 'Git / GitHub', icon: '/icons/github.svg' },
      { name: 'GitHub Actions', icon: '/icons/GitHub Actions.svg' },
      { name: 'Vercel', icon: '/icons/vercel.png' },
      { name: 'Supabase', icon: '/icons/supabase.svg' },
    ]
  }
];

const SkillsSection: React.FC<SkillsSectionProps> = ({ darkMode }) => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-10 text-center">기술 스택</h2>
        
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-700' : 'bg-white'}`}
            >
              <h3 className="text-xl font-bold mb-4">{category.category}</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="flex flex-col items-center justify-center p-3 rounded-lg"
                  >
                    <div className="w-10 h-10 mb-2 flex items-center justify-center relative">
                      <Image 
                        src={skill.icon} 
                        alt={`${skill.name} 아이콘`}
                        width={32}
                        height={32}
                        className="max-w-full max-h-full" 
                      />
                    </div>
                    <span className="text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;