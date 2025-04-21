const express = require("express")
const connectDB = require("./config/database")
const User = require('./models/user')

const app = express()  

app.post("/signup", async (req,res)=>{

    const user = new User({
        firstName : 'Rohit',
        lastName : 'Sharma',
        age : 48,
        email : 'abc@gmail.com',
        password : 'Password@2',
        gender : 'male'
    }) 

    await user.save();
    res.send("User signed up successfully...")
})

connectDB()
.then(()=>{
    console.log("Database connected successfully...");
    app.listen(3000, ()=>{
        console.log("Server started successfully at port 3000");
    });
})
.catch((err)=>{
    console.log("Database connection falled...")
})

