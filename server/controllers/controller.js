const db = require('../../database/dbMethods.js');

module.exports = {
  getMovies: (req, res) => {
    db.getMovies(req, res);
  }
}