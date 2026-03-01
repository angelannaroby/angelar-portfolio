import { useMemo } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import type { Locale } from "@/shared/i18n"
import { pickText } from "@/shared/i18n"
import { Button } from "@/shared/ui/Button"
import { Card, CardContent, CardHeader } from "@/shared/ui/Card"
import { TextArea, TextInput } from "@/shared/ui/TextInput"
import { Small } from "@/shared/ui/Typography"

import { contactContent, formatContactText } from "../content"
import { type ContactFormValues, makeContactSchema } from "../lib/contactSchema"

type Props = {
  locale: Locale
}

export function ContactForm({ locale }: Props) {
  const schema = useMemo(() => makeContactSchema(locale), [locale])

  const labels = useMemo(() => {
    const f = contactContent.form
    return {
      title: pickText(f.title, locale),
      subtitle: pickText(f.subtitle, locale),

      name: pickText(f.fields.name, locale),
      email: pickText(f.fields.email, locale),
      subject: pickText(f.fields.subject, locale),
      message: pickText(f.fields.message, locale),

      submit: pickText(f.actions.submit, locale),
      submitting: pickText(f.actions.submitting, locale),
      hint: pickText(f.hint, locale),

      mailtoTo: f.mailto.to,
      mailtoBodyTemplate: pickText(f.mailto.bodyTemplate, locale),
    }
  }, [locale])

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  const onSubmit = (values: ContactFormValues) => {
    const to = labels.mailtoTo
    const subject = encodeURIComponent(values.subject.trim())

    const body = encodeURIComponent(
      formatContactText(labels.mailtoBodyTemplate, {
        name: values.name.trim(),
        email: values.email.trim(),
        message: values.message.trim(),
      }),
    )

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`
  }

  return (
    <Card>
      <CardHeader>
        <div className="space-y-1">
          <h2 className="text-lg font-semibold text-foreground">
            {labels.title}
          </h2>
          <p className="text-sm text-muted-foreground">{labels.subtitle}</p>
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
            autoComplete="off"
          />

          <TextArea
            label={labels.message}
            {...register("message")}
            error={errors.message?.message}
            rows={6}
          />

          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Small className="max-w-[34rem] text-muted-foreground">
              {labels.hint}
            </Small>

            <div className="flex items-center gap-3">
              <span className="sr-only" aria-live="polite">
                {isSubmitting ? labels.submitting : ""}
              </span>

              <Button type="submit" variant="primary" disabled={isSubmitting}>
                {isSubmitting ? labels.submitting : labels.submit}
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
