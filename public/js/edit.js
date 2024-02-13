const input2 = document.querySelectorAll(".input2");
const ways2 = document.querySelectorAll(".ways2");
const dateinput2 = document.getElementById("dateinput2");
const save2 = document.getElementById("save2");


function calc2() {
  var tot2 = 0;
  for (var i = 0; i < ways2.length; i++) {
    if (parseInt(ways2[i].value)) tot2 += parseInt(ways2[i].value);
  }
  if (
    dateinput2.value !== "" &&
    input2[1].value !== "" &&
    input2[0].value !== "" &&
    input2[1].value > 0 &&
    input2[2].value >= 0 &&
    input2[3].value !== "" &&
    input2[4].value !== "" &&
    input2[5].value !== "" &&
    input2[6].value !== "" &&
    input2[1].value == tot2
  ) {
    save2.removeAttribute("disabled");
  } else {
    save2.setAttribute("disabled", " ");
  }
}
input2.forEach((item) => {
  item.addEventListener("keyup", () => {
    calc2();
  });
});
input2.forEach((item) => {
  item.addEventListener("change", () => {
    calc2();
  });
});
dateinput2.addEventListener("change", () => {
  calc2();
});
