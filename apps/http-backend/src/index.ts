import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { middleware } from "./middleware";
import { CreateUserSchema, SignInSchema, CreateRoomSchema } from "@repo/common/types";
import { prismaClient } from "@repo/db-package/client";



const app = express();

app.post("/signup", async (req, res) => {

    const parsedData = CreateUserSchema.safeParse(req.body);
    if (!parsedData.success) {
        res.json({
            message: "Incorrect inputs"
        })
        return;
    }
    try {
        await prismaClient.user.create({
            data: {
                email: parsedData.data?.username,
                password: parsedData.data.password,
                name: parsedData.data.name,
            }
        })
        res.json({
            userId: "123"
        })
    } catch (e) {

        if(e instanceof Error && e.message.includes("Unique constraint failed on the fields: (`email`)")){
            res.status(411).json({
                message: "User with this email already exists"
            })
        }else{
            res.status(500).json({
                message:"Something went wrong"
            })
        }
        
    }

})

app.post("/signin", async(req, res) => {

    const parsedData = SignInSchema.safeParse(req.body);
    if (!parsedData.success) {
        res.json({
            message: "Incorrect inputs"
        })
        return;
    }

    const user = await prismaClient.user.findFirst({
        where:{
            email: parsedData.data.username,
            password: parsedData.data.password

        }
    })

    const userId = 1;
    const token = jwt.sign({
        userId: user?.id
    }, JWT_SECRET);

    res.json({
        token
    })
})

app.post("/room", middleware, async (req, res) => {
    const data = CreateRoomSchema.parse(req.body);
    if (!data.success) {
        res.json({
            message: "Incorrect inputs"
        })
        return;
    }

    res.json({
        roomId: 12312
    })

})



app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
