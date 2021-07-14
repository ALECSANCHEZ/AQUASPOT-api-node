var mysql = require('mysql');

var port = 3306;

var mySQL_DB = mysql.createConnection({
  host     : process.env.RDS_HOSTNAME = "database-1.cao9vwohdvkq.us-west-2.rds.amazonaws.com" ,
  user     : process.env.RDS_USERNAME = "admin",
  password : process.env.RDS_PASSWORD = "rkiGU9lotcHxuyXiy52S",
  database : process.env.RDS_DATABASE = "aquaspot"
});

mySQL_DB.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');
});


module.exports = mySQL_DB;