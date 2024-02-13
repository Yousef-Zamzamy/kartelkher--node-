const body = document.getElementById("body");
const addcurrency = document.createElement("div");
const addoutcome = document.createElement("div");
const form2 = document.getElementById("myForm2");
const form3 = document.getElementById("myForm3");
const input2 = document.querySelectorAll(".input2");
const input3 = document.querySelectorAll(".input3");
const input4 = document.querySelectorAll(".input4");
const cancel2 = document.getElementById("cancel2");
const cancel3 = document.getElementById("cancel3");
const cancel4 = document.getElementById("cancel4");
const save2 = document.getElementById("save2");
const save3 = document.getElementById("save3");
const save4 = document.getElementById("save4");
const dateinput2 = document.getElementById("dateinput2");
const dateinput3 = document.getElementById("dateinput3");
const dateinput4 = document.getElementById("dateinput4");
const mobincom = document.getElementById("mobincom");
const details = document.querySelectorAll(".details");
const rows = document.querySelectorAll(".rows");
const mainList = document.getElementById("sub-list");

let findgov = 0;
let trgtgov = 0;
const findGov = () => {
  const goverments = document.getElementById("goverments");
  goverments.addEventListener("change", () => {
    findgov = goverments.value;
    const placegov = document.querySelectorAll(".place");
    placegov.forEach((item) => {
      if (item.innerText.includes(`${findgov}`)) {
        item.parentElement.parentElement.parentElement.classList.remove("hide");
        addcurrency.classList.remove("hide");
        addoutcome.classList.remove("hide");
      } else if (!item.innerText.includes(`${findgov}`)) {
        item.parentElement.parentElement.parentElement.classList.add("hide");
      }
    });

    const mobplacegov = document.querySelectorAll(".mobplace");
    mobplacegov.forEach((item) => {
      if (item.innerText.includes(`${findgov}`)) {
        item.parentElement.parentElement.classList.remove("hide");
      } else if (!item.innerText.includes(`${findgov}`)) {
        item.parentElement.parentElement.classList.add("hide");
      }
    });

    if (findgov == "none") {
      addcurrency.classList.add("hide");
      addoutcome.classList.add("hide");
    }
  });
};
findGov();

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
body.append(addoutcome);
addoutcome.classList.add("addoutcome");
addoutcome.classList.add("hide");
addoutcome.innerHTML = "مصروفات";
const addoutcomebtn = document.getElementsByClassName("addoutcome");
addoutcomebtn[0].addEventListener("click", () => {
  form2.style.display = "none";
  form3.style.display = "flex";
  const options = places3.querySelectorAll(".options")
  options.forEach((item) => {
    if (!item.innerText.includes(`${findgov}`)) {
      item.style.display = "none"
      item.style.fontWeight = "normal";
    } else if (item.innerText.includes(`${findgov}`)) {
      item.style.display = "block"
      item.style.fontWeight = "bold";
    } 
  });
});

// الترقيم التلقائي
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

// الترقيم التلقائي فى الموبايل
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

// التحكم فى الاسهم فى الموبايل

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
const places2 = document.getElementById("places2");
const places3 = document.getElementById("places3");

