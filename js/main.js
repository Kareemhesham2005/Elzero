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
let articles = document.querySelector("#articles");
let heading = document.querySelector("#articles .main-heading");

links.addEventListener("click", function (e) {
  if (e.target === a) {
    if (megaMenu.classList.contains("show")) {
      megaMenu.classList.remove("show");
      articles.style.zIndex = "100";
      heading.style.zIndex = "100";
    } else {
      megaMenu.classList.add("show");
      articles.style.zIndex = "0";
      heading.style.zIndex = "0";
    }
  }
});

let inputs = document.querySelectorAll("#discount input");

inputs.forEach((input) => {
  input.oninput = function () {
    let maxLength = input.getAttribute("maxlength");
    let count = input.value.length;
    let firstProgress = document.querySelector(
      "#discount .progress:first-of-type"
    );
    let secProgress = document.querySelector(
      "#discount .progress:last-of-type"
    );
    if (inputs[0] == input) {
      firstProgress.style.width = `${(count * 100) / maxLength}%`;
    } else if (inputs[1] == input) {
      secProgress.style.width = `${(count * 100) / maxLength}%`;
    }
  };
});
