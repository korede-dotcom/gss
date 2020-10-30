const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const pug = require("pug");
const mongoose = require("mongoose");
const userdata  = require("./models/app");
const logindata = require("./models/login");
const app = express();


mongoose
  .connect("mongodb+srv://globalstorageservice:Hackme1234$@cluster0.zknbt.mongodb.net/userdata?retryWrites=true&w=majority", {
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
app.get("/login", (req, res) => {
 res.sendFile(path.join(__dirname,"public","login.html"))
});
app.get("/signup", (req, res) => {
 res.sendFile(path.join(__dirname,"public","signup.html"))
});


app.post("/",(req,res)=>{
  logindata({
    name: req.body.name,
    email: req.body.email,    
  }).save((err)=>{
    if(err){
      console.log("not saved")
    }else{
      console.log("saved")
      res.redirect("/")
    }
  })
})

const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`listen on ${port}`));
