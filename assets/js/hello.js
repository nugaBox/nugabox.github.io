const logHello = () => {
  const ascii = [
    '  _   _  _    _   _____            ____    ____  __   __',
    ' | \\ | || |  | | / ____|    /\\    |  _ \\  / __ \\ \\ \\ / /',
    ' |  \\| || |  | || |  __    /  \\   | |_) || |  | | \\ V /',
    " | . ` || |  | || | |_ |  / /\\ \\  |  _ < | |  | |  > <",
    ' | |\\  || |__| || |__| | / ____ \\ | |_) || |__| | / . \\',
    ' |_| \\_| \\____/  \\_____|/_/    \\_\\|____/  \\____/ /_/ \\_\\',
  ].join('\n');

  console.log(
    `%c${ascii}%c

made by Nuga Jang
Welcome to NUGABOX!

🤝 GitHub: https://github.com/nugaBox
🔍 Portfolio: https://portfolio.nugabox.com
🚀 Email: ngjang.work@gmail.com

`,
    'font-family: Menlo, Monaco, Consolas, "Courier New", monospace; font-size: 11px; line-height: 1.15; color: #676a6c; white-space: pre;',
    'padding-bottom: 0.5em;'
  );
};

document.addEventListener('DOMContentLoaded', logHello);
