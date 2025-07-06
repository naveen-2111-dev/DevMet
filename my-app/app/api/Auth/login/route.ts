import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    return Response.json({ message: "Login route underconstruction!", request: req });
}