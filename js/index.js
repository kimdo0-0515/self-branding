/* ========== Constants & Variables ========== */
const BREAK_POINT = {
  tab: 1024,
  mo: 768
};

const $gnbs = document.querySelectorAll('nav li');

const $moMenuOpenBtn = document.getElementById('moMenuOpenBtn');
const $moMenuCloseBtn = document.getElementById('moMenuCloseBtn');
const $moMenuWrap = document.getElementById('moMenuWrap');
const $moNav = $moMenuWrap.querySelector('.nav');

const $fullAge = document.getElementById('fullAge');

const $selectBtnSpan = document.querySelector('#skillSec .select-btn span');
const $skillSelectRadios = document.querySelectorAll('#skillSec input[name="skill_select"]');

// 경력사항 pagination
const ROWS_PER_PAGE = 3; // 한 페이지에 출력될 행 개수
const NUM_PER_PAGE_GROUP = 4; // 한번에 보여줄 페이지 그룹 당 최대 개수





/* ========== Execute Functions ========== */
// 화면 로드 시 렌더링
renderPage();
initCareerPagination();


/* === Header === */
$gnbs.forEach(gnb => {
  gnb.addEventListener('click', function(){
    /* $gnbs.forEach(i => i.classList.remove('active'));
    
    const aHref = this.querySelector('a').getAttribute('href');
    document.querySelectorAll(`nav li:has(a[href="${aHref}"])`).forEach(i => i.classList.add('active')); */

    /* 모바일일 때 햄버거 버튼 및 메뉴 닫기 처리 */
    toggleMoMenuBtns();
  });
});

/* 모바일 헤더 메뉴 버튼 기능 */
$moMenuOpenBtn.addEventListener('click', toggleMoMenuBtns);
$moMenuCloseBtn.addEventListener('click', toggleMoMenuBtns);

/* 모바일 메뉴 외부 영역 클릭해서 닫기 */
document.addEventListener('click', moMenuOutClick);


/* === section: 인적사항 === */
/* 만 나이 계산 */
calculateAge("1996-05-15");


/* === section: 스킬 === */
/* 스킬 카드 아코디언 여닫기 (모바일) */
const $skillItems = document.querySelectorAll('.skill');
$skillItems.forEach(item => {
  item.addEventListener('click', skillItemsAccdn);
});

/* 스킬 셀렉트 텍스트값 변경 (모바일) */
$skillSelectRadios.forEach(radio => {
  radio.addEventListener('change', skillSelectTextChange);
});


/* === section: 프로젝트 === */
const $githubBtns = document.querySelectorAll('.github-btn');
const $urlBtns = document.querySelectorAll('.url-btn');

$githubBtns.forEach(btn => {
  btn.addEventListener('click', pjUrlBtnClick);
});

$urlBtns.forEach(btn => {
  btn.addEventListener('click', pjUrlBtnClick);
});





/* ========== Define Functions ========== */
// 화면 렌더링
function renderPage(){
  renderSkill();
  renderCareer();
  renderProject();
  renderEducation();
}

/* === Header === */
/* 모바일 헤더 메뉴 버튼 기능 */
function toggleMoMenuBtns(){
  $moMenuOpenBtn.classList.toggle('visible');
  $moMenuCloseBtn.classList.toggle('visible');
  $moMenuWrap.classList.toggle('is-open');
}

/* 모바일 메뉴 외부 영역 클릭해서 닫기 */
function moMenuOutClick(e){
  if($moMenuWrap.classList.contains('is-open')
    && !$moNav.contains(e.target)
    && !$moMenuOpenBtn.contains(e.target)
    && !$moMenuCloseBtn.contains(e.target)
  ){
    $moMenuWrap.classList.remove('is-open');
    $moMenuOpenBtn.classList.add('visible');
    $moMenuCloseBtn.classList.remove('visible');
  }
}



