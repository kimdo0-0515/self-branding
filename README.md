# 👨‍💻 김도영 포트폴리오 웹사이트

> **프론트엔드 개발자로서의 역량과 프로젝트 경험을 구조적으로 정리한 개인 포트폴리오 웹사이트입니다.**  
> 💡 기획부터 디자인, 퍼블리싱, 프론트엔드 로직 설계까지 전 과정을 100% 수행한 개인 프로젝트입니다.

---

## 📊 프로젝트 진행

### 📝 업무 및 역할
> 기획 / 디자인 / 퍼블리싱 / 프론트엔드 ***100%***

### 📆 작업 기간
> 2026.02.24 ~ 2026.03.02 (1 week)

---

## 🛠️ 기술 스택

#### Frontend
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

#### Library
![Swiper](https://img.shields.io/badge/Swiper-6332F6?style=flat-square&logo=swiper&logoColor=white)
![Font Awesome](https://img.shields.io/badge/Font_Awesome-528DD7?style=flat-square&logo=fontawesome&logoColor=white)

#### Tool
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white)

---

## 🔗 작업 결과물 & 문서 링크

- 🌐 **웹사이트 URL**  
  👉 [김도영 | 프론트엔드 개발자](https://kimdo0-0515.github.io/self-branding/)

- 🖥️ **화면 디자인**  
  👉 [화면 디자인 with Figma](https://www.figma.com/design/NHlumEmDgUXvsFOomavaRH/%EA%B9%80%EB%8F%84%EC%98%81_%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4?node-id=201-5971&t=5p4FvKr4wYzlo2CK-1)

---

## 🧭 웹사이트 개요

### 📌 프로젝트 소개
본 포트폴리오 웹사이트는 단순한 이력 나열이 아닌,  
**데이터 기반 구조 설계와 동적 렌더링을 중심으로 구현한 프론트엔드 프로젝트**입니다.

CSS 변수 기반 디자인 시스템과 반응형 그리드 설계를 통해  
확장성과 유지보수성을 고려한 구조로 제작되었습니다.

### 🎯 제작 목적
- 프론트엔드 개발 역량 시각화
- 프로젝트 경험 및 실무 이력 정리
- 데이터 기반 렌더링 구조 설계 실습
- 인터랙션 및 상태 관리 구현

---

## 💻 실행 환경

- ✅ **Chrome 브라우저 최적화**
- 🌐 **CDN 기반 라이브러리 사용**
  - Swiper
  - Font Awesome
- 📶 원활한 실행을 위해 **인터넷 연결 필수**

---

## 🚀 핵심 기능

### 1️⃣ 데이터 기반 UI 렌더링
- `object.js`의 객체 배열을 기반으로  
  **스킬 / 경력 / 프로젝트 / 교육 활동 자동 렌더링**
- DOM을 직접 생성하여 동적으로 화면 구성
- 데이터 수정 시 UI 자동 반영 구조 설계

---

### 2️⃣ 경력사항 페이지네이션 직접 구현
- 한 페이지당 3개 항목 출력
- 페이지 그룹 단위 네비게이션 처리
- 이전/다음 버튼 활성화 조건 제어
- active 상태 동적 관리

> 단순 플러그인 사용이 아닌 순수 JS 로직으로 구현

---

### 3️⃣ 반응형 스킬 필터 기능
- PC/Tablet: Tab 기반 필터링
- Mobile: Select 기반 필터링
- 모바일 환경에서는 아코디언 UI 적용
- `data-type` 속성 기반 조건 렌더링

---

### 4️⃣ 프로젝트 섹션 Swiper 적용
- 자동 재생 슬라이드
- Fade 효과 적용
- 반응형 목업 구성 (PC / Tablet / Mobile)

---

### 5️⃣ 모바일 헤더 메뉴 제어
- 햄버거 버튼 토글 처리
- 외부 영역 클릭 시 메뉴 닫기
- 상태 클래스 기반 UI 제어

---

## 🧠 어려웠던 점 & 해결 방식

### 1️⃣ 데이터 기반 렌더링 구조 설계
**문제**
- 반복되는 HTML 구조를 수동 작성하면 유지보수성이 낮아짐

**해결**
- 모든 컨텐츠를 객체 배열로 정의
- `renderSkill()`, `renderCareer()`, `renderProject()` 등 기능 단위 분리
- DOM 생성 로직을 함수화하여 구조적 관리

---

### 2️⃣ 페이지네이션 그룹 처리 로직
**문제**
- 페이지 수가 많아질 경우 버튼이 과도하게 늘어남

**해결**
- `ROWS_PER_PAGE`, `NUM_PER_PAGE_GROUP` 상수 정의
- 페이지 그룹 단위로 버튼 표시 제어
- 현재 그룹 인덱스를 별도 관리하여 이전/다음 이동 처리

---

### 3️⃣ 반응형 환경에서 UI 분기 처리
**문제**
- 동일한 기능을 PC와 Mobile에서 다르게 표현해야 했음

**해결**
- CSS 미디어쿼리 + JS 로직 분리
- 모바일 전용 UI(Select + Accordion) 별도 설계
- 상태 클래스(`is-open`) 기반 제어

---

## 🗂️ 데이터 구조

### 1️⃣ 스킬 데이터
```js
const skills = [
  {
    type: 'fe',
    iconSrc: '...',
    title: 'HTML',
    desc: '...'
  }
]
```

### 2️⃣ 경력사항 데이터
```js
const careers = [
  {
    date: '2022.10 - 2025.02',
    project: '프로젝트명',
    detail: '업무 내용',
    graph: [
      { type: 'uiux', work: '요구사항 분석', percent: 50 }
    ]
  }
]
```

### 3️⃣ 프로젝트 데이터
```js
const projects = [
  {
    id: 'projectId',
    prjctNm: '프로젝트명',
    desc: '프로젝트 설명',
    planning: 100,
    design: 100,
    develop: 100,
    skill: ['html','css','js']
  }
]
```

### 4️⃣ 교육활동 데이터
```js
const educations = [
  {
    date: '2022.11',
    title: '교육명',
    institution: '기관명',
    detail: ['내용1', '내용2']
  }
]
```

---

## 📦 사용 라이브러리

- **Swiper**  
  프로젝트 섹션 반응형 슬라이더 구현 (fade 효과, autoplay 적용)

- **Font Awesome**  
  아이콘 시스템을 활용한 UI 시각적 보조 및 상태 표현

---

## 🙌 프로젝트를 통해 배운 점

- 객체 배열 기반 **데이터 설계 및 동적 DOM 렌더링 구조화**
- 순수 JavaScript로 **페이지네이션 로직 직접 구현**
- 반응형 환경에 따른 **UI 분기 처리 및 상태 관리**
- CSS 변수 기반 디자인 시스템 설계 경험
- 기능 단위 함수 분리를 통한 **유지보수성을 고려한 코드 구조 작성**
