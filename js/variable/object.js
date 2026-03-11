/* 메인비주얼 팝 아이콘 세트 */
const popIcons = {
  /* 크기, 프레임 여부, 이미지 경로, 이미지 alt */
  uiuxTag: [
    {size: 'medium', frame: 'frame', src: 'assets/skill/skill_aos.svg', alt: 'AOS'},
    {size: 'small', frame: '', src: 'assets/skill/skill_notion.svg', alt: '노션'},
    {size: 'large', frame: 'frame', src: 'assets/skill/skill_swiper.svg', alt: 'Swiper'},
    {size: 'small', frame: '', src: 'assets/skill/skill_photoshop.svg', alt: '포토샵'},
    {size: 'small', frame: '', src: 'assets/skill/skill_illu.svg', alt: '일러스트레이터'},
    {size: 'large', frame: 'frame', src: 'assets/skill/skill_figma.svg', alt: '피그마'}
  ],
  publishTag: [
    {size: 'large', frame: '', src: 'assets/skill/skill_html.svg', alt: 'HTML'},
    {size: 'small', frame: 'frame', src: 'assets/skill/skill_slick.svg', alt: 'Slick'},
    {size: 'small', frame: 'frame', src: 'assets/skill/skill_font-awesome.svg', alt: 'FontAwesome'},
    {size: 'large', frame: '', src: 'assets/skill/skill_css.svg', alt: 'CSS'},
    {size: 'small', frame: '', src: 'assets/skill/skill_bootstrap.svg', alt: 'Bootstrap'},
    {size: 'medium', frame: 'frame', src: 'assets/skill/skill_scss.svg', alt: 'SCSS'}
  ],
  feTag: [
    {size: 'small', frame: 'frame', src: 'assets/skill/skill_react.svg', alt: '리액트'},{size: 'large', frame: '', src: 'assets/skill/skill_js.svg', alt: 'JS'},
    {size: 'small', frame: '', src: 'assets/skill/skill_github.svg', alt: '깃허브'},
    {size: 'medium', frame: 'frame', src: 'assets/skill/skill_vscode.svg', alt: 'VSCode'},
    {size: 'large', frame: 'frame', src: 'assets/skill/skill_jquery.svg', alt: 'JQuery'},{size: 'small', frame: '', src: 'assets/skill/skill_eclipse.svg', alt: '이클립스'},
  ]
};





