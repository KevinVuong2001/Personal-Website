export async function POST(req) {
    try {
        const { name, email, message } = await req.json();

        const formspreeResponse = await fetch("https://formspree.io/f/mvgzqvvr", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ firstname, lastname, email, phone, message }),
        });

        if (!formspreeResponse.ok) {
            return Response.json({ error: "Failed to send message" }, { status: 500 });
        }
        return Response.json({ success: "Message sent!" }, { status: 200});
    } catch (error) {
        return Response.json({ error: "Something went wrong" }, { status: 500});
    }
}