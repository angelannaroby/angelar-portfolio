import { useState } from "react"

import type { UseFormReset, UseFormSetError } from "react-hook-form"

import type { ContactFormValues } from "../lib/contactSchema"

type Params = {
  reset: UseFormReset<ContactFormValues>
  setError: UseFormSetError<ContactFormValues>
  fallbackErrorMessage: string
}

type SubmitState = "idle" | "success" | "error"

type FormspreeResponse = {
  ok?: boolean
  errors?: Array<{ message?: string }>
}

export function useContactForm({
  reset,
  setError,
  fallbackErrorMessage,
}: Params) {
  const [submitState, setSubmitState] = useState<SubmitState>("idle")

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitState("idle")

    try {
      const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT

      if (!endpoint) {
        throw new Error("Contact form is not configured.")
      }

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      })

      const result = (await response.json()) as FormspreeResponse

      if (!response.ok) {
        const message = result.errors?.[0]?.message || fallbackErrorMessage
        throw new Error(message)
      }

      reset()
      setSubmitState("success")
    } catch (error) {
      setSubmitState("error")
      setError("root", {
        type: "server",
        message: error instanceof Error ? error.message : fallbackErrorMessage,
      })
    }
  }

  return {
    onSubmit,
    submitState,
  }
}
