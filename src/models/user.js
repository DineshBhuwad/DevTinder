const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const bcrycpt = require('bcrypt');

const userScheme = new mongoose.Schema({
    firstName :{
        type:String,
        require:true,
        minLength:3,
        maxLength:50
    },
    lastName : {
        type:String
    },
    age : {
        type:Number,
        min:18
    },
    email : {
        type:String,
        require:true,
        unique:true,
        trim:true
    },
    password : {
        type:String,
        require:true
    },
    gender : {
        type:String
    }
})

userScheme.methods.getJWT =async  function (_id){
    const user = this;
    const token = await jwt.sign({_id:user._id}, "DEV@TInder@2910")
    return token 
}

userScheme.methods.validatePassword = async function(password){
    const user = this;
    const result = await bcrycpt.compare(password,user.password); 
    return result
}

const UserModel = mongoose.model("User",userScheme);

module.exports = UserModel;