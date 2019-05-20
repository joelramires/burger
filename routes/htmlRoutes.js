// import our burgers model
const burgers = require("../models/burgers");

// export our route definitions as a function
module.exports = (app) => {

  app.get("/", function(req, res) {

    // use burger.findAll
    burgers
      .findAll()
      // if we get to resolve()
      .then(dbBurgerData => {
        res.render("index", {burgerData: dbBurgerData})
      })
      // if we get to reject()
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });
}