// 우클릭, 드래그, 선택 방지
document.oncontextmenu = function() { return false; }
document.onselectstart = function() { return false; }
document.ondragstart = function() { return false; }

document.addEventListener('DOMContentLoaded', () => {
  // 월별 효과 설정
  // 12~2월: 눈 / 3~4월: 벚꽃 / 5~8월: 나뭇잎 / 9~11월: 낙엽
  const seasonalEffects = {
    1: 'snow',
    2: 'snow',
    3: 'sakura',
    4: 'sakura',
    5: 'leaf',
    6: 'leaf',
    7: 'leaf',
    8: 'leaf',
    9: 'fallen',
    10: 'fallen',
    11: 'fallen',
    12: 'snow'
  };

  const effectMeta = {
    sakura: { icon: '🌸', label: '벚꽃' },
    leaf: { icon: '🍃', label: '나뭇잎' },
    fallen: { icon: '🍂', label: '낙엽' },
    snow: { icon: '❄️', label: '눈' }
  };

  const effectOrder = ['sakura', 'leaf', 'fallen', 'snow'];

  const currentMonth = new Date().getMonth() + 1;
  let activeEffect = seasonalEffects[currentMonth];
  let currentInstance = null;
  let isEffectOn = false;

  const toggleBtn = document.getElementById('effect-toggle');
  const menuBtn = document.getElementById('effect-menu-btn');
  const dropdown = document.getElementById('effect-dropdown');
  const wrapper = document.querySelector('.effect-toggle-wrapper');

  function updateToggleIcon() {
    if (!toggleBtn) return;
    toggleBtn.textContent = effectMeta[activeEffect].icon;
    toggleBtn.setAttribute('aria-label', `${effectMeta[activeEffect].label} 효과 토글`);
    toggleBtn.style.opacity = isEffectOn ? '1' : '0.45';
  }

  function updateDropdownActive() {
    if (!dropdown) return;
    dropdown.querySelectorAll('[data-effect]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.effect === activeEffect);
    });
  }

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

      const cleanupInterval = setInterval(() => {
        const sakuraElements = document.querySelectorAll('.sakura');
        sakuraElements.forEach(el => {
          const rect = el.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          if (rect.top > windowHeight * 0.9) {
            el.style.transition = 'opacity 1s ease-out';
            el.style.opacity = '0';
            setTimeout(() => {
              el.remove();
            }, 1000);
          }
        });
      }, 100);

      currentInstance.cleanupInterval = cleanupInterval;
    },
    snow: function() {
      if (!document.getElementById('embedim--snow')) {
        var embedimSnow = document.createElement('script');
        embedimSnow.src = '/assets/js/snow.js';
        document.body.appendChild(embedimSnow);
      }
    },
    leaf: function() {
      // lazy-minjoo 사이트와 동일한 snowfall + 나뭇잎 이미지
      $(document).snowfall({
        image: '/assets/images/leaf.png',
        minSize: 15,
        maxSize: 21,
        minSpeed: 1,
        maxSpeed: 2.5,
        flakeCount: 14,
        flakeIndex: 50
      });
      document.body.classList.add('leaf-falling');
    },
    fallen: function() {
      // 같은 나뭇잎 모양 + 노랑~주황 계열 색 섞기
      $(document).snowfall({
        images: [
          '/assets/images/fallen-leaf-yellow.png',
          '/assets/images/fallen-leaf-gold.png',
          '/assets/images/fallen-leaf-orange.png',
          '/assets/images/fallen-leaf-amber.png'
        ],
        minSize: 15,
        maxSize: 21,
        minSpeed: 1,
        maxSpeed: 2.5,
        flakeCount: 14,
        flakeIndex: 50
      });
      document.body.classList.add('fallen-falling');
    }
  };

  // 효과 제거 함수들
  const effectRemovers = {
    sakura: function() {
      if (currentInstance) {
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
      $(document).snowfall('clear');
      document.body.classList.remove('leaf-falling');
    },
    fallen: function() {
      $(document).snowfall('clear');
      document.body.classList.remove('fallen-falling');
    }
  };

  function stopEffect() {
    if (!isEffectOn) return;
    effectRemovers[activeEffect]();
    isEffectOn = false;
    updateToggleIcon();
  }

  function startEffect() {
    effectInitializers[activeEffect]();
    isEffectOn = true;
    updateToggleIcon();
  }

  function switchEffect(nextEffect) {
    if (!effectMeta[nextEffect]) return;
    if (isEffectOn) {
      effectRemovers[activeEffect]();
      isEffectOn = false;
    }
    activeEffect = nextEffect;
    updateDropdownActive();
    startEffect();
  }

  function closeDropdown() {
    if (!dropdown || !menuBtn) return;
    dropdown.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }

  function toggleDropdown() {
    if (!dropdown || !menuBtn) return;
    const willOpen = !dropdown.classList.contains('open');
    dropdown.classList.toggle('open', willOpen);
    menuBtn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
  }

  // 드롭다운 메뉴 항목 생성
  if (dropdown) {
    dropdown.innerHTML = effectOrder.map(key => {
      const meta = effectMeta[key];
      return `<button type="button" class="effect-option" data-effect="${key}" aria-label="${meta.label}" title="${meta.label}">
        <span class="effect-option-icon">${meta.icon}</span>
      </button>`;
    }).join('');

    dropdown.addEventListener('click', (e) => {
      const option = e.target.closest('[data-effect]');
      if (!option) return;
      switchEffect(option.dataset.effect);
      closeDropdown();
    });
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      if (isEffectOn) {
        stopEffect();
      } else {
        startEffect();
      }
    });
  }

  if (menuBtn) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleDropdown();
    });
  }

  document.addEventListener('click', (e) => {
    if (wrapper && !wrapper.contains(e.target)) {
      closeDropdown();
    }
  });

  // 초기 효과 시작
  updateDropdownActive();
  startEffect();

  // .app-line 은 display:none 이라 토글 전까지 background-image 를 안 받음.
  // 페이지 로드가 끝난 뒤 앱 아이콘을 미리 캐시해 토글 시 지연을 없앰.
  function preloadAppIcons() {
    document.querySelectorAll('.app-line a.icon[id]:not(.icon-none)').forEach(function (el) {
      var bg = window.getComputedStyle(el).backgroundImage;
      var match = bg && bg.match(/url\(["']?(.*?)["']?\)/);
      if (!match || !match[1] || match[1] === 'none') return;
      var img = new Image();
      img.src = match[1];
    });
  }

  if (document.readyState === 'complete') {
    preloadAppIcons();
  } else {
    window.addEventListener('load', preloadAppIcons);
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
  
  // 초기 테마 설정
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    // 현재 월의 효과가 snow이면 dark 테마, 아니면 light 테마를 기본값으로
    const defaultTheme = activeEffect === 'snow' ? 'dark' : 'light';
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
