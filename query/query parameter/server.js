const express=require("express");

const app=express();

// app.get("/profile",(req,res)=>{
    // const {username} =req.query;
    // res.send("profile page of "+" "+username)
// })
// app.get("/profile",(req,res)=>{
    // const {username,age,state} =req.query;
    // res.send("profile page of "+" "+username+ " "+age+" "+state)
// })
let userData=[{
    id:1,
    Name:"shubham",
    address:"haryana"
},
{
    id:2,
    Name:"Ronak",
    address:"Punjab"
},
{
    id:3,
    Name:"yudish",
    address:"Bhatinda"
}]

app.get("/allusers",(req,res)=>{
    res.send(userData)
})

app.get("/getuserbyId",(req,res)=>{
    let {id}=req.query;
    for(let i=0;i<userData.length;i++){
        if(userData[i].id==id){
            res.send(userData[i])
        }
    }
    res.send("user not found")
})
app.get("/deleteuserbyId",(req,res)=>{
    let {id}=req.query;
    for(let i=0;i<userData.length;i++){
        if(userData[i].id==id){
            userData.splice(i,1);
            return res.send("user deleted")
        }
    }
    res.send("no user found to delete")
    
})
app.get("/addusers",(req,res)=>{
    let {id,Name,address}=req.query;
    userData.push(id,Name,address);
    return res.send("user data added")

})

app.listen(5600,()=>{
    console.log("server started");
});