var express = require("express");
var hbs     = require("express-handlebars");
var db      = require("./db/connection.js");

var app     = express();

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
  res.render("guests-index", {
    guests: db.guests
  });
});

app.listen(3001, function(){
  console.log("It's party time!")
})
