// components/ExperienceItem.tsx
import React from 'react';

interface ExperienceItemProps {
  experience: {
    id: number;
    title: string;
    company: string;
    period: string;
    details: string[];
    type: string; // 'work' 또는 'education' 타입
  };
  darkMode: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience, darkMode }) => {
  // 모든 타입에 대해 파란색 사용 (세로 라인과 동일하게)
  const circleColorClass = 'bg-blue-500';
  
  return (
    <div className="mb-10 ml-8">
      <div className={`absolute w-8 h-8 ${circleColorClass} rounded-full -left-6 flex items-center justify-center`}>
        <span className="text-white">{experience.id}</span>
      </div>
      <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
        <h3 className="text-xl font-bold">{experience.title}</h3>
        <p className="text-sm">{experience.company} | {experience.period}</p>
        <ul className="list-disc list-inside mt-4">
          {experience.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceItem;