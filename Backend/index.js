require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const db = require('./server/config/db')
const seed = require('./server/config/seed')
const cors = require('cors')

app.use(cors())
app.use(express.static('server/public/'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get("/", (req,res)=> {
    res.send("Welcome to Server")
})

const adminRoutes = require("./server/routes/adminRoutes")
app.use("/admin", adminRoutes)

const BDERoutes = require("./server/routes/bdeRoutes")
app.use("/bde",BDERoutes)

const clientRoutes = require("./server/routes/clientRoutes")
app.use("/client",clientRoutes)

app.listen(PORT, (err)=> {
    if(err) {
        console.log("Error Occured in Server",err)
    }
    else {
        console.log("Server is Running")
    }
})