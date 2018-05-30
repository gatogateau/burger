var express = require("express");
var router = express.Router();
var path= require("path");
// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

// main page
router.get ("/", function (req, res) {
  res.redirect("/burgers");
});

// this get route works!!!
router.get ("/burgers", function (req, res) {
  burger.all(function(data) {
    var hbsObject = {burger: data};
    console.log(hbsObject);
    res.sendFile(path.join(__dirname+"/../public/home.html"));
    // res.render ("home", hbsObject);
  });
});

router.post ("/burgers/create", function (req, res) {
  burger.create(req.body.name, function () {
    res.redirect ("/burgers");
  });
});

router.put("/burgers/update/:id", function (req,res) {
  var condition = "id = "+ req.params.id;
  console.log("condition",condition);

  burger.update({devoured: req.body.devoured}, condition, function () {
    res.redirect("/burgers");
  });
});
  module.exports = router;
  

