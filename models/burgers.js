//import our connection
const connection = require('./connection');

// create a function that reads from the burger table
// SELECT * FROM burgers
const findAll = () => {
  // create a new Promise
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM burgers', function(err, dbBurgerData) {
      if (err) {
        // this will throw to a .catch()
        return reject(err);
      }
      // this will throw to a .then()
      return resolve(dbBurgerData);
    });
  });
};

// find a burger by id
// SELECT * FROM burger WHERE id = ?
const findById = burgerId => {
  // create a new Promise
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM burgers WHERE id = ?', [burgerId], function(err, dbBurgerData) {
      if (err) {
        // this will throw to a .catch()
        return reject(err);
      }
      // this will throw to a .then()
      return resolve(dbBurgerData);
    });
  });
};

// CREATE/INSERT
// INSERT INTO burger SET ? ({name: "burgerName"})
const create = bugerDataObj => {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO burgers SET ?', [bugerDataObj], function(err, dbBurgerData) {
      if (err) {
        // this will throw to a .catch()
        return reject(err);
      }
      // this will throw to a .then()
      return resolve(dbBurgerData);
    });
  });
};

// UPDATE burgers (set value of "eaten" to true or false)
// UPDATE cats SET eaten = ? WHERE id = ? ([true, 2])
const update = (eatenValue, burgerId) => {
  return new Promise((resolve, reject) => {

    // set sleepyValue to boolean true/false
    eatenValue = (eatenValue === "true") 
      ? true : false;

    connection.query("UPDATE burgers SET burgers_eaten = ? WHERE id = ?", [eatenValue, burgerId], function(err, dbBurgerData) {

      if (err) {
        return reject(err);
      }
      else if (dbBurgerData.changedRows === 0) {
        return reject({message: "You probably have the wrong ID"});
      }
      else {
        return resolve(dbBurgerData);
      }
    })
  })
}

// DELETE a burger
// DELETE FROM burger WHERE id = ?
const remove = (burgerId) => {
  return new Promise((resolve, reject) => {

    connection.query("DELETE FROM burgers WHERE id = ?", [burgerId], function (err, dbBurgerData) {

      if (err) {
        return reject(err);
      }
      else if (dbBurgerData.affectedRows === 0) {
        return reject({ message: "You probably have the wrong ID" });
      }
      else {
        return resolve(dbBurgerData);
      }
    })
  })
}

// export all of our new functions as methods of an object
module.exports = {
  findAll,
  findById,
  create,
  update,
  remove
};
