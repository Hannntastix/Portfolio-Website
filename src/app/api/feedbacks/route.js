export async function GET() {
    try {
        const form = [
            {
                feedback: {
                    type: String,
                    required: true
                },
            }
        ];
        return Response.json({ form });
    } catch (error) {
        return Response.json({ error: "Failed to fetch form" }, { status: 500 });
    }
}