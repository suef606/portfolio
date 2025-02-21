// components/ProjectsSection.tsx
import React from 'react'; // useState 제거
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion'; // 애니메이션 효과를 위한 라이브러리 임포트

// 다크모드 여부를 받기 위한 인터페이스 정의
interface ProjectsSectionProps {
  darkMode: boolean;
}

// 프로젝트 데이터 배열 정의
// 각 프로젝트에는 id, title, period 등의 기본 정보와 함께
// 상세 정보, 담당 역할, 사용 기술, 링크 등이 포함됨
const projects = [
  {
    id: 1, // 고유 식별자
    title: "코촉촉", // 프로젝트 제목
    period: "2024.12 - 2025.02", // 프로젝트 기간
    type: "팀 프로젝트", // 프로젝트 유형
    description: "반려동물 도우미 구인, 중고물품 거래, 반려동물 관련 지식 공유 통합 서비스로, 바쁜 반려동물 주인들을 위한 종합 케어 플랫폼입니다.", // 프로젝트 개요
    roles: [ // 담당 역할 목록
      "텍스트 스타일 및 컬러 UX 가이드 시스템 구축",
      "사용자 인증 (JWT 기반 로그인/회원가입)", // JWT 기반 인증 시스템 구현
      "마이페이지/회원 관리 기능 개발", // 사용자 프로필 및 회원 정보 관리 기능
      "북마크/관심내역 페이지 구현", // 관심 게시물 저장 및 조회 기능
      "헤더 및 하단 네비게이션 바 개발", // 모바일 친화적 네비게이션 UI 구현
      "회원정보 수정 기능", // 사용자 정보 업데이트 기능
      "모바일 최적화 UI 개발", // 반응형 인터페이스 설계
      "GitHub Actions를 활용한 CI/CD 파이프라인 구축", // 자동화된 배포 시스템 구축
    ],
    tech: [ // 사용 기술 스택
      "Next.js 14", // 최신 Next.js 프레임워크
      "TypeScript", // 타입 안정성을 위한 TypeScript
      "Zustand", // 상태 관리 라이브러리
      "Tailwind CSS", // 유틸리티 기반 CSS 프레임워크
      "React Hook Form", // 폼 관리 라이브러리
      "Zod", // 폼 유효성 검증 라이브러리
      "GitHub Actions", // CI/CD 자동화 도구
      "REST API", // 백엔드 통신 방식
      "Vercel", // 배포 플랫폼
      "JWT 인증", // 토큰 기반 인증 시스템
    ],
    features: [ // 주요 기능 목록
      "반려동물 도우미 구인/구직 게시판", // 돌봄 서비스 매칭 기능
      "중고물품 거래 게시판", // 반려동물 용품 거래 기능
      "반려동물 지식 공유 커뮤니티", // 정보 공유 기능
      "채팅 기능", // 실시간 사용자 간 소통 기능
      "지도 연동 산책 기능", // 위치 기반 서비스
      "북마크 및 관심 게시물 추적" // 개인화 기능
    ],
    // 노션 문서 링크 - 개발 과정과 주요 결정사항 문서화
    notionLinks: [
      {
        title: "1차 개발 문서", // 1차 개발 계획 및 결과 문서
        url: "https://alder-kumquat-f96.notion.site/1-180886999ad0808eb067e4c67e6afae7?pvs=74"
      },
      {
        title: "2차 개발 문서", // 2차 개발 계획 및 결과 문서
        url: "https://alder-kumquat-f96.notion.site/2-1a1886999ad0803096f8f1e51b91f670?pvs=74"
      }
    ],
    // 데모데이 발표자료 링크 - 요청에 맞게 추가됨
    presentationLink: "https://docs.google.com/presentation/d/1JV1rqP1sghaiuu81usGx9MjgWs3jqDv2TlHlmc6CxT0/edit?usp=sharing",
    deployLink: "https://ko-chock-chock.vercel.app/", // 실제 서비스 배포 링크
    githubLink: "https://github.com/suef606/ko-chock-chock_FE", // 소스 코드 저장소 링크
    imageGradient: "from-blue-400 to-blue-600", // 프로젝트 카드 이미지 그라데이션 색상
  },
  {
    id: 2,
    title: "Todo 리스트",
    period: "2025.02 - 2025.02",
    type: "개인 프로젝트",
    description: "부트캠프 과제로 작업한 Todo 리스트 애플리케이션입니다. 할 일을 추가, 수정, 삭제하고 완료 상태를 관리할 수 있는 기능을 제공합니다.",
    roles: [
      "반응형 UI/UX 개발", // 다양한 화면 크기 지원
      "컴포넌트 아키텍처 설계", // 재사용 가능한 컴포넌트 구조화
      "API 연동을 통한 CRUD 기능 구현", // 데이터 관리 기능
      "이미지 업로드 기능 구현", // 멀티미디어 지원
      "오류 처리 및 사용자 피드백 개선", // UX 향상 기능
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "REST API"], // 사용 기술 스택
    deployLink: "https://subao-todolist.vercel.app/", // 배포 링크
    githubLink: "https://github.com/suef606/codeit_mission", // 소스 코드 링크
    imageGradient: "from-purple-400 to-purple-600", // 카드 이미지 그라데이션
  },
  {
    id: 3,
    title: "MAiS 디자인 시스템",
    period: "2024.05 - 2024.08",
    type: "넷스루 AI 플랫폼 UI/UX 프로젝트",
    description: "AI 모델 개발 및 운영 자동화 플랫폼의 UI/UX 설계 및 디자인 시스템 구축 프로젝트입니다. 복잡한 데이터 시각화와 AI 모델 운영 과정을 직관적인 UI로 단순화하는 작업을 진행했습니다.",
    detailedDescription: `넷스루의 AI 플랫폼 MAiS를 위한 포괄적인 디자인 시스템 설계 프로젝트로, 디지털 마케팅에 특화된 AI 플랫폼의 사용자 경험을 혁신적으로 개선했습니다. 
    고객 행동 데이터 기반의 AI 모델 개발 및 운영 자동화 플랫폼에 최적화된 UI/UX 가이드라인을 수립했습니다.`, // 상세 설명
    roles: [
      "AI 플랫폼 전체 UI/UX 표준 가이드 수립", // 디자인 가이드라인 제작
      "컬러 시스템 및 타이포그래피 상세 설계", // 시각적 일관성 확보
      "공통 UI 컴포넌트 디자인 및 표준화", // 재사용 가능한 컴포넌트 제작
      "복잡한 데이터 시각화 UI 설계", // 데이터 시각화 솔루션
      "디자인 시스템 피그마 라이브러리 구축" // 디자인 자산 관리
    ],
    tech: [
      "Figma", // 디자인 도구
      "UI/UX 디자인", // 사용자 경험 설계
      "디자인 시스템", // 체계적인 디자인 관리
      "데이터 시각화", // 데이터 표현 방식
      "디자인 토큰" // 디자인 변수 시스템
    ],
    technicalChallenges: [ // 기술적 도전 과제
      "복잡한 AI 모델 운영 프로세스의 직관적 시각화",
      "다양한 데이터 유형에 대응하는 유연한 컴포넌트 설계",
      "일관된 사용자 경험을 위한 디자인 토큰 체계 수립"
    ],
    learningOutcomes: [ // 학습 성과
      "AI 플랫폼의 특수한 UX 요구사항 이해",
      "복잡한 데이터 인터페이스 설계 기술 향상",
      "디자인 시스템의 확장성과 일관성 확보 방법론 학습"
    ],
    performanceMetrics: { // 성과 지표
      componentCount: 45, // 제작된 컴포넌트 수
      colorVariants: 12, // 컬러 변형 수
      typographyStyles: 8, // 텍스트 스타일 수
      designTokens: 120 // 디자인 토큰 수
    },
    impact: "넷스루 AI 플랫폼의 사용자 경험을 혁신적으로 개선하고, 일관된 디자인 시스템 단계 수립", // 프로젝트 영향력
    keyInsights: [ // 주요 인사이트
      "AI 모델 운영의 복잡성을 직관적 UI로 단순화",
      "데이터 기반 마케팅 플랫폼의 사용성 극대화",
      "확장 가능한 디자인 시스템 아키텍처 수립"
    ],
    deployLink: "", // 배포 링크 (비공개)
    githubLink: "", // 깃허브 링크 (비공개)
    imageGradient: "from-teal-400 to-teal-600", // 이미지 그라데이션 색상
  },
  {
    id: 4,
    title: "마트친구",
    period: "2023.12 - 2024.04",
    type: "IT 서비스 기획자 스쿨 프로젝트",
    description: "소비자의 효율적인 소량 구매와 지역 마트 기반 식자재 정보 공유, 음식물 쓰레기 최소화를 위한 소량 식자재 구매 및 나눔 연결 플랫폼입니다.",
    roles: [
      "위치 기반 서비스로 마트 근처 이웃 연결", // 지역 커뮤니티 기능
      "마트 채널 오픈채팅방 커뮤니티 설계", // 소통 플랫폼 설계
      "실시간 동네 마트 할인 정보 제공", // 정보 제공 시스템
      "서비스 기획 및 프로토타이핑", // 서비스 설계
      "사용자 니즈 분석 및 서비스 모델 개발" // 사용자 중심 접근
    ],
    tech: [
      "서비스 기획", // 기획 방법론
      "사용자 경험 설계", // UX 디자인
      "프로토타이핑", // 서비스 시연
      "Figma", // 디자인 도구
      "비즈니스 모델 캔버스" // 사업 모델 설계
    ],
    features: [ // 주요 기능
      "위치 기반 마트 근처 이웃 연결",
      "마트 오픈채팅방 커뮤니티",
      "실시간 마트 할인 정보",
      "소량 식자재 구매 및 나눔 서비스"
    ],
    landingPageLink: "https://martfriend.imweb.me/", // 랜딩 페이지
    notionLinks: [{ // 노션 문서 링크 객체로 변환
      title: "프로젝트 과정 노션 페이지",
      url: "https://ionian-palladium-3b0.notion.site/76c980d815254c36b91e8a8ade9e2be9"
    }],
    pdfLink: "/250221_martfriends.pdf", // PDF 문서 링크
    githubLink: "", // 소스 코드 (비공개)
    imageGradient: "from-green-400 to-green-600", // 카드 이미지 그라데이션
    result: "IT 서비스 기획 프로젝트 발표에서 대상 수상", // 프로젝트 결과
    impact: "지역 기반 소량 식자재 거래 및 나눔을 통한 음식물 쓰레기 감소 솔루션" // 프로젝트 영향력
  },
  {
    id: 5,
    title: "FAM WITHUS",
    period: "2022.11 - 2022.12",
    type: "서울시민대학 소셜임팩트 미니 창업 프로젝트",
    description: "고령화 사회의 디지털 기술 장벽을 해소하고, 노인들을 위한 맞춤형 건강 케어 서비스를 제안하는 혁신적인 프로젝트입니다.",
    roles: [
      "고령사회 디지털 격차 문제 분석", // 사회 문제 연구
      "노인들의 AI 기기 사용 어려움 연구", // 사용자 조사
      "맞춤형 건강 케어 서비스 기획", // 서비스 설계
      "고객 가치 제안(CVP) 설계", // 가치 제안
      "서비스 브랜딩 및 방향성 수립" // 브랜드 전략
    ],
    tech: [
      "서비스 기획", // 기획 방법론
      "문제 정의 및 시장 분석", // 마켓 리서치
      "고객 여정 맵핑", // 사용자 경험 설계
      "아이디어 발전 방법론" // 창의적 사고
    ],
    features: [ // 주요 기능
      "노인 맞춤형 디지털 건강 케어",
      "기술 장벽 해소 접근",
      "개인화된 건강 서비스 제공"
    ],
    notionLinks: [{ // 노션 문서 링크 객체로 변환
      title: "프로젝트 문서",
      url: "https://ionian-palladium-3b0.notion.site/5448eef5a24a40d9bd39988b975fab72"
    }],
    pdfLink: "/250221_fam-withus.pdf", // PDF 문서 링크
    githubLink: "", // 소스 코드 (비공개)
    imageGradient: "from-pink-400 to-pink-600", // 카드 이미지 그라데이션
    impact: "고령사회의 디지털 격차 해소를 위한 혁신적인 건강 케어 서비스 컨셉 제안", // 프로젝트 영향력
    keyInsights: [ // 주요 인사이트
      "2025년 65세 이상 노인 인구 1051만명 예상",
      "2040년 고령인구 분포가 한국 전체 인구 수의 34.4%로 전망",
      "2022년 대비 2023년 예산 13% 증가 예상"
    ]
  }
];

// 프로젝트 섹션 컴포넌트 정의
const ProjectsSection: React.FC<ProjectsSectionProps> = ({ darkMode }) => {
  // filter 상태 변수 제거
  // const [filter, setFilter] = useState<string>('all');
  
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

  // 필터링 관련 코드 제거 - 사용하지 않는 필터링 로직
  // 모든 프로젝트를 표시
  const allProjects = projects;

  return (
    <section 
      id="projects" 
      className={`py-20 ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-900'} transition-colors duration-300`}
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
        
        {/* 필터 버튼 영역 제거 - 사용하지 않는 UI 요소 */}
        
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