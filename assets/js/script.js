// 우클릭, 드래그, 선택 방지
document.oncontextmenu = function() { return false; }
document.onselectstart = function() { return false; }
document.ondragstart = function() { return false; }

document.addEventListener('DOMContentLoaded', () => {
  // 월별 효과 설정
  const seasonalEffects = {
    1: 'snow',
    2: 'sakura',
    3: 'sakura',
    4: 'sakura',
    5: 'sakura',
    6: 'leaf',
    7: 'leaf',
    8: 'leaf',
    9: 'fallen',
    10: 'fallen',
    11: 'fallen',
    12: 'snow'
  };

  // 현재 월 가져오기
  const currentMonth = new Date().getMonth() + 1;
  const currentEffect = seasonalEffects[currentMonth];

  // 모든 효과 토글 버튼 숨기기
  const allToggles = document.querySelectorAll('.sakura-toggle, .snow-toggle, .leaf-toggle, .fallen-toggle');
  allToggles.forEach(toggle => toggle.style.display = 'none');

  // 현재 월에 해당하는 토글 버튼만 표시
  const currentToggle = document.querySelector(`.${currentEffect}-toggle`);
  if (currentToggle) {
    currentToggle.style.display = 'block';
  }

  // 효과 인스턴스 저장
  let currentInstance = null;
  let isEffectOn = false;

  // 효과 초기화 함수들
  const effectInitializers = {
    sakura: function() {
      currentInstance = new Sakura('body', {
        colors: [
          {
            gradientColorStart: 'rgba(255, 183, 197, 0.9)',
            gradientColorEnd: 'rgba(255, 197, 208, 0.9)',
            gradientColorDegree: 120,
          }
        ],
        delay: 200,
        maxSize: 14,
        minSize: 10,
        fallSpeed: 1
      });

      // 주기적으로 화면 하단의 벚꽃 요소들을 제거
      const cleanupInterval = setInterval(() => {
        const sakuraElements = document.querySelectorAll('.sakura');
        sakuraElements.forEach(el => {
          const rect = el.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          if (rect.top > windowHeight * 0.9) {  // 80%로 변경
            // fadeout 애니메이션 추가
            el.style.transition = 'opacity 1s ease-out';
            el.style.opacity = '0';
            // 애니메이션 완료 후 요소 제거
            setTimeout(() => {
              el.remove();
            }, 1000);
          }
        });
      }, 100);  // 더 자주 체크하도록 간격 줄임

      // cleanup 인터벌 저장
      currentInstance.cleanupInterval = cleanupInterval;
    },
    snow: function() {
      // snow.js 스크립트 실행
      if (!document.getElementById('embedim--snow')) {
        var embedimSnow = document.createElement('script');
        embedimSnow.src = '/assets/js/snow.js';
        document.body.appendChild(embedimSnow);
      }
    },
    leaf: function() {
      // 나뭇잎 효과 구현 예정
      console.log('Leaf effect not implemented yet');
    },
    fallen: function() {
      // 낙엽 효과 구현 예정
      console.log('Fallen leaves effect not implemented yet');
    }
  };

  // 효과 제거 함수들
  const effectRemovers = {
    sakura: function() {
      if (currentInstance) {
        // cleanup 인터벌 정지
        if (currentInstance.cleanupInterval) {
          clearInterval(currentInstance.cleanupInterval);
        }
        currentInstance.stop(true);
        const elements = document.querySelectorAll('.sakura');
        elements.forEach(el => {
          el.style.transition = 'opacity 1s';
          el.style.opacity = '0';
        });
        setTimeout(() => {
          elements.forEach(el => el.remove());
          currentInstance = null;
        }, 1000);
      }
    },
    snow: function() {
      const snowContainer = document.getElementById('embedim--snow');
      if (snowContainer) {
        snowContainer.remove();
      }
    },
    leaf: function() {
      console.log('Leaf effect removal not implemented yet');
    },
    fallen: function() {
      console.log('Fallen leaves effect removal not implemented yet');
    }
  };

  // 토글 버튼 클릭 이벤트
  if (currentToggle) {
    currentToggle.addEventListener('click', () => {
      if (isEffectOn) {
        // 효과 끄기
        effectRemovers[currentEffect]();
        currentToggle.style.opacity = '0.5';
        isEffectOn = false;
      } else {
        // 효과 켜기
        effectInitializers[currentEffect]();
        currentToggle.style.opacity = '1';
        isEffectOn = true;
      }
    });

    // 초기 효과 시작
    effectInitializers[currentEffect]();
    currentToggle.style.opacity = '1';
    isEffectOn = true;
  }

  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const slider = document.querySelector('.theme-toggle-slider');
  
  // 저장된 테마 불러오기
  const savedTheme = localStorage.getItem('theme');
  
  // 테마 적용 함수
  function setTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // 슬라이더 이동
    const activeBtn = document.querySelector(`[data-theme="${theme}"]`);
    const position = Array.from(themeToggleBtns).indexOf(activeBtn);
    slider.style.transform = `translateX(${position * 36}px)`;
    
    // 활성화된 버튼 스타일
    themeToggleBtns.forEach(btn => {
      btn.classList.remove('active');
    });
    activeBtn.classList.add('active');
    
    // 테마 저장
    localStorage.setItem('theme', theme);
  }
  
  console.log('savedTheme', savedTheme);
  console.log('currentEffect', currentEffect);
  // 초기 테마 설정
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    // 현재 월의 효과가 snow이면 dark 테마, 아니면 light 테마를 기본값으로
    const defaultTheme = currentEffect === 'snow' ? 'dark' : 'light';
    setTheme(defaultTheme);
  }
  
  // 버튼 클릭 이벤트
  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const theme = btn.dataset.theme;
      setTheme(theme);
    });
  });

  $(function() {
    // 부트스트랩 툴팁
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    // 프로필 클릭 시
    $('.profile-cover').click(function(){
      $('.arrow-icon').toggleClass("open");
      $('.app-line').slideToggle();
    });
    
    $('.arrow-icon').click(function(){
      $('.arrow-icon').toggleClass("open");
      $('.app-line').slideToggle();
    });
    
    // 문구 한영 전환
    var welcome = $('#welcome-text');
    changeKorEng = setInterval(function() {
      if(welcome.hasClass('font-eng')){
        welcome.animate({opacity:0},3000);
        welcome.removeClass('font-eng');
        welcome.addClass('font-han');
        welcome.css('opacity','0').stop().html('"네가 원하는 양은 이 상자 안에 있어."').animate({opacity:1},2000);
      } else {
        welcome.animate({opacity:0},3000);
        welcome.removeClass('font-han');
        welcome.addClass('font-eng');
        welcome.css('opacity','0').stop().html('"This is only his box.<br>The sheep you asked for is inside."').animate({opacity:1},2000);
      }
    }, 7000);
  });
});
