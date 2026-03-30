import { useMemo } from "react"

import { type Locale, pickText } from "@/shared/i18n"

import { appShellContent } from "../content/shell"

export function useAppShellViewModel(locale: Locale) {
  return useMemo(() => {
    return {
      header: {
        brand: pickText(appShellContent.header.brand, locale),
        openMenu: pickText(appShellContent.header.openMenu, locale),
        closeMenu: pickText(appShellContent.header.closeMenu, locale),
        toggleLanguage: pickText(appShellContent.header.toggleLanguage, locale),
        language: pickText(appShellContent.header.language, locale),
        links: appShellContent.header.links.map((item) => ({
          to: item.to,
          title: pickText(item.title, locale),
        })),
      },
      footer: {
        copyright: pickText(appShellContent.footer.copyright, locale),
        builtWith: pickText(appShellContent.footer.builtWith, locale),
      },
    }
  }, [locale])
}
