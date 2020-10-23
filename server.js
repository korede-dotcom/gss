const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const pug = require("pug");
const mongoose = require("mongoose");
const userdata  = require("./models/app");
const app = express();


mongoose
  .connect("mongodb+srv://users:Sulaimon4896@cluster0.3niqv.mongodb.net/userdata?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extentended: false }));
app.use(bodyParser.json());
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/",(req,res)=>{
  userdata({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    massage: req.body.message,
    subject: req.body.subject,
    
  }).save((err)=>{
    if(err){
      console.log("not saved")
    }else{
      console.log("saved")
      res.redirect("/")
    }
  })
})

app.get("/admin", (req, res) => {
  userdata.find({}, (err, data) => {
    if (err) {
      throw err;
    } else {
      res.render("admin", {
        data,
      });
    }
  });
});

const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`listen on ${port}`));
