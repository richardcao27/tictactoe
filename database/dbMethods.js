// import the connection
const db = require('./index.js');

// export the functions to execute queries to the db
module.exports = {
  getMovies: (req, res) => {
    const queryString = `SELECT * FROM movies`;
    db.query(queryString, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    })
  }
}