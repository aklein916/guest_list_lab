var mongoose = require("mongoose");

var GuestSchema = new mongoose.Schema(
  {
    name: String,
    relation: String
  }
);

mongoose.model("Guest", GuestSchema);
if(process.env.NODE_ENV == "production"){
  mongoose.connect(process.env.MONGOLAB_URL);
}else{
  mongoose.connect("mongodb://localhost/guestlist");
}

module.exports = mongoose;
