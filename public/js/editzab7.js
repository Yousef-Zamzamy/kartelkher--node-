const input2 = document.querySelectorAll(".input2");
const cancel2 = document.getElementById("cancel2");
const save2 = document.getElementById("save2");
const ways2 = document.querySelectorAll(".ways2");
const dateinput2 = document.getElementById("dateinput2");

function calc2() {
  if (
    places2.value !== "" &&
    input2[0].value !== "" &&
    input2[0].value !== 0 &&
    input2[2].value !== "" &&
    input2[2].value !== 0 &&
    input2[1].value !== 0 &&
    input2[1].value !== ""
  ) {
    save2.removeAttribute("disabled");
  } else {
    save2.setAttribute("disabled", " ");
  }
}

dateinput2.addEventListener("change", () => {
  if (dateinput2.value !== "") {
    dateinput2.classList.add("correct");
  } else {
    dateinput2.classList.remove("correct");
  }
  calc2();
});

places2.addEventListener("change", () => {
  calc2();
});

input2.forEach((item) => {
  item.addEventListener("keyup", () => {
    calc2();
    item.style.border = "none";
  });
});
