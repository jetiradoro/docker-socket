const SocketController = (socket) => {
	
    console.log("Client connected: ", socket.id);
    socket.on("disconnect", () => {
        console.log("cliente desconectado:", socket.id);
    });

    socket.on("client-message", (payload, callback) => {
        callback({ message: "success" });

        socket.broadcast.emit("server-message", payload);
    });
};

module.exports = SocketController;
