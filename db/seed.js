var mongoose = require("./connection");
var seedData = require("./seeds.");

var Guest = mongoose.model("Guest");

Guest.remove({}).then(function(){
  Guest.collection.insert(seedData).then(function(){
    process.exit();
  });
});
