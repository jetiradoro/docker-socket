require("dotenv").config({ path: "../" });
const SocketController = require('./socket/controller')
const port = process.env.SERVER_PORT;

const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: "*",
    },
});

io.on("connection", SocketController)


httpServer.listen(port, () => {
    console.log("socket server listen port:", port);
});
