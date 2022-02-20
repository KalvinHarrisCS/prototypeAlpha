// import cors from 'cors';
const cors = require('cors');
const express = require("express")
const http = require("http")
const app = express()
const server = http.createServer(app)
const io = require("socket.io")(server, {
	cors: {
		origin: "*",
		methods: [ "GET", "POST" ]
	}
})

// app.use (cors());
io.on("connection", (socket) => {
	socket.emit("me", socket.id)

	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
	})

	socket.on("callUser", (data) => {
		io.to(data.userToCall).emit("callUser", { signal: data.signalData, from: data.from, name: data.name })
	})

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	})
})
// // app.all('*', function(req, res, next) {
// // 	res.header("Access-Control-Allow-Origin", "*");
// // 	res.header("Access-Control-Allow-Headers", "X-Requested-With");
// // 	res.header('Access-Control-Allow-Headers', 'Content-Type');
// // 	next();
// });
// app.get("/", (req, res) => {
// 	console.log("hello")
// 	return res.send("Hello World")})
server.listen(5000, () => console.log("server is running on port 5000"))
// app.listen(4000, () => console.log("server is running on port 4000"))
