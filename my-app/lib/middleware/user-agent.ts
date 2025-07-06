import { NextRequest, NextResponse } from 'next/server';

export function blockBots(request: NextRequest) {
    const ua = (request.headers.get("user-agent") || "").toLowerCase();

    const botAgents = [
        "curl",
        "wget",
        "python",
        "scrapy",
        "httpclient",
        "axios",
        // "postman",
        "node-fetch",
        "go-http-client",
        "java"
    ];

    if (botAgents.some(bot => ua.includes(bot))) {
        return NextResponse.json(
            {
                success: false,
                message: "forbidden",
            },
            { status: 403 }
        );
    }

    return null;
}

