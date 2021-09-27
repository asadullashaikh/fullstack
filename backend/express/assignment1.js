var express = require("express");

const path = require("path");

var app = express();

app.use(express.static("./"))

app.get("/", function(request, response) {
    response.send("ZenRays which was intercepted in 2005 and founded in 2014, imparts IT knowledge and human resources to various companies.");
})

app.get("/employee", function(request, response){
    response.send(`<!DOCTYPE html>
    <html>
    <head>
    </head>
    <body>
    <table>
  <tr>
    <th>Name</th>
    <th>Technology</th>
  </tr>
  <tr>
    <td>employee1</td>
    <td>python</td>
  </tr>
  <tr>
    <td>employee2</td>
    <td>javascript</td>
  </tr>
</table>
    </body>
    </html>`)
})

app.get("/contactus", function(request, response){
    response.sendFile(path.join(__dirname,"./login.html"))
})

app.get("/contactformsubmission", function(request, response){
    console.log(request.params)
    response.send(`${request.params.name}`)
})

app.listen(8081)