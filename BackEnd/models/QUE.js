var  mysql       = require ( ' mysql ' ) ; 
var  connection  = mysql . createConnection ( { 
    host     : "database-1.cao9vwohdvkq.us-west-2.rds.amazonaws.com" ,
    user     : "admin",
    password : "rkiGU9lotcHxuyXiy52S",
    database : "aquaspot"
} ) ;

connection.connect();

const PROBLEMA = connection.query('SELECT * FROM `PESO_UPDATE`', function (error, results, fields) {
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    // fields will contain information about the returned results fields (if any)
});

module.exports = PROBLEMA;