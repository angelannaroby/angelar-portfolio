import { useMemo } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import type { Locale } from "@/shared/i18n"
import { pickText } from "@/shared/i18n"
import { Button } from "@/shared/ui/Button"
import { Card, CardContent } from "@/shared/ui/Card"
import { TextArea, TextInput } from "@/shared/ui/TextInput"

import { contactContent } from "../content"
import { useContactForm } from "../hooks/useContactForm"
import { type ContactFormValues, makeContactSchema } from "../lib/contactSchema"

type Props = {
  locale: Locale
}

export function ContactForm({ locale }: Props) {
  const schema = useMemo(() => makeContactSchema(locale), [locale])

  const labels = useMemo(() => {
    const page = contactContent.page
    const form = contactContent.form
    const panel = contactContent.panel

    return {
      eyebrow: pickText(page.eyebrow, locale),
      title: pickText(page.title, locale),
      subtitle: pickText(page.subtitle, locale),

      panelTitle: pickText(panel.title, locale),
      panelText: pickText(panel.text, locale),
      emailLabel: pickText(panel.emailLabel, locale),
      locationLabel: pickText(panel.locationLabel, locale),
      availabilityLabel: pickText(panel.availabilityLabel, locale),
      linkedinLabel: pickText(panel.linkedinLabel, locale),
      cvLabel: pickText(panel.cvLabel, locale),

      formTitle: pickText(form.title, locale),
      formSubtitle: pickText(form.subtitle, locale),

      name: pickText(form.fields.name, locale),
      email: pickText(form.fields.email, locale),
      subject: pickText(form.fields.subject, locale),
      message: pickText(form.fields.message, locale),

      submit: pickText(form.actions.submit, locale),
      submitting: pickText(form.actions.submitting, locale),

      success: pickText(form.feedback.success, locale),
      error: pickText(form.feedback.error, locale),

      contactEmail: contactContent.meta.email,
      location: pickText(contactContent.meta.location, locale),
      availability: pickText(contactContent.meta.availability, locale),
      linkedinUrl: contactContent.meta.linkedinUrl,
      cvUrl: contactContent.meta.cvUrl,
    }
  }, [locale])

  const {
    register,
    handleSubmit,
    reset,
    setError,
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

  const { onSubmit, submitState } = useContactForm({
    setError,
    reset,
    fallbackErrorMessage: labels.error,
  })

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT PANEL */}
          <aside className="border-b p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
                  {labels.eyebrow}
                </p>

                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  {labels.title}
                </h1>

                <p className="max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
                  {labels.subtitle}
                </p>
              </div>

              <div className="rounded-[1.5rem] border bg-muted/20 p-5">
                <h2 className="text-base font-semibold">{labels.panelTitle}</h2>

                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {labels.panelText}
                </p>

                <dl className="mt-6 space-y-4 text-sm">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/70">
                      {labels.emailLabel}
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={`mailto:${labels.contactEmail}`}
                        className="transition-colors hover:text-primary"
                      >
                        {labels.contactEmail}
                      </a>
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/70">
                      {labels.locationLabel}
                    </dt>
                    <dd className="mt-1 text-muted-foreground">
                      {labels.location}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/70">
                      {labels.availabilityLabel}
                    </dt>
                    <dd className="mt-1 text-muted-foreground">
                      {labels.availability}
                    </dd>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href={labels.linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-11 items-center rounded-full border px-4 text-sm font-medium transition hover:text-primary"
                    >
                      {labels.linkedinLabel}
                    </a>

                    <a
                      href={labels.cvUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-11 items-center rounded-full border px-4 text-sm font-medium transition hover:bg-primary/10"
                    >
                      {labels.cvLabel}
                    </a>
                  </div>
                </dl>
              </div>
            </div>
          </aside>

          {/* FORM */}
          <section className="p-6 sm:p-8">
            <div className="mb-6 space-y-1">
              <h2 className="text-xl font-semibold">{labels.formTitle}</h2>
              <p className="text-sm text-muted-foreground">
                {labels.formSubtitle}
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
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
                rows={7}
              />

              {errors.root?.message && (
                <p className="text-sm text-destructive">
                  {errors.root.message}
                </p>
              )}

              {submitState === "success" && (
                <p className="text-sm text-primary/90">{labels.success}</p>
              )}

              <div className="flex justify-end pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting}
                  className="min-w-[140px]"
                >
                  {isSubmitting ? labels.submitting : labels.submit}
                </Button>
              </div>
            </form>
          </section>
        </div>
      </CardContent>
    </Card>
  )
}
