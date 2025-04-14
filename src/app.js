// this is the statring point of the project 
const express = require("express")

const app = express()  

app.use('/dinesh',(req,res)=>{
    res.send("Hello from Dinesh")
})

app.use('/test',(req,res)=>{
    res.send("Hello bitchess")
})

app.use((req,res)=>{
    res.send("Welcome to devTinder");
})

// app.use('/test',(req,res)=>{
//     res.send("Hello bitchess")
// })

app.listen(3000);