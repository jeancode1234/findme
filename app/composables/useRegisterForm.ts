import { useAuth } from './useAuth'
import { useLogger } from './useLogger'
import { useToast } from './useToast'

const emailOrPhonePattern = /^(?:[0-9+\s-]{7,}|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/

export const useRegisterForm = () => {
  const auth = useAuth()
  const logger = useLogger()
  const toast = useToast()
  const fullName = ref('')
  const email = ref('')
  const password = ref('')
  const confirmPassword = ref('')
  const agreeTerms = ref(false)
  const fullNameError = ref<string | null>(null)
  const emailError = ref<string | null>(null)
  const passwordError = ref<string | null>(null)
  const confirmPasswordError = ref<string | null>(null)
  const formError = ref<string | null>(null)

  const errorMessage = computed(() => formError.value || auth.error.value)
  const isFormValid = computed(
    () =>
      !fullNameError.value &&
      !emailError.value &&
      !passwordError.value &&
      !confirmPasswordError.value &&
      fullName.value.trim().length > 0 &&
      email.value.trim().length > 0 &&
      password.value.length >= 8 &&
      confirmPassword.value.length > 0 &&
      agreeTerms.value
  )

  const validateFullName = (value: string) => {
    if (!value.trim()) {
      return 'Le nom complet est requis.'
    }
    return null
  }

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

  const validateConfirmPassword = (value: string) => {
    if (!value) {
      return 'Veuillez confirmer votre mot de passe.'
    }
    if (value !== password.value) {
      return 'Les mots de passe ne correspondent pas.'
    }
    return null
  }

  const validateForm = () => {
    fullNameError.value = validateFullName(fullName.value)
    emailError.value = validateEmailOrPhone(email.value)
    passwordError.value = validatePassword(password.value)
    confirmPasswordError.value = validateConfirmPassword(confirmPassword.value)
    formError.value = null

    if (!agreeTerms.value) {
      formError.value = 'Vous devez accepter les conditions d’utilisation.'
      logger.warn('Validation formulaire échouée', {
        field: 'agreeTerms',
        agreeTerms: agreeTerms.value,
      })
    }

    const isValid =
      !fullNameError.value &&
      !emailError.value &&
      !passwordError.value &&
      !confirmPasswordError.value &&
      agreeTerms.value

    if (!isValid) {
      logger.info('Étape de validation du formulaire', {
        fullNameError: fullNameError.value,
        emailError: emailError.value,
        passwordError: passwordError.value,
        confirmPasswordError: confirmPasswordError.value,
      })
    }

    return isValid
  }

  watch([fullName, email, password, confirmPassword, agreeTerms], () => {
    validateForm()
  })

  const handleSubmit = async () => {
    if (!validateForm()) {
      if (!formError.value) {
        formError.value = 'Merci de corriger les champs indiqués.'
      }
      return
    }

    try {
      await auth.register({
        name: fullName.value.trim(),
        email: email.value.trim(),
        password: password.value,
      })
      formError.value = null
      toast.success('Votre compte a bien été créé. Vous êtes redirigé vers l’accueil.')
      logger.info('Inscription réussie', { email: email.value })
    } catch (err) {
      const message = auth.error.value || 'Impossible de créer le compte. Vérifiez vos informations.'
      formError.value = message

      if (auth.errorType.value === 'business') {
        logger.warn('Erreur métier lors de l’inscription', { message, email: email.value })
      } else {
        logger.error('Erreur technique lors de l’inscription', { message, error: err })
      }
    }
  }

  return {
    fullName,
    email,
    password,
    confirmPassword,
    agreeTerms,
    fullNameError,
    emailError,
    passwordError,
    confirmPasswordError,
    formError,
    loading: auth.loading,
    errorMessage,
    isFormValid,
    isAuthenticated: auth.isAuthenticated,
    user: auth.user,
    handleSubmit,
  }
}
