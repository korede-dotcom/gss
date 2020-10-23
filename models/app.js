const mongoose = require("mongoose");
const userdata = mongoose.Schema({
  name: {
    type: String,
    
  },
  email: {
    type: String,
    
  },
  subject: {
    type: String,
    
  },
  phone: {
    type: String,
    
  },
  
  message: {
    type: String,
    
  },
});

module.exports = mongoose.model("userdata", userdata);