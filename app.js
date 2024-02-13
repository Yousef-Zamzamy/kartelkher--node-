const express = require("express");
const app = express();
const port = 3000;
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
      res.render("incom", { incomarr: result });
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/incomview.html", (req, res) => {
  Income.find()
    .sort({ date: 1 })
    .then((result) => {
      res.render("incomview", { incomarr: result });
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

// financial & financialview
app.get("/financial.html", (req, res) => {
  Financial.find()
    .sort({ date: 1 })
    .then((result) => {
      res.render("financial", { financialarr: result});
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/aswan.html", (req, res) => {
  Financial.find()
    .sort({ date: 1 })
    .then((result) => {
      res.render("aswan", { financialarr: result});
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/luxur.html", (req, res) => {
  Financial.find()
    .sort({ date: 1 })
    .then((result) => {
      res.render("luxur", { financialarr: result});
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/kena.html", (req, res) => {
  Financial.find()
    .sort({ date: 1 })
    .then((result) => {
      res.render("kena", { financialarr: result});
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/sohag.html", (req, res) => {
  Financial.find()
    .sort({ date: 1 })
    .then((result) => {
      res.render("sohag", { financialarr: result});
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/minya.html", (req, res) => {
  Financial.find()
    .sort({ date: 1 })
    .then((result) => {
      res.render("minya", { financialarr: result});
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/bnyswef.html", (req, res) => {
  Financial.find()
    .sort({ date: 1 })
    .then((result) => {
      res.render("bnyswef", { financialarr: result});
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/redsea.html", (req, res) => {
  Financial.find()
    .sort({ date: 1 })
    .then((result) => {
      res.render("redsea", { financialarr: result});
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/wahat.html", (req, res) => {
  Financial.find()
    .sort({ date: 1 })
    .then((result) => {
      res.render("wahat", { financialarr: result});
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/bhera.html", (req, res) => {
  Financial.find()
    .sort({ date: 1 })
    .then((result) => {
      res.render("bhera", { financialarr: result});
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/alex.html", (req, res) => {
  Financial.find()
    .sort({ date: 1 })
    .then((result) => {
      res.render("alex", { financialarr: result});
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
let referer = 0;
app.get("/editfinancial/:id", (req, res) => {
  Financial.findById(req.params.id)
    .then((result) => {
       referer = req.headers.referer || '/';
      res.render("editfinancial", { obj: result , lastUrl: referer });
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
      if (mobzab7all >= (Number(req.body.meatmoney) + Number(req.body.ricemoney) + zab7Money)) {
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
app.post("/aswan.html", (req, res) => {
  Financial.create(req.body)
    .then(() => {
      res.redirect("/aswan.html");
    })
    .catch((err) => {
      console.log(err);
    });
});
app.post("/luxur.html", (req, res) => {
  Financial.create(req.body)
    .then(() => {
      res.redirect("/luxur.html");
    })
    .catch((err) => {
      console.log(err);
    });
});
app.post("/kena.html", (req, res) => {
  Financial.create(req.body)
    .then(() => {
      res.redirect("/kena.html");
    })
    .catch((err) => {
      console.log(err);
    });
});
app.post("/sohag.html", (req, res) => {
  Financial.create(req.body)
    .then(() => {
      res.redirect("/sohag.html");
    })
    .catch((err) => {
      console.log(err);
    });
});
app.post("/minya.html", (req, res) => {
  Financial.create(req.body)
    .then(() => {
      res.redirect("/minya.html");
    })
    .catch((err) => {
      console.log(err);
    });
});
app.post("/bnyswef.html", (req, res) => {
  Financial.create(req.body)
    .then(() => {
      res.redirect("/bnyswef.html");
    })
    .catch((err) => {
      console.log(err);
    });
});
app.post("/redsea.html", (req, res) => {
  Financial.create(req.body)
    .then(() => {
      res.redirect("/redsea.html");
    })
    .catch((err) => {
      console.log(err);
    });
});
app.post("/wahat.html", (req, res) => {
  Financial.create(req.body)
    .then(() => {
      res.redirect("/wahat.html");
    })
    .catch((err) => {
      console.log(err);
    });
});
app.post("/bhera.html", (req, res) => {
  Financial.create(req.body)
    .then(() => {
      res.redirect("/bhera.html");
    })
    .catch((err) => {
      console.log(err);
    });
});
app.post("/alex.html", (req, res) => {
  Financial.create(req.body)
    .then(() => {
      res.redirect("/alex.html");
    })
    .catch((err) => {
      console.log(err);
    });
});

//Update Request all pages----------------------------------------------------------
app.put("/edit/:id", (req, res) => {
  Income.updateOne({ _id: req.params.id }, req.body)
    .then((result) => {
      res.redirect("/incom.html");
    })
    .catch((err) => {
      console.log(err);
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
        oldzab7 = result.meatmoney + result.ricemoney ;
        if (mobzab7all >= Number(req.body.meatmoney) + Number(req.body.ricemoney) + zab7Money - oldzab7) {
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
app.put("/editfinancial/:id", (req, res) => {
  Financial.updateOne({ _id: req.params.id }, req.body)
    .then((result) => {
      res.redirect(referer);
    })
    .catch((err) => {
      console.log(err);
    });
});


//delete Request all pages----------------------------------------------------------
app.delete("/incom.html/:id", (req, res) => {
  Income.deleteOne({ _id: req.params.id }).then((result) => {
    res.redirect("/incom.html");
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
app.delete("/aswan.html/:id", (req, res) => {
  Financial.deleteOne({ _id: req.params.id }).then((result) => {
    res.redirect("/aswan.html");
  });
});
app.delete("/luxur.html/:id", (req, res) => {
  Financial.deleteOne({ _id: req.params.id }).then((result) => {
    res.redirect("/luxur.html");
  });
});
app.delete("/kena.html/:id", (req, res) => {
  Financial.deleteOne({ _id: req.params.id }).then((result) => {
    res.redirect("/kena.html");
  });
});
app.delete("/sohag.html/:id", (req, res) => {
  Financial.deleteOne({ _id: req.params.id }).then((result) => {
    res.redirect("/sohag.html");
  });
});
app.delete("/minya.html/:id", (req, res) => {
  Financial.deleteOne({ _id: req.params.id }).then((result) => {
    res.redirect("/minya.html");
  });
});
app.delete("/bnyswef.html/:id", (req, res) => {
  Financial.deleteOne({ _id: req.params.id }).then((result) => {
    res.redirect("/bnyswef.html");
  });
});
app.delete("/redsea.html/:id", (req, res) => {
  Financial.deleteOne({ _id: req.params.id }).then((result) => {
    res.redirect("/redsea.html");
  });
});
app.delete("/wahat.html/:id", (req, res) => {
  Financial.deleteOne({ _id: req.params.id }).then((result) => {
    res.redirect("/wahat.html");
  });
});
app.delete("/bhera.html/:id", (req, res) => {
  Financial.deleteOne({ _id: req.params.id }).then((result) => {
    res.redirect("/bhera.html");
  });
});
app.delete("/alex.html/:id", (req, res) => {
  Financial.deleteOne({ _id: req.params.id }).then((result) => {
    res.redirect("/alex.html");
  });
});