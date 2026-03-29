import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { name, email, subject, message } = body

    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ ok: false, message: "Missing fields" }),
        { status: 400 },
      )
    }

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "robyangelanna@gmail.com",
      subject,
      reply_to: email,
      text: `Name: ${name}
Email: ${email}

${message}`,
    })

    return Response.json({ ok: true })
  } catch {
    return new Response(
      JSON.stringify({ ok: false, message: "Failed to send" }),
      { status: 500 },
    )
  }
}
