const express=require("express");
const app=express();


app.get("/signup",(req,res)=>{
res.sendFile(__dirname+"/register.html");
});



app.listen(5001,()=>{
    console.log("server started.")
});