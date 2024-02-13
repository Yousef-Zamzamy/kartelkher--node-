const body = document.getElementById("body");
const additems = document.createElement("div");
const form = document.getElementById("myForm");
const input = document.querySelectorAll(".input");
const cancel = document.getElementById("cancel");
const ways = document.querySelectorAll(".ways");
const dateinput = document.getElementById("dateinput");
const mainList = document.getElementById("sub-list");

// القائمه الفرعية
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
additems.innerHTML = "اضافة";
const addbutton = document.getElementsByClassName("additems");
addbutton[0].addEventListener("click", () => {
  form.style.display = "flex";
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
function calc() {
  var tot = 0;
  for (var i = 0; i < ways.length; i++) {
    if (parseInt(ways[i].value)) tot += parseInt(ways[i].value);
  }
  if (
    dateinput.classList.contains("correct") &&
    input[0].value !== "" &&
    input[1].value !== "" &&
    input[1].value > 0 &&
    input[2].value >= 0 &&
    input[3].value !== "" &&
    input[4].value !== "" &&
    input[5].value !== "" &&
    input[6].value !== "" &&
    input[1].value == tot
  ) {
    save.removeAttribute("disabled");
  } else {
    save.setAttribute("disabled", " ");
  }
}
input.forEach((item) => {
  item.addEventListener("keyup", () => {
    calc();
  });
});
dateinput.addEventListener("change", () => {
  dateinput.classList.add("correct");
  calc();
});

// زرار الالغاء مع الاضافه
cancel.addEventListener("click", () => {
  form.style.display = "none";
  dateinput.value = "";
  input.forEach((item) => {
    item.value = " ";
  });
  save.setAttribute("disabled", "");
  dateinput.classList.remove("correct");
});

// الاجمالي في الموبايل
const det = document.getElementById("det");
const dettable = document.getElementById("dettable");
det.addEventListener("click", () => {
  dettable.classList.toggle("hide2");
});

// ال exit
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
