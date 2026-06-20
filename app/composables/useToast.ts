import { ref } from 'vue'

// Typage d'une notification
export interface Notification {
  id: number
  type: 'success' | 'error' | 'info' | 'warning'
  message: string
}

// État global partagé par toute l'application
const notifications = ref<Notification[]>([])
let counter = 0

export const useToast = () => {

  /**
   * Ajoute une notification à l'écran
   */
  const addNotification = (message: string, type: Notification['type'] = 'info', duration = 4000) => {
    const id = counter++
    
    // On ajoute la nouvelle alerte au tableau
    notifications.value.push({ id, type, message })

    // On la supprime automatiquement après la durée spécifiée
    setTimeout(() => {
      removeNotification(id)
    }, duration)
  }

  /**
   * Supprime manuellement une notification (ex: clic sur une croix)
   */
  const removeNotification = (id: number) => {
    notifications.value = notifications.value.filter(n => n.id !== id)
  }

  // Raccourcis pratiques
  const showSuccess = (message: string, duration?: number) => addNotification(message, 'success', duration)
  const showError = (message: string, duration?: number) => addNotification(message, 'error', duration)
  const showWarning = (message: string, duration?: number) => addNotification(message, 'warning', duration)
  const showInfo = (message: string, duration?: number) => addNotification(message, 'info', duration)

  return {
    notifications,
    addNotification,
    removeNotification,
    showSuccess,
    showError,
    showWarning,
    showInfo
  }
}