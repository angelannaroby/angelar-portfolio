import { useLocale } from "@/app/providers"
import { Button } from "@/shared/ui/Button"
import { Card, CardContent } from "@/shared/ui/Card"
import { TextArea, TextInput } from "@/shared/ui/TextInput"

import { useContactForm } from "../hooks/useContactForm"
import { useContactViewModel } from "../hooks/useContactViewModel"

export function ContactSection() {
  const { locale } = useLocale()
  const text = useContactViewModel(locale)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    onSubmit,
    submitState,
  } = useContactForm({
    locale,
    fallbackErrorMessage: text.form.feedback.error,
  })

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="border-b p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/80">
                  {text.page.eyebrow}
                </p>

                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  {text.page.title}
                </h1>

                <p className="max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
                  {text.page.subtitle}
                </p>
              </div>

              <div className="rounded-[1.5rem] border bg-muted/20 p-5">
                <h2 className="text-base font-semibold">{text.panel.title}</h2>

                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {text.panel.text}
                </p>

                <dl className="mt-6 space-y-4 text-sm">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/70">
                      {text.panel.emailLabel}
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={`mailto:${text.meta.email}`}
                        className="transition-colors hover:text-primary"
                      >
                        {text.meta.email}
                      </a>
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/70">
                      {text.panel.locationLabel}
                    </dt>
                    <dd className="mt-1 text-muted-foreground">
                      {text.meta.location}
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/70">
                      {text.panel.availabilityLabel}
                    </dt>
                    <dd className="mt-1 text-muted-foreground">
                      {text.meta.availability}
                    </dd>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <a
                      href={text.meta.linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-11 items-center rounded-full border px-4 text-sm font-medium transition hover:text-primary"
                    >
                      {text.panel.linkedinLabel}
                    </a>
                  </div>
                </dl>
              </div>
            </div>
          </aside>

          <section className="p-6 sm:p-8">
            <div className="mb-6 space-y-1">
              <h2 className="text-xl font-semibold">{text.form.title}</h2>
              <p className="text-sm text-muted-foreground">
                {text.form.subtitle}
              </p>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
              noValidate
            >
              <TextInput
                label={text.form.fields.name}
                {...register("name")}
                error={errors.name?.message}
                autoComplete="name"
              />

              <TextInput
                label={text.form.fields.email}
                {...register("email")}
                error={errors.email?.message}
                autoComplete="email"
                inputMode="email"
              />

              <TextInput
                label={text.form.fields.subject}
                {...register("subject")}
                error={errors.subject?.message}
                autoComplete="off"
              />

              <TextArea
                label={text.form.fields.message}
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
                <p className="text-sm text-primary/90">
                  {text.form.feedback.success}
                </p>
              )}

              <div className="flex justify-end pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting}
                  className="min-w-[140px]"
                >
                  {isSubmitting
                    ? text.form.actions.submitting
                    : text.form.actions.submit}
                </Button>
              </div>
            </form>
          </section>
        </div>
      </CardContent>
    </Card>
  )
}
