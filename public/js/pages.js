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