/* 스킬 객체 배열 */
const skills = [
  {
    type: 'fe',
    iconSrc: 'assets/skill/skill_html.svg',
    title: 'HTML',
    desc: '시멘틱 태그와 BEM 클래스 네이밍룰을 활용하여 검색 엔진 최적화(SEO) 향상, 웹 접근성 제고, 코드 가독성 및 유지보수성을 증대시키고, 디스플레이 뷰포트 변화에 따른 레이아웃 변화를 고려하여 코드를 작성합니다.'
  },
  {
    type: 'fe',
    iconSrc: 'assets/skill/skill_css.svg',
    title: 'CSS',
    desc: '다양한 방식의 선택자들을 활용하여 가독성이 높은 코드를 작성하며, css만으로 애니메이션, 간단한 기능들을 구현할 수 있습니다. 디스플레이 뷰포트 변화를 고려한 반응형 미디어쿼리를 작성할 수 있습니다.'
  },
  {
    type: 'fe',
    iconSrc: 'assets/skill/skill_js.svg',
    title: 'JavaScript',
    desc: 'DOM 조작과 이벤트 제어, 사용자 인터랙션에 필요한 기능을 구현할 수 있습니다. 조건문, 반복문, 배열 메서드 등을 활용하여 데이터를 가공하고 화면에 동적으로 반영하며, 코드의 재사용성과 가독성을 고려하여 기능 단위로 구조화합니다.'
  },
  {
    type: 'fe',
    iconSrc: 'assets/skill/skill_react.svg',
    title: 'React.js',
    desc: '컴포넌트의 구조를 이해하고 DOM 구조를 작성하여 UI에 출력할 수 있습니다. 현재 기술 스택을 향상시키기 위해 학습 중입니다.'
  },
  {
    type: 'fe',
    iconSrc: 'assets/skill/skill_scss.svg',
    title: 'SCSS',
    desc: '변수, 중첩, 믹스인 등을 활용하여 반복 코드를 줄이고 유지보수성을 고려한 스타일 구조를 설계할 수 있습니다. 공통 스타일을 모듈화하여 재사용 가능한 구조로 관리하며, 프로젝트 규모에 맞는 파일 분리 및 import 구조를 구성합니다.'
  },
  {
    type: 'fe',
    iconSrc: 'assets/skill/skill_jquery.svg',
    title: 'JQuery',
    desc: '이벤트 제어와 DOM 조작을 중심으로 UI 인터랙션을 구현할 수 있으며, 플러그인 연동을 통해 슬라이드, 탭, 모달 등 기본적인 동적 기능을 구현할 수 있습니다.'
  },
  {
    type: 'fe',
    iconSrc: 'assets/skill/skill_vscode.svg',
    title: 'Visual Studio Code',
    desc: '확장 프로그램을 활용하여 개발 환경을 편리하고 효율적으로 구성할 수 있습니다. 프로젝트 구조에 맞게 파일을 관리하며 이를 활용하여 웹 인터페이스를 구현할 수 있습니다.'
  },
  {
    type: 'fe',
    iconSrc: 'assets/skill/skill_eclipse.svg',
    title: 'Eclipse',
    desc: 'GitLab과 연동한 형상관리를 통해 여러 프로젝트를 진행한 경험이 있습니다. 기존 프로젝트 유지보수와 새로운 프로젝트에서의 웹 구현을 수행할 수 있습니다.'
  },
  {
    type: 'fe',
    iconSrc: 'assets/skill/skill_github.svg',
    title: 'GitHub',
    desc: 'GitHub를 사용하여 개인 프로젝트를 관리하고 배포한 경험이 있습니다. Repository를 생성하고, 프로젝트를 소개하기 위한 README 파일을 작성할 수 있습니다.'
  },
  {
    type: 'lib',
    iconSrc: 'assets/skill/skill_bootstrap.svg',
    title: 'Bootstrap',
    desc: '기본 컴포넌트를 활용하여 UI 디자인에 맞게 기능을 추가할 수 있습니다. 프로젝트 성격에 맞게 불필요한 스타일을 조정하거나 커스터마이징하여 디자인과 구조에 맞게 적용할 수 있습니다.'
  },
  {
    type: 'lib',
    iconSrc: 'assets/skill/skill_font-awesome.svg',
    title: 'Font Awesome',
    desc: '아이콘 시스템을 이해하고, UI 흐름에 맞는 아이콘을 선택하여 의미 전달을 보조할 수 있습니다. 크기, 색상, 상태 변화에 따른 스타일 조정을 통해 인터랙션에 맞게 활용할 수 있습니다.'
  },
  {
    type: 'lib',
    iconSrc: 'assets/skill/skill_slick.svg',
    title: 'Slick',
    desc: 'Slick Slider를 활용하여 반응형 슬라이더를 구현할 수 있으며, 옵션 설정을 통해 autoplay, navigation, fade 효과 등 기본 기능을 적용할 수 있습니다. 프로젝트 요구사항에 맞게 초기화 및 커스터마이징이 가능합니다.'
  },
  {
    type: 'lib',
    iconSrc: 'assets/skill/skill_swiper.svg',
    title: 'Swiper',
    desc: '반응형 슬라이더를 구현할 수 있으며, 옵션 설정을 통해 autoplay, pagination, navigation, loop 등 다양한 기능을 적용할 수 있습니다. 프로젝트 구조에 맞게 초기화 시점과 이벤트 연동을 고려하여 구성할 수 있습니다.'
  },
  {
    type: 'lib',
    iconSrc: 'assets/skill/skill_aos.svg',
    title: 'AOS',
    desc: 'AOS 라이브러리를 활용하여 스크롤 기반 애니메이션을 적용할 수 있으며, 데이터 속성을 활용해 애니메이션 효과와 타이밍을 조정할 수 있습니다.'
  },
  {
    type: 'design',
    iconSrc: 'assets/skill/skill_figma.svg',
    title: 'Figma',
    desc: 'UI 와이어프레임을 작성하고 퍼블리싱 구조를 고려하여 UI 디자인을 할 수 있습니다. 오토레이아웃과 변수, 컴포넌트 구조를 이해하고 활용할 수 있습니다. 협업 과정에서 코멘트 및 피드백을 활용해 디자인 의도를 정확히 반영할 수 있습니다.'
  },
  {
    type: 'design',
    iconSrc: 'assets/skill/skill_photoshop.svg',
    title: 'Photoshop',
    desc: '웹에 필요한 이미지 보정, 간단한 편집 및 UI 요소 추출 작업을 수행할 수 있습니다. 디자인 시안을 참고하여 퍼블리싱에 필요한 리소스를 가공할 수 있습니다.'
  },
  {
    type: 'design',
    iconSrc: 'assets/skill/skill_illu.svg',
    title: 'Illustrator',
    desc: '아이콘이나 간단한 벡터 이미지를 수정 및 추출할 수 있습니다. 디자인 시안을 참고하여 퍼블리싱에 필요한 리소스를 가공할 수 있습니다.'
  },
  {
    type: 'product',
    iconSrc: 'assets/skill/skill_notion.svg',
    title: 'Notion',
    desc: '프로젝트 일정과 업무 내용을 정리하고, 기능 정의 및 회의 내용을 문서화할 수 있습니다. 협업 시 팀원들에게 정보를 전달하고 기록을 체계적으로 관리할 수 있습니다.'
  },
  {
    type: 'product',
    iconSrc: 'assets/skill/skill_slack.svg',
    title: 'Slack',
    desc: '팀원들과의 실시간 커뮤니케이션 도구로 활용해왔으며, 채널 기반 협업을 통해 업무 내용을 공유하고 이슈를 빠르게 전달할 수 있습니다. Figma 앱과 연동하여 팀원들과 실시간 피드백을 주고받을 수 있습니다.'
  },
];





