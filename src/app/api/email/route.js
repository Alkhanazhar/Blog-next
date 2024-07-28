import { db_connect } from "@/lib/db"
import { EmailModel } from "@/lib/model/Email.model"
import { NextResponse } from "next/server"

const dbConnected = async () => {
    await db_connect()
    console.log("Connected")
}
dbConnected()

export async function GET(request) {

    const emails = await EmailModel.find({})
    return NextResponse.json(emails);

}


export async function POST(request) {
    const data = await request.formData()

    const email = {
        email: data.get('email'),
    }
    const isExist = await EmailModel.find({ email: email.email })
    if (isExist) {
        return NextResponse.json({ msg: "Email already", })
    }
    await EmailModel.create(email)
    return NextResponse.json({ msg: "Email subscribed", })
}

export async function DELETE(request) {

    const blogId = request?.nextUrl?.searchParams.get("id");

    await EmailModel.findByIdAndDelete(blogId)
    return NextResponse.json({ success: true, message: "Email Deleted Successfully" });

}