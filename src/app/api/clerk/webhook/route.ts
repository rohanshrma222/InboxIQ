import { NextResponse } from "next/server"
import { db } from "~/server/db"

export async function POST(req: Request){
    const body = await req.json()
    console.log('clerk webhook received', JSON.stringify(body, null, 2))

    const emailAddress = body.email_addresses?.[0]?.email_address;
    const firstName = body.firstName
    const lastName = body.lastName
    const imageUrl = body.imageUrl
    const id = body.id

    if (!id || !emailAddress || !firstName || !lastName) {
        console.error("Missing required user fields")
        return NextResponse.json({ message: "Missing required user fields" }, { status: 400 })
    }

    await db.user.create({
        data:{
            id,
            emailAddress,
            firstName,
            lastName,
            imageUrl
        }
    })
    return NextResponse.json({message:"Webhook received"},{status:200})
}