const http= require("http");
const express= require("express");

const app =express();

app.get('/',(req,res)=>{
    return res.send("hello form home page"+" ur name is:"+req.query.name+"ur age is"+req.query.age)
});
app.get('/about',(req,res)=>{
    return res.send("hello form about page")
});

//this is not required as express will create a own server on its own
// const myserver = http.createServer(app);
// myserver.listen(8001,()=> console.log("server started"))

//instead only this is enough
app.listen(8001,()=> console.log("server started"));