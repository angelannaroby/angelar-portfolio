import type { LocalizedText } from "@/shared/i18n"

export const contactContent = {
  page: {
    eyebrow: { en: "Get in touch", de: "Kontakt" },
    title: { en: "Let’s talk", de: "Lass uns sprechen" },
    subtitle: {
      en: "Interested in collaborating, hiring, or discussing a frontend opportunity? Send me a message and I’ll get back to you soon.",
      de: "Du möchtest zusammenarbeiten, hast eine Stelle oder möchtest dich über eine Frontend-Rolle austauschen? Schreib mir gerne eine Nachricht.",
    },
  },

  panel: {
    title: { en: "Contact details", de: "Kontaktinformationen" },
    text: {
      en: "I’m currently open to internships and working student roles in frontend development.",
      de: "Ich bin aktuell offen für Praktika und Werkstudentenstellen im Frontend-Bereich.",
    },
    emailLabel: { en: "Email", de: "E-Mail" },
    locationLabel: { en: "Location", de: "Standort" },
    availabilityLabel: { en: "Availability", de: "Verfügbarkeit" },
    linkedinLabel: { en: "LinkedIn", de: "LinkedIn" },
    cvLabel: { en: "Download CV", de: "Lebenslauf" },
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
      submit: { en: "Send message", de: "Nachricht senden" },
      submitting: { en: "Sending...", de: "Wird gesendet..." },
    },
    feedback: {
      success: {
        en: "Your message was sent successfully.",
        de: "Deine Nachricht wurde erfolgreich gesendet.",
      },
      error: {
        en: "Something went wrong. Please try again.",
        de: "Etwas ist schiefgelaufen. Bitte versuche es erneut.",
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

  // ✅ NEW (required by your component)
  meta: {
    email: "robyangelanna@gmail.com",
    location: {
      en: "Kaiserslautern, Germany",
      de: "Kaiserslautern, Deutschland",
    },
    availability: {
      en: "Open to internships and working student roles",
      de: "Offen für Praktika und Werkstudentenstellen",
    },
    linkedinUrl: "https://www.linkedin.com/in/angel-anna-roby/",
    cvUrl: "/AngelAnnaRoby_CV.pdf",
  },
} satisfies {
  page: {
    eyebrow: LocalizedText
    title: LocalizedText
    subtitle: LocalizedText
  }
  panel: {
    title: LocalizedText
    text: LocalizedText
    emailLabel: LocalizedText
    locationLabel: LocalizedText
    availabilityLabel: LocalizedText
    linkedinLabel: LocalizedText
    cvLabel: LocalizedText
  }
  form: {
    title: LocalizedText
    subtitle: LocalizedText
    fields: {
      name: LocalizedText
      email: LocalizedText
      subject: LocalizedText
      message: LocalizedText
    }
    actions: {
      submit: LocalizedText
      submitting: LocalizedText
    }
    feedback: {
      success: LocalizedText
      error: LocalizedText
    }
    validation: {
      nameMin: LocalizedText
      emailInvalid: LocalizedText
      subjectMin: LocalizedText
      messageMin: LocalizedText
    }
  }
  meta: {
    email: string
    location: LocalizedText
    availability: LocalizedText
    linkedinUrl: string
    cvUrl: string
  }
}
