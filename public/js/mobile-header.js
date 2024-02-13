const main = document.getElementById("main");
const mobUl = document.getElementById("mobUl");
const mobMenu = document.querySelectorAll(".mobMenu");
const plusIcon = document.querySelectorAll(".plusIcon");
const mobHeader = document.getElementById("mobHeader");
const minusIcon = document.querySelectorAll(".minusIcon");
const MainSec = document.getElementById("MainSec");


/* ------------فتح القائمه------------- */

main.addEventListener("click", (eo) => {
  MainSec.classList.toggle("shift");
  mobUl.classList.toggle("show");
  mobUl.classList.toggle("clicked");
  mobHeader.classList.toggle("fix");
  const delall = main.parentElement.querySelectorAll(".subsubmob");
  delall.forEach((item) => {
    item.classList.remove("show");
  });
});

