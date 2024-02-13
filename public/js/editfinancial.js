const input2 = document.querySelectorAll(".input2");
const cancel2 = document.getElementById("cancel2");
const save2 = document.getElementById("save2");
const places2 = document.getElementById("places2");
const type = document.getElementById("type");
const ways2 = document.getElementById("ways2");
const dateinput2 = document.getElementById("dateinput2");

function calc2() {
  if (
    places2.value !== "" &&
    ways2.value !== "" &&
    type.value !== "" &&
    input2[0].value !== "" &&
    input2[0].value > 0 
  ) {
    save2.removeAttribute("disabled");
  } else {
    save2.setAttribute("disabled", " ");
  }
}

dateinput2.addEventListener("change", () => {
  calc2();
});


places2.addEventListener("change", () => {
  calc2();
});
ways2.addEventListener("change", () => {
  calc2();
});
type.addEventListener("change", () => {
  calc2();
});

input2.forEach((item) => {
  item.addEventListener("keyup", () => {
    calc2();
    item.style.border = "none";
  });
});
