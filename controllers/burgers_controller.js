

var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();


router.get("/", function(req, res) {
    burger.all(function(data) {
      console.log( "burgers" , data);
      res.render("index", {burger_data: data});
    });
  });
  
  router.post("/api/burgers", function(req, res) {
    burger.create(["burger_name", "devoured"], [req.body.burger_name , 0], function(result) {
     
     //  res.json({ id: result.insertId });
      res.redirect('/');
    });
  });
  
  
  
  router.put("/api/eaten/:id" , function(req, res) {
    var burgerId = req.params.id;
  
    console.log("burgerId", burgerId);
    
    burger.update(
      {
        devoured: 1
      },

      burgerId,
    
      function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        //res.redirect('/')
        
       res.status(200).end();
  
      }
    );
  });
  
  // Export routes for server.js to use.
  module.exports = router;

