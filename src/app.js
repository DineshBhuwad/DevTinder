const express = require("express")
const connectDB = require("./config/database")
const cookieParser = require("cookie-parser")
const authRouter = require("./routers/auth")
const profileRouter = require("./routers/profile")
const requestRouter = require("./routers/request")


const app = express()  

app.use(express.json());
app.use(cookieParser());

app.use("/",authRouter);
app.use("/",profileRouter);
app.use("/",requestRouter);




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

