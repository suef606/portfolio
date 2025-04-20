// components/ProjectsSection.tsx
import React from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

// 다크모드 여부를 받기 위한 인터페이스 정의
interface ProjectsSectionProps {
  darkMode: boolean;
}

// 프로젝트 데이터 배열 정의
const projects = [
  {
    id: 0,
    title: "인스타그램 클론",
    period: "2025.02 - 2025.04",
    type: "개인 프로젝트",
    description: "인프런 워밍업 스터디 클럽에서 구현한 프로젝트로, Supabase를 활용하여 인스타그램 기능을 클론한 애플리케이션입니다. 실시간 채팅, 사용자 인증 등의 핵심 기능을 구현했습니다.",
    roles: [
      "Supabase Auth를 활용한 로그인/회원가입 기능",
      "Supabase Realtime을 활용한 실시간 채팅 구현",
      "RLS(Row Level Security) 정책 설정으로 데이터 보안 강화",
      "메시지 읽음/안읽음, 삭제, 차단, 신고 기능 구현",
      "웹소켓 기반 실시간 UI 업데이트 경험",
    ],
    tech: [
      "Next.js 14", 
      "TypeScript", 
      "Supabase", 
      "Tailwind CSS", 
      "Material UI"
    ],
    images: [
      "/images/project/instagram/instagram_01.png",
      "/images/project/instagram/instagram_02.png",
      "/images/project/instagram/instagram_03.png",
      "/images/project/instagram/instagram_04.png",
      "/images/project/instagram/instagram_05.png"
    ],
    githubLink: "https://github.com/suef606/inflearn-supabase-instagram-clone",
    deployLink: "https://su-supabase-instagram-clone.vercel.app/",
    imageGradient: "from-pink-400 to-pink-600",
    result: "인프런 워밍업 스터디 클럽 3기 풀스택 과정에서 '우수러너'로 선정",
    technicalChallenges: [
      "Row Level Security를 통한 데이터베이스 보안 설정",
      "WebSocket 기반 실시간 채팅 구현",
      "메시지 상태 관리(읽음/안읽음, 삭제) 처리"
    ],
    learningOutcomes: [
      "Supabase를 활용한 서버리스 백엔드 구축",
      "실시간 기능 구현과 상태 관리",
      "보안 정책 설정 및 사용자 인증 처리"
    ],
  },
  {
    id: 1, 
    title: "코촉촉", 
    period: "2025.01 - 2025.03", 
    type: "팀 프로젝트", 
    description: "반려동물 도우미 구인, 중고물품 거래, 반려동물 관련 지식 공유 통합 서비스로, 바쁜 반려동물 주인들을 위한 종합 케어 플랫폼입니다.", 
    roles: [ 
      "텍스트 스타일 및 컬러 UX 가이드 시스템 구축",
      "사용자 인증 (JWT 기반 로그인/회원가입)", 
      "마이페이지/회원 관리 기능 개발", 
      "북마크/관심내역 페이지 구현", 
      "헤더 및 하단 네비게이션 바 개발", 
      "회원정보 수정 기능", 
      "모바일 최적화 UI 개발", 
      "GitHub Actions를 활용한 CI/CD 파이프라인 구축", 
    ],
    tech: [ 
      "Next.js 14", 
      "TypeScript", 
      "Zustand", 
      "Tailwind CSS", 
      "React Hook Form", 
      "Zod", 
      "GitHub Actions", 
      "REST API", 
      "Vercel", 
      "JWT 인증", 
    ],
    notionLinks: [
      {
        title: "1차 개발 문서", 
        url: "https://alder-kumquat-f96.notion.site/1-180886999ad0808eb067e4c67e6afae7?pvs=74"
      },
      {
        title: "2차 개발 문서", 
        url: "https://alder-kumquat-f96.notion.site/2-1a1886999ad0803096f8f1e51b91f670?pvs=74"
      }
    ],
    presentationLink: "https://docs.google.com/presentation/d/1JV1rqP1sghaiuu81usGx9MjgWs3jqDv2TlHlmc6CxT0/edit?usp=sharing",
    deployLink: "https://ko-chock-chock.vercel.app/", 
    githubLink: "https://github.com/suef606/ko-chock-chock_FE", 
    imageGradient: "from-blue-400 to-blue-600", 
    images: [
      "/images/project/ko-chock-chock/01_login_signup_png.png",
      "/images/project/ko-chock-chock/02_post_png.png",
      "/images/project/ko-chock-chock/03_chat_png.png",
      "/images/project/ko-chock-chock/04_map_timer_png.png",
      "/images/project/ko-chock-chock/05_mypage_png.png",
      "/images/project/ko-chock-chock/06_navigationbar_png.png",
      "/images/project/ko-chock-chock/07_mainpage_ux_png.png"
    ],
  },
  {
    id: 2,
    title: "Todo 리스트",
    period: "2025.02 - 2025.02",
    type: "개인 프로젝트",
    description: "부트캠프 과제로 작업한 Todo 리스트 애플리케이션입니다. 할 일을 추가, 수정, 삭제하고 완료 상태를 관리할 수 있는 기능을 제공합니다.",
    roles: [
      "반응형 UI/UX 개발",
      "컴포넌트 아키텍처 설계",
      "API 연동을 통한 CRUD 기능 구현",
      "이미지 업로드 기능 구현",
      "오류 처리 및 사용자 피드백 개선",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "REST API"],
    deployLink: "https://subao-todolist.vercel.app/",
    githubLink: "https://github.com/suef606/codeit_mission",
    imageGradient: "from-purple-400 to-purple-600",
    images: [
      "/images/project/todolist/todolist_01.png",
      "/images/project/todolist/todolist_02.png",
      "/images/project/todolist/todolist_03.png",
      "/images/project/todolist/todolist_04.png"
    ],
  },
  {
    id: 3,
    title: "MAiS 디자인 시스템",
    period: "2024.05 - 2024.08",
    type: "AI 플랫폼 UI/UX 프로젝트",
    description: "AI 모델 개발 및 운영 자동화 플랫폼의 UI/UX 설계 및 디자인 시스템 구축 프로젝트입니다. 복잡한 데이터 시각화와 AI 모델 운영 과정을 직관적인 UI로 단순화하는 작업을 진행했습니다.",
    detailedDescription: `넷스루의 AI 플랫폼 MAiS를 위한 포괄적인 디자인 시스템 설계 프로젝트로, 디지털 마케팅에 특화된 AI 플랫폼의 사용자 경험을 혁신적으로 개선했습니다. 
    고객 행동 데이터 기반의 AI 모델 개발 및 운영 자동화 플랫폼에 최적화된 UI/UX 가이드라인을 수립했습니다.`,
    roles: [
      "AI 플랫폼 전체 UI/UX 표준 가이드 수립",
      "컬러 시스템 및 타이포그래피 상세 설계",
      "공통 UI 컴포넌트 디자인 및 표준화",
      "복잡한 데이터 시각화 UI 설계",
      "디자인 시스템 피그마 라이브러리 구축"
    ],
    tech: [
      "Figma",
      "UI/UX 디자인",
      "디자인 시스템",
      "데이터 시각화",
      "디자인 토큰"
    ],
    technicalChallenges: [
      "복잡한 AI 모델 운영 프로세스의 직관적 시각화",
      "다양한 데이터 유형에 대응하는 유연한 컴포넌트 설계",
      "일관된 사용자 경험을 위한 디자인 토큰 체계 수립"
    ],
    learningOutcomes: [
      "AI 플랫폼의 특수한 UX 요구사항 이해",
      "복잡한 데이터 인터페이스 설계 기술 향상",
      "디자인 시스템의 확장성과 일관성 확보 방법론 학습"
    ],
    performanceMetrics: {
      componentCount: 45,
      colorVariants: 12,
      typographyStyles: 8,
      designTokens: 120
    },
    impact: "넷스루 AI 플랫폼의 사용자 경험을 혁신적으로 개선하고, 일관된 디자인 시스템 단계 수립",
    keyInsights: [
      "AI 모델 운영의 복잡성을 직관적 UI로 단순화",
      "데이터 기반 마케팅 플랫폼의 사용성 극대화",
      "확장 가능한 디자인 시스템 아키텍처 수립"
    ],
    imageGradient: "from-teal-400 to-teal-600",
    images: [
      "/images/project/mais/01_uxui guide_file.png",
      "/images/project/mais/02_mais_user flow.png",
      "/images/project/mais/03_figma_work.png"
    ],
  },
  {
    id: 4,
    title: "마트친구",
    period: "2023.12 - 2024.04",
    type: "서비스 기획 프로젝트",
    description: "소비자의 효율적인 소량 구매와 지역 마트 기반 식자재 정보 공유, 음식물 쓰레기 최소화를 위한 소량 식자재 구매 및 나눔 연결 플랫폼입니다.",
    roles: [
      "위치 기반 서비스로 마트 근처 이웃 연결",
      "마트 채널 오픈채팅방 커뮤니티 설계",
      "실시간 동네 마트 할인 정보 제공",
      "서비스 기획 및 프로토타이핑",
      "사용자 니즈 분석 및 서비스 모델 개발"
    ],
    tech: [
      "서비스 기획",
      "사용자 경험 설계",
      "프로토타이핑",
      "Figma",
      "비즈니스 모델 캔버스"
    ],
    landingPageLink: "https://martfriend.imweb.me/",
    notionLinks: [{
      title: "프로젝트 과정 노션 페이지",
      url: "https://ionian-palladium-3b0.notion.site/76c980d815254c36b91e8a8ade9e2be9"
    }],
    pdfLink: "/250221_martfriends.pdf",
    imageGradient: "from-green-400 to-green-600",
    result: "IT 서비스 기획 프로젝트 발표에서 대상 수상",
    impact: "지역 기반 소량 식자재 거래 및 나눔을 통한 음식물 쓰레기 감소 솔루션",
    images: [
      "/images/project/martfriends/martfriends_01.png",
      "/images/project/martfriends/martfriends_02.png",
      "/images/project/martfriends/martfriends_03.png",
      "/images/project/martfriends/martfriends_04.png",
      "/images/project/martfriends/martfriends_05.png"
    ],
  }
];

// 프로젝트 섹션 컴포넌트 정의
const ProjectsSection: React.FC<ProjectsSectionProps> = ({ darkMode }) => {
  // 애니메이션 효과를 위한 variants 설정
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // 각 자식 요소가 0.2초 간격으로 나타나도록 설정
      }
    }
  };

  // 모든 프로젝트를 표시
  const allProjects = projects;

  return (
    <section 
  id="projects" 
  className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-colors duration-300`}
>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 제목 */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-10 text-center"
        >
          프로젝트
        </motion.h2>
        
        {/* 프로젝트 카드 목록 */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {allProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              darkMode={darkMode} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;