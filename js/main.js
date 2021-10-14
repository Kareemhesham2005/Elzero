let menuBtn = document.querySelector("header .menu-btn");
let menu = document.querySelector("header .menu");
menuBtn.addEventListener("click", function () {
  if (menuBtn.classList.contains("open")) {
    menuBtn.classList.remove("open");
    menu.style.top = "-550%";
  } else {
    menuBtn.classList.add("open");
    menu.style.top = "72px";
  }
});
