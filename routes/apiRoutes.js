// import our burger model
const burgers = require("../models/burgers");
const router = require("express").Router();

  // GET all burgers
  router.get("/api/burgers", function(req, res) {
    burgers.findAll()
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  // create/POST a new burger
  router.post("/api/burgers", function(req, res) {
    // pass req.body into create method 
    // req.body => {name: "catty cat"}
    burgers.create(req.body)
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });


  // get a burger by its id
  router.get("/api/burgers/:id", function(req, res) {
    burgers.findById(req.params.id)
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  // PUT/update a burger's eaten to true/false by id
  router.put("/api/burgers/:id", function(req, res) {
    // req.body => {eaten: true} || {eaten : false}
    burgers.update(req.body.eaten, req.params.id)
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  // DELETE a burger by its id
  router.delete("/api/burgers/:id", function(req, res) {
    burgers.remove(req.params.id)
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  module.exports = router;
