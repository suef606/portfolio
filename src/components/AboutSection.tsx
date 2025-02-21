// components/AboutSection.tsx
import React from 'react';

interface AboutSectionProps {
  darkMode: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ darkMode }) => {
  return (
    <section id="about" className="py-20 pt-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">안녕하세요, <br/>UX를 기획력을 겸비하고 개발을 공부하는 <span className="text-blue-600">박정수</span>입니다</h1>
            <p className="text-base sm:text-lg mb-6">
              사용자 중심의 웹 서비스를 구현하고자 합니다.
              디자인 경력과 UX 기획 경험을 바탕으로 사용자 경험과 기술적 구현력을 
              모두 갖춘 능력자로 끊임없이 성장하고 싶습니다.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <a 
                href="#projects" 
                className={`px-6 py-3 rounded-md ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white font-medium transition-colors text-center`}
              >
                프로젝트 보기
              </a>
              <a 
                href="#contact" 
                className={`px-6 py-3 rounded-md ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} font-medium transition-colors text-center`}
              >
                연락하기
              </a>
            </div>
          </div>
          <div className="lg:w-2/5 mt-10 lg:mt-0">
            <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">기술 키워드</h2>
              <div className="flex flex-wrap">
                {['Next.js', 'React', 'TypeScript', 'Zustand', 'React Hook Form', 'Tailwind CSS', 'CI/CD', 'UX 기획'].map((tech) => (
                  <span key={tech} className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-medium m-1">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;