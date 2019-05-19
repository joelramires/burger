//import our connection
const connection = require('./connection');

// create a function that reads from the burger table
// SELECT * FROM burger
const findAll = () => {
  // create a new Promise
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM burger', function(err, burger_db) {
      if (err) {
        // this will throw to a .catch()
        return reject(err);
      }
      // this will throw to a .then()
      return resolve(burger_db);
    });
  });
};

// find a burger by id
// SELECT * FROM burger WHERE id = ?
const findById = burgerId => {
  // create a new Promise
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM burgers WHERE id = ?', [burgerId], function(err, burger_db) {
      if (err) {
        // this will throw to a .catch()
        return reject(err);
      }
      // this will throw to a .then()
      return resolve(burger_db);
    });
  });
};

// CREATE/INSERT
// INSERT INTO burger SET ? ({name: "burgerName"})
const create = bugerDataObj => {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO burgers SET ?', [bugerDataObj], function(err, burger_db) {
      if (err) {
        // this will throw to a .catch()
        return reject(err);
      }
      // this will throw to a .then()
      return resolve();
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

    connection.query("UPDATE burger SET burgers_eaten = ? WHERE id = ?", [eatenValue, burgerId], function(err, burger_db) {

      if (err) {
        return reject(err);
      }
      else if (bugerDataObj.changedRows === 0) {
        return reject({message: "You probably have the wrong ID"});
      }
      else {
        return resolve(burger_db);
      }
    })
  })
}

// DELETE a cat
// DELETE FROM burger WHERE id = ?
const remove = (burgerId) => {
  return new Promise((resolve, reject) => {

    connection.query("DELETE FROM burgers WHERE id = ?", [burgerId], function (err, burger_db) {

      if (err) {
        return reject(err);
      }
      else if (burger_db.affectedRows === 0) {
        return reject({ message: "You probably have the wrong ID" });
      }
      else {
        return resolve(burger_db);
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
