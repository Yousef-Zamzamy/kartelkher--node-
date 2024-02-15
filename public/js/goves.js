const addoutcome = document.createElement("div");
const form3 = document.getElementById("myForm3");
const input3 = document.querySelectorAll(".input3");
const cancel3 = document.getElementById("cancel3");
const save3 = document.getElementById("save3");
const dateinput3 = document.getElementById("dateinput3");
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

let btntype = 0;
let btntype2 = 0;
body.append(addoutcome);
addoutcome.classList.add("addoutcome");
// addoutcome.classList.add("hide");
addoutcome.innerHTML = "حسابات";
const addoutcomebtn = document.getElementsByClassName("addoutcome");
addoutcomebtn[0].addEventListener("click", () => {
  form3.style.display = "none";
  const options = places3.querySelectorAll(".options");
  form3.style.display = "flex";
});
const Numbering = () => {
  const alltable = document.querySelectorAll(".table");
  alltable.forEach((item) => {
    const numb = item.querySelectorAll(".numb");
    for (let i = 0; i < numb.length; i++) {
      numb[i].innerText = i + 1;
    }
  });
};
Numbering();

const Numbering2 = () => {
  const allmobtable = document.querySelectorAll(".mobtable");
  allmobtable.forEach((item) => {
    const numb2 = item.querySelectorAll(".numb2");
    for (let i = 0; i < numb2.length; i++) {
      numb2[i].innerText = i + 1;
    }
  });
};
Numbering2();

const summaryfn = () => {
  const summary = document.querySelectorAll(".summ");
  const detTable = document.querySelectorAll(".detTable");
  summary.forEach((item) => {
    item.addEventListener("click", (eo) => {
      const opentab = document.querySelectorAll(".shooow");
      if (
        !item.parentElement
          .getElementsByClassName("detTable")[0]
          .classList.contains("shooow")
      ) {
        item.parentElement
          .getElementsByClassName("detTable")[0]
          .classList.toggle("shooow");
        item
          .getElementsByClassName("icon-circle-left")[0]
          .classList.toggle("hide2");
        item
          .getElementsByClassName("icon-circle-down")[0]
          .classList.toggle("show2");
      }

      opentab.forEach((item) => {
        item.classList.remove("shooow");
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
const places2 = document.getElementById("places2");
const places3 = document.getElementById("places3");
const places4 = document.getElementById("places4");


function calc3() {
  if (
    dateinput3.classList.contains("correct") &&
    places3.value !== "" &&
    input3[0].value !== "" &&
    input3[0].value > 0
  ) {
    save3.removeAttribute("disabled");
  } else {
    save3.setAttribute("disabled", " ");
  }
}

dateinput3.addEventListener("change", () => {
  if (dateinput3.value !== "") {
    dateinput3.classList.add("correct");
  } else {
    dateinput3.classList.remove("correct");
  }
  calc3();
});

places3.addEventListener("change", () => {
  calc3();
});

input3.forEach((item) => {
  item.addEventListener("change", () => {
    calc3();
    item.style.border = "none";
  });
});

input3.forEach((item) => {
  item.addEventListener("keyup", () => {
    calc3();
    item.style.border = "none";
  });
});

cancel3.addEventListener("click", () => {
  form3.style.display = "none";
  dateinput3.value = "";
  places3.value = "";
  type.value = "";
  ways3.value = "";
  input3.forEach((item) => {
    item.value = "";
    item.style.border = "none";
  });
  save3.setAttribute("disabled", "");
  dateinput3.classList.remove("correct");
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