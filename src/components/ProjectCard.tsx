// components/ProjectCard.tsx
import React from 'react';

interface ProjectProps {
  project: {
    id: number;
    title: string;
    period: string;
    type: string;
    description: string;
    roles: string[];
    tech: string[];
    deployLink?: string;
    githubLink?: string;
    landingPageLink?: string;
    notionLink?: string;
    pdfLink?: string;
    imageGradient: string;
    result?: string;
    impact?: string;
    keyInsights?: string[];
  };
  darkMode: boolean;
}

const ProjectCard: React.FC<ProjectProps> = ({ project, darkMode }) => {
  return (
    <div className={`rounded-lg overflow-hidden shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
      <div className="md:flex">
        {/* 프로젝트 이미지 영역 */}
        <div className="md:w-2/5 bg-gray-300">
          <div className={`h-48 md:h-64 flex items-center justify-center bg-gradient-to-r ${project.imageGradient} text-white text-xl font-bold p-4 text-center`}>
            {project.title} 프로젝트 이미지
          </div>
        </div>

        {/* 프로젝트 정보 영역 */}
        <div className="p-4 md:p-6 md:w-3/5">
          <div className="flex flex-wrap justify-between items-start gap-2">
            <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
            <div className="flex flex-wrap gap-2">
              {project.deployLink && (
                <a href={project.deployLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-sm">
                  배포 링크
                </a>
              )}
              {project.landingPageLink && (
                <a href={project.landingPageLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-sm">
                  랜딩페이지
                </a>
              )}
              {project.notionLink && (
                <a href={project.notionLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-sm">
                  프로젝트 과정 노션 페이지
                </a>
              )}
              {project.pdfLink && (
                <a href={project.pdfLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-sm">
                  프로젝트 상세 PDF
                </a>
              )}
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline text-sm">
                  GitHub
                </a>
              )}
              {!project.deployLink && !project.landingPageLink && !project.githubLink && !project.pdfLink && (
                <span className="text-gray-500 text-sm">비공개 프로젝트</span>
              )}
            </div>
          </div>
          
          <p className="text-sm mb-4">{project.period} ({project.type})</p>
          
          <p className="mb-4 text-sm md:text-base">
            {project.description}
          </p>
          
          <h4 className="font-semibold mb-2 text-sm md:text-base">
            {project.roles.length > 0 ? "담당 역할" : "주요 기능"}
          </h4>
          <ul className="list-disc list-inside mb-4 text-sm md:text-base">
            {project.roles.map((role, index) => (
              <li key={index}>{role}</li>
            ))}
          </ul>
          
          {project.result && (
            <>
              <h4 className="font-semibold mb-2 text-sm md:text-base">결과</h4>
              <p className="mb-4 text-sm md:text-base">
                {project.result.includes("대상") ? (
                  <>
                    IT 서비스 기획 프로젝트 발표에서 <span className="font-bold text-green-600">대상</span> 수상
                  </>
                ) : (
                  project.result
                )}
              </p>
            </>
          )}
          
          {project.impact && (
            <>
              <h4 className="font-semibold mb-2 text-sm md:text-base">프로젝트 영향력</h4>
              <p className="mb-4 text-sm md:text-base">{project.impact}</p>
            </>
          )}
          
          {project.keyInsights && project.keyInsights.length > 0 && (
            <>
              <h4 className="font-semibold mb-2 text-sm md:text-base">핵심 인사이트</h4>
              <ul className="list-disc list-inside mb-4 text-sm md:text-base">
                {project.keyInsights.map((insight, index) => (
                  <li key={index}>{insight}</li>
                ))}
              </ul>
            </>
          )}
          
          <h4 className="font-semibold mb-2 text-sm md:text-base">사용 기술</h4>
          <div className="flex flex-wrap">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className={`px-2 py-1 rounded text-xs font-medium mr-2 mb-2 ${
                  project.title === "코촉촉"
                    ? "bg-blue-100 text-blue-800"
                    : project.title === "Todo 리스트"
                    ? "bg-purple-100 text-purple-800"
                    : project.title === "MAiS 디자인 시스템"
                    ? "bg-teal-100 text-teal-800"
                    : "bg-green-100 text-green-800"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;