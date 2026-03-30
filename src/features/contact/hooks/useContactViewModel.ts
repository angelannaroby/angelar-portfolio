import { useMemo } from "react"

import { type Locale, pickText } from "@/shared/i18n"

import { contactContent } from "../content"

export function useContactViewModel(locale: Locale) {
  return useMemo(() => {
    return {
      page: {
        eyebrow: pickText(contactContent.page.eyebrow, locale),
        title: pickText(contactContent.page.title, locale),
        subtitle: pickText(contactContent.page.subtitle, locale),
      },

      panel: {
        title: pickText(contactContent.panel.title, locale),
        text: pickText(contactContent.panel.text, locale),
        emailLabel: pickText(contactContent.panel.emailLabel, locale),
        locationLabel: pickText(contactContent.panel.locationLabel, locale),
        availabilityLabel: pickText(
          contactContent.panel.availabilityLabel,
          locale,
        ),
        linkedinLabel: pickText(contactContent.panel.linkedinLabel, locale),
      },

      form: {
        title: pickText(contactContent.form.title, locale),
        subtitle: pickText(contactContent.form.subtitle, locale),

        fields: {
          name: pickText(contactContent.form.fields.name, locale),
          email: pickText(contactContent.form.fields.email, locale),
          subject: pickText(contactContent.form.fields.subject, locale),
          message: pickText(contactContent.form.fields.message, locale),
        },

        actions: {
          submit: pickText(contactContent.form.actions.submit, locale),
          submitting: pickText(contactContent.form.actions.submitting, locale),
        },

        feedback: {
          success: pickText(contactContent.form.feedback.success, locale),
          error: pickText(contactContent.form.feedback.error, locale),
        },
      },

      meta: {
        email: contactContent.meta.email,
        location: pickText(contactContent.meta.location, locale),
        availability: pickText(contactContent.meta.availability, locale),
        linkedinUrl: contactContent.meta.linkedinUrl,
      },
    }
  }, [locale])
}
