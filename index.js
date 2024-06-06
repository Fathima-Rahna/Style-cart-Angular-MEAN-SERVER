require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./db/connection')
const router = require('./routes/router')

const cartServer = express()
cartServer.use(cors())
cartServer.use(express.json())


const PORT =3002 || process.env.PORT
cartServer.listen(PORT,()=>{
    console.log(`Style Guru Server started at port ${PORT}`);
})

cartServer.get('/',(req,res)=>{
    res.send(`<h1>Style Guru Server and waiting for client requests!!!</h2>`)
})

cartServer.use('/', router);