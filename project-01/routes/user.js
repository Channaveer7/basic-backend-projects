const express= require("express");
const {handleGetAllUsers,
       handlegetuserbyid,
       handleupdateuserbyid,
       handledeleteuserbyid,
       handlecreatenewuser,
}= require("../controllers/user")
const router = express.Router();

//routes
router.get("/",handleGetAllUsers);
router.post("/",handlecreatenewuser);
router.route("/:id").get(handlegetuserbyid)
                    .patch(handleupdateuserbyid)
                    .delete(handledeleteuserbyid);


module.exports = router;




// GET /api/users -list all users
// router.get("/",async(req,res) =>{
//     // res.setHeader("name","channaveer") // custom header to send response header
//     // always add X to at start to say that it is a custom header 
//     const allusers =await User.find({});
//     return res.json(allusers);
// });

// GET /users -html document render
// router.get("/",async(req,res) =>{
//     const allusers =await User.find({}); // {} it collects all the users in db  
//     const html =`
//     <ul>
//         ${allusers.map((user) => `<li>${user.firstName}</li>`).join("")}
//     </ul>
//     `;
//     res.send(html);
// });

// post request to create new user
// router.post("/api/users",async(req,res) =>{
//     const body= req.body; //capturing the data sent by forntend
//     if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
//         res.status(400).json({msg:"all fields are required"})
//     }
//     // users.push({...body,id:users.length+1}); // adding the new data to whole json file
//     // fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
//     //     return res.json({status:"success"});
//     // })
//     const result = await User.create({
//             firstName: body.first_name,
//             lastName: body.last_name,
//             email: body.email,
//             gender: body.gender,
//             jobTitle: body.job_title,
//     });
//     console.log(result);
//     return res.status(201).json({ msg: "User created successfully"});
// });

// // GET /api/users/n - get the user with id n
// //app.route().get().post()...  by using route method we can do multiple 
// //requests on the same route 
// router.route("/:id").get(async(req,res) =>{
// //If a client sends a GET request to /api/users/123, req.params.id will be 123.
// // The req.params object will look like this: { id: "123" }.
//     const allusers =await User.findById(req.params.id);
//     if(!allusers) return res.status(404).json({error: "enter a valid id"})
//     return res.json(allusers);
// })
// .patch(async (req,res) =>{
//     // const id = Number(req.params.id);
//     // const userid = users.findIndex(user => user.id === id);
//     // const user = users.find(user => user.id === id);
//     // const body = req.body;
//     // const MD = Object.assign(user,body); //it copies the properties of source(body) object to the target(user) object  
//     // users.splice(userid,1)
//     // users.push({...MD}); // adding the new data to whole json file
//     // fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
//     //     return res.json({status:"success"});
//     await User.findByIdAndUpdate(req.params.id,{lastName :"changed"})
//     return res.json({status:"success"});
// })
// .delete(async(req,res) =>{
//     // const id = Number(req.params.id);
//     // const userid= users.findIndex(user => user.id ==id)
//     // users.splice(userid,1);// splice(start,deleteCount) start-starting index ,deleteCount-will remove the no. of elements specified in deletecount
//     // //here 1 is given so only one element is removed
//     // fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
//     //     return res.json({status:"success"});
//     // })
//     await User.findByIdAndDelete(req.params.id)
//     return res.json({status:"success"});
// });

