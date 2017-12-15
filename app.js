var  express = require('express'),
     app = express(),
     server = require('http').createServer(app),
     io = require('socket.io').listen(server);
     usernames = [];

     server. listen(process.env.PORT || 3000, function(){console.log("Chat app running live on port 3000")});

     app.get("/", function (req, res) {
          res.sendFile(__dirname + "/index.html");
     });

     //connect to scocket.io
     io.sockets.on('connection', function(socket){
          sockets.on('new user', function(data, callback){
              if(username.indexOf(data) != -1){
                   callback = false;
              }else{
                   callback = true;
                   socket.username = data;
                   usernames.push(socket.username);
                   updateUsernames();
              }
          });
          //send message
          socket.on('send message', function(data){
               io.sockets.emit('new message', {msg: data});
          });
     });
