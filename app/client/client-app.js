require('dotenv').config({path:'../'})
const port=80
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.static("/server/client/public"));

app.listen(port,()=>{
	console.log('cliente escuchando puerto:',port)
})