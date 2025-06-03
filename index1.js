import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors()); 
app.use(express.json());

app.listen(8080, () => {
    mongoose.connect("mongodb://localhost:27017/gcet");
  console.log("Server Started on port 8080");
});

const userSchema = mongoose.Schema({
    name: {type: String},
    email : {type : String},
    pass : {type : String}
});

const user = mongoose.model("User", userSchema);

app.post("/register", async(req, res)=>{
    const {name, email, pass} = req.body
    const result = await user.insertOne({name, email, pass});
    return res.json(result);
})

app.get("/", (req, res) => {
  return res.send("Hello! Good morning xD");
});

app.get("/weather", (req, res) => {
  return res.send("Hola Amigos! Today's weather is 33"); 
});

app.get("/name", (req, res) => {
  return res.send("Hello Sumanth!"); 
});

app.get("/products", (req, res) => {
  const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Phone", price: 499 },
    { id: 3, name: "Headphones", price: 199 }
  ];
  
  return res.json(products);
});