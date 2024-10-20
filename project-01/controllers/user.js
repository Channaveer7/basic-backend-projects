const User = require("../models/user")

async function handleGetAllUsers(req,res) {
    const allusers =await User.find({});
    return res.json(allusers);
}
async function handlegetuserbyid(req,res) {
    const allusers =await User.findById(req.params.id);
    if(!allusers) return res.status(404).json({error: "enter a valid id"})
    return res.json(allusers);
}
async function handleupdateuserbyid(req,res) {
    await User.findByIdAndUpdate(req.params.id,{lastName :"changed"})
    return res.json({status:"success"});
}
async function handledeleteuserbyid(req,res) {
    await User.findByIdAndDelete(req.params.id)
    return res.json({status:"success"});
}
async function handlecreatenewuser(req,res) {
    const body= req.body; //capturing the data sent by forntend
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
        res.status(400).json({msg:"all fields are required"})
    }
    const result = await User.create({
            firstName: body.first_name,
            lastName: body.last_name,
            email: body.email,
            gender: body.gender,
            jobTitle: body.job_title,
    });
    console.log(result);
    return res.status(201).json({ msg: "User created successfully"});
}

module.exports ={
    handleGetAllUsers,
    handlegetuserbyid,
    handleupdateuserbyid,
    handledeleteuserbyid,
    handlecreatenewuser,
}