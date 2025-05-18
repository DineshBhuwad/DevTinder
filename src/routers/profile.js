const express = require("express") 
const {userAuth} = require("../middlewares/auth")

const profileRouter = express.Router();


profileRouter.get("/profile",userAuth,async (req,res)=>{
    try{
    console.log(req.user.firstName)

    res.send(req.user)
    }catch(ex){
        console.log(ex);
        res.status(500).send(ex.message);
    }
})

module.exports = profileRouter;