/* 경력사항 객체 배열 */
const careers = [
  {
    date: '2022.10 - 2025.02',
    project: '철도 검사 업무 자동화 시스템',
    detail: '요구사항 수집/분석, SW 검증, 사용자 매뉴얼 작성 및 CS 지원',
    graph: [
      {
        type: 'uiux',
        work: '요구사항 분석',
        percent: 50,
      },
      {
        type: 'test',
        work: 'SW 검증',
        percent: 50,
      },
      {
        type: 'uiux',
        work: 'CS 지원',
        percent: 50,
      }
    ]
  },
  {
    date: '2024.12 - 2025.01',
    project: 'SW V&V 검증',
    detail: 'SW 검증, 시험성적서 발급',
    graph: [
      {
        type: 'test',
        work: 'SW 검증',
        percent: 100,
      },
      {
        type: 'test',
        work: '시험 성적서 작성 및 발급',
        percent: 90,
      }
    ]
  },
  {
    date: '2024.08 - 2025.01',
    project: 'SW 숙련도 평가 서비스 리뉴얼 및 추가 개발',
    detail: 'UI 퍼블리싱, SW 검증',
    graph: [
      {
        type: 'coding',
        work: 'UI 퍼블리싱',
        percent: 100,
      },
      {
        type: 'test',
        work: 'SW 검증',
        percent: 50,
      }
    ]
  },
  {
    date: '2024.11 - 2024.12',
    project: '구조물 안전 모니터링 시스템 리뉴얼',
    detail: 'UI/UX 설계',
    graph: [
      {
        type: 'uiux',
        work: 'UI/UX 설계',
        percent: 80,
      }
    ]
  },
  {
    date: '2024.08 - 2024.12',
    project: '통신 센서 관리 시스템',
    detail: '요구사항 수집/분석, UI/UX 설계',
    graph: [
      {
        type: 'uiux',
        work: '요구사항 분석',
        percent: 80,
      },
      {
        type: 'uiux',
        work: 'UI/UX 설계',
        percent: 100,
      }
    ]
  },
  {
    date: '2024.05 - 2024.12',
    project: '온라인 시험 접수 관리 솔루션',
    detail: 'UI 퍼블리싱',
    graph: [
      {
        type: 'coding',
        work: 'UI 퍼블리싱',
        percent: 60,
      }
    ]
  },
  {
    date: '2024.04 - 2024.12',
    project: '암호모듈 검증 시스템 추가 개발 및 유지보수',
    detail: '요구사항 수집/분석, UI 퍼블리싱, SW 검증',
    graph: [
      {
        type: 'uiux',
        work: '요구사항 분석',
        percent: 50,
      },
      {
        type: 'coding',
        work: 'UI 퍼블리싱',
        percent: 100,
      },
      {
        type: 'test',
        work: 'SW 검증',
        percent: 50,
      }
    ]
  },
  {
    date: '2023.12 - 2024.11',
    project: '발전시설 일지 관리 시스템',
    detail: '요구사항 수집/분석, UI/UX 설계, SW 검증, 사용자 매뉴얼 작성 및 CS 지원',
    graph: [
      {
        type: 'uiux',
        work: '요구사항 분석',
        percent: 90,
      },
      {
        type: 'uiux',
        work: 'UI/UX 설계',
        percent: 100,
      },
      {
        type: 'test',
        work: 'SW 검증',
        percent: 90,
      },
      {
        type: 'uiux',
        work: 'CS 지원',
        percent: 80,
      }
    ]
  },
  {
    date: '2022.11 - 2024.11',
    project: '축구클럽 관리 솔루션',
    detail: '요구사항 수집/분석, UI/UX 설계, UI 디자인',
    graph: [
      {
        type: 'uiux',
        work: '요구사항 분석',
        percent: 100,
      },
      {
        type: 'uiux',
        work: 'UI/UX 설계',
        percent: 100,
      },
      {
        type: 'uiux',
        work: 'UI 디자인',
        percent: 20,
      }
    ]
  },
  {
    date: '2024.09 - 2024.10',
    project: '디지털트윈 실험 모니터링 시스템',
    detail: 'UI 퍼블리싱',
    graph: [
      {
        type: 'coding',
        work: 'UI 퍼블리싱',
        percent: 100,
      }
    ]
  },
  {
    date: '2024.03 - 2024.06',
    project: '사내 홈페이지 리뉴얼',
    detail: 'UI 퍼블리싱',
    graph: [
      {
        type: 'coding',
        work: 'UI 퍼블리싱',
        percent: 100,
      }
    ]
  },
  {
    date: '2024.03',
    project: '퍼블리싱 네이밍 가이드 및 베이스 프로젝트 구축',
    detail: '업무 가이드 명세화, 베이스 프로젝트 구축',
    graph: [
      {
        type: 'uiux',
        work: '업무 가이드 명세화',
        percent: 80,
      },
      {
        type: 'coding',
        work: '베이스 프로젝트 구축',
        percent: 100,
      }
    ]
  },
  {
    date: '2023.06 - 2024.02',
    project: '대역별 주파수 연계 기기 관리 시스템',
    detail: '요구사항 수집/분석, UI/UX 설계, UI 퍼블리싱',
    graph: [
      {
        type: 'uiux',
        work: '요구사항 분석',
        percent: 80,
      },
      {
        type: 'uiux',
        work: 'UI/UX 설계',
        percent: 100,
      },
      {
        type: 'coding',
        work: 'UI 퍼블리싱',
        percent: 80,
      }
    ]
  },
  {
    date: '2023.08 - 2024.01',
    project: '해양 기술 알고리즘 관리 플랫폼',
    detail: '요구사항 수집/분석, UI/UX 설계, UI 퍼블리싱, SW 검증',
    graph: [
      {
        type: 'uiux',
        work: '요구사항 분석',
        percent: 80,
      },
      {
        type: 'uiux',
        work: 'UI/UX 설계',
        percent: 100,
      },
      {
        type: 'coding',
        work: 'UI 퍼블리싱',
        percent: 90,
      },
      {
        type: 'test',
        work: 'SW 검증',
        percent: 100,
      }
    ]
  },
  {
    date: '2023.05 - 2023.11',
    project: 'GUI기반 시뮬레이션 자동화 시스템',
    detail: '요구사항 수집/분석, UI/UX 설계, UI 퍼블리싱, 사용자 매뉴얼 작성 및 CS 지원',
    graph: [
      {
        type: 'uiux',
        work: '요구사항 분석',
        percent: 80,
      },
      {
        type: 'uiux',
        work: 'UI/UX 설계',
        percent: 100,
      },
      {
        type: 'coding',
        work: 'UI 퍼블리싱',
        percent: 80,
      },
      {
        type: 'uiux',
        work: 'CS 지원',
        percent: 100,
      }
    ]
  },
  {
    date: '2023.06 - 2023.07',
    project: '사내 포탈 기획',
    detail: '요구사항 수집/분석, UI/UX 설계',
    graph: [
      {
        type: 'uiux',
        work: '요구사항 분석',
        percent: 100,
      },
      {
        type: 'uiux',
        work: 'UI/UX 설계',
        percent: 100,
      }
    ]
  },
  {
    date: '2022.09 - 2023.05',
    project: '철도 요구사항 관리 플랫폼',
    detail: 'UI 퍼블리싱, 홍보 컨텐츠 기획',
    graph: [
      {
        type: 'coding',
        work: 'UI 퍼블리싱',
        percent: 10,
      },
      {
        type: 'coding',
        work: '홍보 컨텐츠 기획',
        percent: 10,
      }
    ]
  },
  {
    date: '2023.01 - 2023.03',
    project: 'GS인증 컨설팅',
    detail: '검증 체크리스트 문서 작성, SW 검증',
    graph: [
      {
        type: 'test',
        work: '검증 체크리스트 문서 작성',
        percent: 100,
      },
      {
        type: 'test',
        work: 'SW 검증',
        percent: 100,
      }
    ]
  },
  {
    date: '2022.09 - 2022.12',
    project: 'SW 숙련도 평가 서비스',
    detail: 'UI/UX 설계, UI 퍼블리싱, SW 검증',
    graph: [
      {
        type: 'uiux',
        work: 'UI/UX 설계',
        percent: 20,
      },
      {
        type: 'uiux',
        work: 'UI 퍼블리싱',
        percent: 20,
      },
      {
        type: 'test',
        work: 'SW 검증',
        percent: 80,
      }
    ]
  },
  {
    date: '2022.10',
    project: 'UI 퍼블리싱 외주',
    detail: 'UI 퍼블리싱',
    graph: [
      {
        type: 'coding',
        work: 'UI 퍼블리싱',
        percent: 10,
      }
    ]
  },
  {
    date: '2022.09 - 2022.10',
    project: '비대면 온라인 시험 접수 서비스',
    detail: '반응형 UI 퍼블리싱',
    graph: [
      {
        type: 'coding',
        work: '반응형 UI 퍼블리싱',
        percent: 90,
      }
    ]
  }
];





