// components/SkillCategory.tsx
import React from 'react';

interface SkillCategoryProps {
  category: {
    id: string;
    title: string;
    skills: {
      name: string;
      level: number;
    }[];
    color: string;
  };
  darkMode: boolean;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ category, darkMode }) => {
  // 색상 매핑
  const colorMap: Record<string, string> = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
  };

  return (
    <div className={`p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
      <h3 className="text-xl font-bold mb-4">{category.title}</h3>
      <div className="space-y-4">
        {category.skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <span>{skill.name}</span>
              <div className="w-24 sm:w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${colorMap[category.color]} rounded-full`} 
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;