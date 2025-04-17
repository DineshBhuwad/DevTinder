// this is the statring point of the project 
const express = require("express")

const app = express()  

// app.use('/dinesh',(req,res)=>{
//     res.send("Hello from Dinesh")
// })

app.get('/test',(req,res)=>{
    res.send({firstname : "Dinesh", lastname : "Bhuwad"})
})

app.post('/test',(req,res)=>{
    //data saved successfully
    res.send("Data saved successfully...")
}) 

app.delete('/test',(req,res)=>{
    //data saved successfully
    res.send("Data deleted successfully...")
})

app.patch("/test",(req,res)=>{
    res.send("Patch Data send successfully...")
})

// app.use((req,res)=>{
//     res.send("Welcome to devTinder");
// })

// app.use('/test',(req,res)=>{
//     res.send("Hello bitchess")
// })

app.listen(3000);