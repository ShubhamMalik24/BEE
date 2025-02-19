const express =require("express");
const app=express();
app.use(m1);
app.use(m2);

app.get("/",(req,res)=>{
            console.log("running request on path /");
            res.send("Home")
})
app.get("/about",(req,res)=>{
        console.log("running about request");
        res.send("about page")
})

function m1(req,res,next){
    console.log("running middleware 1....");
    next()
}
function m2(req,res,next){
    console.log("middleware running 2....");
    next()
}

app.listen(3541,()=>{
    console.log("server started")
});