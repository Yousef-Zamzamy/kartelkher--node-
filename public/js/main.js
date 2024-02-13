let userlogged = localStorage.getItem("user")
if (userlogged == "guest") {
  const boxes = document.querySelectorAll(".divcontainer")
  boxes[0].classList.add("notAllowed")
} else if (userlogged == "admin") {
  const boxes = document.querySelectorAll(".divcontainer")
  boxes[0].classList.remove("notAllowed")
}
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

const Numbering = (eo) => {
  const numms = document.querySelectorAll(".num")

  if (userlogged == "guest") {
    for (let i = 0; i < numms.length; i++) {
      if (numms[i].parentElement.parentElement.parentElement.parentElement.classList.contains("notAllowed")) {
        numms[i+1].innerHTML = i + 1
      } else {
        numms[i].innerHTML = i 
      }
    }
  } else if (userlogged == "admin") {
    for (let i = 0; i < numms.length; i++) {
        numms[i].innerHTML = i + 1
    }
  }
    
}
Numbering();

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
