// components/SkillsSection.tsx
import React from 'react';
import SkillCategory from './SkillCategory';

interface SkillsSectionProps {
  darkMode: boolean;
}

// 스킬 데이터
const skillCategories = [
  {
    id: 'frontend',
    title: '프론트엔드',
    skills: [
      { name: 'React', level: 75 },
      { name: 'Next.js', level: 75 },
      { name: 'TypeScript', level: 67 },
      { name: 'React Native / Expo', level: 50 },
    ],
    color: 'blue',
  },
  {
    id: 'state',
    title: '상태관리 / 스타일링',
    skills: [
      { name: 'Zustand', level: 75 },
      { name: 'React Hook Form', level: 75 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'CSS Modules', level: 60 },
    ],
    color: 'green',
  },
  {
    id: 'tools',
    title: '도구 / 배포',
    skills: [
      { name: 'Git / GitHub', level: 80 },
      { name: 'GitHub Actions', level: 75 },
      { name: 'Vercel', level: 80 },
      { name: 'Figma', level: 100 },
    ],
    color: 'purple',
  },
];

const SkillsSection: React.FC<SkillsSectionProps> = ({ darkMode }) => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-10 text-center">기술 스택</h2>
        
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <SkillCategory 
              key={category.id}
              category={category}
              darkMode={darkMode}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;