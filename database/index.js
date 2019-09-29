// require the driver for mysql
const mysql = require('mysql');
// create a connection configuration object
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'movie_list'
});


// connect to the database
connection.connect(() => {
  console.log('Connected to DB');
});

// export the connection
module.exports = connection;