import root from "@components/Root"

export function detectTheme(): ThemeData {
  const preferColorSchemeIsDark = matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches
  const theme: ThemeData = JSON.parse(
    localStorage.getItem("theme") || `{ "isDark": ${preferColorSchemeIsDark} }`
  )
  return theme
}

export function saveTheme(theme: ThemeData) {
  localStorage.setItem("theme", JSON.stringify(theme))
}

export function switchTheme(theme: ThemeData): ThemeData {
  theme.isDark ? root.classList.remove("dark") : root.classList.add("dark")
  return { isDark: !theme.isDark }
}
