const express = require("express");
const {userAuth} = require("../middlewares/auth");
const ConnectionRequest = require("../models/connectionRequestModel");

const requestRouter = express.Router(); 

requestRouter.post("/request/send/:status/:toUserId",userAuth ,async(req,res)=>{
    try{
    
    const loggedInClient = req.user;
    const fromUserId = req.user._id;
    const toUserId = req.params.toUserId;
    const status = req.params.status;

    const allowedStatus = ["interested","ignored"]

    if(!allowedStatus.includes(status)){
        return res.status(400).json({
            message : `Invalid status for request`
        })
    }

    const existingConnection = await ConnectionRequest.findOne({
        $or:[
            {fromUserId:fromUserId,toUserId:toUserId},
            {fromUserId:toUserId, toUserId:fromUserId}
            
        ]
    })

    if(existingConnection){
        return res.status(400).json({
            message : `Connection request already sent.`
        }) 
    }

    const toUser = await User.findById(toUserId);
    if (!toUser) {
        return res.status(404).json({ message: "User not found!" });
    }


    const connectR = new ConnectionRequest({
        fromUserId,
        toUserId,
        status
    });

    const data = await connectR.save() 

    res.status(200).json({
            message: `${loggedInClient.firstName}, your connection request updated successfuly`,
            data
        });
    }
    catch(ex)
    {
        console.log(ex)
        res.send("ERROR :"+ ex.message)
    }


})

module.exports = requestRouter