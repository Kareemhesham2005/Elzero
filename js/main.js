let menuBtn = document.querySelector("header .menu-btn");
let menu = document.querySelector("header .menu");
menuBtn.addEventListener("click", function () {
  if (menuBtn.classList.contains("open")) {
    megaMenu.classList.remove("show");
    menuBtn.classList.remove("open");
    menu.style.left = "-50%";
  } else {
    menuBtn.classList.add("open");
    menu.style.left = "50%";
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

let countDownDate = new Date("Dec 31, 2021 23:59:59").getTime();

let counter = setInterval(() => {
  let datenow = new Date().getTime();
  let date = countDownDate - datenow;

  let days = Math.floor(date / 1000 / 60 / 60 / 24);
  let hours = Math.floor((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((date % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((date % (1000 * 60)) / 1000);
  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
  if (date < 0) {
    clearInterval(counter);
  }
}, 1000);
