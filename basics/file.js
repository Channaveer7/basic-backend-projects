const fs= require("fs");
// sync is blocking operation 
// async is non blocking operation 


//sync...
//it creates a file and write into it 
// fs.writeFileSync("./test.txt","hey there ");
// //sync...
// fs.writeFile("./test.txt","hey there ",(err)=> {})

//it just read the file contents
// const res=fs.readFileSync("./contact.txt","utf-8");
// console.log(res);
// fs.readFile("./contact.txt","utf-8",(err,result)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log(result);
// })


//it writes into existing file
// fs.appendFileSync("./test.txt","\nhey there \n")

//used to copy files 
// fs.cpSync("old file","new file")

//used to delete files
// fs.unlinkSync("test.txt")

//used to get stats of file
//console.log(fs.statSync('./test.txt'));
