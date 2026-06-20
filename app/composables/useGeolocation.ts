export const useGeolocation = () => {
  const loading = ref(false)
  const error = ref<string | null>(null)

  const locateUser = () => {
    loading.value = true
    error.value = null

    return new Promise<{
      latitude: number
      longitude: number
    }>((resolve, reject) => {

      if (!navigator.geolocation) {
        const message =
          'La géolocalisation n’est pas supportée par ce navigateur.'

        error.value = message
        loading.value = false

        reject(new Error(message))
        return
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          loading.value = false

          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          })
        },

        (err) => {
          loading.value = false

          error.value =
            'Impossible de récupérer votre position.'

          reject(err)
        },

        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      )
    })
  }

  return {
    loading,
    error,
    locateUser,
  }
}