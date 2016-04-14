var mongoose = require("mongoose");

var GuestSchema = new mongoose.Schema(
  {
    name: String
    relation: String
  }
);

mongoose.model("Guest", GuestSchema);
mongoose.connect("mongodb://localhost/guestlist");

// var seedData = require("./seeds.json");
// module.exports = {
//   guests: seedData
// }
module.exports = mongoose;
