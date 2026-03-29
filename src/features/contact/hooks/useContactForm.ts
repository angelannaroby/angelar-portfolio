import { useState } from "react"

import type { UseFormReset, UseFormSetError } from "react-hook-form"

import { sendContactMessage } from "../api/sendContactMessage"
import type { ContactFormValues } from "../lib/contactSchema"

type Params = {
  setError: UseFormSetError<ContactFormValues>
  reset: UseFormReset<ContactFormValues>
  errorMessage: string
}

export function useContactForm({ setError, reset, errorMessage }: Params) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const onSubmit = async (values: ContactFormValues) => {
    try {
      setStatus("idle")

      await sendContactMessage(values)

      reset()
      setStatus("success")
    } catch (error) {
      setStatus("error")

      setError("root", {
        type: "server",
        message: error instanceof Error ? error.message : errorMessage,
      })
    }
  }

  return {
    onSubmit,
    status,
  }
}
