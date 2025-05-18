const jwt = require("jsonwebtoken"); 
const User = require("../models/user")

const userAuth = async (req,res,next)=>{

    try{const cookie = req.cookies; 
    const {token} = cookie;

    if(!token){throw new Error("Token failed"); }

    const decryptObj = await jwt.verify(token,"DEV@TInder@2910")

    const {_id} = decryptObj; 

    const user = await User.findById(_id);

    console.log(user);

    if(!user){throw new Error("Invalid user status");} 

    req.user = user; 

    next();
   }catch(ex){
    console.log(ex)
    res.status(400).status("Error :"+ ex.message)
   }
} 

module.exports = {
    userAuth,
}