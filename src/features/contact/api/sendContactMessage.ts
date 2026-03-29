export type SendContactPayload = {
  name: string
  email: string
  subject: string
  message: string
}

export type SendContactResponse = {
  ok: boolean
  message?: string
}

export async function sendContactMessage(
  payload: SendContactPayload,
): Promise<SendContactResponse> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })

  const result = (await response.json()) as SendContactResponse

  if (!response.ok || !result.ok) {
    throw new Error(result.message || "Failed to send message")
  }

  return result
}