/* === section: 인적사항 === */
/* 만 나이 계산 */
function calculateAge(birthDateString){
  const today = new Date();
  const birthDate = new Date(birthDateString);
  
  // 기본 나이
  let age = today.getFullYear() - birthDate.getFullYear();
  
  // 생일이 지났는지 확인 (월일 비교)
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if(monthDiff < 0 || 
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ){
    age--; // 생일이 지나지 않았으면 1살 빼기
  }
  
  $fullAge.innerText = age;
}


/* === section: 스킬 === */
/* 스킬 카드 렌더링 */
function renderSkill(){
  skills.forEach(skill => {
    const $skillDiv = document.createElement('div');

    $skillDiv.classList.add('skill');
    $skillDiv.dataset.type = skill.type;

    let badgeClass = '';
    let badgeText = '';

    switch(skill.type){
      case 'fe':
        badgeClass = 'skill__badge--cyan';
        badgeText = '프론트엔드';
        break;
      case 'lib':
        badgeClass = 'skill__badge--purple';
        badgeText = '라이브러리';
        break;
      case 'design':
        badgeClass = 'skill__badge--yellow';
        badgeText = '디자인';
        break;
      case 'product':
        badgeClass = 'skill__badge--red';
        badgeText = '생산성';
        break;
    }

    $skillDiv.innerHTML = 
    `<div class="skill__top">
      <div class="skill__icon">
        <img src="${skill.iconSrc}" alt="${skill.title}">
      </div>
      <div class="skill__title-wrap">
        <span class="${badgeClass}">${badgeText}</span>
        <h4>${skill.title}</h4>
      </div>
      <div class="skill__accdn-icon">
        <i class="fa-solid fa-plus icon--small"></i>
        <i class="fa-solid fa-minus icon--small"></i>
      </div>
    </div>
    <p class="skill__desc">${skill.desc}</p>`;

    document.querySelector('.skill-wrap').appendChild($skillDiv);
  });
}

/* 스킬 카드 아코디언 여닫기 (모바일) */
function skillItemsAccdn(){
  this.classList.toggle('is-open');
}

/* 스킬 셀렉트 텍스트값 변경 (모바일) */
function skillSelectTextChange(e){
  const checkedTxt = e.target.nextElementSibling.innerText;
  $selectBtnSpan.innerText = checkedTxt;
}



/* === section: 경력사항 === */
function renderCareer(){
  careers.forEach(cr => {
    const $careerLi = document.createElement('li');

    $careerLi.classList.add('career');

    $careerLi.innerHTML = `
    <div class="career__date">
      <img src="assets/common/logo.svg" alt="로고">
      <div class="date text--m">${cr.date}</div>
    </div>
    <div class="career__info">
      <div class="career__project text--xl bold">${cr.project}</div>
      <p class="career__detail text--m">${cr.detail}</p>
      <div class="career-graph-wrap"></div>
    </div>`;

    // 그래프 개수만큼 생성
    cr.graph.forEach(gr => {
      const $graphDiv = document.createElement('div');
      $graphDiv.classList.add('career-graph');
      $graphDiv.dataset.career = gr.type;

      $graphDiv.innerHTML = `
      <p class="text--s bold">${gr.work}</p>
      <div class="graph">
        <div class="graph__bar">
          <div class="graph__highlight"></div>
        </div>
        <span class="graph__num text--m">${gr.percent}%</span>
      </div>`;

      $careerLi.querySelector('.career-graph-wrap').appendChild($graphDiv);
      $graphDiv.querySelector('.graph__highlight').style.width = `${gr.percent}%`;
    });

    document.querySelector('#careerSec .career-list').appendChild($careerLi);
  });
}

