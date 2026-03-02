import type { LocalizedText } from "@/shared/i18n"

export const contactContent = {
  page: {
    title: { en: "Contact", de: "Kontakt" },
    subtitle: {
      en: "Let’s connect — I’m open to internships and working student roles.",
      de: "Lass uns sprechen — ich bin offen für Praktika und Werkstudentenstellen.",
    },
  },

  form: {
    title: { en: "Send me a message", de: "Nachricht senden" },
    subtitle: {
      en: "I typically reply within 1–2 days.",
      de: "Ich antworte normalerweise innerhalb von 1–2 Tagen.",
    },

    fields: {
      name: { en: "Name", de: "Name" },
      email: { en: "Email", de: "E-Mail" },
      subject: { en: "Subject", de: "Betreff" },
      message: { en: "Message", de: "Nachricht" },
    },

    actions: {
      submit: { en: "Send", de: "Senden" },
      submitting: { en: "Sending…", de: "Sende…" },
    },

    hint: {
      en: "This form uses a mailto fallback (opens your email app).",
      de: "Dieses Formular nutzt einen Mailto-Fallback (öffnet dein E-Mail-Programm).",
    },

    mailto: {
      to: "angel.anna.roby@gmail.com",
      bodyTemplate: {
        en: "Name: {name}\nEmail: {email}\n\n{message}",
        de: "Name: {name}\nE-Mail: {email}\n\n{message}",
      },
    },

    validation: {
      nameMin: {
        en: "Please enter your name.",
        de: "Bitte gib deinen Namen ein.",
      },
      emailInvalid: {
        en: "Please enter a valid email address.",
        de: "Bitte gib eine gültige E-Mail-Adresse ein.",
      },
      subjectMin: {
        en: "Please enter a subject.",
        de: "Bitte gib einen Betreff ein.",
      },
      messageMin: {
        en: "Message should be at least 10 characters.",
        de: "Die Nachricht sollte mindestens 10 Zeichen haben.",
      },
    },
  },
} satisfies {
  page: { title: LocalizedText; subtitle: LocalizedText }
  form: {
    title: LocalizedText
    subtitle: LocalizedText
    fields: {
      name: LocalizedText
      email: LocalizedText
      subject: LocalizedText
      message: LocalizedText
    }
    actions: { submit: LocalizedText; submitting: LocalizedText }
    hint: LocalizedText
    mailto: {
      to: string
      bodyTemplate: LocalizedText
    }
    validation: {
      nameMin: LocalizedText
      emailInvalid: LocalizedText
      subjectMin: LocalizedText
      messageMin: LocalizedText
    }
  }
}

export function formatContactText(
  template: string,
  vars: Record<string, string | number>,
) {
  return template.replace(/\{(\w+)\}/g, (_, key: string) =>
    String(vars[key] ?? `{${key}}`),
  )
}
