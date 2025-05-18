const express = require("express"); 
const {validateSignUpData} = require('../utils/validators')
const bcrycpt = require('bcrypt')
const User = require('../models/user')

const authrouter = express.Router();

authrouter.post("/signup", async (req,res)=>{
    
    try{
        validateSignUpData(req);


        const {firstName,lastName,age,email,password } = req.body;
        const encryptedPassword = await bcrycpt.hash(password,12);
        const user = new User({
            firstName,
            lastName,
            age,
            email,
            password:encryptedPassword
        })

        await user.save();
        res.send("User signed up successfully...");
    }catch(exx){
        console.log(exx)
        console.log("User signup failed...");
        res.send(exx);
    }
    
}) 

authrouter.post("/login", async (req,res)=>{
    
    const {email,password} = req.body;

    try{
        const user = await User.findOne({email:email});
        if(!user) throw new Error("Invalid User/Password");

        const isPasswordValid = user.validatePassword(password)
        
        if(!isPasswordValid){
            throw new Error("Invalid User/Password");
        }else{
            const token = await user.getJWT(user._id);
            res.cookie("token",token);
            console.log(token)
            res.status(200).send("Login Successful");
        }

    }catch(ex){
        console.log(ex);
        res.status(500).send(ex.message);
    }

})

authrouter.post("/logout",async(req,res)=>{

    res.cookie("token",null,{
        expires:new Date(Date.now())
    })
    res.send("Logout was successful");
})

module.exports = authrouter;