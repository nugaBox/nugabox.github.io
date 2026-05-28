function handleClickMenu(e) {
    let menuList = document.getElementsByClassName("menu-item");
    [...menuList].forEach(x => x.className = x.className.replace(/\bmenu-selected\b/g, ""));
    e.classList.add("menu-selected");
  }