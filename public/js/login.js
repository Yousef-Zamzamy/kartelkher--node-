const Loginbtn = document.getElementById("Loginbtn");
const usrname = document.getElementById("usrname");
const psw = document.getElementById("psw");
const warning = document.querySelectorAll(".warning");
const formitem = document.getElementById("formitem");
const warn = document.querySelectorAll(".warning");

Loginbtn.addEventListener("click", () => {
  if (usrname.value === "admin" || usrname.value === "Admin") {
    if (psw.value === "Kartelkher@2024") {
      const user = "admin";
      localStorage.setItem("user", user);
      window.history.pushState(null, "", (location.href = "/home.html"));
      window.onpopstate = function () {
        window.history.pushState(null, "", (location.href = "/home.html"));
      };
    } else if (psw.value !== "Kartelkher@2024") {
      warn.forEach((item) => {
        item.style.display = "block";
      });
    }
  } else if (usrname.value === "Guest" || usrname.value === "guest") {
    if (psw.value === "Guest001@2024") {
      const user = "guest";
      localStorage.setItem("user", user);
      window.history.pushState(null, "", (location.href = "/home.html"));
      window.onpopstate = function () {
        window.history.pushState(null, "", (location.href = "/home.html"));
      };
    } else if (psw.value !== "Guest001@2024") {
      warn.forEach((item) => {
        item.style.display = "block";
      });
    }
  } else if (
    usrname.value !== "admin" ||
    usrname.value !== "Admin" ||
    psw.value !== "Kartelkher@2024"
  ) {
    warn.forEach((item) => {
      item.style.display = "block";
    });
  }
  usrname.addEventListener("keyup", () => {
    warn.forEach((item) => {
      item.style.display = "none";
    });
  });
  psw.addEventListener("keyup", () => {
    warn.forEach((item) => {
      item.style.display = "none";
    });
  });
});
