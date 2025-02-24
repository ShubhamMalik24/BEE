const express=require("express");
const app=express();
app.use(express.urlencoded({extended:true}));

let userData=[];

app.get("/adduser",(req,res)=>{
res.sendFile(__dirname+"/register.html");
});

app.post("/adduser",(req,res)=>{
let{username,useremail,userpassword}=req.body;
console.log(username,useremail,userpassword);
let newUser={
    name:username,
    email:useremail,
    password:userpassword
}
userData.push(newUser);
res.send(userData);
})

app.listen(5001,()=>{
    console.log("server started.")
});