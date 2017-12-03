// Start Project:
// Run two commands in different terminal windows:
// In project directory:
// npm run start
// In directory with ngrok executable:
// ./ngrok http 3000 -> Opens connection with localhost:3000

var express = require('express');

var app = express();
var server = app.listen(3000);

app.use(express.static('public'));

console.log("Server is running");

var socket = require('socket.io');
var io = socket(server);

io.sockets.on('connection', newConnection); // eventlisteners
// catch each new connection

var currentState = [];
var cs = currentState;
// saving current state of canvas, want to populate it every time someone draws
// hence call under mouseevent in order to catch every time something is drawn

function newConnection(socket){
	console.log(socket.id); // notify every new connection

	socket.emit('currentState', currentState);

	socket.on('mouseEvent', mouseMsg);

	function mouseMsg(data){
		//console.log(data); //debugging; seeing the coordinates of data being passed on.
		socket.broadcast.emit("syncDrawing", data); //boradcast everything to the socket server
		cs.push(data);
	}
}

//now want to pass the current drawing onto all client