const body = document.getElementById("body");
const additems = document.createElement("div");
const form = document.getElementById("myForm");
const form2 = document.getElementById("myForm2");
const table = document.getElementById("table");
const input = document.querySelectorAll(".input");
const cancel = document.getElementById("cancel");
const save = document.getElementById("save");
const ways = document.querySelectorAll(".ways");
const dateinput = document.getElementById("dateinput");
const mobincom = document.getElementById("mobincom");
const details = document.querySelectorAll(".details");
const rows = document.querySelectorAll(".rows");
const mainList = document.getElementById("sub-list");
const inpzkah = document.getElementById("inpzkah");

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
additems.innerHTML = "مصروفات";
const addbutton = document.getElementsByClassName("additems");
addbutton[0].addEventListener("click", () => {
  form.style.display = "flex";
  form2.style.display = "none";
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
const places = document.getElementById("places");
function calc() {
  if (
    dateinput.classList.contains("correct") &&
    places.value !== "" &&
    ways.value !== "" &&
    input[0].value !== "" &&
    input[0].value != 0 
  ) {
    save.removeAttribute("disabled");
  } else {
    save.setAttribute("disabled", " ");
  }
}
dateinput.addEventListener("change", () => {
  if (dateinput.value !== "") {
    dateinput.classList.add("correct");
  } else {
    dateinput.classList.remove("correct");
  }
  calc();
});
places.addEventListener("change", () => {
  calc();
});
input.forEach((item) => {
  item.addEventListener("change", () => {
    calc();
    item.style.border = "none";
  });
});
input.forEach((item) => {
  item.addEventListener("keyup", () => {
    calc();
    item.style.border = "none";
  });
});

// زرار الالغاء مع الاضافه
cancel.addEventListener("click", () => {
  form.style.display = "none";
  dateinput.value = "";
  places.value = "";
  input.forEach((item) => {
    item.value = " ";
    item.style.border = "none";
  });
  save.setAttribute("disabled", "");
  dateinput.classList.remove("correct");
});


// save.addEventListener("click", () => {
//   let quantadd = input[0].value;
//   let moneyadd = input[1].value;

//   if (inpmon - moneyadd >= 0) {
//     let dateadd = dateinput.value;
//     let placeadd = places.value;
//     remain = inpmon - moneyadd;
//     inpmon = remain;
//     form.style.display = "none";
//     dateinput.value = "";
//     places.value = "";
//     dateinput.classList.remove("correct");
//     input.forEach((item) => {
//       item.value = "";
//     });

//     let rowCount = table.rows.length;
//     let row = table.insertRow(rowCount - 1);
//     row.classList.add("rows");

//     let cell1 = row.insertCell(0);
//     cell1.classList.add("numb");
//     cell1.innerText = "";

//     let cell2 = row.insertCell(1);
//     cell2.classList.add("date");
//     cell2.innerText = `${dateadd}`;

//     let cell3 = row.insertCell(2);
//     cell3.classList.add("place");
//     cell3.innerText = `${placeadd}`;

//     let cell4 = row.insertCell(3);
//     cell4.classList.add("quantity");
//     cell4.innerText = `${quantadd} كارت`;

//     let cell5 = row.insertCell(4);
//     cell5.classList.add("cost");
//     cell5.innerText = `${moneyadd}`;

//     let cell6 = row.insertCell(5);
//     cell6.classList.add("remain");
//     cell6.innerText = `${remain}`;

//     let cell7 = row.insertCell(6);
//     var iconadd = document.createElement("div");
//     iconadd.classList.add("icons");
//     iconadd.innerHTML = `<span class="icon-pencil"></span>
//                        <span class="icon-trash del"></span>`;
//     cell7.appendChild(iconadd);
//     input.forEach((item) => {
//       item.style.border = "none";
//     });

//     mobincom.innerHTML += `<div class="details">
//   <div class="summ">
//               <div class="iconstyl">
//               <span class="numm2"></span><span class="icon-circle-left"></span><span class="icon-circle-down hide2"></span></div>
//                <span class="mobplace">${placeadd}</span>
//             </div>
//   <table class="detTable">
//     <tr>
//       <td>التاريخ</td>
//       <td class="mobdate">${dateadd}</td>
//     </tr>
//     <tr>
//       <td>عدد الكروت</td>
//       <td class="mobquantity">${quantadd} كارت</td>
//     </tr>
//     <tr>
//       <td>المصروفات</td>
//       <td class="cost2">${moneyadd}</td>
//     </tr>
//     <tr>
//       <td>المتبقي</td>
//       <td class="remain2">${remain}</td>
//     </tr>
//     <tr>
//       <td>تعديلات</td>
//       <td>
//         <div class="icons2">
//           <span class="icon-pencil2"></span>
//           <span class="icon-trash2"></span>
//         </div>
//       </td>
//     </tr>
//   </table>
// </div> `;
//   } else {
//     input[1].style.border = "1px solid red";
//     summaryfn();
//   }

//   save.setAttribute("disabled", "");
//   Numbering();
//   Numbering2();
//   totcost();
//   tooooot();
//   resefn();
//   rowdetfn();
//   edit();
//   summaryfn();
//   totcost2();
//   remfn2();
//   tooooot2();
//   totalkart();
//   totalkart2();
  
// });

//  الحذف من اول مره او بعد اضافه او تعديل



// let rownum = 0;
// let totoutcom = 0;
// let old = 0;
// table.addEventListener("click", (eo) => {
//   if (eo.target.classList.contains("icon-pencil")) {
//     form2.style.display = "flex";
//     form.style.display = "none";
//     dateinput2.classList.add("correct");
//     rownum =
//       eo.target.parentElement.parentElement.parentElement.firstElementChild
//         .innerText;
//     dateinput2.value =
//       eo.target.parentElement.parentElement.parentElement.getElementsByClassName(
//         "date"
//       )[0].innerText;
//     places2.value =
//       eo.target.parentElement.parentElement.parentElement.getElementsByClassName(
//         "place"
//       )[0].innerText;
//     input2[0].value = parseFloat(
//       eo.target.parentElement.parentElement.parentElement.getElementsByClassName(
//         "quantity"
//       )[0].innerText
//     );
//     input2[1].value =
//       eo.target.parentElement.parentElement.parentElement.getElementsByClassName(
//         "cost"
//       )[0].innerText;
//     totoutcom = document.getElementById("totalpaid").innerText;
//     old = input2[1].value;
//     save2.setAttribute("disabled", "");

//     edit();
//     rowdetfn();
//     summaryfn();
//     totalkart();
//     totalkart2();
//     rem();
//   }
// });

// mobincom.addEventListener("click", (eo) => {
//   if (eo.target.classList.contains("icon-pencil2")) {
//     form2.style.display = "flex";
//     form.style.display = "none";
//     dateinput2.classList.add("correct");
//     rownum =
//       eo.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName(
//         "numm2"
//       )[0].innerText;
//     dateinput2.value =
//       eo.target.parentElement.parentElement.parentElement.parentElement.getElementsByClassName(
//         "mobdate"
//       )[0].innerText;
//     places2.value =
//       eo.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName(
//         "mobplace"
//       )[0].innerText;
//     input2[0].value = parseFloat(
//       eo.target.parentElement.parentElement.parentElement.parentElement.getElementsByClassName(
//         "mobquantity"
//       )[0].innerText
//     );
//     input2[1].value =
//       eo.target.parentElement.parentElement.parentElement.parentElement.getElementsByClassName(
//         "cost2"
//       )[0].innerText;
//     totoutcom = document.getElementById("totalpaid2").innerText;
//     old = input2[1].value;
//     save2.setAttribute("disabled", "");
//     edit();
//     rowdetfn();
//     summaryfn();
//     totalkart();
//     totalkart2();
//     rem();
//   }
// });


// زرار الحفظ مع التعديل


// save2.addEventListener("click", () => {
//   const rows = document.querySelectorAll(".rows");
//   const details = document.querySelectorAll(".details");
//   let quantedit = input2[0].value;
//   let moneyedit = input2[1].value;

//   if (
//     Number(inpzkah.innerText) - Number(totoutcom) + Number(old) - moneyedit >=
//     0
//   ) {
//     let dateaedit = dateinput2.value;
//     let placeedit = places2.value;
//     remain = inpmon - moneyedit;
//     // inpmon = remain;

//     form2.style.display = "none";
//     dateinput2.value = "";
//     places2.value = "";
//     dateinput2.classList.remove("correct");
//     input2.forEach((item) => {
//       item.value = "";
//     });

//     rows[rownum - 1].getElementsByClassName(
//       "date"
//     )[0].innerText = `${dateaedit}`;
//     rows[rownum - 1].getElementsByClassName(
//       "place"
//     )[0].innerText = `${placeedit}`;
//     rows[rownum - 1].getElementsByClassName(
//       "quantity"
//     )[0].innerText = `${quantedit} كارت`;
//     rows[rownum - 1].getElementsByClassName(
//       "cost"
//     )[0].innerText = `${moneyedit}`;

//     details[rownum - 1].getElementsByClassName(
//       "mobdate"
//     )[0].innerText = `${dateaedit}`;
//     details[rownum - 1].getElementsByClassName(
//       "mobplace"
//     )[0].innerText = `${placeedit}`;
//     details[rownum - 1].getElementsByClassName(
//       "mobquantity"
//     )[0].innerText = `${quantedit} كارت`;
//     details[rownum - 1].getElementsByClassName(
//       "cost2"
//     )[0].innerText = `${moneyedit}`;
//     form2.style.display = "none";
//     input2.forEach((item) => {
//       item.style.border = "none";
//     });
//     save2.removeAttribute("disabled");
//   } else if (
//     Number(inpzkah.innerText) - Number(totoutcom) + Number(old) - moneyedit <
//     0
//   ) {
//     input2[1].style.border = "1px solid red";
//     save2.setAttribute("disabled", "");
//     summaryfn();
//   }

//   Numbering();
//   Numbering2();
//   summaryfn();
//   totcost2();
//   remfn2();
//   tooooot2();
//   totcost();
//   remfn();
//   tooooot();
//   resefn();
//   rowdetfn();
//   edit();
//   totalkart();
//   totalkart2();
//   rem();
  
// });

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