/* 프로젝트 객체 배열 */
const projects = [
  {
    id: 'djcitytour',  // 이미지 소스 폴더명과 동일
    swId: 'djcitytourSwiper',
    pcMockSrc: 'dct_pc.png',
    tabMocSrc01: 'dct_tab_2.png',
    tabMocSrc02: 'dct_tab_1.png',
    moMock01: 'dct_mo_1.png',
    moMock02: 'dct_mo_2.png',
    moMock03: 'dct_mo_3.png',
    prjctNm: '대전시티투어 웹사이트 리뉴얼',
    tag: ['개인 프로젝트', '리뉴얼', '반응형'],
    desc: '여행이라는  주제를 동적 요소들로 재미있게 표현하고자 했습니다. 컨텐츠의 정렬 시스템을 재정리하면서 여러 장소를 여행하는 느낌을 주고자 했습니다. 새로운 컬러 시스템과 그리드 시스템, 다양한 인터랙션 효과들로 정보들을 다채롭게 구성했습니다.',
    period: '2.5 Mon',
    planning: 100,
    design: 100,
    develop: 100,
    skill: ['html', 'css', 'js', 'jquery', 'figma', 'vscode', 'swiper', 'bootstrap', 'font-awesome'],
    githubUrl: 'https://github.com/kimdo0-0515/daejeoncitytour.git',
    webUrl: 'https://kimdo0-0515.github.io/daejeoncitytour/',
  },
  {
    id: 'playstation',
    swId: 'playstationSwiper',
    pcMockSrc: 'ps_pc.png',
    tabMocSrc01: 'ps_tab_2.png',
    tabMocSrc02: 'ps_tab_1.png',
    moMock01: 'ps_mo_1.png',
    moMock02: 'ps_mo_2.png',
    moMock03: 'ps_mo_3.png',
    prjctNm: 'PlayStation 웹사이트 리뉴얼',
    tag: ['팀 프로젝트', '리뉴얼', '반응형'],
    desc: 'PlayStation 브랜드 아이덴티티와 사용자 경험을 재해석했습니다. 게임 콘텐츠 중심의 구조로 정보 계층을 정리하고, 상세 페이지를 데이터 기반 구조로 설계하여 확장성과 유지보수성을 고려했습니다. 애니메이션과 다양한 인터랙션 효과를 적용해 몰입감 있는 UX를 구현했습니다.',
    period: '1.5 Mon',
    planning: 30,
    design: 30,
    develop: 50,
    skill: ['html', 'css', 'js', 'jquery', 'figma', 'vscode', 'swiper', 'bootstrap'],
    githubUrl: 'https://github.com/kimdo0-0515/playstation.git',
    webUrl: 'https://kimdo0-0515.github.io/playstation/',
  },
  {
    id: 'beyondInsight',
    swId: 'beyondInsightSwiper',
    pcMockSrc: 'beyond_pc.png',
    tabMocSrc01: 'beyond_tab_1.png',
    tabMocSrc02: 'beyond_tab_2.png',
    moMock01: 'beyond_mo_1.png',
    moMock02: 'beyond_mo_2.png',
    moMock03: 'beyond_mo_3.png',
    prjctNm: 'Beyond Insight 웹사이트 구현',
    tag: ['개인 프로젝트', '신규 구축', '반응형'],
    desc: '인터넷 강의 플랫폼의 전형적인 페이지 흐름을 기반으로 SCSS 아키텍처 설계와 jQuery 인터랙션을 중심으로 구현한 퍼블리싱 프로젝트입니다. 실제 서비스 구조를 가정하여 메인 → 카테고리 → 상세 → 장바구니 → 회원가입까지 전체 흐름을 구성했습니다.',
    period: '1 Week',
    planning: 100,
    design: 100,
    develop: 100,
    skill: ['html', 'css', 'scss', 'jquery', 'vscode', 'slick', 'bootstrap'],
    githubUrl: 'https://github.com/kimdo0-0515/beyond-insight.git',
    webUrl: 'https://kimdo0-0515.github.io/beyond-insight/',
  }
];





