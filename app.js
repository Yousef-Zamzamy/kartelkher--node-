const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));
var methodOverride = require("method-override");
app.use(methodOverride("_method"));
const Income = require("./models/incomesSchema");
const Zkah = require("./models/zkahSchema");
const Sdkah = require("./models/sdkahSchema");
const Elag = require("./models/elagSchema");
const Worker = require("./models/workerSchema");
const Zab7 = require("./models/zab7Schema");
const Financial = require("./models/financialSchema");

mongoose
  .connect(
    "mongodb+srv://Kartelkher:3uxKiiJsQfyEMwAY@cluster0.gkrxvya.mongodb.net/All-data?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

//Get Request all pages----------------------------------------------------------

// login & home
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/home.html", (req, res) => {
  res.render("home");
});

// income & incomeview
app.get("/incom.html", (req, res) => {
  Income.find()
    .sort({ date: 1 })
    .then((result) => {
      Zkah.find().then((result1) => {
        Sdkah.find().then((result2) => {
          Elag.find().then((result3) => {
            Zab7.find().then((result4) => {
             Worker.find().then((result5) => {
              res.render("incom", {
                incomarr: result,
                zkaharr: result1,
                sdkaharr: result2,
                elagarr: result3,
                zab7arr: result4,
                workerarr: result5,
              });
             })
            });
          });
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/incomview.html", (req, res) => {
  Income.find()
    .sort({ date: 1 })
    .then((result) => {
      Zkah.find().then((result1) => {
        Sdkah.find().then((result2) => {
          Elag.find().then((result3) => {
            Zab7.find().then((result4) => {
              res.render("incomview", {
                incomarr: result,
                zkaharr: result1,
                sdkaharr: result2,
                elagarr: result3,
                zab7arr: result4,
              });
            });
          });
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/edit/:id", (req, res) => {
  Income.findById(req.params.id)
    .then((result) => {
      res.render("edit", { obj: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

// zkah & zkahview
app.get("/zkah.html", (req, res) => {
  Zkah.find()
    .sort({ date: 1 })
    .then((result) => {
      Income.find().then((result2) => {
        res.render("zkah", { zkaharr: result, incomarr: result2 });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/zkahview.html", (req, res) => {
  Zkah.find()
    .sort({ date: 1 })
    .then((result) => {
      res.render("zkahview", { zkaharr: result });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/editzkah/:id", (req, res) => {
  Zkah.findById(req.params.id)
    .then((result) => {
      res.render("editzkah", { obj: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

// sdkah & sdkahview
app.get("/sdkah.html", (req, res) => {
  Sdkah.find()
    .sort({ date: 1 })
    .then((result) => {
      Income.find().then((result2) => {
        res.render("sdkah", { sdkaharr: result, incomarr: result2 });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/sdkahview.html", (req, res) => {
  Sdkah.find()
    .sort({ date: 1 })
    .then((result) => {
      res.render("sdkahview", { sdkaharr: result });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/editsdkah/:id", (req, res) => {
  Sdkah.findById(req.params.id)
    .then((result) => {
      res.render("editsdkah", { obj: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

// elag & elagview
app.get("/elag.html", (req, res) => {
  Elag.find()
    .sort({ date: 1 })
    .then((result) => {
      Income.find().then((result2) => {
        res.render("elag", { elagarr: result, incomarr: result2 });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/elagview.html", (req, res) => {
  Elag.find()
    .sort({ date: 1 })
    .then((result) => {
      res.render("elagview", { elagarr: result });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/editelag/:id", (req, res) => {
  Elag.findById(req.params.id)
    .then((result) => {
      res.render("editelag", { obj: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

// zab7 & zab7view
app.get("/zab7.html", (req, res) => {
  Zab7.find()
    .sort({ date: 1 })
    .then((result) => {
      Income.find().then((result2) => {
        res.render("zab7", { zab7arr: result, incomarr: result2 });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/zab7view.html", (req, res) => {
  Zab7.find()
    .sort({ date: 1 })
    .then((result) => {
      res.render("zab7view", { zab7arr: result });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/editzab7/:id", (req, res) => {
  Zab7.findById(req.params.id)
    .then((result) => {
      res.render("editzab7", { obj: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

// worker & workerview
app.get("/worker.html", (req, res) => {
  Worker.find()
    .sort({ date: 1 })
    .then((result) => {
      Income.find().then((result2) => {
        res.render("worker", { workerarr: result, incomarr: result2 });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/workerview.html", (req, res) => {
  Worker.find()
    .sort({ date: 1 })
    .then((result) => {
      res.render("workerview", { workerarr: result });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/editworker/:id", (req, res) => {
  Worker.findById(req.params.id)
    .then((result) => {
      res.render("editworker", { obj: result });
    })
    .catch((err) => {
      console.log(err);
    });
});


// financial & financialview
app.get("/financial.html", (req, res) => {
  Financial.find()
    .sort({ date: 1 })
    .then((result) => {
      res.render("financial", { financialarr: result });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/aswan.html", (req, res) => {
  Financial.find()
    .sort({ date: 1 })
    .then((result) => {
      res.render("aswan", { financialarr: result });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/luxur.html", (req, res) => {
  Financial.find()
    .sort({ date: 1 })
    .then((result) => {
      res.render("luxur", { financialarr: result });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/kena.html", (req, res) => {
  Financial.find()
    .sort({ date: 1 })
    .then((result) => {
      res.render("kena", { financialarr: result });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/sohag.html", (req, res) => {
  Financial.find()
    .sort({ date: 1 })
    .then((result) => {
      res.render("sohag", { financialarr: result });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/minya.html", (req, res) => {
  Financial.find()
    .sort({ date: 1 })
    .then((result) => {
      res.render("minya", { financialarr: result });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/bnyswef.html", (req, res) => {
  Financial.find()
    .sort({ date: 1 })
    .then((result) => {
      res.render("bnyswef", { financialarr: result });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/redsea.html", (req, res) => {
  Financial.find()
    .sort({ date: 1 })
    .then((result) => {
      res.render("redsea", { financialarr: result });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/wahat.html", (req, res) => {
  Financial.find()
    .sort({ date: 1 })
    .then((result) => {
      res.render("wahat", { financialarr: result });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/bhera.html", (req, res) => {
  Financial.find()
    .sort({ date: 1 })
    .then((result) => {
      res.render("bhera", { financialarr: result });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/alex.html", (req, res) => {
  Financial.find()
    .sort({ date: 1 })
    .then((result) => {
      res.render("alex", { financialarr: result });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/financialview.html", (req, res) => {
  Financial.find()
    .sort({ date: 1 })
    .then((result) => {
      res.render("financialview", { financialarr: result });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/editaswan/:id", (req, res) => {
  Financial.findById(req.params.id)
    .then((result) => {
      res.render("editaswan", { obj: result });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/editluxur/:id", (req, res) => {
  Financial.findById(req.params.id)
    .then((result) => {
      res.render("editluxur", { obj: result });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/editsohag/:id", (req, res) => {
  Financial.findById(req.params.id)
    .then((result) => {
      res.render("editsohag", { obj: result });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/editkena/:id", (req, res) => {
  Financial.findById(req.params.id)
    .then((result) => {
      res.render("editkena", { obj: result });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/editminya/:id", (req, res) => {
  Financial.findById(req.params.id)
    .then((result) => {
      res.render("editminya", { obj: result });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/editbhera/:id", (req, res) => {
  Financial.findById(req.params.id)
    .then((result) => {
      res.render("editbhera", { obj: result });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/editwahat/:id", (req, res) => {
  Financial.findById(req.params.id)
    .then((result) => {
      res.render("editwahat", { obj: result });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/editredsea/:id", (req, res) => {
  Financial.findById(req.params.id)
    .then((result) => {
      res.render("editredsea", { obj: result });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/editalex/:id", (req, res) => {
  Financial.findById(req.params.id)
    .then((result) => {
      res.render("editalex", { obj: result });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/editbnyswef/:id", (req, res) => {
  Financial.findById(req.params.id)
    .then((result) => {
      res.render("editbnyswef", { obj: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

//post Request all pages----------------------------------------------------------
app.post("/incom.html", (req, res) => {
  Income.create(req.body)
    .then(() => {
      res.redirect("/incom.html");
    })
    .catch((err) => {
      console.log(err);
    });
});
app.post("/zkah.html", (req, res) => {
  let mobzkahall = 0;
  let zkahMoney = 0;
  Income.find().then((result) => {
    result.forEach((item) => {
      mobzkahall = mobzkahall + item.zkah;
    });
    Zkah.find().then((result) => {
      result.forEach((item) => {
        zkahMoney = zkahMoney + item.money;
      });
      if (mobzkahall >= Number(req.body.money) + zkahMoney) {
        Zkah.create(req.body)
          .then(() => {
            res.redirect("/zkah.html");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        res.redirect("/zkah.html");
      }
    });
  });
});
app.post("/sdkah.html", (req, res) => {
  let mobsdkahall = 0;
  let sdkahMoney = 0;
  Income.find().then((result) => {
    result.forEach((item) => {
      mobsdkahall = mobsdkahall + item.sdkah;
    });
    Sdkah.find().then((result) => {
      result.forEach((item) => {
        sdkahMoney = sdkahMoney + item.money;
      });
      if (mobsdkahall >= Number(req.body.money) + sdkahMoney) {
        Sdkah.create(req.body)
          .then(() => {
            res.redirect("/sdkah.html");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        res.redirect("/sdkah.html");
      }
    });
  });
});
app.post("/elag.html", (req, res) => {
  let mobelagall = 0;
  let elagMoney = 0;
  Income.find().then((result) => {
    result.forEach((item) => {
      mobelagall = mobelagall + item.elag;
    });
    Elag.find().then((result) => {
      result.forEach((item) => {
        elagMoney = elagMoney + item.money;
      });
      if (mobelagall >= Number(req.body.money) + elagMoney) {
        Elag.create(req.body)
          .then(() => {
            res.redirect("/elag.html");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        res.redirect("/elag.html");
      }
    });
  });
});
app.post("/zab7.html", (req, res) => {
  let mobzab7all = 0;
  let zab7Money = 0;
  Income.find().then((result) => {
    result.forEach((item) => {
      mobzab7all = mobzab7all + item.zab7;
    });
    Zab7.find().then((result) => {
      result.forEach((item) => {
        zab7Money = zab7Money + item.meatmoney + item.ricemoney;
      });
      if (
        mobzab7all >=
        Number(req.body.meatmoney) + Number(req.body.ricemoney) + zab7Money
      ) {
        Zab7.create(req.body)
          .then(() => {
            res.redirect("/zab7.html");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        res.redirect("/zab7.html");
      }
    });
  });
});
app.post("/worker.html", (req, res) => {
  let mobworkerall = 0;
  let workerMoney = 0;
  Income.find().then((result) => {
    result.forEach((item) => {
      mobworkerall = mobworkerall + item.worker;
    });
    Worker.find().then((result) => {
      result.forEach((item) => {
        workerMoney = workerMoney + item.money;
      });
      if (mobworkerall >= Number(req.body.money) + workerMoney) {
        Worker.create(req.body)
          .then(() => {
            res.redirect("/worker.html");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        res.redirect("/worker.html");
      }
    });
  });
});
app.post("/aswan.html", (req, res) => {
  let totalCurrence = 0;
  let totalOutcome = 0;
  if (req.body.type == "أضافة رصيد") {
    Financial.create(req.body)
      .then(() => {
        res.redirect("/aswan.html");
      })
      .catch((err) => {
        console.log(err);
      });
  } else if (req.body.type == "أضافة مصروفات") {
    Financial.find().then((result) => {
      result.forEach((item) => {
        if (
          item.type == "أضافة رصيد" &&
          item.places == "الحج كمال / دراو – أسوان"
        ) {
          totalCurrence = totalCurrence + item.money;
        } else if (
          item.type == "أضافة مصروفات" &&
          item.places == "الحج كمال / دراو – أسوان"
        ) {
          totalOutcome = totalOutcome + item.money;
        }
      });
      if (totalCurrence >= totalOutcome + Number(req.body.money)) {
        Financial.create(req.body)
          .then(() => {
            res.redirect("/aswan.html");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        res.redirect("/aswan.html");
      }
    });
  }
});
app.post("/luxur.html", (req, res) => {
  let totalCurrence = 0;
  let totalOutcome = 0;
  if (req.body.type == "أضافة رصيد") {
    Financial.create(req.body)
      .then(() => {
        res.redirect("/luxur.html");
      })
      .catch((err) => {
        console.log(err);
      });
  } else if (req.body.type == "أضافة مصروفات") {
    Financial.find().then((result) => {
      result.forEach((item) => {
        if (
          item.type == "أضافة رصيد" &&
          item.places == "علا / الضبعية – الأقصر"
        ) {
          totalCurrence = totalCurrence + item.money;
        } else if (
          item.type == "أضافة مصروفات" &&
          item.places == "علا / الضبعية – الأقصر"
        ) {
          totalOutcome = totalOutcome + item.money;
        }
      });
      if (totalCurrence >= totalOutcome + Number(req.body.money)) {
        Financial.create(req.body)
          .then(() => {
            res.redirect("/luxur.html");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        res.redirect("/luxur.html");
      }
    });
  }
});
app.post("/kena.html", (req, res) => {
  let totalCurrence = 0;
  let totalOutcome = 0;
  if (req.body.type == "أضافة رصيد") {
    Financial.create(req.body)
      .then(() => {
        res.redirect("/kena.html");
      })
      .catch((err) => {
        console.log(err);
      });
  } else if (req.body.type == "أضافة مصروفات") {
    Financial.find().then((result) => {
      result.forEach((item) => {
        if (
          item.type == "أضافة رصيد" &&
          item.places == "عبده لاوندي / قمولا – قنا"
        ) {
          totalCurrence = totalCurrence + item.money;
        } else if (
          item.type == "أضافة مصروفات" &&
          item.places == "عبده لاوندي / قمولا – قنا"
        ) {
          totalOutcome = totalOutcome + item.money;
        }
      });
      if (totalCurrence >= totalOutcome + Number(req.body.money)) {
        Financial.create(req.body)
          .then(() => {
            res.redirect("/kena.html");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        res.redirect("/kena.html");
      }
    });
  }
});
app.post("/sohag.html", (req, res) => {
  let totalCurrence = 0;
  let totalOutcome = 0;
  if (req.body.type == "أضافة رصيد") {
    Financial.create(req.body)
      .then(() => {
        res.redirect("/sohag.html");
      })
      .catch((err) => {
        console.log(err);
      });
  } else if (
    req.body.type == "أضافة مصروفات" &&
    req.body.places == "دياب / المحافظة – سوهاج"
  ) {
    Financial.find().then((result) => {
      result.forEach((item) => {
        if (
          item.type == "أضافة رصيد" &&
          item.places == "دياب / المحافظة – سوهاج"
        ) {
          totalCurrence = totalCurrence + item.money;
        } else if (
          item.type == "أضافة مصروفات" &&
          item.places == "دياب / المحافظة – سوهاج"
        ) {
          totalOutcome = totalOutcome + item.money;
        }
      });
      if (totalCurrence >= totalOutcome + Number(req.body.money)) {
        Financial.create(req.body)
          .then(() => {
            res.redirect("/sohag.html");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        res.redirect("/sohag.html");
      }
    });
  } else if (
    req.body.type == "أضافة مصروفات" &&
    req.body.places == "دياب / إدفا و الغوانم – سوهاج"
  ) {
    Financial.find().then((result) => {
      result.forEach((item) => {
        if (
          item.type == "أضافة رصيد" &&
          item.places == "دياب / إدفا و الغوانم – سوهاج"
        ) {
          totalCurrence = totalCurrence + item.money;
        } else if (
          item.type == "أضافة مصروفات" &&
          item.places == "دياب / إدفا و الغوانم – سوهاج"
        ) {
          totalOutcome = totalOutcome + item.money;
        }
      });
      if (totalCurrence >= totalOutcome + Number(req.body.money)) {
        Financial.create(req.body)
          .then(() => {
            res.redirect("/sohag.html");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        res.redirect("/sohag.html");
      }
    });
  } else if (
    req.body.type == "أضافة مصروفات" &&
    req.body.places == "رداد مراد / بهتا – سوهاج"
  ) {
    Financial.find().then((result) => {
      result.forEach((item) => {
        if (
          item.type == "أضافة رصيد" &&
          item.places == "رداد مراد / بهتا – سوهاج"
        ) {
          totalCurrence = totalCurrence + item.money;
        } else if (
          item.type == "أضافة مصروفات" &&
          item.places == "رداد مراد / بهتا – سوهاج"
        ) {
          totalOutcome = totalOutcome + item.money;
        }
      });
      if (totalCurrence >= totalOutcome + Number(req.body.money)) {
        Financial.create(req.body)
          .then(() => {
            res.redirect("/sohag.html");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        res.redirect("/sohag.html");
      }
    });
  } else if (
    req.body.type == "أضافة مصروفات" &&
    req.body.places == "عثمان أبو مروان / الشوكا – طما – سوهاج"
  ) {
    Financial.find().then((result) => {
      result.forEach((item) => {
        if (
          item.type == "أضافة رصيد" &&
          item.places == "عثمان أبو مروان / الشوكا – طما – سوهاج"
        ) {
          totalCurrence = totalCurrence + item.money;
        } else if (
          item.type == "أضافة مصروفات" &&
          item.places == "عثمان أبو مروان / الشوكا – طما – سوهاج"
        ) {
          totalOutcome = totalOutcome + item.money;
        }
      });
      if (totalCurrence >= totalOutcome + Number(req.body.money)) {
        Financial.create(req.body)
          .then(() => {
            res.redirect("/sohag.html");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        res.redirect("/sohag.html");
      }
    });
  }
});
app.post("/minya.html", (req, res) => {
  let totalCurrence = 0;
  let totalOutcome = 0;
  if (req.body.type == "أضافة رصيد") {
    Financial.create(req.body)
      .then(() => {
        res.redirect("/minya.html");
      })
      .catch((err) => {
        console.log(err);
      });
  } else if (req.body.type == "أضافة مصروفات") {
    Financial.find().then((result) => {
      result.forEach((item) => {
        if (
          item.type == "أضافة رصيد" &&
          item.places == "محمدعيد / نزله البرشا - ملوي – المنيا"
        ) {
          totalCurrence = totalCurrence + item.money;
        } else if (
          item.type == "أضافة مصروفات" &&
          item.places == "محمدعيد / نزله البرشا - ملوي – المنيا"
        ) {
          totalOutcome = totalOutcome + item.money;
        }
      });
      if (totalCurrence >= totalOutcome + Number(req.body.money)) {
        Financial.create(req.body)
          .then(() => {
            res.redirect("/minya.html");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        res.redirect("/minya.html");
      }
    });
  }
});
app.post("/bnyswef.html", (req, res) => {
  let totalCurrence = 0;
  let totalOutcome = 0;
  if (req.body.type == "أضافة رصيد") {
    Financial.create(req.body)
      .then(() => {
        res.redirect("/bnyswef.html");
      })
      .catch((err) => {
        console.log(err);
      });
  } else if (req.body.type == "أضافة مصروفات") {
    Financial.find().then((result) => {
      result.forEach((item) => {
        if (item.type == "أضافة رصيد" && item.places == "اشرف / بني سويف") {
          totalCurrence = totalCurrence + item.money;
        } else if (
          item.type == "أضافة مصروفات" &&
          item.places == "اشرف / بني سويف"
        ) {
          totalOutcome = totalOutcome + item.money;
        }
      });
      if (totalCurrence >= totalOutcome + Number(req.body.money)) {
        Financial.create(req.body)
          .then(() => {
            res.redirect("/bnyswef.html");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        res.redirect("/bnyswef.html");
      }
    });
  }
});
app.post("/redsea.html", (req, res) => {
  let totalCurrence = 0;
  let totalOutcome = 0;
  if (req.body.type == "أضافة رصيد") {
    Financial.create(req.body)
      .then(() => {
        res.redirect("/redsea.html");
      })
      .catch((err) => {
        console.log(err);
      });
  } else if (
    req.body.type == "أضافة مصروفات" &&
    req.body.places == "هاشم عثمان / حلايب – البحر الأحمر"
  ) {
    Financial.find().then((result) => {
      result.forEach((item) => {
        if (
          item.type == "أضافة رصيد" &&
          item.places == "هاشم عثمان / حلايب – البحر الأحمر"
        ) {
          totalCurrence = totalCurrence + item.money;
        } else if (
          item.type == "أضافة مصروفات" &&
          item.places == "هاشم عثمان / حلايب – البحر الأحمر"
        ) {
          totalOutcome = totalOutcome + item.money;
        }
      });
      if (totalCurrence >= totalOutcome + Number(req.body.money)) {
        Financial.create(req.body)
          .then(() => {
            res.redirect("/redsea.html");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        res.redirect("/redsea.html");
      }
    });
  } else if (
    req.body.type == "أضافة مصروفات" &&
    req.body.places == "محمود حسنين / شلاتين – البحر الأحمر"
  ) {
    Financial.find().then((result) => {
      result.forEach((item) => {
        if (
          item.type == "أضافة رصيد" &&
          item.places == "محمود حسنين / شلاتين – البحر الأحمر"
        ) {
          totalCurrence = totalCurrence + item.money;
        } else if (
          item.type == "أضافة مصروفات" &&
          item.places == "محمود حسنين / شلاتين – البحر الأحمر"
        ) {
          totalOutcome = totalOutcome + item.money;
        }
      });
      if (totalCurrence >= totalOutcome + Number(req.body.money)) {
        Financial.create(req.body)
          .then(() => {
            res.redirect("/redsea.html");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        res.redirect("/redsea.html");
      }
    });
  } else if (
    req.body.type == "أضافة مصروفات" &&
    req.body.places == "الشيخ اوهاج / أبو رماد – البحر الأحمر"
  ) {
    Financial.find().then((result) => {
      result.forEach((item) => {
        if (
          item.type == "أضافة رصيد" &&
          item.places == "الشيخ اوهاج / أبو رماد – البحر الأحمر"
        ) {
          totalCurrence = totalCurrence + item.money;
        } else if (
          item.type == "أضافة مصروفات" &&
          item.places == "الشيخ اوهاج / أبو رماد – البحر الأحمر"
        ) {
          totalOutcome = totalOutcome + item.money;
        }
      });
      if (totalCurrence >= totalOutcome + Number(req.body.money)) {
        Financial.create(req.body)
          .then(() => {
            res.redirect("/redsea.html");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        res.redirect("/redsea.html");
      }
    });
  }
});
app.post("/wahat.html", (req, res) => {
  let totalCurrence = 0;
  let totalOutcome = 0;
  if (req.body.type == "أضافة رصيد") {
    Financial.create(req.body)
      .then(() => {
        res.redirect("/wahat.html");
      })
      .catch((err) => {
        console.log(err);
      });
  } else if (
    req.body.type == "أضافة مصروفات" &&
    req.body.places == "شكري / القصر - الواحات البحرية"
  ) {
    Financial.find().then((result) => {
      result.forEach((item) => {
        if (
          item.type == "أضافة رصيد" &&
          item.places == "شكري / القصر - الواحات البحرية"
        ) {
          totalCurrence = totalCurrence + item.money;
        } else if (
          item.type == "أضافة مصروفات" &&
          item.places == "شكري / القصر - الواحات البحرية"
        ) {
          totalOutcome = totalOutcome + item.money;
        }
      });
      if (totalCurrence >= totalOutcome + Number(req.body.money)) {
        Financial.create(req.body)
          .then(() => {
            res.redirect("/wahat.html");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        res.redirect("/wahat.html");
      }
    });
  } else if (
    req.body.type == "أضافة مصروفات" &&
    req.body.places == "عبدالله بدار / الحيز – الواحات البحرية"
  ) {
    Financial.find().then((result) => {
      result.forEach((item) => {
        if (
          item.type == "أضافة رصيد" &&
          item.places == "عبدالله بدار / الحيز – الواحات البحرية"
        ) {
          totalCurrence = totalCurrence + item.money;
        } else if (
          item.type == "أضافة مصروفات" &&
          item.places == "عبدالله بدار / الحيز – الواحات البحرية"
        ) {
          totalOutcome = totalOutcome + item.money;
        }
      });
      if (totalCurrence >= totalOutcome + Number(req.body.money)) {
        Financial.create(req.body)
          .then(() => {
            res.redirect("/wahat.html");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        res.redirect("/wahat.html");
      }
    });
  }
});
app.post("/bhera.html", (req, res) => {
  let totalCurrence = 0;
  let totalOutcome = 0;
  if (req.body.type == "أضافة رصيد") {
    Financial.create(req.body)
      .then(() => {
        res.redirect("/bhera.html");
      })
      .catch((err) => {
        console.log(err);
      });
  } else if (
    req.body.type == "أضافة مصروفات" &&
    req.body.places == "عادل بسيوني / الإنتاج الأول – البحيرة"
  ) {
    Financial.find().then((result) => {
      result.forEach((item) => {
        if (
          item.type == "أضافة رصيد" &&
          item.places == "عادل بسيوني / الإنتاج الأول – البحيرة"
        ) {
          totalCurrence = totalCurrence + item.money;
        } else if (
          item.type == "أضافة مصروفات" &&
          item.places == "عادل بسيوني / الإنتاج الأول – البحيرة"
        ) {
          totalOutcome = totalOutcome + item.money;
        }
      });
      if (totalCurrence >= totalOutcome + Number(req.body.money)) {
        Financial.create(req.body)
          .then(() => {
            res.redirect("/bhera.html");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        res.redirect("/bhera.html");
      }
    });
  } else if (
    req.body.type == "أضافة مصروفات" &&
    req.body.places == "كاشف القويسني / كريون – كفر الدوار – البحيرة"
  ) {
    Financial.find().then((result) => {
      result.forEach((item) => {
        if (
          item.type == "أضافة رصيد" &&
          item.places == "كاشف القويسني / كريون – كفر الدوار – البحيرة"
        ) {
          totalCurrence = totalCurrence + item.money;
        } else if (
          item.type == "أضافة مصروفات" &&
          item.places == "كاشف القويسني / كريون – كفر الدوار – البحيرة"
        ) {
          totalOutcome = totalOutcome + item.money;
        }
      });
      if (totalCurrence >= totalOutcome + Number(req.body.money)) {
        Financial.create(req.body)
          .then(() => {
            res.redirect("/bhera.html");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        res.redirect("/bhera.html");
      }
    });
  }
});
app.post("/alex.html", (req, res) => {
  let totalCurrence = 0;
  let totalOutcome = 0;
  if (req.body.type == "أضافة رصيد") {
    Financial.create(req.body)
      .then(() => {
        res.redirect("/alex.html");
      })
      .catch((err) => {
        console.log(err);
      });
  } else if (
    req.body.type == "أضافة مصروفات" &&
    req.body.places == "عبده / العامرية – الإسكندرية"
  ) {
    Financial.find().then((result) => {
      result.forEach((item) => {
        if (
          item.type == "أضافة رصيد" &&
          item.places == "عبده / العامرية – الإسكندرية"
        ) {
          totalCurrence = totalCurrence + item.money;
        } else if (
          item.type == "أضافة مصروفات" &&
          item.places == "عبده / العامرية – الإسكندرية"
        ) {
          totalOutcome = totalOutcome + item.money;
        }
      });
      if (totalCurrence >= totalOutcome + Number(req.body.money)) {
        Financial.create(req.body)
          .then(() => {
            res.redirect("/alex.html");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        res.redirect("/alex.html");
      }
    });
  } else if (
    req.body.type == "أضافة مصروفات" &&
    req.body.places == "مجدي كلور / كوم الدكة – الإسكندرية"
  ) {
    Financial.find().then((result) => {
      result.forEach((item) => {
        if (
          item.type == "أضافة رصيد" &&
          item.places == "مجدي كلور / كوم الدكة – الإسكندرية"
        ) {
          totalCurrence = totalCurrence + item.money;
        } else if (
          item.type == "أضافة مصروفات" &&
          item.places == "مجدي كلور / كوم الدكة – الإسكندرية"
        ) {
          totalOutcome = totalOutcome + item.money;
        }
      });
      if (totalCurrence >= totalOutcome + Number(req.body.money)) {
        Financial.create(req.body)
          .then(() => {
            res.redirect("/alex.html");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        res.redirect("/alex.html");
      }
    });
  } else if (
    req.body.type == "أضافة مصروفات" &&
    req.body.places == "محمد عبد التواب / الدخيلة – الإسكندرية"
  ) {
    Financial.find().then((result) => {
      result.forEach((item) => {
        if (
          item.type == "أضافة رصيد" &&
          item.places == "محمد عبد التواب / الدخيلة – الإسكندرية"
        ) {
          totalCurrence = totalCurrence + item.money;
        } else if (
          item.type == "أضافة مصروفات" &&
          item.places == "محمد عبد التواب / الدخيلة – الإسكندرية"
        ) {
          totalOutcome = totalOutcome + item.money;
        }
      });
      if (totalCurrence >= totalOutcome + Number(req.body.money)) {
        Financial.create(req.body)
          .then(() => {
            res.redirect("/alex.html");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        res.redirect("/alex.html");
      }
    });
  } else if (
    req.body.type == "أضافة مصروفات" &&
    req.body.places == "عادل عرجاوي / أبو قير - الإسكندرية"
  ) {
    Financial.find().then((result) => {
      result.forEach((item) => {
        if (
          item.type == "أضافة رصيد" &&
          item.places == "عادل عرجاوي / أبو قير - الإسكندرية"
        ) {
          totalCurrence = totalCurrence + item.money;
        } else if (
          item.type == "أضافة مصروفات" &&
          item.places == "عادل عرجاوي / أبو قير - الإسكندرية"
        ) {
          totalOutcome = totalOutcome + item.money;
        }
      });
      if (totalCurrence >= totalOutcome + Number(req.body.money)) {
        Financial.create(req.body)
          .then(() => {
            res.redirect("/alex.html");
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        res.redirect("/alex.html");
      }
    });
  }
});

//Update Request all pages----------------------------------------------------------
app.put("/edit/:id", (req, res) => {
  let totzkah = 0;
  let totsdkah = 0;
  let totelag = 0;
  let totzab7 = 0;
  let totzkah2 = 0;
  let totsdkah2 = 0;
  let totelag2 = 0;
  let totzab72 = 0;
  let zkah = 0;
  let sdkah = 0;
  let elag = 0;
  let zab7 = 0;
  let zkah2 = 0;
  let sdkah2 = 0;
  let elag2 = 0;
  let zab72 = 0;
  Income.find().then((result) => {
    result.forEach((item) => {
      totzkah = totzkah + item.zkah;
      totsdkah = totsdkah + item.sdkah;
      totelag = totelag + item.elag;
      totzab7 = totzab7 + item.zab7;
    });
    Zkah.find().then((zkahresult) => {
      zkahresult.forEach((item) => {
        totzkah2 = totzkah2 + item.money;
      });
      Sdkah.find().then((sdkahresult) => {
        sdkahresult.forEach((item) => {
          totsdkah2 = totsdkah2 + item.money;
        });
        Elag.find().then((elagresult) => {
          elagresult.forEach((item) => {
            totelag2 = totelag2 + item.money;
          });
          Zab7.find().then((zab7result) => {
            zab7result.forEach((item) => {
              totzab72 = totzab72 + item.meatmoney + item.ricemoney;
            });
          });
          Income.findOne({ _id: req.params.id }).then((result2) => {
            zkah = result2.zkah;
            sdkah = result2.sdkah;
            elag = result2.elag;
            zab7 = result2.zab7;
            zkah2 = Number(req.body.zkah);
            sdkah2 = Number(req.body.sdkah);
            elag2 = Number(req.body.elag);
            zab72 = Number(req.body.zab7);
            if (
              totzkah - zkah + zkah2 >= totzkah2 &&
              totsdkah - sdkah + sdkah2 >= totsdkah2 &&
              totelag - elag + elag2 >= totelag2 &&
              totzab7 - zab7 + zab72 >= totzab72
            ) {
              Income.updateOne({ _id: req.params.id }, req.body).then(() => {
                res.redirect("/incom.html");
              });
            } else {
              res.redirect("/incom.html");
            }
          });
        });
      });
    });
  });
});
app.put("/editzkah/:id", (req, res) => {
  let mobzkahall = 0;
  let zkahMoney = 0;
  let oldZkah = 0;
  Income.find().then((result) => {
    result.forEach((item) => {
      mobzkahall = mobzkahall + item.zkah;
    });
    Zkah.find().then((result) => {
      result.forEach((item) => {
        zkahMoney = zkahMoney + item.money;
      });
      Zkah.findOne({ _id: req.params.id }).then((result) => {
        oldZkah = result.money;
        if (mobzkahall >= Number(req.body.money) + zkahMoney - oldZkah) {
          Zkah.updateOne({ _id: req.params.id }, req.body)
            .then((result) => {
              res.redirect("/zkah.html");
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          res.redirect("/zkah.html");
        }
      });
    });
  });
});
app.put("/editsdkah/:id", (req, res) => {
  let mobsdkahall = 0;
  let sdkahMoney = 0;
  let oldsdkah = 0;
  Income.find().then((result) => {
    result.forEach((item) => {
      mobsdkahall = mobsdkahall + item.sdkah;
    });
    Sdkah.find().then((result) => {
      result.forEach((item) => {
        sdkahMoney = sdkahMoney + item.money;
      });
      Sdkah.findOne({ _id: req.params.id }).then((result) => {
        oldsdkah = result.money;
        if (mobsdkahall >= Number(req.body.money) + sdkahMoney - oldsdkah) {
          Sdkah.updateOne({ _id: req.params.id }, req.body)
            .then((result) => {
              res.redirect("/sdkah.html");
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          res.redirect("/sdkah.html");
        }
      });
    });
  });
});
app.put("/editelag/:id", (req, res) => {
  let mobelagall = 0;
  let elagMoney = 0;
  let oldelag = 0;
  Income.find().then((result) => {
    result.forEach((item) => {
      mobelagall = mobelagall + item.elag;
    });
    Elag.find().then((result) => {
      result.forEach((item) => {
        elagMoney = elagMoney + item.money;
      });
      Elag.findOne({ _id: req.params.id }).then((result) => {
        oldelag = result.money;
        if (mobelagall >= Number(req.body.money) + elagMoney - oldelag) {
          Elag.updateOne({ _id: req.params.id }, req.body)
            .then((result) => {
              res.redirect("/elag.html");
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          res.redirect("/elag.html");
        }
      });
    });
  });
});
app.put("/editzab7/:id", (req, res) => {
  let mobzab7all = 0;
  let zab7Money = 0;
  let oldzab7 = 0;
  Income.find().then((result) => {
    result.forEach((item) => {
      mobzab7all = mobzab7all + item.zab7;
    });
    Zab7.find().then((result) => {
      result.forEach((item) => {
        zab7Money = zab7Money + item.meatmoney + item.ricemoney;
      });
      Zab7.findOne({ _id: req.params.id }).then((result) => {
        oldzab7 = result.meatmoney + result.ricemoney;
        if (
          mobzab7all >=
          Number(req.body.meatmoney) +
            Number(req.body.ricemoney) +
            zab7Money -
            oldzab7
        ) {
          Zab7.updateOne({ _id: req.params.id }, req.body)
            .then((result) => {
              res.redirect("/zab7.html");
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          res.redirect("/zab7.html");
        }
      });
    });
  });
});
app.put("/editworker/:id", (req, res) => {
  let mobworkerall = 0;
  let workerMoney = 0;
  let oldworker = 0;
  Income.find().then((result) => {
    result.forEach((item) => {
      mobworkerall = mobworkerall + item.worker;
    });
    Worker.find().then((result) => {
      result.forEach((item) => {
        workerMoney = workerMoney + item.money;
      });
      Worker.findOne({ _id: req.params.id }).then((result) => {
        oldworker = result.money;
        if (mobworkerall >= Number(req.body.money) + workerMoney - oldworker) {
          Worker.updateOne({ _id: req.params.id }, req.body)
            .then((result) => {
              res.redirect("/worker.html");
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          res.redirect("/worker.html");
        }
      });
    });
  });
});
app.put("/editaswan/:id", (req, res) => {
  let totcurrence = 0;
  let totoutcome = 0;
  Financial.find().then((result) => {
    result.forEach((item) => {
      if (
        item.type == "أضافة رصيد" &&
        item.places == "الحج كمال / دراو – أسوان"
      ) {
        totcurrence = totcurrence + item.money;
      } else if (
        item.type == "أضافة مصروفات" &&
        item.places == "الحج كمال / دراو – أسوان"
      ) {
        totoutcome = totoutcome + item.money;
      }
    });
    Financial.findOne({ _id: req.params.id }).then((result2) => {
      if (result2.type == "أضافة رصيد") {
        if (
          totcurrence - result2.money + Number(req.body.money) >=
          totoutcome
        ) {
          Financial.updateOne({ _id: req.params.id }, req.body)
            .then((result) => {
              res.redirect("/aswan.html");
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          res.redirect("/aswan.html");
        }
      } else if (req.body.type == "أضافة مصروفات") {
        if (
          totcurrence >=
          totoutcome - result2.money + Number(req.body.money)
        ) {
          Financial.updateOne({ _id: req.params.id }, req.body)
            .then((result) => {
              res.redirect("/aswan.html");
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          res.redirect("/aswan.html");
        }
      }
    });
  });
});
app.put("/editluxur/:id", (req, res) => {
  let totcurrence = 0;
  let totoutcome = 0;
  Financial.find().then((result) => {
    result.forEach((item) => {
      if (
        item.type == "أضافة رصيد" &&
        item.places == "علا / الضبعية – الأقصر"
      ) {
        totcurrence = totcurrence + item.money;
      } else if (
        item.type == "أضافة مصروفات" &&
        item.places == "علا / الضبعية – الأقصر"
      ) {
        totoutcome = totoutcome + item.money;
      }
    });
    Financial.findOne({ _id: req.params.id }).then((result2) => {
      if (result2.type == "أضافة رصيد") {
        if (
          totcurrence - result2.money + Number(req.body.money) >=
          totoutcome
        ) {
          Financial.updateOne({ _id: req.params.id }, req.body)
            .then((result) => {
              res.redirect("/luxur.html");
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          res.redirect("/luxur.html");
        }
      } else if (req.body.type == "أضافة مصروفات") {
        if (
          totcurrence >=
          totoutcome - result2.money + Number(req.body.money)
        ) {
          Financial.updateOne({ _id: req.params.id }, req.body)
            .then((result) => {
              res.redirect("/luxur.html");
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          res.redirect("/luxur.html");
        }
      }
    });
  });
});
app.put("/editkena/:id", (req, res) => {
  let totcurrence = 0;
  let totoutcome = 0;
  Financial.find().then((result) => {
    result.forEach((item) => {
      if (
        item.type == "أضافة رصيد" &&
        item.places == "عبده لاوندي / قمولا – قنا"
      ) {
        totcurrence = totcurrence + item.money;
      } else if (
        item.type == "أضافة مصروفات" &&
        item.places == "عبده لاوندي / قمولا – قنا"
      ) {
        totoutcome = totoutcome + item.money;
      }
    });
    Financial.findOne({ _id: req.params.id }).then((result2) => {
      if (result2.type == "أضافة رصيد") {
        if (
          totcurrence - result2.money + Number(req.body.money) >=
          totoutcome
        ) {
          Financial.updateOne({ _id: req.params.id }, req.body)
            .then((result) => {
              res.redirect("/kena.html");
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          res.redirect("/kena.html");
        }
      } else if (req.body.type == "أضافة مصروفات") {
        if (
          totcurrence >=
          totoutcome - result2.money + Number(req.body.money)
        ) {
          Financial.updateOne({ _id: req.params.id }, req.body)
            .then((result) => {
              res.redirect("/kena.html");
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          res.redirect("/kena.html");
        }
      }
    });
  });
});
app.put("/editsohag/:id", (req, res) => {
  let totcurrence = 0;
  let totoutcome = 0;
  Financial.find().then((result) => {
    result.forEach((item) => {
      if (item.places == "دياب / المحافظة – سوهاج") {
        if (item.type == "أضافة رصيد") {
          totcurrence = totcurrence + item.money;
        } else if (item.type == "أضافة مصروفات") {
          totoutcome = totoutcome + item.money;
        }
      } else if (item.places == "دياب / إدفا و الغوانم – سوهاج") {
        if (item.type == "أضافة رصيد") {
          totcurrence = totcurrence + item.money;
        } else if (item.type == "أضافة مصروفات") {
          totoutcome = totoutcome + item.money;
        }
      } else if (item.places == "رداد مراد / بهتا – سوهاج") {
        if (item.type == "أضافة رصيد") {
          totcurrence = totcurrence + item.money;
        } else if (item.type == "أضافة مصروفات") {
          totoutcome = totoutcome + item.money;
        }
      } else if (item.places == "عثمان أبو مروان / الشوكا – طما – سوهاج") {
        if (item.type == "أضافة رصيد") {
          totcurrence = totcurrence + item.money;
        } else if (item.type == "أضافة مصروفات") {
          totoutcome = totoutcome + item.money;
        }
      }
    });
    Financial.findOne({ _id: req.params.id }).then((result2) => {
      if (result2.type == "أضافة رصيد") {
        if (
          totcurrence - result2.money + Number(req.body.money) >=
          totoutcome
        ) {
          Financial.updateOne({ _id: req.params.id }, req.body)
            .then((result) => {
              res.redirect("/sohag.html");
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          res.redirect("/sohag.html");
        }
      } else if (req.body.type == "أضافة مصروفات") {
        if (
          totcurrence >=
          totoutcome - result2.money + Number(req.body.money)
        ) {
          Financial.updateOne({ _id: req.params.id }, req.body)
            .then((result) => {
              res.redirect("/sohag.html");
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          res.redirect("/sohag.html");
        }
      }
    });
  });
});
app.put("/editbnyswef/:id", (req, res) => {
  let totcurrence = 0;
  let totoutcome = 0;
  Financial.find().then((result) => {
    result.forEach((item) => {
      if (item.type == "أضافة رصيد" && item.places == "اشرف / بني سويف") {
        totcurrence = totcurrence + item.money;
      } else if (
        item.type == "أضافة مصروفات" &&
        item.places == "اشرف / بني سويف"
      ) {
        totoutcome = totoutcome + item.money;
      }
    });
    Financial.findOne({ _id: req.params.id }).then((result2) => {
      if (result2.type == "أضافة رصيد") {
        if (
          totcurrence - result2.money + Number(req.body.money) >=
          totoutcome
        ) {
          Financial.updateOne({ _id: req.params.id }, req.body)
            .then((result) => {
              res.redirect("/bnyswef.html");
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          res.redirect("/bnyswef.html");
        }
      } else if (req.body.type == "أضافة مصروفات") {
        if (
          totcurrence >=
          totoutcome - result2.money + Number(req.body.money)
        ) {
          Financial.updateOne({ _id: req.params.id }, req.body)
            .then((result) => {
              res.redirect("/bnyswef.html");
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          res.redirect("/bnyswef.html");
        }
      }
    });
  });
});
app.put("/editredsea/:id", (req, res) => {
  let totcurrence = 0;
  let totoutcome = 0;
  Financial.find().then((result) => {
    result.forEach((item) => {
      if (item.places == "هاشم عثمان / حلايب – البحر الأحمر") {
        if (item.type == "أضافة رصيد") {
          totcurrence = totcurrence + item.money;
        } else if (item.type == "أضافة مصروفات") {
          totoutcome = totoutcome + item.money;
        }
      } else if (item.places == "محمود حسنين / شلاتين – البحر الأحمر") {
        if (item.type == "أضافة رصيد") {
          totcurrence = totcurrence + item.money;
        } else if (item.type == "أضافة مصروفات") {
          totoutcome = totoutcome + item.money;
        }
      } else if (item.places == "الشيخ اوهاج / أبو رماد – البحر الأحمر") {
        if (item.type == "أضافة رصيد") {
          totcurrence = totcurrence + item.money;
        } else if (item.type == "أضافة مصروفات") {
          totoutcome = totoutcome + item.money;
        }
      }
    });
    Financial.findOne({ _id: req.params.id }).then((result2) => {
      if (result2.type == "أضافة رصيد") {
        if (
          totcurrence - result2.money + Number(req.body.money) >=
          totoutcome
        ) {
          Financial.updateOne({ _id: req.params.id }, req.body)
            .then((result) => {
              res.redirect("/redsea.html");
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          res.redirect("/redsea.html");
        }
      } else if (req.body.type == "أضافة مصروفات") {
        if (
          totcurrence >=
          totoutcome - result2.money + Number(req.body.money)
        ) {
          Financial.updateOne({ _id: req.params.id }, req.body)
            .then((result) => {
              res.redirect("/redsea.html");
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          res.redirect("/redsea.html");
        }
      }
    });
  });
});
app.put("/editwahat/:id", (req, res) => {
  let totcurrence = 0;
  let totoutcome = 0;
  Financial.find().then((result) => {
    result.forEach((item) => {
      if (item.places == "شكري / القصر - الواحات البحرية") {
        if (item.type == "أضافة رصيد") {
          totcurrence = totcurrence + item.money;
        } else if (item.type == "أضافة مصروفات") {
          totoutcome = totoutcome + item.money;
        }
      } else if (item.places == "عبدالله بدار / الحيز – الواحات البحرية") {
        if (item.type == "أضافة رصيد") {
          totcurrence = totcurrence + item.money;
        } else if (item.type == "أضافة مصروفات") {
          totoutcome = totoutcome + item.money;
        }
      }
    });
    Financial.findOne({ _id: req.params.id }).then((result2) => {
      if (result2.type == "أضافة رصيد") {
        if (
          totcurrence - result2.money + Number(req.body.money) >=
          totoutcome
        ) {
          Financial.updateOne({ _id: req.params.id }, req.body)
            .then((result) => {
              res.redirect("/wahat.html");
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          res.redirect("/wahat.html");
        }
      } else if (req.body.type == "أضافة مصروفات") {
        if (
          totcurrence >=
          totoutcome - result2.money + Number(req.body.money)
        ) {
          Financial.updateOne({ _id: req.params.id }, req.body)
            .then((result) => {
              res.redirect("/wahat.html");
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          res.redirect("/wahat.html");
        }
      }
    });
  });
});
app.put("/editminya/:id", (req, res) => {
  let totcurrence = 0;
  let totoutcome = 0;
  Financial.find().then((result) => {
    result.forEach((item) => {
      if (
        item.type == "أضافة رصيد" &&
        item.places == "محمدعيد / نزله البرشا - ملوي – المنيا"
      ) {
        totcurrence = totcurrence + item.money;
      } else if (
        item.type == "أضافة مصروفات" &&
        item.places == "محمدعيد / نزله البرشا - ملوي – المنيا"
      ) {
        totoutcome = totoutcome + item.money;
      }
    });
    Financial.findOne({ _id: req.params.id }).then((result2) => {
      if (result2.type == "أضافة رصيد") {
        if (
          totcurrence - result2.money + Number(req.body.money) >=
          totoutcome
        ) {
          Financial.updateOne({ _id: req.params.id }, req.body)
            .then((result) => {
              res.redirect("/minya.html");
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          res.redirect("/minya.html");
        }
      } else if (req.body.type == "أضافة مصروفات") {
        if (
          totcurrence >=
          totoutcome - result2.money + Number(req.body.money)
        ) {
          Financial.updateOne({ _id: req.params.id }, req.body)
            .then((result) => {
              res.redirect("/minya.html");
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          res.redirect("/minya.html");
        }
      }
    });
  });
});
app.put("/editbhera/:id", (req, res) => {
  let totcurrence = 0;
  let totoutcome = 0;
  Financial.find().then((result) => {
    result.forEach((item) => {
      if (item.places == "عادل بسيوني / الإنتاج الأول – البحيرة") {
        if (item.type == "أضافة رصيد") {
          totcurrence = totcurrence + item.money;
        } else if (item.type == "أضافة مصروفات") {
          totoutcome = totoutcome + item.money;
        }
      } else if (
        item.places == "كاشف القويسني / كريون – كفر الدوار – البحيرة"
      ) {
        if (item.type == "أضافة رصيد") {
          totcurrence = totcurrence + item.money;
        } else if (item.type == "أضافة مصروفات") {
          totoutcome = totoutcome + item.money;
        }
      }
    });
    Financial.findOne({ _id: req.params.id }).then((result2) => {
      if (result2.type == "أضافة رصيد") {
        if (
          totcurrence - result2.money + Number(req.body.money) >=
          totoutcome
        ) {
          Financial.updateOne({ _id: req.params.id }, req.body)
            .then((result) => {
              res.redirect("/bhera.html");
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          res.redirect("/bhera.html");
        }
      } else if (req.body.type == "أضافة مصروفات") {
        if (
          totcurrence >=
          totoutcome - result2.money + Number(req.body.money)
        ) {
          Financial.updateOne({ _id: req.params.id }, req.body)
            .then((result) => {
              res.redirect("/bhera.html");
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          res.redirect("/bhera.html");
        }
      }
    });
  });
});
app.put("/editalex/:id", (req, res) => {
  let totcurrence = 0;
  let totoutcome = 0;
  Financial.find().then((result) => {
      result.forEach((item) => {
        if (item.places == "عبده / العامرية – الإسكندرية") {
          if (item.type == "أضافة رصيد") {
            totcurrence = totcurrence + item.money;
          } else if (item.type == "أضافة مصروفات") {
            totoutcome = totoutcome + item.money;
          }
        } else if (item.places == "مجدي كلور / كوم الدكة – الإسكندرية") {
          if (item.type == "أضافة رصيد") {
            totcurrence = totcurrence + item.money;
          } else if (item.type == "أضافة مصروفات") {
            totoutcome = totoutcome + item.money;
          }
        } else if (item.places == "محمد عبد التواب / الدخيلة – الإسكندرية") {
          if (item.type == "أضافة رصيد") {
            totcurrence = totcurrence + item.money;
          } else if (item.type == "أضافة مصروفات") {
            totoutcome = totoutcome + item.money;
          }
        } else if (item.places == "عادل عرجاوي / أبو قير - الإسكندرية") {
          if (item.type == "أضافة رصيد") {
            totcurrence = totcurrence + item.money;
          } else if (item.type == "أضافة مصروفات") {
            totoutcome = totoutcome + item.money;
          }
        }
      });
      Financial.findOne({ _id: req.params.id }).then((result2) => {
        if (result2.type == "أضافة رصيد") {
          if (
            totcurrence - result2.money + Number(req.body.money) >=
            totoutcome
          ) {
            Financial.updateOne({ _id: req.params.id }, req.body)
              .then((result) => {
                res.redirect("/alex.html");
              })
              .catch((err) => {
                console.log(err);
              });
          } else {
            res.redirect("/alex.html");
          }
        } else if (req.body.type == "أضافة مصروفات") {
          if (
            totcurrence >=
            totoutcome - result2.money + Number(req.body.money)
          ) {
            Financial.updateOne({ _id: req.params.id }, req.body)
              .then((result) => {
                res.redirect("/alex.html");
              })
              .catch((err) => {
                console.log(err);
              });
          } else {
            res.redirect("/alex.html");
          }
        }
      });
  });
});

//delete Request all pages----------------------------------------------------------
app.delete("/incom.html/:id", (req, res) => {
  let totzkah = 0;
  let totsdkah = 0;
  let totelag = 0;
  let totzab7 = 0;
  let totzkah2 = 0;
  let totsdkah2 = 0;
  let totelag2 = 0;
  let totzab72 = 0;
  let zkah = 0;
  let sdkah = 0;
  let elag = 0;
  let zab7 = 0;
  Income.find().then((result) => {
    result.forEach((item) => {
      totzkah = totzkah + item.zkah;
      totsdkah = totsdkah + item.sdkah;
      totelag = totelag + item.elag;
      totzab7 = totzab7 + item.zab7;
    });
    Zkah.find().then((zkahresult) => {
      zkahresult.forEach((item) => {
        totzkah2 = totzkah2 + item.money;
      });
      Sdkah.find().then((sdkahresult) => {
        sdkahresult.forEach((item) => {
          totsdkah2 = totsdkah2 + item.money;
        });
        Elag.find().then((elagresult) => {
          elagresult.forEach((item) => {
            totelag2 = totelag2 + item.money;
          });
          Zab7.find().then((zab7result) => {
            zab7result.forEach((item) => {
              totzab72 = totzab72 + item.meatmoney + item.ricemoney;
            });
          });
          Income.findOne({ _id: req.params.id }).then((result2) => {
            zkah = result2.zkah;
            sdkah = result2.sdkah;
            elag = result2.elag;
            zab7 = result2.zab7;
            if (
              totzkah - zkah >= totzkah2 &&
              totsdkah - sdkah >= totsdkah2 &&
              totelag - elag >= totelag2 &&
              totzab7 - zab7 >= totzab72
            ) {
              Income.deleteOne({ _id: req.params.id }).then((result) => {
                res.redirect("/incom.html");
              });
            } else {
              res.redirect("/incom.html");
            }
          });
        });
      });
    });
  });
});
app.delete("/zkah.html/:id", (req, res) => {
  Zkah.deleteOne({ _id: req.params.id }).then((result) => {
    res.redirect("/zkah.html");
  });
});
app.delete("/sdkah.html/:id", (req, res) => {
  Sdkah.deleteOne({ _id: req.params.id }).then((result) => {
    res.redirect("/sdkah.html");
  });
});
app.delete("/elag.html/:id", (req, res) => {
  Elag.deleteOne({ _id: req.params.id }).then((result) => {
    res.redirect("/elag.html");
  });
});
app.delete("/zab7.html/:id", (req, res) => {
  Zab7.deleteOne({ _id: req.params.id }).then((result) => {
    res.redirect("/zab7.html");
  });
});
app.delete("/worker.html/:id", (req, res) => {
  Worker.deleteOne({ _id: req.params.id }).then((result) => {
    res.redirect("/worker.html");
  });
});
app.delete("/aswan.html/:id", (req, res) => {
  let totalCurrence = 0;
  let totalOutcome = 0;
  Financial.findOne({ _id: req.params.id }).then((result) => {
    if (result.type == "أضافة مصروفات") {
      Financial.deleteOne({ _id: req.params.id }).then((result) => {
        res.redirect("/aswan.html");
      });
    } else if (result.type == "أضافة رصيد") {
      Financial.find().then((result2) => {
        result2.forEach((item) => {
          if (
            item.type == "أضافة رصيد" &&
            item.places == "الحج كمال / دراو – أسوان"
          ) {
            totalCurrence = totalCurrence + item.money;
          } else if (
            item.type == "أضافة مصروفات" &&
            item.places == "الحج كمال / دراو – أسوان"
          ) {
            totalOutcome = totalOutcome + item.money;
          }
        });
        if (totalCurrence - Number(result.money) >= totalOutcome) {
          Financial.deleteOne({ _id: req.params.id }).then((result) => {
            res.redirect("/aswan.html");
          });
        } else {
          res.redirect("/aswan.html");
        }
      });
    }
  });
});
app.delete("/luxur.html/:id", (req, res) => {
  let totalCurrence = 0;
  let totalOutcome = 0;
  Financial.findOne({ _id: req.params.id }).then((result) => {
    if (result.type == "أضافة مصروفات") {
      Financial.deleteOne({ _id: req.params.id }).then((result) => {
        res.redirect("/luxur.html");
      });
    } else if (result.type == "أضافة رصيد") {
      Financial.find().then((result2) => {
        result2.forEach((item) => {
          if (
            item.type == "أضافة رصيد" &&
            item.places == "علا / الضبعية – الأقصر"
          ) {
            totalCurrence = totalCurrence + item.money;
          } else if (
            item.type == "أضافة مصروفات" &&
            item.places == "علا / الضبعية – الأقصر"
          ) {
            totalOutcome = totalOutcome + item.money;
          }
        });
        if (totalCurrence - Number(result.money) >= totalOutcome) {
          Financial.deleteOne({ _id: req.params.id }).then((result) => {
            res.redirect("/luxur.html");
          });
        } else {
          res.redirect("/luxur.html");
        }
      });
    }
  });
});
app.delete("/kena.html/:id", (req, res) => {
  let totalCurrence = 0;
  let totalOutcome = 0;
  Financial.findOne({ _id: req.params.id }).then((result) => {
    if (result.type == "أضافة مصروفات") {
      Financial.deleteOne({ _id: req.params.id }).then((result) => {
        res.redirect("/kena.html");
      });
    } else if (result.type == "أضافة رصيد") {
      Financial.find().then((result2) => {
        result2.forEach((item) => {
          if (
            item.type == "أضافة رصيد" &&
            item.places == "عبده لاوندي / قمولا – قنا"
          ) {
            totalCurrence = totalCurrence + item.money;
          } else if (
            item.type == "أضافة مصروفات" &&
            item.places == "عبده لاوندي / قمولا – قنا"
          ) {
            totalOutcome = totalOutcome + item.money;
          }
        });
        if (totalCurrence - Number(result.money) >= totalOutcome) {
          Financial.deleteOne({ _id: req.params.id }).then((result) => {
            res.redirect("/kena.html");
          });
        } else {
          res.redirect("/kena.html");
        }
      });
    }
  });
});
app.delete("/sohag.html/:id", (req, res) => {
  let totalCurrence = 0;
  let totalOutcome = 0;
  Financial.findOne({ _id: req.params.id }).then((result) => {
    if (result.type == "أضافة مصروفات") {
      Financial.deleteOne({ _id: req.params.id }).then((result) => {
        res.redirect("/sohag.html");
      });
    } else if (
      result.type == "أضافة رصيد" &&
      result.places == "دياب / المحافظة – سوهاج"
    ) {
      Financial.find().then((result2) => {
        result2.forEach((item) => {
          if (
            item.type == "أضافة رصيد" &&
            item.places == "دياب / المحافظة – سوهاج"
          ) {
            totalCurrence = totalCurrence + item.money;
          } else if (
            item.type == "أضافة مصروفات" &&
            item.places == "دياب / المحافظة – سوهاج"
          ) {
            totalOutcome = totalOutcome + item.money;
          }
        });
        if (totalCurrence - Number(result.money) >= totalOutcome) {
          Financial.deleteOne({ _id: req.params.id }).then((result) => {
            res.redirect("/sohag.html");
          });
        } else {
          res.redirect("/sohag.html");
        }
      });
    } else if (
      result.type == "أضافة رصيد" &&
      result.places == "دياب / إدفا و الغوانم – سوهاج"
    ) {
      Financial.find().then((result2) => {
        result2.forEach((item) => {
          if (
            item.type == "أضافة رصيد" &&
            item.places == "دياب / إدفا و الغوانم – سوهاج"
          ) {
            totalCurrence = totalCurrence + item.money;
          } else if (
            item.type == "أضافة مصروفات" &&
            item.places == "دياب / إدفا و الغوانم – سوهاج"
          ) {
            totalOutcome = totalOutcome + item.money;
          }
        });
        if (totalCurrence - Number(result.money) >= totalOutcome) {
          Financial.deleteOne({ _id: req.params.id }).then((result) => {
            res.redirect("/sohag.html");
          });
        } else {
          res.redirect("/sohag.html");
        }
      });
    } else if (
      result.type == "أضافة رصيد" &&
      result.places == "رداد مراد / بهتا – سوهاج"
    ) {
      Financial.find().then((result2) => {
        result2.forEach((item) => {
          if (
            item.type == "أضافة رصيد" &&
            item.places == "رداد مراد / بهتا – سوهاج"
          ) {
            totalCurrence = totalCurrence + item.money;
          } else if (
            item.type == "أضافة مصروفات" &&
            item.places == "رداد مراد / بهتا – سوهاج"
          ) {
            totalOutcome = totalOutcome + item.money;
          }
        });
        if (totalCurrence - Number(result.money) >= totalOutcome) {
          Financial.deleteOne({ _id: req.params.id }).then((result) => {
            res.redirect("/sohag.html");
          });
        } else {
          res.redirect("/sohag.html");
        }
      });
    } else if (
      result.type == "أضافة رصيد" &&
      result.places == "عثمان أبو مروان / الشوكا – طما – سوهاج"
    ) {
      Financial.find().then((result2) => {
        result2.forEach((item) => {
          if (
            item.type == "أضافة رصيد" &&
            item.places == "عثمان أبو مروان / الشوكا – طما – سوهاج"
          ) {
            totalCurrence = totalCurrence + item.money;
          } else if (
            item.type == "أضافة مصروفات" &&
            item.places == "عثمان أبو مروان / الشوكا – طما – سوهاج"
          ) {
            totalOutcome = totalOutcome + item.money;
          }
        });
        if (totalCurrence - Number(result.money) >= totalOutcome) {
          Financial.deleteOne({ _id: req.params.id }).then((result) => {
            res.redirect("/sohag.html");
          });
        } else {
          res.redirect("/sohag.html");
        }
      });
    }
  });
});
app.delete("/minya.html/:id", (req, res) => {
  let totalCurrence = 0;
  let totalOutcome = 0;
  Financial.findOne({ _id: req.params.id }).then((result) => {
    if (result.type == "أضافة مصروفات") {
      Financial.deleteOne({ _id: req.params.id }).then((result) => {
        res.redirect("/minya.html");
      });
    } else if (result.type == "أضافة رصيد") {
      Financial.find().then((result2) => {
        result2.forEach((item) => {
          if (
            item.type == "أضافة رصيد" &&
            item.places == "محمدعيد / نزله البرشا - ملوي – المنيا"
          ) {
            totalCurrence = totalCurrence + item.money;
          } else if (
            item.type == "أضافة مصروفات" &&
            item.places == "محمدعيد / نزله البرشا - ملوي – المنيا"
          ) {
            totalOutcome = totalOutcome + item.money;
          }
        });
        if (totalCurrence - Number(result.money) >= totalOutcome) {
          Financial.deleteOne({ _id: req.params.id }).then((result) => {
            res.redirect("/minya.html");
          });
        } else {
          res.redirect("/minya.html");
        }
      });
    }
  });
});
app.delete("/bnyswef.html/:id", (req, res) => {
  let totalCurrence = 0;
  let totalOutcome = 0;
  Financial.findOne({ _id: req.params.id }).then((result) => {
    if (result.type == "أضافة مصروفات") {
      Financial.deleteOne({ _id: req.params.id }).then((result) => {
        res.redirect("/bnyswef.html");
      });
    } else if (result.type == "أضافة رصيد") {
      Financial.find().then((result2) => {
        result2.forEach((item) => {
          if (item.type == "أضافة رصيد" && item.places == "اشرف / بني سويف") {
            totalCurrence = totalCurrence + item.money;
          } else if (
            item.type == "أضافة مصروفات" &&
            item.places == "اشرف / بني سويف"
          ) {
            totalOutcome = totalOutcome + item.money;
          }
        });
        if (totalCurrence - Number(result.money) >= totalOutcome) {
          Financial.deleteOne({ _id: req.params.id }).then((result) => {
            res.redirect("/bnyswef.html");
          });
        } else {
          res.redirect("/bnyswef.html");
        }
      });
    }
  });
});
app.delete("/redsea.html/:id", (req, res) => {
  let totalCurrence = 0;
  let totalOutcome = 0;
  Financial.findOne({ _id: req.params.id }).then((result) => {
    if (result.type == "أضافة مصروفات") {
      Financial.deleteOne({ _id: req.params.id }).then((result) => {
        res.redirect("/redsea.html");
      });
    } else if (
      result.type == "أضافة رصيد" &&
      result.places == "هاشم عثمان / حلايب – البحر الأحمر"
    ) {
      Financial.find().then((result2) => {
        result2.forEach((item) => {
          if (
            item.type == "أضافة رصيد" &&
            item.places == "هاشم عثمان / حلايب – البحر الأحمر"
          ) {
            totalCurrence = totalCurrence + item.money;
          } else if (
            item.type == "أضافة مصروفات" &&
            item.places == "هاشم عثمان / حلايب – البحر الأحمر"
          ) {
            totalOutcome = totalOutcome + item.money;
          }
        });
        if (totalCurrence - Number(result.money) >= totalOutcome) {
          Financial.deleteOne({ _id: req.params.id }).then((result) => {
            res.redirect("/redsea.html");
          });
        } else {
          res.redirect("/redsea.html");
        }
      });
    } else if (
      result.type == "أضافة رصيد" &&
      result.places == "محمود حسنين / شلاتين – البحر الأحمر"
    ) {
      Financial.find().then((result2) => {
        result2.forEach((item) => {
          if (
            item.type == "أضافة رصيد" &&
            item.places == "محمود حسنين / شلاتين – البحر الأحمر"
          ) {
            totalCurrence = totalCurrence + item.money;
          } else if (
            item.type == "أضافة مصروفات" &&
            item.places == "محمود حسنين / شلاتين – البحر الأحمر"
          ) {
            totalOutcome = totalOutcome + item.money;
          }
        });
        if (totalCurrence - Number(result.money) >= totalOutcome) {
          Financial.deleteOne({ _id: req.params.id }).then((result) => {
            res.redirect("/redsea.html");
          });
        } else {
          res.redirect("/redsea.html");
        }
      });
    } else if (
      result.type == "أضافة رصيد" &&
      result.places == "الشيخ اوهاج / أبو رماد – البحر الأحمر"
    ) {
      Financial.find().then((result2) => {
        result2.forEach((item) => {
          if (
            item.type == "أضافة رصيد" &&
            item.places == "الشيخ اوهاج / أبو رماد – البحر الأحمر"
          ) {
            totalCurrence = totalCurrence + item.money;
          } else if (
            item.type == "أضافة مصروفات" &&
            item.places == "الشيخ اوهاج / أبو رماد – البحر الأحمر"
          ) {
            totalOutcome = totalOutcome + item.money;
          }
        });
        if (totalCurrence - Number(result.money) >= totalOutcome) {
          Financial.deleteOne({ _id: req.params.id }).then((result) => {
            res.redirect("/redsea.html");
          });
        } else {
          res.redirect("/redsea.html");
        }
      });
    }
  });
});
app.delete("/wahat.html/:id", (req, res) => {
  let totalCurrence = 0;
  let totalOutcome = 0;
  Financial.findOne({ _id: req.params.id }).then((result) => {
    if (result.type == "أضافة مصروفات") {
      Financial.deleteOne({ _id: req.params.id }).then((result) => {
        res.redirect("/wahat.html");
      });
    } else if (
      result.type == "أضافة رصيد" &&
      result.places == "شكري / القصر - الواحات البحرية"
    ) {
      Financial.find().then((result2) => {
        result2.forEach((item) => {
          if (
            item.type == "أضافة رصيد" &&
            item.places == "شكري / القصر - الواحات البحرية"
          ) {
            totalCurrence = totalCurrence + item.money;
          } else if (
            item.type == "أضافة مصروفات" &&
            item.places == "شكري / القصر - الواحات البحرية"
          ) {
            totalOutcome = totalOutcome + item.money;
          }
        });
        if (totalCurrence - Number(result.money) >= totalOutcome) {
          Financial.deleteOne({ _id: req.params.id }).then((result) => {
            res.redirect("/wahat.html");
          });
        } else {
          res.redirect("/wahat.html");
        }
      });
    } else if (
      result.type == "أضافة رصيد" &&
      result.places == "عبدالله بدار / الحيز – الواحات البحرية"
    ) {
      Financial.find().then((result2) => {
        result2.forEach((item) => {
          if (
            item.type == "أضافة رصيد" &&
            item.places == "عبدالله بدار / الحيز – الواحات البحرية"
          ) {
            totalCurrence = totalCurrence + item.money;
          } else if (
            item.type == "أضافة مصروفات" &&
            item.places == "عبدالله بدار / الحيز – الواحات البحرية"
          ) {
            totalOutcome = totalOutcome + item.money;
          }
        });
        if (totalCurrence - Number(result.money) >= totalOutcome) {
          Financial.deleteOne({ _id: req.params.id }).then((result) => {
            res.redirect("/wahat.html");
          });
        } else {
          res.redirect("/wahat.html");
        }
      });
    }
  });
});
app.delete("/bhera.html/:id", (req, res) => {
  let totalCurrence = 0;
  let totalOutcome = 0;
  Financial.findOne({ _id: req.params.id }).then((result) => {
    if (result.type == "أضافة مصروفات") {
      Financial.deleteOne({ _id: req.params.id }).then((result) => {
        res.redirect("/bhera.html");
      });
    } else if (
      result.type == "أضافة رصيد" &&
      result.places == "عادل بسيوني / الإنتاج الأول – البحيرة"
    ) {
      Financial.find().then((result2) => {
        result2.forEach((item) => {
          if (
            item.type == "أضافة رصيد" &&
            item.places == "عادل بسيوني / الإنتاج الأول – البحيرة"
          ) {
            totalCurrence = totalCurrence + item.money;
          } else if (
            item.type == "أضافة مصروفات" &&
            item.places == "عادل بسيوني / الإنتاج الأول – البحيرة"
          ) {
            totalOutcome = totalOutcome + item.money;
          }
        });
        if (totalCurrence - Number(result.money) >= totalOutcome) {
          Financial.deleteOne({ _id: req.params.id }).then((result) => {
            res.redirect("/bhera.html");
          });
        } else {
          res.redirect("/bhera.html");
        }
      });
    } else if (
      result.type == "أضافة رصيد" &&
      result.places == "كاشف القويسني / كريون – كفر الدوار – البحيرة"
    ) {
      Financial.find().then((result2) => {
        result2.forEach((item) => {
          if (
            item.type == "أضافة رصيد" &&
            item.places == "كاشف القويسني / كريون – كفر الدوار – البحيرة"
          ) {
            totalCurrence = totalCurrence + item.money;
          } else if (
            item.type == "أضافة مصروفات" &&
            item.places == "كاشف القويسني / كريون – كفر الدوار – البحيرة"
          ) {
            totalOutcome = totalOutcome + item.money;
          }
        });
        if (totalCurrence - Number(result.money) >= totalOutcome) {
          Financial.deleteOne({ _id: req.params.id }).then((result) => {
            res.redirect("/bhera.html");
          });
        } else {
          res.redirect("/bhera.html");
        }
      });
    }
  });
});
app.delete("/alex.html/:id", (req, res) => {
  let totalCurrence = 0;
  let totalOutcome = 0;
  Financial.findOne({ _id: req.params.id }).then((result) => {
    if (result.type == "أضافة مصروفات") {
      Financial.deleteOne({ _id: req.params.id }).then((result) => {
        res.redirect("/alex.html");
      });
    } else if (
      result.type == "أضافة رصيد" &&
      result.places == "عبده / العامرية – الإسكندرية"
    ) {
      Financial.find().then((result2) => {
        result2.forEach((item) => {
          if (
            item.type == "أضافة رصيد" &&
            item.places == "عبده / العامرية – الإسكندرية"
          ) {
            totalCurrence = totalCurrence + item.money;
          } else if (
            item.type == "أضافة مصروفات" &&
            item.places == "عبده / العامرية – الإسكندرية"
          ) {
            totalOutcome = totalOutcome + item.money;
          }
        });
        if (totalCurrence - Number(result.money) >= totalOutcome) {
          Financial.deleteOne({ _id: req.params.id }).then((result) => {
            res.redirect("/alex.html");
          });
        } else {
          res.redirect("/alex.html");
        }
      });
    } else if (
      result.type == "أضافة رصيد" &&
      result.places == "مجدي كلور / كوم الدكة – الإسكندرية"
    ) {
      Financial.find().then((result2) => {
        result2.forEach((item) => {
          if (
            item.type == "أضافة رصيد" &&
            item.places == "مجدي كلور / كوم الدكة – الإسكندرية"
          ) {
            totalCurrence = totalCurrence + item.money;
          } else if (
            item.type == "أضافة مصروفات" &&
            item.places == "مجدي كلور / كوم الدكة – الإسكندرية"
          ) {
            totalOutcome = totalOutcome + item.money;
          }
        });
        if (totalCurrence - Number(result.money) >= totalOutcome) {
          Financial.deleteOne({ _id: req.params.id }).then((result) => {
            res.redirect("/alex.html");
          });
        } else {
          res.redirect("/alex.html");
        }
      });
    } else if (
      result.type == "أضافة رصيد" &&
      result.places == "محمد عبد التواب / الدخيلة – الإسكندرية"
    ) {
      Financial.find().then((result2) => {
        result2.forEach((item) => {
          if (
            item.type == "أضافة رصيد" &&
            item.places == "محمد عبد التواب / الدخيلة – الإسكندرية"
          ) {
            totalCurrence = totalCurrence + item.money;
          } else if (
            item.type == "أضافة مصروفات" &&
            item.places == "محمد عبد التواب / الدخيلة – الإسكندرية"
          ) {
            totalOutcome = totalOutcome + item.money;
          }
        });
        if (totalCurrence - Number(result.money) >= totalOutcome) {
          Financial.deleteOne({ _id: req.params.id }).then((result) => {
            res.redirect("/alex.html");
          });
        } else {
          res.redirect("/alex.html");
        }
      });
    } else if (
      result.type == "أضافة رصيد" &&
      result.places == "عادل عرجاوي / أبو قير - الإسكندرية"
    ) {
      Financial.find().then((result2) => {
        result2.forEach((item) => {
          if (
            item.type == "أضافة رصيد" &&
            item.places == "عادل عرجاوي / أبو قير - الإسكندرية"
          ) {
            totalCurrence = totalCurrence + item.money;
          } else if (
            item.type == "أضافة مصروفات" &&
            item.places == "عادل عرجاوي / أبو قير - الإسكندرية"
          ) {
            totalOutcome = totalOutcome + item.money;
          }
        });
        if (totalCurrence - Number(result.money) >= totalOutcome) {
          Financial.deleteOne({ _id: req.params.id }).then((result) => {
            res.redirect("/alex.html");
          });
        } else {
          res.redirect("/alex.html");
        }
      });
    }
  });
});
