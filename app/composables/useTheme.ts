// composables/useTheme.ts
export const useTheme = () => {
  const isDarkMode = useState<boolean>('theme-dark', () => false)

  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value
    localStorage.setItem('findme-theme', isDarkMode.value ? 'dark' : 'light')
    updateDOM()
  }

  const initTheme = () => {
    if (import.meta.client) {
      const savedTheme = localStorage.getItem('findme-theme')
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      
      isDarkMode.value = savedTheme === 'dark' || (!savedTheme && systemPrefersDark)
      updateDOM()
    }
  }

  const updateDOM = () => {
    if (import.meta.client) {
      if (isDarkMode.value) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }

  return {
    isDarkMode,
    toggleTheme,
    initTheme
  }
}