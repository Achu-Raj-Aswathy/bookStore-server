require('dotenv').config()
const routes = require('./Routes/router')
const express = require('express');
const cors = require('cors');
require('./DB/connection')

const bookServer = express()
bookServer.use(cors())
bookServer.use(express.json());
bookServer.use(routes)

const PORT = 3000;

bookServer.listen(PORT,()=>{
    console.log("Server is running in port 3000");
})