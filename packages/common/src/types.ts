import { z } from "zod";

export const CreateUserSchema = z.object({
    username:z.string().min(3).max(20),
    password: z.string().min(6).max(20),
    name: z.string()
})

export const SignInSchema = z.object({
    username: z.string().min(3).max(20),
    password: z.string().min(6).max(20),
    success: z.literal(true).optional()
})

export const CreateRoomSchema = z.object({
    roomName: z.string().min(3).max(20),
    success: z.literal(true).optional()
})