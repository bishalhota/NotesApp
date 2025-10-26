import express from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";
import { middleware } from "./middleware";
import { CreateUserSchema, SignInSchema, CreateRoomSchema } from "@repo/common/types";
import { prismaClient } from "@repo/db-package/client";



const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {

    const parsedData = CreateUserSchema.safeParse(req.body);
    if (!parsedData.success) {
        console.log(parsedData.error);
        res.json({
            message: "Incorrect inputs"
        })
        return;
    }
    try {
        const user = await prismaClient.user.create({
            data: {
                email: parsedData.data?.username,
                password: parsedData.data.password,
                name: parsedData.data.name,
            }
        })
        res.json({
            userId: user.id
        })
    } catch (e) {

        if (e instanceof Error && e.message.includes("Unique constraint failed on the fields: (`email`)")) {
            res.status(411).json({
                message: "User with this email already exists"
            })
        } else {
            res.status(500).json({
                error: console.log(e),
                message: "Something went wrong"
            })
        }

    }

})

app.post("/signin", async (req, res) => {

    const parsedData = SignInSchema.safeParse(req.body);
    if (!parsedData.success) {
        res.json({
            message: "Incorrect inputs"
        })
        return;
    }

    const user = await prismaClient.user.findFirst({
        where: {
            email: parsedData.data.username,
            password: parsedData.data.password

        }
    })

    if (!user) {
        res.status(403).json({
            message: "Not authenticated"
        })
        return;
    }

    const userId = 1;
    const token = jwt.sign({
        userId: user?.id
    }, JWT_SECRET);

    res.json({
        token
    })
})

app.post("/room", middleware, async (req, res) => {
    const parsedData = CreateRoomSchema.safeParse(req.body);
    if (!parsedData.success) {
        console.log(parsedData.error);
        res.json({
            message: "Incorrect inputs"
        })
        return;
    }

    // @ts-ignore
    const userId = req.userId;
    try {
        const room = await prismaClient.room.create({
            data: {
                slug: parsedData.data.roomName,
                adminId: userId
            }
        })

        res.json({
            roomId: room.id
        })

    } catch (error) {
        if (error instanceof Error && error.message.includes("Unique constraint failed on the fields: (`slug`)")) {
            res.status(411).json({
                message: "Room with this name already exists"
            })
        } else {
            res.status(500).json({
                error: console.log(error),
                message: "Something went wrong"
            })
        }
    }


})

app.get("/chats/:roomId", async (req, res) => {
    const roomId = Number(req.params.roomId);
    const messages = await prismaClient.chat.findMany({
        where: {
             roomId: roomId
        },
        orderBy: {
            id: "desc"
        },
        take: 50
    });

    res.json({
        messages
    })
})

app.get("/room/:slug", async (req, res) => {
    const slug = req.params.slug;
    const room = await prismaClient.room.findFirst({
        where: {
             slug
        }
    });
    
    res.json({
        room
    })
})



app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
