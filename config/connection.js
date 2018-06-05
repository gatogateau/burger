// set up connection to mysql

// Require mysql
var mysql = require("mysql");


// Set up our connection information
var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    port: 3306,
    host: "nuskkyrsgmn5rw8c.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "gachuv4w9fj4yuhn",
    password: "ytr63r8uuqd6s5ez",
    database: "va549jyra30f52gq"
  });
}


// Connect to the database
connection.connect(function (err) {
  if (err) throw err;

  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;