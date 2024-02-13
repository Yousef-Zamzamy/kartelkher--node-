const body = document.getElementById("body");
const form = document.getElementById("myForm");
const form2 = document.getElementById("myForm2");
const form4 = document.getElementById("myForm4");
const input = document.querySelectorAll(".input");
const input2 = document.querySelectorAll(".input2");
const input4 = document.querySelectorAll(".input4");
const cancel = document.getElementById("cancel");
const cancel2 = document.getElementById("cancel2");
const cancel4 = document.getElementById("cancel4");
const save = document.getElementById("save");
const save2 = document.getElementById("save2");
const save4 = document.getElementById("save4");
const dateinput = document.getElementById("dateinput");
const dateinput2 = document.getElementById("dateinput2");
const dateinput4 = document.getElementById("dateinput4");
const mobincom = document.getElementById("mobincom");
const details = document.querySelectorAll(".details");
const rows = document.querySelectorAll(".rows");
const mainList = document.getElementById("sub-list");

body.addEventListener("click", (eo) => {
  if (eo.target.classList.contains("main-link2")) {
    mainList.classList.toggle("hide");
    mainList.classList.toggle("clicked");
  } else {
    mainList.classList.add("hide");
    mainList.classList.toggle("clicked");
  }
});

let findgov = 0;
let trgtgov = 0;
const findGov = () => {
  const goverments = document.getElementById("goverments");
  goverments.addEventListener("change", () => {
    findgov = goverments.value;
    const placegov = document.querySelectorAll(".place");
    placegov.forEach((item) => {
      if (item.innerText.includes(`${findgov}`)) {
        item.parentElement.parentElement.parentElement.classList.remove("hide");
        addoutcome.classList.remove("hide");
      } else if (!item.innerText.includes(`${findgov}`)) {
        item.parentElement.parentElement.parentElement.classList.add("hide");
      }
    });

    const mobplacegov = document.querySelectorAll(".mobplace");
    mobplacegov.forEach((item) => {
      if (item.innerText.includes(`${findgov}`)) {
        item.parentElement.parentElement.classList.remove("hide");
      } else if (!item.innerText.includes(`${findgov}`)) {
        item.parentElement.parentElement.classList.add("hide");
      }
    });
  });
};
findGov();


const exit = document.getElementById("exit")
const exit2 = document.getElementById("exit2")
exit.addEventListener("click" , (e) => {
  window.history.pushState(null, "", location.href = "/");
  window.onpopstate = function(){
    window.history.pushState(null, "", location.href = "/");
  }
})
exit2.addEventListener("click" , (e) => {
  window.history.pushState(null, "", location.href = "/");
  window.onpopstate = function(){
    window.history.pushState(null, "", location.href = "/");
  }
})