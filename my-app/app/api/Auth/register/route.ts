import getCollection from "@/lib/db/collection";
import { blockBots } from "@/lib/middleware/user-agent";
import { authSchema } from "@/lib/schema/auth";
import { NextRequest } from "next/server";

import bcrypt from "bcryptjs";
import { applyRateLimit } from "@/lib/middleware/ratelimitter";

export async function POST(req: NextRequest) {
    const ip = req.headers.get("x-forwarded-for") ?? "unknown";

    if (!ip || ip === "unknown") {
        return Response.json({ success: false, message: "IP address not found" }, { status: 400 });
    }

    const blocked = blockBots(req);
    const isLimited = await applyRateLimit(ip);
    if (blocked) return blocked;
    if (isLimited) {
        return Response.json({ success: false, message: "Too many requests" }, { status: 429 });
    }

    try {
        const body = await req.json();
        const parsed = authSchema.safeParse(body);
        if (!parsed.success) {
            return Response.json({ success: false, message: "Invalid input", errors: parsed.error.format() }, { status: 400 });
        }

        const { email, password, username } = parsed.data;

        const collection = await getCollection("LOGIN");

        const existing = await collection.findOne({ email });
        if (existing) {
            return Response.json({ success: false, message: "user already exists" }, { status: 401 });
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        const registered_user = await collection.insertOne({
            email: email,
            password: hash,
            username: username
        })

        return Response.json({
            success: true,
            message: "Register successful",
            user: {
                _id: registered_user.insertedId.toString(),
                email: email,
                username: username,
            },
        });

    } catch (err) {
        console.error("error:", err);
        return Response.json({ success: false, message: "Server error" }, { status: 500 });
    }
}
