const socket = io("http://localhost:3003");
const lblOnline = document.querySelector("#lblOnline");
const lblOffline = document.querySelector("#lblOffline");
const message = document.querySelector('#message')
const btnSend = document.querySelector('#btnSend')

socket
    .on("connect", () => {
        console.log("server connected");
        lblOnline.style.display = "";
        lblOffline.style.display = "none";
    })
    .on("disconnect", () => {
        console.log("server disconected");
        lblOnline.style.display = "none";
        lblOffline.style.display = "";
    })
    .on('server-message',(payload)=>{
        console.log('mensaje desde el servidor:',payload)
    })

btnSend.addEventListener('click', ()=>{
    const payload = {
        id: 1234,
        message: message.value,
        date: new Date().getDate
    }
    socket.emit('client-message',payload,(response) => {
        console.log(response)
    })
})


    setTimeout(() => {
        socket.emit('local-client','prueba de cliente local')
    },5000)