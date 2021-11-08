// Import mysql module
let mysql = require('mysql');

// Setup database connection parameter
let connection = mysql.createConnection({
host: 'containers-us-west-9.railway.app',
port: '7574',
user: 'root',
password: 'dLjFwI2aRsnS67QPXiUG',
database: 'railway'
});

// Connect with the database
connection.connect(function(e) {
if (e) {

// Show error messaage on failure
return console.error('error: ' + e.message);
}

// Show success message if connected
console.log('\nConnected to the MySQL server...\n');
});

// Set the query message
$query = "INSERT INTO book values (NULL,'Learning PHP and MySQL', 'Robin Nixon', 45), (NULL,'Learning JQuery', 'Jonathan', 35), (NULL,'Angular in Action', 'Jeremy', 50), (NULL,'Mastering Laravel', 'Christopher', 55);";

// Execute the database query
connection.query($query, function(e, rows) {
if(e){

// Show the error message
console.log("Error ocurred in executing the query.");
return;
}
/* Display the formatted data retrieved from 'book' table
using for loop */
console.log("The records of book table:\n");
console.log("Title\t\t\t\t Author\t\tprice\n");
for(let row of rows) {
  console.log(row['title'],"\t\t",row['author'],"\t","$",row['price']);
}
});

// Close the database connection
connection.end(function(){
console.log('\nConnection closed.\n');
});