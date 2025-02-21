// components/ProjectsSection.tsx
import React from 'react';
import ProjectCard from './ProjectCard';

interface ProjectsSectionProps {
  darkMode: boolean;
}

// 프로젝트 데이터
const projects = [
  {
    id: 1,
    title: "코촉촉",
    period: "2024.12 - 2025.02",
    type: "팀 프로젝트",
    description: "반려동물 도우미 구인, 중고물품 거래, 반려동물 관련 지식 공유 통합 서비스로, 바쁜 반려동물 주인들을 위한 종합 케어 플랫폼입니다.",
    roles: [
      "사용자 인증 (JWT 기반 로그인/회원가입)",
      "마이페이지/회원 관리 기능 개발",
      "북마크/관심내역 페이지 구현",
      "헤더 및 하단 네비게이션 바 개발",
      "회원정보 수정 기능",
      "채팅 및 지도 연동 기능 구현",
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
    features: [
      "반려동물 도우미 구인/구직 게시판",
      "중고물품 거래 게시판",
      "반려동물 지식 공유 커뮤니티",
      "채팅 기능",
      "지도 연동 산책 기능",
      "북마크 및 관심 게시물 추적"
    ],
    deployLink: "https://ko-chock-chock.vercel.app/",
    githubLink: "https://github.com/suef606/ko-chock-chock_FE",
    imageGradient: "from-blue-400 to-blue-600",
  },
  {
    id: 2,
    title: "Todo 리스트",
    period: "2024.01 - 2024.02",
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
  },
  {
    id: 3,
    title: "MAiS 디자인 시스템",
    period: "2024.05 - 2024.08",
    type: "넷스루",
    description: "AI 모델 개발 및 운영 자동화 플랫폼의 UI/UX 설계 및 디자인 시스템 구축 프로젝트입니다. 복잡한 데이터 시각화와 AI 모델 운영 과정을 직관적인 UI로 단순화하는 작업을 진행했습니다.",
    roles: [
      "UI/UX 표준 가이드 수립",
      "컬러 시스템 및 타이포그래피 설계",
      "공통 UI 컴포넌트 디자인",
      "데이터 시각화 UI 설계",
    ],
    tech: ["Figma", "UI/UX 디자인", "디자인 시스템", "데이터 시각화"],
    deployLink: "",
    githubLink: "",
    imageGradient: "from-teal-400 to-teal-600",
  },
  {
    id: 4,
    title: "마트친구",
    period: "2023.12 - 2024.04",
    type: "IT 서비스 기획자 스쿨 프로젝트",
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
    features: [
      "위치 기반 마트 근처 이웃 연결",
      "마트 오픈채팅방 커뮤니티",
      "실시간 마트 할인 정보",
      "소량 식자재 구매 및 나눔 서비스"
    ],
    landingPageLink: "https://martfriend.imweb.me/",
    notionLink: "https://ionian-palladium-3b0.notion.site/76c980d815254c36b91e8a8ade9e2be9",
    pdfLink: "/250221_martfriends.pdf",
    githubLink: "",
    imageGradient: "from-green-400 to-green-600",
    result: "IT 서비스 기획 프로젝트 발표에서 대상 수상",
    impact: "지역 기반 소량 식자재 거래 및 나눔을 통한 음식물 쓰레기 감소 솔루션"
  },
  {
    id: 5,
    title: "FAM WITHUS",
    period: "2022.11 - 2022.12",
    type: "서울시민대학 소셜임팩트 미니 창업 프로젝트",
    description: "고령화 사회의 디지털 기술 장벽을 해소하고, 노인들을 위한 맞춤형 건강 케어 서비스를 제안하는 혁신적인 프로젝트입니다.",
    roles: [
      "고령사회 디지털 격차 문제 분석",
      "노인들의 AI 기기 사용 어려움 연구",
      "맞춤형 건강 케어 서비스 기획",
      "고객 가치 제안(CVP) 설계",
      "서비스 브랜딩 및 방향성 수립"
    ],
    tech: [
      "서비스 기획",
      "문제 정의 및 시장 분석",
      "고객 여정 맵핑",
      "아이디어 발전 방법론"
    ],
    features: [
      "노인 맞춤형 디지털 건강 케어",
      "기술 장벽 해소 접근",
      "개인화된 건강 서비스 제공"
    ],
    notionLink: "https://ionian-palladium-3b0.notion.site/5448eef5a24a40d9bd39988b975fab72",
    pdfLink: "/250221_fam-withus.pdf",
    githubLink: "",
    imageGradient: "from-pink-400 to-pink-600",
    impact: "고령사회의 디지털 격차 해소를 위한 혁신적인 건강 케어 서비스 컨셉 제안",
    keyInsights: [
      "2025년 65세 이상 노인 인구 1051만명 예상",
      "2040년 고령인구 분포가 한국 전체 인구 수의 34.4%로 전망",
      "2022년 대비 2023년 예산 13% 증가 예상"
    ]
  }
];

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ darkMode }) => {
  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-10 text-center">프로젝트</h2>
        
        <div className="space-y-12">
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              darkMode={darkMode} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;