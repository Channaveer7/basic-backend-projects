const express = require("express");
const cookieParser = require('cookie-parser');
const {connectToMongoDB} = require('./connect');
const URL = require('./models/url');
const path= require('path')

const {restrictToLoggedInUserOnly,checkAuth}= require('./middlewares/auth')
const userRoute = require('./routes/user')
const staticRoute= require("./routes//staticRouter");
const urlRoute = require('./routes/url');

const app = express();
const PORT = 8002;

connectToMongoDB('mongodb://localhost:27017/short-url') //short-url is the name of the database and urls is the collection in that database
.then(()=>console.log("mongodb connected"))
.catch((err)=>console.log(err));

app.set('view engine','ejs');  
app.set("views",path.resolve("./views"));

//middlewares
app.use(express.json()); //used to work with json data
app.use(express.urlencoded({extended:false}));  //used to work with form data 
app.use(cookieParser());


app.get('/test',async (req,res) => {
    const allUrls= await URL.find({});
    return res.render('home',{
        urls: allUrls,
    });
});
app.use('/',checkAuth,staticRoute);
app.use("/user",userRoute);
app.use("/url",restrictToLoggedInUserOnly,urlRoute);

//route to redirect to the original url
app.get('/url/:shortId',async(req,res)=>{
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
            shortId,
        },
        {
            $push:{
                visitHistory: {timestamp : Date.now(),}
            },
        }
    );
    res.redirect(entry.redirectURL);
})

app.listen(PORT, () => console.log(`server started at port : ${PORT}`));
