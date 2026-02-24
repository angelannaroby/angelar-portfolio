import { useMemo } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/shared/ui/Button"
import { Card, CardContent, CardHeader } from "@/shared/ui/Card"
import { TextArea, TextInput } from "@/shared/ui/TextInput"
import { Small } from "@/shared/ui/Typography"

import { type ContactFormValues, contactSchema } from "../lib/contactSchema"

type Props = {
  locale: "en" | "de"
}

export function ContactForm({ locale }: Props) {
  const labels = useMemo(() => {
    const t = (en: string, de: string) => (locale === "en" ? en : de)

    return {
      title: t("Send me a message", "Nachricht senden"),
      subtitle: t(
        "I typically reply within 1–2 days.",
        "Ich antworte normalerweise innerhalb von 1–2 Tagen.",
      ),
      name: t("Name", "Name"),
      email: t("Email", "E-Mail"),
      subject: t("Subject", "Betreff"),
      message: t("Message", "Nachricht"),
      submit: t("Send", "Senden"),
      hint: t(
        "This form uses a mailto fallback (opens your email app).",
        "Dieses Formular nutzt einen Mailto-Fallback (öffnet dein E-Mail-Programm).",
      ),
    }
  }, [locale])

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  const onSubmit = (values: ContactFormValues) => {
    const to = "angel.anna.roby@gmail.com" // change if needed
    const subject = encodeURIComponent(values.subject)
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`,
    )

    const href = `mailto:${to}?subject=${subject}&body=${body}`

    // Avoid mutating window.location (eslint react-hooks/immutability)
    const a = document.createElement("a")
    a.href = href
    a.rel = "noreferrer"
    a.click()
  }

  return (
    <Card>
      <CardHeader>
        <div className="space-y-1">
          <h2 className="text-lg font-semibold">{labels.title}</h2>
          <p className="text-sm text-neutral-600">{labels.subtitle}</p>
        </div>
      </CardHeader>

      <CardContent>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
          noValidate
        >
          <TextInput
            label={labels.name}
            {...register("name")}
            error={errors.name?.message}
            autoComplete="name"
          />

          <TextInput
            label={labels.email}
            {...register("email")}
            error={errors.email?.message}
            autoComplete="email"
            inputMode="email"
          />

          <TextInput
            label={labels.subject}
            {...register("subject")}
            error={errors.subject?.message}
          />

          <TextArea
            label={labels.message}
            {...register("message")}
            error={errors.message?.message}
            rows={6}
          />

          <div className="flex items-center justify-between gap-4">
            <Small className="max-w-[34rem]">{labels.hint}</Small>

            <Button type="submit" variant="primary" disabled={isSubmitting}>
              {isSubmitting ? "…" : labels.submit}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
