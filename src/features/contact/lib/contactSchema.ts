import { z } from "zod"

import type { Locale } from "@/shared/i18n"
import { pickText } from "@/shared/i18n"

import { contactContent } from "../content"

export function makeContactSchema(locale: Locale) {
  const v = contactContent.form.validation

  return z.object({
    name: z.string().min(2, pickText(v.nameMin, locale)),
    email: z.string().email(pickText(v.emailInvalid, locale)),
    subject: z.string().min(3, pickText(v.subjectMin, locale)),
    message: z.string().min(10, pickText(v.messageMin, locale)),
  })
}

export type ContactFormValues = z.infer<ReturnType<typeof makeContactSchema>>
