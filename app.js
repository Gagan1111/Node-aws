const express = require('express')
const mysql = require('mysql');



const port = 80;

const app = express();

const connection = mysql.createConnection({
  host: 'ip-172-31-23-56.ec2.internal',
  user: 'new_user',
  password: 'new_password',
  database: 'mysql'
});

// Establish the connection
connection.connect((err) => {
  if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
  }

  console.log('Connected to MySQL database');

  // Your application logic goes here

  app.listen(port, function () {
    console.log("server starting on " + port)
  })
  
  
  app.get("", (request, response, next) => {
    response.send("AWS Nodejs  application");
  
  })

  // Close the connection when done
  connection.end((err) => {
      if (err) {
          console.error('Error closing MySQL connection:', err);
      } else {
          console.log('MySQL connection closed');
      }
  });
});

