import { Schema } from "mongoose";
import { z } from "zod";
import { ProfileInputSchema } from "./profile";

new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    profile: {
        type: Schema.Types.ObjectId,
        ref: "Profile"
    }
})

export const authSchema = z.object({
    email: z.string().trim().toLowerCase().email(),
    username: z.string().trim().toLowerCase().min(1),
    password: z.string().min(6),
    profile: ProfileInputSchema.optional()
});

export type AuthType = z.infer<typeof authSchema>;