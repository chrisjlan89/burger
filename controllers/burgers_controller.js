// Inside your burger directory, create a folder named controllers.

// In controllers, create the burgers_controller.js file.

// Inside the burgers_controller.js file, import the following:

// Express
// burger.js
// Create the router for the app, and export the router at the end of your file.

var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();


router.get("/", function(req, res) {
    burger.all(function(data) {
      var burgers = {
         burgers : data
       };
      console.log( "burgers" , burgers);
      res.render("index", burgers);
    });
  });
  
  router.post("/api/burgers", function(req, res) {
    burger.create(["burger_name", "devoured"], [req.body.burger_name , 0], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
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
        res.status(200).end();
  
      }
    );
  });
  
  // Export routes for server.js to use.
  module.exports = router;

