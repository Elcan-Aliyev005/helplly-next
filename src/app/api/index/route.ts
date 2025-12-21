import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const lang = req.headers.get("lang") || "az";

        const res = await fetch("https://back.helplly.com/api/index", {
            headers: {
                lang,
                "x-api-key": process.env.NEXT_PUBLIC_API_KEY!,
            },
        });

        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            { error: "Backend error" },
            { status: 500 }
        );
    }
}
