const mongoose = require('mongoose');

const userScheme = new mongoose.Schema({
    firstName :{
        type:String
    },
    lastName : {
        type:String
    },
    age : {
        type:Number
    },
    email : {
        type:String
    },
    password : {
        type:String
    },
    gender : {
        type:String
    }
})

const UserModel = mongoose.model("User",userScheme);

module.exports = UserModel;