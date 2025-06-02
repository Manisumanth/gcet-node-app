import express from 'express'
const app = express()
app.listen(8080, () =>{
    console.log("Server Started")
})

app.get("/",(req,res)=>{
    return res.send("hello world")
})  

app.get("/name",(req,res)=>{
    return res.send("Sumanth")
})  

app.get("/weather",(req,res)=>{
    return res.send("31 degrees")
})  