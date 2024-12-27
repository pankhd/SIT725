const express = require("express");
const app = express();

//create a new http server and bind to app
let http = require("http").createServer(app);
let io = require("socket.io")(http);


//8000 or 3000 is the standard
var port = process.env.PORT || 8000;

app.use(express.static(__dirname + "/public"));
app.get("/test", function(request, request) => {
    var user_name = request.query.user_name;
    response.end("Hello" + user_name);
}); 


//test socket connection
io.on("connection", function(socket) =>{
    console.log("User connected");
    socket.on("disconnected", function())=>{
        console.log("User disconnected");
    });
})
