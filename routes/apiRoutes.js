// import our burger model
const cats = require("../models/burgers");

module.exports = app => {

  // GET all burgers
  app.get("/api/burgers", function(req, res) {
    burgers.findAll()
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  // create/POST a new burger
  app.post("/api/cats", function(req, res) {
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
  app.get("/api/burgers/:id", function(req, res) {
    burgers.findById(req.params.id)
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  // PUT/update a burger's eaten to true/false by id
  app.put("/api/burger/:id", function(req, res) {
    // req.body => {eaten: true} || {eaten : false}
    burgers.update(req.body.eaten, req.params.id)
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  // DELETE a burger by its id
  app.delete("/api/burgers/:id", function(req, res) {
    burgers.remove(req.params.id)
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });
}