function calc3() {
  if (
    dateinput3.classList.contains("correct") &&
    places3.value !== "" &&
    input3[0].value !== "" &&
    input3[1].value !== "" &&
    input3[1].value != 0
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

// زرار الالغاء مع الاضافه

cancel3.addEventListener("click", () => {
  form3.style.display = "none";
  dateinput3.value = "";
  places3.value = "";
  input3.forEach((item) => {
    item.value = "";
    item.style.border = "none";
  });
  save3.setAttribute("disabled", "");
  dateinput3.classList.remove("correct");
});

// زرار الحفظ مع الاضافه
let placeadd = 0;
let moneyadd = 0;
let remain = 0;

const totcurrence = () => {
  let totoutcomeno = 0;
  const findTable = document.querySelectorAll(".place");
  findTable.forEach((item) => {
    targetTable = item.parentElement.parentElement;
    const totaloutcomee = targetTable.querySelectorAll(".outcome");

    for (let i = 0; i < totaloutcomee.length; i++) {
      totoutcomeno = totoutcomeno + Number(totaloutcomee[i].innerText);
    }
    targetTable.getElementsByClassName("totaloutcome")[0].innerText =
      totoutcomeno;
    totoutcomeno = 0;
  });
};

const totcurrence2 = () => {
  let totoutcomeno = 0;
  const findmobTable = document.querySelectorAll(".mobplace");
  findmobTable.forEach((item) => {
    targetmobTable =
      item.parentElement.parentElement.getElementsByClassName("mobtable")[0];
    const totaloutcomee = targetmobTable.querySelectorAll(".moboutcome");

    for (let i = 0; i < totaloutcomee.length; i++) {
      totoutcomeno = totoutcomeno + Number(totaloutcomee[i].innerText);
    }
    targetmobTable.getElementsByClassName("mobtotaloutcome")[0].innerText =
      totoutcomeno;
    totoutcomeno = 0;
  });
};

const defaultmon = () => {
  const totaloutcome = document.querySelectorAll(".totaloutcome");
  totaloutcome.forEach((item) => {
    item.innerText = 0;
  });
};
defaultmon();

let totbalanceno = 0;
let targetTable = 0;
let targetmobTable = 0;
let targetremain = 0;
let inpmon = 0;

save3.addEventListener("click", () => {
  let dateadd = dateinput3.value;
  let place = places3.value;
  let dataadd = input3[0].value;
  let outcomeadd = input3[1].value;

  const findTable = document.querySelectorAll(".place");
  findTable.forEach((item) => {
    if (item.innerText == place) {
      targetTable = item.parentElement.parentElement;
    }
  });

  const findmobTable = document.querySelectorAll(".mobplace");
  findmobTable.forEach((item) => {
    if (item.innerText == place) {
      targetmobTable =
        item.parentElement.parentElement.getElementsByClassName("detTable")[0];
    }
  });

  form3.style.display = "none";
  dateinput3.value = "";
  places3.value = "";
  dateinput3.classList.remove("correct");
  input3.forEach((item) => {
    item.value = "";
  });

  let rowCount = targetTable.rows.length;
  let row = targetTable.insertRow(rowCount - 1);
  row.classList.add("rows");

  let cell1 = row.insertCell(0);
  cell1.classList.add("numb");
  cell1.innerText = "";

  let cell2 = row.insertCell(1);
  cell2.classList.add("date");
  cell2.innerText = `${dateadd}`;

  let cell3 = row.insertCell(2);
  cell3.classList.add("data");
  cell3.innerText = `${dataadd}`;

  let cell4 = row.insertCell(3);
  cell4.classList.add("outcome");
  cell4.innerText = `${outcomeadd}`;

  let cell5 = row.insertCell(4);
  var iconadd = document.createElement("div");
  iconadd.classList.add("icons");
  iconadd.innerHTML = `<span class="icon-pencil"></span>
                     <span class="icon-trash del"></span>`;
  cell5.appendChild(iconadd);

  let rowmobCount = targetmobTable.rows.length;
  let mobrow = targetmobTable.insertRow(rowmobCount - 1);
  mobrow.classList.add("rows");

  let mobcell1 = mobrow.insertCell(0);
  mobcell1.classList.add("numb2");
  mobcell1.innerText = "";

  let mobcell2 = mobrow.insertCell(1);
  mobcell2.classList.add("mobdate");
  mobcell2.innerText = `${dateadd}`;

  let mobcell3 = mobrow.insertCell(2);
  mobcell3.classList.add("mobdata");
  mobcell3.innerText = `${dataadd}`;

  let mobcell4 = mobrow.insertCell(3);
  mobcell4.classList.add("moboutcome");
  mobcell4.innerText = `${outcomeadd}`;

  let mobcell5 = mobrow.insertCell(4);
  var iconadd = document.createElement("div");
  iconadd.classList.add("icons");
  iconadd.innerHTML = `<span class="icon-pencil2"></span>
                       <span class="icon-trash2 del"></span>`;
  mobcell5.appendChild(iconadd);

  save3.setAttribute("disabled", "");
  Numbering();
  Numbering2();
  totcurrence();
  totcurrence2();
  
});

//  الحذف من اول مره او بعد اضافه او تعديل

let i = 0;
let i2 = 0;
const nummfn = () => {
  const numm2 = document.querySelectorAll(".numb2");
  numm2[i - 1].parentElement.remove();
  Numbering();
  Numbering2();
  summaryfn();
};
const nummfn2 = () => {
  const numm = document.querySelectorAll(".numb");
  numm[i2 - 1].parentElement.remove();
  Numbering();
  Numbering2();
  summaryfn();
};

MainSec.addEventListener("click", (eo) => {
  if (eo.target.classList.contains("icon-trash")) {
    eo.target.parentElement.parentElement.parentElement.remove();
    i =
      eo.target.parentElement.parentElement.parentElement.getElementsByClassName(
        "numb"
      )[0].innerText;
    nummfn();

    Numbering();
    Numbering2();
    summaryfn();
    totcurrence();
    totcurrence2();
    
  } else if (eo.target.classList.contains("icon-trash2")) {
    eo.target.parentElement.parentElement.parentElement.remove();
    i2 =
      eo.target.parentElement.parentElement.parentElement.getElementsByClassName(
        "numb2"
      )[0].innerText;
    nummfn2();
    Numbering();
    Numbering2();
    summaryfn();
    totcurrence();
    totcurrence2();
    
  }
});

let rownum = 0;
MainSec.addEventListener("click", (eo) => {
  if (eo.target.classList.contains("icon-pencil")) {
    form2.style.display = "flex";
    form3.style.display = "none";
    dateinput2.classList.add("correct");
    rownum =
      eo.target.parentElement.parentElement.parentElement.firstElementChild
        .innerText;
    dateinput2.value =
      eo.target.parentElement.parentElement.parentElement.getElementsByClassName(
        "date"
      )[0].innerText;
    places2.value =
      eo.target.parentElement.parentElement.parentElement.parentElement.getElementsByClassName(
        "place"
      )[0].innerText;
    input2[0].value =
      eo.target.parentElement.parentElement.parentElement.getElementsByClassName(
        "data"
      )[0].innerText;
    input2[1].value =
      eo.target.parentElement.parentElement.parentElement.getElementsByClassName(
        "outcome"
      )[0].innerText;
    places2.setAttribute("disabled", "");
    Numbering();
    Numbering2();
    totcurrence();
    totcurrence2();
    summaryfn();
  } else if (eo.target.classList.contains("icon-pencil2")) {
    form2.style.display = "flex";
    form3.style.display = "none";
    dateinput2.classList.add("correct");
    rownum =
      eo.target.parentElement.parentElement.parentElement.firstElementChild
        .innerText;
    dateinput2.value =
      eo.target.parentElement.parentElement.parentElement.getElementsByClassName(
        "mobdate"
      )[0].innerText;
    places2.value =
      eo.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName(
        "mobplace"
      )[0].innerText;
    input2[0].value =
      eo.target.parentElement.parentElement.parentElement.getElementsByClassName(
        "mobdata"
      )[0].innerText;
    input2[1].value =
      eo.target.parentElement.parentElement.parentElement.getElementsByClassName(
        "moboutcome"
      )[0].innerText;
    places2.setAttribute("disabled", "");
    Numbering();
    Numbering2();
    totcurrence();
    totcurrence2();
    summaryfn();
  }
});

cancel2.addEventListener("click", () => {
  form2.style.display = "none";
  dateinput2.classList.remove("correct");
  Numbering();
  Numbering2();
  summaryfn();
  totcurrence();
  totcurrence2();
});

function calc2() {
  if (
    !dateinput2.classList.contains("correct") ||
    input2[0].value == "" ||
    input2[1].value == "" ||
    input2[1].value == 0
  ) {
    save2.setAttribute("disabled", " ");
  } else {
    save2.removeAttribute("disabled");
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

// زرار الحفظ مع التعديل
let targetcurrence = 0;
let targetoutcome = 0;
save2.addEventListener("click", () => {
  let dateedit = dateinput2.value;
  let placeedit = places2.value;
  let dataedit = input2[0].value;
  let outcomeedit = input2[1].value;

  const findTable = document.querySelectorAll(".place");
  findTable.forEach((item) => {
    if (item.innerText == placeedit) {
      targetTable = item.parentElement.parentElement.querySelectorAll(".rows");
    }
  });

  const findmobTable = document.querySelectorAll(".mobplace");
  findmobTable.forEach((item) => {
    if (item.innerText == placeedit) {
      targetmobTable = item.parentElement.parentElement
        .getElementsByClassName("detTable")[0]
        .querySelectorAll(".rows");
    }
  });

  form2.style.display = "none";

  targetTable[rownum].getElementsByClassName(
    "date"
  )[0].innerText = `${dateedit}`;
  targetTable[rownum].getElementsByClassName(
    "data"
  )[0].innerText = `${dataedit}`;
  targetTable[rownum].getElementsByClassName(
    "outcome"
  )[0].innerText = `${outcomeedit}`;

  targetmobTable[rownum].getElementsByClassName(
    "mobdate"
  )[0].innerText = `${dateedit}`;
  targetmobTable[rownum].getElementsByClassName(
    "mobdata"
  )[0].innerText = `${dataedit}`;
  targetmobTable[rownum].getElementsByClassName(
    "moboutcome"
  )[0].innerText = `${outcomeedit}`;

  save2.setAttribute("disabled", "");
  Numbering();
  Numbering2();
  totcurrence();
  totcurrence2();
  summaryfn();
  
});

const sortlist = document.querySelectorAll(".sort");
sortlist.forEach((item, index) => {
  item.addEventListener("click", () => {
    const tgtable = item.parentElement.parentElement.parentElement;
    const sortdatearry = tgtable.querySelectorAll(".date");
    for (let i = 0; i < sortdatearry.length; i++) {
      if (
        Number(sortdatearry[i].innerText.replace("-", "").replace("-", "")) <
        Number(sortdatearry[i + 1].innerText.replace("-", "").replace("-", ""))
      ) {
        let row1 = sortdatearry[i].parentElement.innerHTML;
        let row22 = sortdatearry[i + 1].parentElement.innerHTML;
        let dateswit = row1;
        row1 = row22;
        row22 = dateswit;
        sortdatearry[i].parentElement.innerHTML = row1;
        sortdatearry[i + 1].parentElement.innerHTML = row22;

        const mobsortlist = document.querySelectorAll(".mobsort");
        const mobtgtable =
          mobsortlist[index].parentElement.parentElement.parentElement;
        const mobsortdatearry = mobtgtable.querySelectorAll(".mobdate");
        let mobrow1 = mobsortdatearry[i].parentElement.innerHTML;
        let mobrow22 = mobsortdatearry[i + 1].parentElement.innerHTML;
        let mobdateswit = mobrow1;
        mobrow1 = mobrow22;
        mobrow22 = mobdateswit;
        mobsortdatearry[i].parentElement.innerHTML = mobrow1;
        mobsortdatearry[i + 1].parentElement.innerHTML = mobrow22;
      }
      totcurrence();
      totcurrence2();
      Numbering();
      Numbering2();
    }
    summaryfn();
    
  });
});

const mobsortlist = document.querySelectorAll(".mobsort");
mobsortlist.forEach((item, index) => {
  item.addEventListener("click", () => {
    const mobtgtable = item.parentElement.parentElement.parentElement;
    const mobsortdatearry = mobtgtable.querySelectorAll(".mobdate");
    for (let i = 0; i < mobsortdatearry.length; i++) {
      if (
        Number(mobsortdatearry[i].innerText.replace("-", "").replace("-", "")) <
        Number(
          mobsortdatearry[i + 1].innerText.replace("-", "").replace("-", "")
        )
      ) {
        let mobrow1 = mobsortdatearry[i].parentElement.innerHTML;
        let mobrow22 = mobsortdatearry[i + 1].parentElement.innerHTML;
        let mobdateswit = mobrow1;
        mobrow1 = mobrow22;
        mobrow22 = mobdateswit;
        mobsortdatearry[i].parentElement.innerHTML = mobrow1;
        mobsortdatearry[i + 1].parentElement.innerHTML = mobrow22;

        const sortlist = document.querySelectorAll(".sort");
        const tgtable =
          sortlist[index].parentElement.parentElement.parentElement;
        const sortdatearry = tgtable.querySelectorAll(".date");
        let row1 = sortdatearry[i].parentElement.innerHTML;
        let row22 = sortdatearry[i + 1].parentElement.innerHTML;
        let dateswit = row1;
        row1 = row22;
        row22 = dateswit;
        sortdatearry[i].parentElement.innerHTML = row1;
        sortdatearry[i + 1].parentElement.innerHTML = row22;
      }
      Numbering();
      Numbering2();
      totcurrence();
      totcurrence2();
    }
    summaryfn();
    
  });
});

const desortlist = document.querySelectorAll(".desort");
desortlist.forEach((item, index) => {
  item.addEventListener("click", () => {
    const tgtable = item.parentElement.parentElement.parentElement;
    const sortdatearry = tgtable.querySelectorAll(".date");
    for (let i = 0; i < sortdatearry.length; i++) {
      if (
        Number(sortdatearry[i].innerText.replace("-", "").replace("-", "")) >
        Number(sortdatearry[i + 1].innerText.replace("-", "").replace("-", ""))
      ) {
        let row1 = sortdatearry[i].parentElement.innerHTML;
        let row22 = sortdatearry[i + 1].parentElement.innerHTML;
        let dateswit = row1;
        row1 = row22;
        row22 = dateswit;
        sortdatearry[i].parentElement.innerHTML = row1;
        sortdatearry[i + 1].parentElement.innerHTML = row22;

        const demobsortlist = document.querySelectorAll(".mobdesort");
        const mobtgtable =
          demobsortlist[index].parentElement.parentElement.parentElement;
        const mobsortdatearry = mobtgtable.querySelectorAll(".mobdate");
        let mobrow1 = mobsortdatearry[i].parentElement.innerHTML;
        let mobrow22 = mobsortdatearry[i + 1].parentElement.innerHTML;
        let mobdateswit = mobrow1;
        mobrow1 = mobrow22;
        mobrow22 = mobdateswit;
        mobsortdatearry[i].parentElement.innerHTML = mobrow1;
        mobsortdatearry[i + 1].parentElement.innerHTML = mobrow22;
      }
      totcurrence();
      totcurrence2();
      Numbering();
      Numbering2();
    }
    summaryfn();
    
  });
});

const mobdesortlist = document.querySelectorAll(".mobdesort");
mobdesortlist.forEach((item, index) => {
  item.addEventListener("click", () => {
    const mobtgtable = item.parentElement.parentElement.parentElement;
    const mobsortdatearry = mobtgtable.querySelectorAll(".mobdate");
    for (let i = 0; i < mobsortdatearry.length; i++) {
      if (
        Number(mobsortdatearry[i].innerText.replace("-", "").replace("-", "")) >
        Number(
          mobsortdatearry[i + 1].innerText.replace("-", "").replace("-", "")
        )
      ) {
        let mobrow1 = mobsortdatearry[i].parentElement.innerHTML;
        let mobrow22 = mobsortdatearry[i + 1].parentElement.innerHTML;
        let mobdateswit = mobrow1;
        mobrow1 = mobrow22;
        mobrow22 = mobdateswit;
        mobsortdatearry[i].parentElement.innerHTML = mobrow1;
        mobsortdatearry[i + 1].parentElement.innerHTML = mobrow22;

        const desortlist = document.querySelectorAll(".desort");
        const tgtable =
          desortlist[index].parentElement.parentElement.parentElement;
        const sortdatearry = tgtable.querySelectorAll(".date");
        let row1 = sortdatearry[i].parentElement.innerHTML;
        let row22 = sortdatearry[i + 1].parentElement.innerHTML;
        let dateswit = row1;
        row1 = row22;
        row22 = dateswit;
        sortdatearry[i].parentElement.innerHTML = row1;
        sortdatearry[i + 1].parentElement.innerHTML = row22;
      }
      Numbering();
      Numbering2();
      totcurrence();
      totcurrence2();
    }
    summaryfn();
    
  });
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
