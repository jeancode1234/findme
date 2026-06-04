export type ToastType = 'success' | 'error' | 'info'

export type ToastMessage = {
  id: string
  type: ToastType
  title: string
  message: string
}

const DEFAULT_DURATION = 4500

export const useToast = () => {
  const toasts = useState<ToastMessage[]>('toast-messages', () => [])

  const removeToast = (id: string) => {
    toasts.value = toasts.value.filter((toast) => toast.id !== id)
  }

  const pushToast = (type: ToastType, title: string, message: string) => {
    const id = `toast-${Date.now()}-${Math.random().toString(16).slice(2)}`
    toasts.value.push({ id, type, title, message })
    setTimeout(() => removeToast(id), DEFAULT_DURATION)
  }

  const success = (message: string, title = 'Succès') => pushToast('success', title, message)
  const error = (message: string, title = 'Erreur') => pushToast('error', title, message)
  const info = (message: string, title = 'Info') => pushToast('info', title, message)

  return {
    toasts,
    success,
    error,
    info,
    removeToast,
  }
}