/* 교육활동 객체 배열 */
const educations = [
  {
    date: '2022.11',
    title: '프로젝트 기반 AI활용 React 프론트엔드 개발자',
    institution: '그린컴퓨터아트학원',
    detail: [
      '웹 기반 SW 설계 및 구현, 테스트 수행',
      'UI 프레임워크와 스크립트 언어 활용',
      'React를 활용하여 모바일 및 싱글 페이지 애플리케이션(SPA) 개발'
    ]
  },
  {
    date: '2023.10',
    title: '파이썬을 활용한 머신러닝',
    institution: '멀티캠퍼스',
    detail: [
      '알고리즘 모델들의 이해 및 머신러닝 모델 훈련',
      '교육 수료'
    ]
  },
  {
    date: '2023.08',
    title: 'ISTQB Foundation Level 자격 검증 교육',
    institution: '대전정보문화 산업진흥원',
    detail: [
      'ISTQB Foundation Level 자격 검증 교육 수료',
      'ISTQB Foundation Level 자격증 취득'
    ]
  },
  {
    date: '2023.05',
    title: 'RPA 개발자 개발 능력 향상 교육',
    institution: '블루프리즘 코리아',
    detail: [
      'RPA 개발자 개발 능력 향상 교육 수강',
      '교육 수료'
    ]
  },
  {
    date: '2022.11',
    title: 'KS Q ISO/IEC 17025 요구 이해',
    institution: '한국인정지원센터',
    detail: [
      'KS Q ISO/IEC 17025 요구 이해',
      '교육 수료'
    ]
  },
  {
    date: '2022.10',
    title: '측정불확도 추정 절차 이론 학습 및 실습',
    institution: '한국인정지원센터',
    detail: [
      '측정불확도 추정 절차 이론 학습 및 실습',
      '교육 수료'
    ]
  },

];
