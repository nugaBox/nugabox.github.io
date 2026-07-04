// 페이지 로드 시 검색창 포커스
window.onload = function() {
    const searchInput = document.getElementById('searchText');
    
    // 모바일 기기 감지
    const isMobile = /Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    
    if (isIOS) {
        // iOS에서는 검색 시작 안내 메시지 표시
        const searchGuide = document.createElement('div');
        searchGuide.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: var(--naver-color);
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            font-size: 14px;
            cursor: pointer;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            transition: all 0.3s ease;
            transform: translateY(0);
        `;
        searchGuide.textContent = '검색 시작하기';
        
        document.body.appendChild(searchGuide);
        
        // 안내 메시지 클릭 시 포커스 및 메시지 제거
        searchGuide.addEventListener('click', function() {
            searchInput.focus();
            searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
            searchGuide.style.transform = 'translateY(100px)';
            searchGuide.style.opacity = '0';
            setTimeout(() => {
                searchGuide.remove();
            }, 300);
        });
        
    } else if (isMobile) {
        // 다른 모바일 기기에서는 지연 후 포커스
        setTimeout(() => {
            searchInput.focus();
            searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
    } else {
        // 데스크톱에서는 즉시 포커스
        searchInput.focus();
    }
};

// 시스템 테마 감지 및 적용
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.classList.add("dark");
}

// URL 파라미터 처리
let isdone = window.location.href;
if(isdone.substr(-5) != "false"){
    location.replace('?includeappcache=false');
}

// 다크 모드 상태 관리
let dark_theme = 0;
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    dark_theme = 1;
}

// 시스템 테마 변경 감지
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    dark_theme = e.matches ? 1 : 0;
});

// 검색 관련 요소 참조
const element_search = document.getElementById("search_form");
const element_search_text = document.getElementById("searchText");

// 검색 제안 관련 변수
let card_select = 0;
let card_max = 0;
let card_custom_max = 4;

/**
 * 검색 제안 목록 초기화
 */
function suggest_clear() {
    $("#keywords").html("");
    $(window).resize();
    card_max = 0; // 입력이 비었을 때 정제되지 않은 상태 방지
}

/**
 * 선택된 카드 스타일 업데이트
 * @param {number} w - 선택할 카드 번호
 */
function card_selection_update(w) {
    if(w != null) {
        card_select = w;
    }
    for(let i = 1; i < card_max + 1; i++) {
        const card = $(`#card${i}`);
        const isSelected = i === card_select;
        
        if (isSelected) {
            // 선택된 카드는 네이버 색상으로
            card.css({
                "background-color": "var(--naver-color)",
                "border-color": "var(--naver-color)",
                "color": "white"
            });
        } else {
            // 선택되지 않은 카드는 테마에 맞는 색상으로
            card.css({
                "background-color": "var(--tag-bg)",
                "border-color": "var(--tag-bg)",
                "color": "var(--tag-color)"
            });
        }
    }
}

// 검색어 입력 이벤트 처리
element_search_text.oninput = function() {
    const searchText = element_search_text.value;
    
    // 빈 검색어 처리
    if(searchText.length === 0 || !searchText.trim()) {
        suggest_clear();
        return;
    }
    
    // Google 검색 제안 API 호출
    $.ajax({
        dataType: "jsonp",
        url: `https://suggestqueries.google.com/complete/search?client=firefox&hl=en&q=${searchText}`,
        type: "GET",
        success: function(data) {
            // 현재 입력값과 일치할 때만 처리
            if(searchText === element_search_text.value) {
                $("#card0").attr('keyword', searchText);
                $("#keywords").html("");
                card_max = 0;
                card_select = 0;
                
                // 기본 검색어 추가
                $("#keywords").append(
                    `<li style='cursor:pointer' 
                        onClick='element_search_text.value = this.children[0].innerHTML;element_search.submit();' 
                        id='card1' 
                        onmouseenter='card_selection_update(1);' 
                        onmouseleave='card_selection_update(0);' 
                        keyword='${searchText}'>
                        <p>${searchText}</p>
                    </li>`
                );
                card_max++;
                
                // 추천 검색어 추가
                for (let i = 0; i < card_custom_max; i++) {
                    if(data[1][i] && data[1][i] !== searchText) {
                        $("#keywords").append(
                            `<li style='cursor:pointer' 
                                onClick='element_search_text.value = this.children[0].innerHTML;element_search.submit();' 
                                id='card${card_max + 1}' 
                                onmouseenter='card_selection_update(${card_max + 1});' 
                                onmouseleave='card_selection_update(0);' 
                                keyword='${data[1][i]}'>
                                <p>${data[1][i]}</p>
                            </li>`
                        );
                        card_max++;
                    }
                }
                $(window).resize();
            }
        },
        error: suggest_clear
    });
};

// 키보드 이벤트 처리
element_search_text.onkeyup = function(event) {
    if(card_max !== 0) {
        switch (event.keyCode) {
            case 38: // 위쪽 화살표
                event.preventDefault();
                card_select--;
                if (card_select < 0) card_select = card_max;
                card_selection_update();
                element_search_text.value = document.getElementById("card" + card_select).children[0].innerHTML;
                break;
                
            case 40: // 아래쪽 화살표
                event.preventDefault();
                card_select++;
                if (card_select > card_max) card_select = 0;
                card_selection_update();
                element_search_text.value = document.getElementById("card" + card_select).children[0].innerHTML;
                break;
        }
    }
};

// 모바일 기기 감지 및 처리
if (/Android|webOS|iPhone|iPad|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent)) {
    document.getElementById("main_link").href = "http://m.naver.com";
    document.getElementById("noti_link").href = "http://m.me.naver.com/noti.nhn";
    document.getElementById("more_link").href = "https://m.naver.com/services.html";
    card_custom_max = 10;
}

// 테마 전환 기능
document.addEventListener('DOMContentLoaded', function() {
    const themeBtns = document.querySelectorAll('.theme-btn');
    const html = document.documentElement;
    
    // 저장된 테마 불러오기 (기본값: light)
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    
    // 테마 버튼 클릭 이벤트 처리
    themeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.dataset.theme;
            
            // 버튼 활성화 상태 변경
            themeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // 테마 적용 및 저장
            setTheme(theme);
            localStorage.setItem('theme', theme);
        });
        
        // 초기 로드 시 저장된 테마에 해당하는 버튼 활성화
        if(btn.dataset.theme === savedTheme) {
            btn.classList.add('active');
        }
    });
    
    // 테마 변경 함수 - dark 클래스만 토글
    function setTheme(theme) {
        if (theme === 'dark') {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
    }
});
