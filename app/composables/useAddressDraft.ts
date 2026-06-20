export const useAddressDraft = () => {

  const STORAGE_KEY =
    'findme-address-draft'

  const saveDraft = (
    data: any
  ) => {

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(data)
    )
  }

  const loadDraft = () => {

    const draft =
      localStorage.getItem(
        STORAGE_KEY
      )

    if (!draft) {
      return null
    }

    return JSON.parse(draft)
  }

  const clearDraft = () => {

    localStorage.removeItem(
      STORAGE_KEY
    )
  }

  return {
    saveDraft,
    loadDraft,
    clearDraft,
  }
}