function initCareerPagination(){
  const rows = document.querySelectorAll('#careerSec .career');
  const rowsCount = rows.length;

  const pageCount = Math.ceil(rowsCount / ROWS_PER_PAGE);
  const pageGroupCount = Math.ceil(pageCount / NUM_PER_PAGE_GROUP);

  const $pageNumWrap = document.querySelector('#careerSec .page-num-wrap');
  const $crPrevBtn = document.getElementById('crPrevBtn');
  const $crNextBtn = document.getElementById('crNextBtn');

  // 페이지 버튼 생성
  $pageNumWrap.innerHTML = '';
  for(let i = 1; i <= pageCount; i++){
    $pageNumWrap.innerHTML += `<button class="pagination-num-btn"><span>${i}</span></button>`;
  }

  const $numBtns = document.querySelectorAll('#careerSec .pagination-num-btn');

  let currentPageGroup = 0;
  let currentPage = 0;

  // 페이지 출력 함수
  function numBtnActive(idx){
    $numBtns.forEach(i => i.classList.remove('active'));
    if($numBtns[idx]) $numBtns[idx].classList.add('active');
  }

  function displayRow(idx){
    const start = idx * ROWS_PER_PAGE;
    const end = start + ROWS_PER_PAGE - 1;

    rows.forEach(r => r.style.display = 'none');

    [...rows].slice(start, end + 1).forEach(r => r.style.display = 'flex');

    numBtnActive(idx);
  }

  function displayPageGroup(groupIdx){
    $numBtns.forEach(nb => nb.style.display = 'none');

    const start = groupIdx * NUM_PER_PAGE_GROUP;
    const end = start + NUM_PER_PAGE_GROUP - 1;

    [...$numBtns].slice(start, end + 1).forEach(nb => nb.style.display = 'flex');

    currentPageGroup = groupIdx;

    $crPrevBtn.disabled = (currentPageGroup === 0);
    $crNextBtn.disabled = (currentPageGroup === pageGroupCount - 1);
  }

  // 이벤트
  $numBtns.forEach((btn, idx) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      currentPage = idx;
      displayRow(currentPage);
    });
  });

  $crPrevBtn.addEventListener('click', () => {
    currentPage = currentPageGroup * NUM_PER_PAGE_GROUP - 1;
    displayRow(currentPage);
    displayPageGroup(currentPageGroup - 1);
  });

  $crNextBtn.addEventListener('click', () => {
    currentPage = (currentPageGroup + 1) * NUM_PER_PAGE_GROUP;
    displayRow(currentPage);
    displayPageGroup(currentPageGroup + 1);
  });

  // 초기 상태
  displayPageGroup(0);
  displayRow(0);
}


