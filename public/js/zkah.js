const body = document.getElementById("body");
const additems = document.createElement("div");
const form = document.getElementById("myForm");
const form2 = document.getElementById("myForm2");
const table = document.getElementById("table");
const input = document.querySelectorAll(".input");
const cancel = document.getElementById("cancel");
const save = document.getElementById("save");
const ways = document.querySelectorAll(".ways");
const dateinput = document.getElementById("dateinput");
const mobincom = document.getElementById("mobincom");
const details = document.querySelectorAll(".details");
const rows = document.querySelectorAll(".rows");
const mainList = document.getElementById("sub-list");
const inpzkah = document.getElementById("inpzkah");

body.addEventListener("click", (eo) => {
  if (eo.target.classList.contains("main-link2")) {
    mainList.classList.toggle("hide");
    mainList.classList.toggle("clicked");
  } else {
    mainList.classList.add("hide");
    mainList.classList.toggle("clicked");
  }
});

// زرار الاضافه
body.append(additems);
additems.classList.add("additems");
additems.innerHTML = "مصروفات";
const addbutton = document.getElementsByClassName("additems");
addbutton[0].addEventListener("click", () => {
  form.style.display = "flex";
  form2.style.display = "none";
});

// التحكم فى الاسهم فى الموبايل

const summaryfn = () => {
  const summary = document.querySelectorAll(".summ");
  const detTable = document.querySelectorAll(".detTable");
  summary.forEach((item) => {
    item.addEventListener("click", (eo) => {
      const opentab = document.querySelectorAll(".shoow");
      if (
        !item.parentElement
          .getElementsByClassName("detTable")[0]
          .classList.contains("shoow")
      ) {
        item.parentElement
          .getElementsByClassName("detTable")[0]
          .classList.toggle("shoow");
        item
          .getElementsByClassName("icon-circle-left")[0]
          .classList.toggle("hide2");
        item
          .getElementsByClassName("icon-circle-down")[0]
          .classList.toggle("show2");
      }

      opentab.forEach((item) => {
        item.classList.remove("shoow");
        item.parentElement
          .getElementsByClassName("icon-circle-left")[0]
          .classList.remove("hide2");
        item.parentElement
          .getElementsByClassName("icon-circle-down")[0]
          .classList.remove("show2");
      });
    });
  });
};
summaryfn();

// التاكد من الحسابات فى الاضافه
const places = document.getElementById("places");
function calc() {
  if (
    dateinput.classList.contains("correct") &&
    places.value !== "" &&
    ways.value !== "" &&
    input[0].value !== "" &&
    input[0].value != 0 &&
    input[1].value !== "" &&
    input[1].value != 0 
  ) {
    save.removeAttribute("disabled");
  } else {
    save.setAttribute("disabled", " ");
  }
}
dateinput.addEventListener("change", () => {
  if (dateinput.value !== "") {
    dateinput.classList.add("correct");
  } else {
    dateinput.classList.remove("correct");
  }
  calc();
});
places.addEventListener("change", () => {
  calc();
});
input.forEach((item) => {
  item.addEventListener("change", () => {
    calc();
    item.style.border = "none";
  });
});
input.forEach((item) => {
  item.addEventListener("keyup", () => {
    calc();
    item.style.border = "none";
  });
});

// زرار الالغاء مع الاضافه
cancel.addEventListener("click", () => {
  form.style.display = "none";
  dateinput.value = "";
  places.value = "";
  input.forEach((item) => {
    item.value = " ";
    item.style.border = "none";
  });
  save.setAttribute("disabled", "");
  dateinput.classList.remove("correct");
});

const det = document.getElementById("det");
det.addEventListener("click", () => {
  const dettable = document.getElementById("dettable");
  dettable.classList.toggle("hide2");
});


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