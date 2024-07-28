const { NextResponse } = require("next/server");
import { db_connect } from "@/lib/db";
import { BlogModel } from "@/lib/model/Blog.model";

db_connect().then(() => {
    console.log("Connect successfully ")
})


export async function GET(request) {
    const blogId = request?.nextUrl?.searchParams.get("id");
    if (blogId) {
        const blog = await BlogModel.findById(blogId);
        return NextResponse.json(blog);

    } else {
        const blogs = await BlogModel.find({})
        return NextResponse.json(blogs);

    }
}


export async function POST(request) {
    const formData = await request.formData();
console.log("POST ")
    const blogData = {
        title: formData.get("title"),
        description: formData.get("description"),
        image: formData.get("image"),
        author: formData.get("author"),
        category: formData.get("category"),
        date: formData.get("date"),
        author_img: formData.get("author_img"),

    }
    try {
        await BlogModel.create(blogData)
        console.log("Created blog data successfully")
        return NextResponse.json({ success: true, message: "Success " });
    } catch (error) {
        console.log(error.message)
    }
    
}
export async function DELETE(request) {

    const blogId = request?.nextUrl?.searchParams.get("id");
    
    await BlogModel.findByIdAndDelete(blogId)
    return NextResponse.json({ success: true, message: "Blog Deleted " });

}