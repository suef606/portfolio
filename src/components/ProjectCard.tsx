// components/ProjectCard.tsx
import React, { useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// 프로젝트 데이터 인터페이스 확장
interface ProjectProps {
  project: {
    id: number;
    title: string;
    period: string;
    type: string;
    description: string;
    roles: string[];
    tech: string[];
    images?: string[]; // 프로젝트 이미지 배열 추가
    deployLink?: string;
    githubLink?: string;
    landingPageLink?: string;
    notionLinks?: Array<{
      // 노션 링크 배열로 변경
      title: string;
      url: string;
    }>;
    presentationLink?: string; // 데모데이 발표자료 링크 추가
    pdfLink?: string;
    imageGradient: string;
    result?: string;
    impact?: string;
    keyInsights?: string[];
    detailedDescription?: string; // 선택적 상세 설명 추가
    technicalChallenges?: string[]; // 기술적 도전 과제
    learningOutcomes?: string[]; // 학습 성과
    performanceMetrics?: {
      // 성과 지표 정의 추가
      [key: string]: number;
    };
  };
  darkMode: boolean;
}

// 아이콘 컴포넌트들 - 재사용성과 가독성 개선
const DeployIcon = () => (
  <svg
    className="w-4 h-4 mr-1"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

const GithubIcon = () => (
  <svg
    className="w-4 h-4 mr-1"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.66-4.57 4.91.36.31.68.92.68 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
    />
  </svg>
);

const NotionIcon = () => (
  <svg
    className="w-4 h-4 mr-1"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28.047-.606 0-.56-.42-.793-.84-.793L5.102 2.009c-.56 0-.887.28-1.12.606-.093.186-.186 1.772-.186 1.772-.28.734.28.793.663.56zm1.96 13.986v-8.22c0-.606.187-.886.747-.886.56 0 11.785-.84 11.785-.84.561 0 .935.373.935.934v11.445c0 .607-.28.887-.747.887H6.925c-.654.093-.934-.187-.934-.747 0-.607.093-1.213.373-1.68.374-.466 1.12-1.4 1.12-1.4s-.373 1.12-.56 1.4c-.187.374-.187.747.467.747zm10.712.7c.28 0 .4-.187.4-.56V9.553c0-.373-.187-.56-.653-.56-.374 0-.374.187-.374.56v9.333c0 .28.187.373.514.373l.113-.026zm-10.618-3.36s-.934.187-1.307.234c-.28.26-.28.186-.28.886 0 .653.28.653.747.653h9.965v-.84l-9.125.047z" />
  </svg>
);

const PdfIcon = () => (
  <svg
    className="w-4 h-4 mr-1"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 2l5 5h-5V4zM7 15h10v2H7v-2zm0-4h10v2H7v-2z" />
  </svg>
);

const PresentationIcon = () => (
  <svg
    className="w-4 h-4 mr-1"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 7.5c0 .8-.7 1.5-1.5 1.5H9v1h1.5v1H9v2H8v-5h2.5c.8 0 1.5.7 1.5 1.5zM16 15h-1.75l-1.75-2.25V15H11.5V9H13l1.75 2.25V9H16v6zm-4.5-3h-1v.5h1v-.5z" />
  </svg>
);

const ProjectCard: React.FC<ProjectProps> = ({ project, darkMode }) => {
  // 호버 상태 관리 - 카드 인터렉션 효과
  const [isHovered, setIsHovered] = useState(false);
  // 상세 설명 표시 여부 상태 추가
  const [showDetails, setShowDetails] = useState(false);
  // 이미지 슬라이더 상태 관리
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  

// 다음 이미지로 이동
const nextImage = (e: React.MouseEvent) => {
  e.stopPropagation(); // 이미지 링크 클릭 방지
  if (project.images && project.images.length > 0) {
    // 마지막 이미지 다음에 빈 장 추가 (배포 사이트 이동용)
    const extendedImages = [...project.images, null];
    setCurrentImageIndex((prevIndex) =>
      prevIndex === extendedImages.length - 1 ? 0 : prevIndex + 1
    );
  }
};

// 이전 이미지로 이동
const prevImage = (e: React.MouseEvent) => {
  e.stopPropagation(); // 이미지 링크 클릭 방지
  if (project.images && project.images.length > 0) {
    // 마지막 이미지 다음에 빈 장 추가 (배포 사이트 이동용)
    const extendedImages = [...project.images, null];
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? extendedImages.length - 1 : prevIndex - 1
    );
  }
};

  // 기술 스택 배지 색상 동적 매핑 - useMemo로 최적화
  const colorMap = useMemo(() => {
    return {
      react: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
      next: "bg-black text-white dark:bg-gray-900 dark:text-gray-100",
      typescript:
        "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
      tailwind: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300",
      zustand:
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
      "hook form":
        "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
      zod: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
      github: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
      vercel: "bg-black text-white dark:bg-gray-900 dark:text-gray-100",
      jwt: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
      figma:
        "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
      design:
        "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
      ui: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
      ux: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300",
      api: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      rest: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      supabase:
        "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
    };
  }, []);

  // getTechBadgeColor 함수를 useCallback으로 메모이제이션
  const getTechBadgeColor = useCallback(
    (tech: string) => {
      const techLower = tech.toLowerCase();
      // 기술 이름을 소문자로 변환하고 colorMap에서 일치하는 값 찾기
      const matchedColor = Object.entries(colorMap).find(([key]) =>
        techLower.includes(key)
      )?.[1];

      // 일치하는 색상이 없으면 기본 녹색 반환
      return (
        matchedColor ||
        "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      );
    },
    [colorMap]
  );

  // 링크 렌더링 함수 - 메모이제이션을 적용하여 성능 최적화
  const renderLinks = useCallback(() => {
    const links: React.ReactNode[] = [];

    // 링크 순서를 지정된 대로 설정: 문서, 데모데이, 배포, GitHub

    // 1. 노션 문서 링크들 (1차, 2차 개발 문서)
    if (project.notionLinks && project.notionLinks.length > 0) {
      project.notionLinks.forEach((notionLink, index) => {
        links.push(
          <a
            key={`notion-${index}`}
            href={notionLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              text-gray-700 hover:text-gray-900 
              dark:text-gray-200 dark:hover:text-white 
              flex items-center text-sm 
              ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"} 
              px-2 py-1 rounded-md transition-colors
            `}
            aria-label={`${project.title} ${notionLink.title}`}
          >
            <NotionIcon /> {notionLink.title}
          </a>
        );
      });
    }

    // 2. 데모데이 발표자료 링크
    if (project.presentationLink) {
      links.push(
        <a
          key="presentation"
          href={project.presentationLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            text-orange-500 hover:text-orange-700
            dark:text-orange-300 dark:hover:text-orange-100
            flex items-center text-sm 
            ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"} 
            px-2 py-1 rounded-md transition-colors
          `}
          aria-label={`${project.title} 데모데이 발표자료`}
        >
          <PresentationIcon /> 데모데이 발표자료
        </a>
      );
    }

    // 3. 배포 링크
    if (project.deployLink) {
      links.push(
        <a
          key="deploy"
          href={project.deployLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            text-blue-500 hover:text-blue-700 
            dark:text-blue-300 dark:hover:text-blue-100
            flex items-center text-sm 
            ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"} 
            px-2 py-1 rounded-md transition-colors
          `}
          aria-label={`${project.title} 배포 링크`}
        >
          <DeployIcon /> 배포 링크
        </a>
      );
    }

    // 4. GitHub 링크
    if (project.githubLink) {
      links.push(
        <a
          key="github"
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            text-gray-700 hover:text-gray-900 
            dark:text-gray-200 dark:hover:text-white 
            flex items-center text-sm 
            ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"} 
            px-2 py-1 rounded-md transition-colors
          `}
          aria-label={`${project.title} GitHub 링크`}
        >
          <GithubIcon /> GitHub
        </a>
      );
    }

    // 기타 링크들
    if (project.landingPageLink) {
      links.push(
        <a
          key="landing"
          href={project.landingPageLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            text-blue-500 hover:text-blue-700 
            dark:text-blue-300 dark:hover:text-blue-100
            flex items-center text-sm 
            ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"} 
            px-2 py-1 rounded-md transition-colors
          `}
          aria-label={`${project.title} 랜딩 페이지`}
        >
          <DeployIcon /> 랜딩 페이지
        </a>
      );
    }

    if (project.pdfLink) {
      links.push(
        <a
          key="pdf"
          href={project.pdfLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            text-red-500 hover:text-red-700 
            dark:text-red-300 dark:hover:text-red-100
            flex items-center text-sm 
            ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"} 
            px-2 py-1 rounded-md transition-colors
          `}
          aria-label={`${project.title} PDF 문서`}
        >
          <PdfIcon /> PDF 문서
        </a>
      );
    }

    return links.length > 0 ? (
      <div className="flex flex-wrap gap-2 mt-4">{links}</div>
    ) : (
      <span className="text-gray-500 dark:text-gray-400 text-sm mt-2 inline-block">
        비공개 프로젝트
      </span>
    );
  }, [project, darkMode]);

  // 카드 애니메이션 속성 메모이제이션 - 불필요한 객체 생성 방지
  const cardAnimationProps = useMemo(
    () => ({
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-100px" },
      transition: { duration: 0.5 },
    }),
    []
  );

// 이미지 클릭 핸들러 수정
const handleImageClick = () => {
  // 이미지 배열 생성
  const extendedImages = project.images ? [...project.images, null] : [];
  
  // 실제 이미지일 때만 배포 사이트로 이동
  if (extendedImages[currentImageIndex] !== null && project.deployLink) {
    window.open(project.deployLink, "_blank", "noopener,noreferrer");
  }
};

  return (
    <motion.div
      {...cardAnimationProps}
      className={`
        rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 
        ${isHovered ? "shadow-xl translate-y-[-5px]" : ""} 
        ${darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-900"}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="md:flex">
        {/* 프로젝트 이미지 영역 */}
        <div className="md:w-2/5 relative overflow-hidden">
        {project.images && project.images.length > 0 ? (
  // 이미지가 있는 경우 이미지 슬라이더 표시
  <div
    className="relative h-48 md:h-64 cursor-pointer flex items-center justify-center bg-gray-100 dark:bg-gray-700"
    onClick={() => {
      const extendedImages = [...project.images!, null];
      // 마지막 빈 이미지 장(null)일 때 배포 링크로 이동
      if (extendedImages[currentImageIndex] === null && project.deployLink) {
        window.open(project.deployLink, "_blank", "noopener,noreferrer");
      }
    }}
    title={project.images && project.deployLink ? "배포 사이트로 이동" : ""}
  >
    <div className="relative w-full h-full flex items-center justify-center">
      {currentImageIndex < project.images!.length ? (
        <Image
          src={project.images[currentImageIndex]}
          alt={`${project.title} 이미지 ${currentImageIndex + 1}`}
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 40vw"
          priority={project.id === 0}
          fill
        />
      ) : (
        // 마지막 빈 이미지 장 (배포 사이트로 이동용)
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <span className="bg-white bg-opacity-20 text-white px-6 py-3 rounded-lg text-lg font-bold flex items-center">
            <DeployIcon /> 배포 사이트로 이동
          </span>
        </div>
      )}
    </div>

    {/* 이미지가 2개 이상인 경우에만 화살표 표시 */}
    {project.images.length > 1 && (
      <>
        {/* 왼쪽 화살표 */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
          aria-label="이전 이미지"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* 오른쪽 화살표 */}
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
          aria-label="다음 이미지"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* 이미지 인디케이터 */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {[...project.images, null].map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex(index);
              }}
              className={`w-2 h-2 rounded-full ${
                index === currentImageIndex
                  ? "bg-white"
                  : "bg-gray-400 bg-opacity-50"
              }`}
              aria-label={`이미지 ${index + 1}로 이동`}
            />
          ))}
        </div>
      </>
    )}
  </div>
) : (
  // 이미지가 없는 경우 그라데이션 배경 표시
  <div
    className={`h-48 md:h-64 flex items-center justify-center bg-gradient-to-r ${
      project.imageGradient
    } text-white text-xl font-bold p-4 text-center transform transition-transform duration-500 ${
      isHovered ? "scale-105" : "scale-100"
    } ${project.deployLink ? "cursor-pointer" : ""}`}
    onClick={project.deployLink ? handleImageClick : undefined}
  >
    {project.title}
  </div>
)}
        </div>

        {/* 프로젝트 정보 영역 */}
        <div className="p-4 md:p-6 md:w-3/5">
          <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
            <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
            <span className="text-sm py-1 px-2 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
              {project.type}
            </span>
          </div>

          <p className="text-sm mb-4 text-gray-600 dark:text-gray-100">
            {project.period}
          </p>

          <p className="mb-4 text-sm md:text-base">{project.description}</p>

          <h4 className="font-semibold mb-2 text-sm md:text-base border-l-4 border-blue-500 pl-2">
            {project.roles.length > 0 ? "담당 역할" : "주요 기능"}
          </h4>
          <ul className="list-disc list-inside mb-4 text-sm md:text-base pl-2 space-y-1">
            {project.roles.map((role, index) => (
              <li key={index} className="text-gray-700 dark:text-gray-100">
                {role}
              </li>
            ))}
          </ul>

          {/* 결과 섹션 */}
          {project.result && (
            <>
              <h4 className="font-semibold mb-2 text-sm md:text-base border-l-4 border-green-500 pl-2">
                결과
              </h4>
              <p className="mb-4 text-sm md:text-base pl-2 text-gray-700 dark:text-gray-300">
                {project.result.includes("대상") ? (
                  <>
                    IT 서비스 기획 프로젝트 발표에서{" "}
                    <span className="font-bold text-green-600 dark:text-green-400">
                      대상
                    </span>{" "}
                    수상
                  </>
                ) : (
                  project.result
                )}
              </p>
            </>
          )}

          {/* 프로젝트 영향력 */}
          {project.impact && (
            <>
              <h4 className="font-semibold mb-2 text-sm md:text-base border-l-4 border-purple-500 pl-2">
                프로젝트 영향력
              </h4>
              <p className="mb-4 text-sm md:text-base pl-2 text-gray-700 dark:text-gray-300">
                {project.impact}
              </p>
            </>
          )}

          {/* 핵심 인사이트 */}
          {project.keyInsights && project.keyInsights.length > 0 && (
            <>
              <h4 className="font-semibold mb-2 text-sm md:text-base border-l-4 border-yellow-500 pl-2">
                핵심 인사이트
              </h4>
              <ul className="list-disc list-inside mb-4 text-sm md:text-base pl-2 space-y-1">
                {project.keyInsights.map((insight, index) => (
                  <li key={index} className="text-gray-700 dark:text-gray-300">
                    {insight}
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* 상세 설명 토글 버튼 - 프로젝트에 상세 설명이 있는 경우만 표시 */}
          {project.detailedDescription && (
            <div className="mb-4">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className={`text-sm px-3 py-1 rounded-md ${
                  darkMode
                    ? "bg-gray-700 hover:bg-gray-600"
                    : "bg-gray-100 hover:bg-gray-200"
                } transition-colors flex items-center`}
                aria-expanded={showDetails}
              >
                {showDetails ? "간략히 보기 ▲" : "상세 정보 보기 ▼"}
              </button>

              {showDetails && (
                <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-md text-sm">
                  <p className="mb-3 text-gray-700 dark:text-gray-300">
                    {project.detailedDescription}
                  </p>

                  {/* 기술적 도전 과제 */}
                  {project.technicalChallenges &&
                    project.technicalChallenges.length > 0 && (
                      <>
                        <h5 className="font-semibold mb-1 border-l-3 border-orange-400 pl-2">
                          기술적 도전 과제
                        </h5>
                        <ul className="list-disc list-inside mb-3 pl-2 space-y-1">
                          {project.technicalChallenges.map(
                            (challenge, index) => (
                              <li
                                key={index}
                                className="text-gray-700 dark:text-gray-300"
                              >
                                {challenge}
                              </li>
                            )
                          )}
                        </ul>
                      </>
                    )}

                  {/* 학습 성과 */}
                  {project.learningOutcomes &&
                    project.learningOutcomes.length > 0 && (
                      <>
                        <h5 className="font-semibold mb-1 border-l-3 border-blue-400 pl-2">
                          학습 성과
                        </h5>
                        <ul className="list-disc list-inside mb-3 pl-2 space-y-1">
                          {project.learningOutcomes.map((outcome, index) => (
                            <li
                              key={index}
                              className="text-gray-700 dark:text-gray-300"
                            >
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}

                  {/* 성과 지표 */}
                  {project.performanceMetrics &&
                    Object.keys(project.performanceMetrics).length > 0 && (
                      <>
                        <h5 className="font-semibold mb-1 border-l-3 border-green-400 pl-2">
                          성과 지표
                        </h5>
                        <div className="grid grid-cols-2 gap-2 mb-3 pl-2">
                          {Object.entries(project.performanceMetrics).map(
                            ([key, value], index) => (
                              <div key={index} className="flex justify-between">
                                <span className="text-gray-600 dark:text-gray-400">
                                  {key
                                    .replace(/([A-Z])/g, " $1")
                                    .replace(/^./, (str) => str.toUpperCase())}
                                  :
                                </span>
                                <span className="font-semibold dark:text-gray-300">
                                  {value}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      </>
                    )}
                </div>
              )}
            </div>
          )}

          <h4 className="font-semibold mb-2 text-sm md:text-base border-l-4 border-gray-500 pl-2">
            사용 기술
          </h4>
          <div className="flex flex-wrap mb-4">
            {project.tech.map((tech, index) => (
              <span
                key={`${project.id}-${tech}-${index}`}
                className={`px-2 py-1 rounded-full text-xs font-medium mr-2 mb-2 ${getTechBadgeColor(
                  tech
                )}`}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* 링크 섹션 - useMemo로 최적화된 함수 호출 */}
          {renderLinks()}
        </div>
      </div>
    </motion.div>
  );
};

// React.memo를 사용하여 props가 변경되지 않으면 리렌더링 방지
export default React.memo(ProjectCard);
