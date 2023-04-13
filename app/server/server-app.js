require("dotenv").config({ path: "../" });
const port = process.env.SERVER_PORT;

const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: "*",
    },
});

io.on("connection", (socket) => {
    console.log("Client connected: ", socket.id);
    socket.on("disconnect", () => {
        console.log("cliente desconectado:", socket.id);
    })
    

    socket.on('client-message',(payload,callback)=>{
        
        callback({message:'success'})

        socket.broadcast.emit('server-message',payload)
    })
   
})


httpServer.listen(port, () => {
    console.log("socket server listen port:", port);
});
