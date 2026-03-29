import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, subject, message } = body

    if (!name || !email || !subject || !message) {
      return Response.json(
        { ok: false, message: "Missing required fields." },
        { status: 400 },
      )
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["robyangelanna@gmail.com"],
      subject: `[Portfolio] ${subject}`,
      replyTo: email,
      text: `Name: ${name}
Email: ${email}

${message}`,
    })

    if (error) {
      console.error("Resend error:", error)

      return Response.json(
        {
          ok: false,
          message: error.message || "Email could not be sent.",
        },
        { status: 502 },
      )
    }

    return Response.json(
      {
        ok: true,
        message: "Email sent successfully.",
        id: data?.id,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact API error:", error)

    return Response.json(
      {
        ok: false,
        message: "Server error. Please try again later.",
      },
      { status: 500 },
    )
  }
}
