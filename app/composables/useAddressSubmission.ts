export const useAddressSubmission = () => {
  const loading = ref(false);

  const submitAddress = async (
    form: any
  ) => {
    loading.value = true;

    try {
      const formData =
        new FormData();

      Object.entries(form).forEach(
        ([key, value]) => {
          if (
            value !== null &&
            value !== undefined
          ) {
            formData.append(
              key,
              value as any
            );
          }
        }
      );

      await $fetch(
        "/api/addresses",
        {
          method: "POST",
          body: formData,
        }
      );

      return true;
    } finally {
      loading.value = false;
    }
  };

  return {
    loading,
    submitAddress,
  };
};