/* === section: 프로젝트 === */
/* 프로젝트 렌더링 */
function renderProject(){
  projects.forEach(pj => {
    const $pjWrapDiv = document.createElement('div');

    $pjWrapDiv.classList.add('project-wrap');
    $pjWrapDiv.id = pj.id;

    $pjWrapDiv.innerHTML = `
    <div class="swiper project-swiper" id="${pj.swId}">
      <div class="swiper-wrapper">
        <div class="swiper-slide pc-mockup-slide">
          <img src="assets/project/${pj.id}/${pj.pcMockSrc}" alt="목업 이미지">
        </div>
        <div class="swiper-slide tab-mockup-slide">
          <img class="portrait" src="assets/project/${pj.id}/${pj.tabMocSrc01}" alt="목업 이미지">
          <img class="landscape" src="assets/project/${pj.id}/${pj.tabMocSrc02}" alt="목업 이미지">
        </div>
        <div class="swiper-slide mo-mockup-slide">
          <img class="portrait-1" src="assets/project/${pj.id}/${pj.moMock01}" alt="목업 이미지">
          <img class="portrait-2" src="assets/project/${pj.id}/${pj.moMock02}" alt="목업 이미지">
          <img class="portrait-3" src="assets/project/${pj.id}/${pj.moMock03}" alt="목업 이미지">
        </div>
      </div>
    </div>

    <div class="project-info">
      <div class="project__title">
        <img src="assets/common/logo.svg" alt="로고">
        <span class="text--xl bold">${pj.prjctNm}</span>
      </div>
      <div class="project__tag"></div>
      <div class="project__detail-wrap">
        <div class="project__detail">
          <div class="detail__title text--m bold">프로젝트 소개</div>
          <p class="text--m">${pj.desc}</p>
        </div>
        <div class="project__detail prjct-period">
          <div class="detail__title text--m bold">기간</div>
          <p class="text--m">${pj.period}</p>
        </div>
        <div class="project__detail prjct-role">
          <div class="detail__title text--m bold">역할</div>
          <div class="role-wrap text--m">
            <div class="role planning">
              <span>기획</span><span class="bold">${pj.planning}%</span>
            </div>
            <div class="role design">
              <span>디자인</span><span class="bold">${pj.design}%</span>
            </div>
            <div class="role develop">
              <span>개발</span><span class="bold">${pj.develop}%</span>
            </div>
          </div>
        </div>
        <div class="project__detail">
          <div class="detail__title text--m bold">사용 스킬 및 툴</div>
          <div class="skill-tool-wrap"></div>
        </div>
      </div>
      <div class="page-button">
        <div class="page-button-left">
          <button class="btn btn--medium btn--gray github-btn" data-link="${pj.githubUrl}">
            <i class="fa-brands fa-github"></i>
            <span>GitHub로 이동</span>
          </button>
          <button class="btn btn--medium btn--gray url-btn" data-link="${pj.webUrl}">
            <i class="fa-solid fa-link"></i>
            <span>웹사이트로 이동</span>
          </button>
        </div>
      </div>
    </div>`;

    // tag 개수만큼 생성
    pj.tag.forEach(t => {
      const $tagSpan = document.createElement('span');
      $tagSpan.classList.add('tag');
      $tagSpan.innerText = `#${t}`;

      $pjWrapDiv.querySelector('.project__tag').appendChild($tagSpan);
    });

    // skill 아이콘 개수만큼 생성
    pj.skill.forEach(s => {
      const $skillImg = document.createElement('img');
      $skillImg.classList.add('pjct-skill-icon');
      $skillImg.src = `assets/skill/skill_${s}.svg`;

      $pjWrapDiv.querySelector('.skill-tool-wrap').appendChild($skillImg);
    });

    document.querySelector('#prjctSec .inner').appendChild($pjWrapDiv);
  });
}

/* 프로젝트 전체 스와이퍼 생성 */
const allPjSwiper = new Swiper(".project-swiper", {
  loop: true,
  effect: "fade",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

/* 깃허브와 웹사이트 url 새 창으로 열기 */
function pjUrlBtnClick(e){
  const url = e.currentTarget.getAttribute('data-link');

  if(url == ''){
    alert('링크를 준비 중입니다.');
    return;
  }

  window.open(url);
}



/* === section: 교육활동 === */
/* 교육활동 렌더링 */
function renderEducation(){
  educations.forEach(edu => {
    const $eduDiv = document.createElement('div');

    $eduDiv.classList.add('edu');

    $eduDiv.innerHTML = 
    `<div class="edu__date">
      <img src="assets/common/logo.svg" alt="로고">
      <span class="text--m">${edu.date}</span>
    </div>
    <div class="edu__info">
      <div class="edu__title text--l bold">${edu.title}</div>
      <div class="edu__institution text--s">
        <span>교육기관</span><span>|</span><span class="institution bold">${edu.institution}</span>
      </div>
      <ul class="edu__content text--m"></ul>
    </div>`;

    edu.detail.forEach(detail => {
      const $detailLi = document.createElement('li');
      $detailLi.classList.add('edu__detail');
      $detailLi.innerText = detail;

      $eduDiv.querySelector('.edu__content').appendChild($detailLi);
    });

    document.querySelector('.edu-wrap').appendChild($eduDiv);
  });
}