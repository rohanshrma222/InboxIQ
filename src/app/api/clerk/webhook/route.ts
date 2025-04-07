import { NextResponse } from "next/server"
import { db } from "~/server/db"

export async function POST(req: Request){
    const body = await req.json()
    console.log('clerk webhook received',body)
    const emailAddress = body.email_addresses?.[0]?.email_address;
    const firstName = body.firstName
    const lastName = body.lastName
    const imageUrl = body.imageUrl
    const id = body.id

    await db.user.create({
        data:{
            id:id,
            emailAddress: emailAddress,
            firstName:firstName,
            lastName:lastName,
            imageUrl:imageUrl
        }
    })
    return NextResponse.json({message:"Webhook received"},{status:200})
}