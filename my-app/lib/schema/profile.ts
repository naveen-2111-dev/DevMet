import { Schema } from "mongoose";
import { z } from "zod";

export const Profile = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "Auth",
        required: true
    },
    bio: {
        type: String,
        trim: true,
        maxlength: 500
    },
    profilePicture: {
        type: String,
        trim: true
    },
    socialLinks: {
        github: {
            type: String,
            trim: true
        },
        twitter: {
            type: String,
            trim: true
        },
        linkedin: {
            type: String,
            trim: true
        }
    }
})

export const ProfileInputSchema = z.object({
    bio: z.string().trim().max(500).optional(),
    profilePicture: z.string().trim().url().optional(),
    socialLinks: z.object({
        github: z.string().trim().url().optional(),
        twitter: z.string().trim().url().optional(),
        linkedin: z.string().trim().url().optional()
    }).optional()
});

export type ProfileType = z.infer<typeof ProfileInputSchema>;
