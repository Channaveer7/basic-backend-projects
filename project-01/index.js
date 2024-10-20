const express= require("express");
const {connectMongoDB} = require("./connection");

const {logreqres}= require("./middlewares")

const userrouter = require("./routes/user")

const app=express();
const port =8000;

//connect
connectMongoDB("mongodb://127.0.0.1:27017/project1");


//middleware - plugin
app.use(express.urlencoded({extended: false}))
// middleware for parsing JSON
app.use(express.json());
app.use(logreqres("log.txt"));
// app.use((req,res,next)=>{
//     console.log("hello form middleware 1");
//     req.myusername= "my name";
//     next();
// });

// app.use((req,res,next)=>{
//     console.log("hello form middleware 2",req.myusername);

//     next();
// });


app.use("/user",userrouter);


app.listen(port , () => console.log("server started")) 