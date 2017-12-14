var  express = require('express'),
     app = express(),
     server = require('http').createServer(app),
     io = require('socket.io').listen(server);

     server. listen(process.env.PORT || 3000, function(){console.log("Chat app running live on port 3000")});

     app.get("/", function (req, res) {
          res.sendFile(__dirname + "/index.html");
     });
