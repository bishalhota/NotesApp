import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { middleware } from "./middleware";
import { CreateUserSchema, SignInSchema, CreateRoomSchema } from "@repo/common/types";


const app = express();

app.post("/signup", async (req, res) => {
    const data = CreateUserSchema.parse(req.body);
    if (!data.success) {
        res.json({
            message: "Incorrect inputs"
        })
        return;
    }
    res.json({
        userId: 12312
    })
})

app.post("/signin", async (req, res) => {

    const data = SignInSchema.parse(req.body);
    if (!data.success) {
        res.json({
            message: "Incorrect inputs"
        })
        return;
    }

    const userId = 1;
    const token = jwt.sign({
        userId
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
