import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        const body = await request.json();

        const email = body.email?.trim();
        const message = body.message?.trim();

        // Validate form data
        if (!email || !message) {
            return Response.json(
                {
                    success: false,
                    message: "Email and message are required.",
                },
                { status: 400 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: [process.env.CONTACT_EMAIL],
            subject: `Poftfolio Website: message from ${email}`,

            text: `
                   Visitor Email: ${email}
                   Message: ${message}
                  `,
            replyTo: email,
        });

        if (error) {
            console.error("Resend error:", error);

            return Response.json(
                {
                    success: false,
                    message: "Failed to send email.",
                },
                { status: 500 }
            );
        }

        return Response.json(
            {
                success: true,
                message: "Message sent successfully!",
                id: data?.id,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact API error:", error);

        return Response.json(
            {
                success: false,
                message: "Something went wrong.",
            },
            { status: 500 }
        );
    }
}