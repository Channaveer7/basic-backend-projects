//importing modules
const express=require("express");

//creating app
const app= express();

//creating port
const port= 8000;

//routes
//

//creating server on the port
app.listen(port,()=>console.log("server started at "+port))