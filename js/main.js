let menuBtn = document.querySelector("header .menu-btn");
let menu = document.querySelector("header .menu");
menuBtn.addEventListener("click", function () {
  if (menuBtn.classList.contains("open")) {
    megaMenu.classList.remove("show");
    menuBtn.classList.remove("open");
    menu.style.top = "-550%";
  } else {
    menuBtn.classList.add("open");
    menu.style.top = "72px";
  }
});

let megaMenu = document.querySelector(".mega-menu");
let links = document.querySelector("header .menu > li:last-Child");

links.addEventListener("click", function () {
  if (megaMenu.classList.contains("show")) {
    megaMenu.classList.remove("show");
  } else {
    megaMenu.classList.add("show");
  }
});
