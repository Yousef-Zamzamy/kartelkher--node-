
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