let menuBtn = document.querySelector("header .menu-btn");
let menu = document.querySelector("header .menu");
menuBtn.addEventListener("click", function () {
  if (menuBtn.classList.contains("open")) {
    megaMenu.classList.remove("show");
    menuBtn.classList.remove("open");
    menu.style.top = "-2000%";
  } else {
    menuBtn.classList.add("open");
    menu.style.top = "72px";
  }
});

let megaMenu = document.querySelector(".mega-menu");
let links = document.querySelector("header .menu > li:last-Child");
let a = document.querySelector("header .menu > li:last-Child a");

links.addEventListener("click", function (e) {
  if (e.target === a) {
    if (megaMenu.classList.contains("show")) {
      megaMenu.classList.remove("show");
    } else {
      megaMenu.classList.add("show");
    }
  }
});
