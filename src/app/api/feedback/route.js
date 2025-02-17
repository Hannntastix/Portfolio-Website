import FeedbackInfo from "../../../models/feedbackInfo"
import connectMongoDB from "../../../lib/mongodb"
import { NextResponse } from "next/server"

export async function POST(request) {
    const {feedbackInfo} = await request.json()

    await connectMongoDB()

    await FeedbackInfo.create({
        feedbackInfo
    })

    return NextResponse.json(
        { message: "Feedback berhasil dibuat" },
        { status: 201 }
    )

}

export async function GET() {
    await connectMongoDB();
    const form = await FeedbackInfo.find();
    return NextResponse.json({ form })
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await FeedbackInfo.findByIdAndDelete(id);
    return NextResponse.json({ message: "Feedback Information Deleted" }, { status: 200 });
}