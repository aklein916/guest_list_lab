var express = require("express");

var app     = express();

app.get("/", function(req, res){
  res.send("Welcome to the party!");
});

app.listen(3001, function(){
  console.log("It's party time!")
})
