const express = require('express')
const mysql = require('mysql');



const port = 80;

const app = express();

const connection = mysql.createConnection({
  host: 'database-2.crus4vmhm48u.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'password',
  database: 'database_1',
  port:'3306'
});

// Establish the connection
connection.connect((err) => {
  if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
  }

  console.log('Connected to MySQL database');

  app.get("", (request, response, next) => {
    response.send("AWS Nodejs  application");
  
  })
  
});
app.listen(port, function () {
  console.log("server starting on " + port)
})


