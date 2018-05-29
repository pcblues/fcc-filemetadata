// server.js
// where your node app starts

// init project
var express = require('express')
var app = express()
var multer=require ('multer')



                    

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
})

var upload=multer({storage:multer.memoryStorage()}).single('uploadfile')

app.post('/upload', upload,function(req,res,next) {
  console.log(req.file.size)
  res.send({size:req.file.size})
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
