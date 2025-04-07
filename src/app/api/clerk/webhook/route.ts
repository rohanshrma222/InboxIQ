import { NextResponse } from "next/server"
import { db } from "~/server/db"

export async function POST(req: Request){
    const {data} = await req.json()
    console.log('clerk webhook received', data)

    const emailAddress = data.email_addresses?.[0]?.email_address;
    const firstName = data.first_name
    const lastName = data.last_name
    const imageUrl = data.image_url
    const id = data.id

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