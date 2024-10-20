// creating a server
// http methods = GET POST PUT PATCH DELETE
//importing http
const http= require("http");
const fs= require("fs");
const url = require("url");
// creating server
const myserver= http.createServer((req,res) =>{
    
    if (req.url ==="/favicon.ico") return res.end();
    
    const log=`${Date.now()} ${req.method}: ${req.url} new req recived\n`;
    
    const myurl = url.parse(req.url, true);
    
    console.log(myurl);
    
    fs.appendFile("log.txt",log,(err,data)=>{
        switch(myurl.pathname){
        case "/" : res.end("hello welcome");
            break;
        case "/about":
            const username= myurl.query.username;
            res.end(`hi ${username}`);
            break;
        case "/search":
            const search= myurl.query.search_query;
            res.end(`here r ur results for ${search}`);
            break;
        default: res.end("404 not found")
            break;
    }
    });    
    
});
myserver.listen(8000,()=>console.log("server started"))

