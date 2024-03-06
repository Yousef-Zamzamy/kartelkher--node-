const mainList = document.getElementById("sub-list");
const body = document.getElementById("body");
body.addEventListener("click", (eo) => {
  if (eo.target.classList.contains("main-link2")) {
    mainList.classList.toggle("hide");
    mainList.classList.toggle("clicked");
  } else {
    mainList.classList.add("hide");
    mainList.classList.toggle("clicked");
  }
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




const summaryfn2 = () => {
  const summary = document.querySelectorAll(".summ2");
  const detTable = document.querySelectorAll(".detTable2");
  summary.forEach((item) => {
    item.addEventListener("click", (eo) => {
      const opentab = document.querySelectorAll(".shooow2");
      if (
        !item.parentElement
          .getElementsByClassName("detTable2")[0]
          .classList.contains("shooow2")
      ) {
        item.parentElement
          .getElementsByClassName("detTable2")[0]
          .classList.toggle("shooow2");
        item
          .getElementsByClassName("icon-circle-left")[0]
          .classList.toggle("hide2");
        item
          .getElementsByClassName("icon-circle-down")[0]
          .classList.toggle("show2");
      }

      opentab.forEach((item) => {
        item.classList.remove("shooow2");
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
summaryfn2();