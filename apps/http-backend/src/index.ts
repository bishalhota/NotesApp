import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config";
import { middleware } from "./middleware";

const app = express();

app.post("/signup",async(req,res)=>{

})

app.post("/signin", async(req,res)=>{
    
    const userId = 1;
    const token = jwt.sign({
        userId
    },JWT_SECRET);

    res.json({
        token
    })
})

app.post("/room",middleware,async(req,res)=>{


    res.json({
        roomId:12312
    })

})



app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
