export const useAddressPhoto = () => {
  const originalSize = ref(0)
  const compressedSize = ref(0)

  const compressImage = (
    file: File
  ): Promise<File> => {
    originalSize.value = file.size

    return new Promise((resolve) => {
      const reader = new FileReader()

      reader.onload = (e) => {
        const img = new Image()

        img.onload = () => {
          const canvas =
            document.createElement('canvas')

          const ctx =
            canvas.getContext('2d')

          let width = img.width
          let height = img.height

          const maxSize = 800

          if (width > height) {
            if (width > maxSize) {
              height *= maxSize / width
              width = maxSize
            }
          } else {
            if (height > maxSize) {
              width *= maxSize / height
              height = maxSize
            }
          }

          canvas.width = width
          canvas.height = height

          ctx?.drawImage(
            img,
            0,
            0,
            width,
            height
          )

          canvas.toBlob(
            (blob) => {
              if (!blob) return

              compressedSize.value =
                blob.size

              const compressedFile =
                new File(
                  [blob],
                  file.name,
                  {
                    type: 'image/jpeg',
                  }
                )

              resolve(compressedFile)
            },
            'image/jpeg',
            0.7
          )
        }

        img.src =
          e.target?.result as string
      }

      reader.readAsDataURL(file)
    })
  }

  const generatePreview = (
    file: File
  ) => URL.createObjectURL(file)

  const formatSize = (
    size: number
  ) => {
    return (
      (size / 1024 / 1024).toFixed(2) +
      ' MB'
    )
  }

  return {
    originalSize,
    compressedSize,
    compressImage,
    generatePreview,
    formatSize,
  }
}