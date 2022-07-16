var express = require('express');
var app = express();
var path=require("path");
var fs=require("fs");

//server configuration
app.use(express.static(path.join(__dirname,'Files')));

app.get('/home', function (req, res) {
   res.sendFile(path.join(___dirname + '/Home.html'));
});
 

app.get('/form', function (req, res) {
  
  res.send(path.join(___dirname + '/form.html'));
});

 
var server = app.listen(4141, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at 4141");
})