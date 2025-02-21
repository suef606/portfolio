// components/ExperienceItem.tsx
import React from 'react';

interface ExperienceItemProps {
  experience: {
    id: number;
    title: string;
    company: string;
    period: string;
    details: string[];
  };
  darkMode: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience, darkMode }) => {
  return (
    <div className="mb-10 ml-8">
      <div className="absolute w-8 h-8 bg-blue-500 rounded-full -left-6 flex items-center justify-center">
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