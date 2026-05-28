const logHello = () => {
  console.log(
    `%c환영합니다!%c

NUGABOX에 오신 것을 환영합니다.
직접 개발한 도구 및 유용한 사이트입니다.

🤝 GitHub: https://github.com/nugaBox
🔍 Portfolio: https://portfolio.nugabox.io
🚀 Email: ngjang.work@gmail.com

`,
    `padding-top: 0.5em; font-size: 2em; color: #676a6c;`,
    'padding-bottom: 0.5em;'
  );
};

document.addEventListener('DOMContentLoaded', logHello);