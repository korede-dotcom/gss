const mongoose = require("mongoose");
const logindata = mongoose.Schema({
  email: {
    type: String,
    
  },
  password: {
    type: String,
    
  }
});

module.exports = mongoose.model("logindata", logindata);