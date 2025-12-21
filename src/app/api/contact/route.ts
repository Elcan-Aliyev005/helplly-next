import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const lang = req.headers.get("lang") || "az";
        const apiKey = process.env.NEXT_PUBLIC_API_KEY || process.env.API_KEY;

        if (!apiKey) {
            return NextResponse.json(
                { status: false, message: "API key is missing" },
                { status: 500 }
            );
        }

        const requestHeaders: HeadersInit = {
            'Content-Type': 'application/json',
            'lang': lang,
            'x-api-key': apiKey,
        };

        const res = await fetch('https://back.helplly.com/api/contact', {
            method: 'POST',
            headers: requestHeaders,
            body: JSON.stringify({
                name: body.name,
                phone_number: body.phone_number.replace(/[\s+]/g, ''),
                email: body.email,
                text: body.text
            })
        });

        const responseData = await res.json();
        
        if (res.ok && responseData.status) {
            return NextResponse.json(responseData);
        } else {
            return NextResponse.json(
                { status: false, message: responseData.message || 'Failed to submit form' },
                { status: res.status }
            );
        }
    } catch (error) {
        return NextResponse.json(
            { status: false, message: "Internal server error" },
            { status: 500 }
        );
    }
}

