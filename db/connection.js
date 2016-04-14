var mongoose = require("mongoose");

var GuestSchema = new mongoose.Schema(
  {
    name: String,
    relation: String
  }
);

mongoose.model("Guest", GuestSchema);
mongoose.connect("mongodb://localhost/guestlist");

module.exports = mongoose;
