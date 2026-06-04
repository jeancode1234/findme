import { useAuth } from './useAuth'

const emailOrPhonePattern = /^(?:[0-9+\s-]{7,}|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/

export const useLoginForm = () => {
  const auth = useAuth()
  const email = ref('')
  const password = ref('')
  const remember = ref(false)
  const emailError = ref<string | null>(null)
  const passwordError = ref<string | null>(null)
  const formError = ref<string | null>(null)

  const errorMessage = computed(() => formError.value || auth.error.value)
  const isFormValid = computed(
    () => !emailError.value && !passwordError.value && email.value.trim().length > 0 && password.value.length > 0
  )

  const validateEmailOrPhone = (value: string) => {
    if (!value.trim()) {
      return 'Ce champ est requis.'
    }
    if (!emailOrPhonePattern.test(value.trim())) {
      return 'Entrez un email ou un téléphone valide.'
    }
    return null
  }

  const validatePassword = (value: string) => {
    if (!value) {
      return 'Le mot de passe est requis.'
    }
    if (value.length < 8) {
      return 'Le mot de passe doit contenir au moins 8 caractères.'
    }
    return null
  }

  const validateForm = () => {
    emailError.value = validateEmailOrPhone(email.value)
    passwordError.value = validatePassword(password.value)
    formError.value = null
    return !emailError.value && !passwordError.value
  }

  watch([email, password], () => {
    validateForm()
  })

  const handleSubmit = async () => {
    if (!validateForm()) {
      formError.value = 'Merci de corriger les champs indiqués.'
      return
    }

    try {
      await auth.login({
        email: email.value.trim(),
        password: password.value,
        remember: remember.value,
      })
      formError.value = null
    } catch (err) {
      formError.value = auth.error.value || 'Erreur de connexion. Vérifiez vos identifiants.'
    }
  }

  return {
    email,
    password,
    remember,
    emailError,
    passwordError,
    formError,
    loading: auth.loading,
    errorMessage,
    isFormValid,
    isAuthenticated: auth.isAuthenticated,
    user: auth.user,
    handleSubmit,
    logout: auth.logout,
  }
}
