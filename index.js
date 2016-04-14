var express = require("express");
var hbs     = require("express-handlebars");
var mongoose= require("./db/connection");

var app     = express();

var Guest = mongoose.model("Guest");

app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:       ".hbs",
  partialsDir:   "views/",
  layoutsDir:    "views/",
  defaultLayout: "layout-main"
}));
app.use("/assets", express.static("public"));

app.get("/", function(req, res){
  res.render("app-welcome");
});
app.get('/guests', function(req, res){
  Guest.find({}).then(function(guests){
    res.render("guests-index",{
      guests: guests
    });
  });
});
app.get("/guests/:name", function(req, res){
  Guest.findOne({name: req.params.name}).then(function(guest){
    res.render("guests-show",{
      guest: guest
    });
  });
});

app.listen(app.get("port"), function(){
  console.log("It's party time!");
});
