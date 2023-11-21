const express = require('express')


const port = 80;

const app = express();

app.listen(port, function () {
  console.log("server starting on " + port)
})


app.get("", (request, response, next) => {
  response.send("AWS Nodejs  application");

})