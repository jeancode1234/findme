import { watch, onMounted } from "vue";
export interface AddressForm {
  latitude: number | null;
  longitude: number | null;

  addressName: string;

  city: string;
  district: string;

  street: string;
  houseNumber: string;

  landmark: string;

  photo: File | null;
  photoPreview: string;
}

export const useAddressCreation = () => {
  const currentStep = useState<number>(
    "address-current-step",
    () => 1
  );

  const form = useState<AddressForm>(
    "address-form",
    () => ({
      latitude: null,
      longitude: null,

      addressName: "",

      city: "",
      district: "",

      street: "",
      houseNumber: "",

      landmark: "",

      photo: null,
      photoPreview: "",
    })
  );

  const nextStep = () => {
    if (currentStep.value < 3) {
      currentStep.value++;
    }
  };

  const previousStep = () => {
    if (currentStep.value > 1) {
      currentStep.value--;
    }
  };

  const resetForm = () => {
    currentStep.value = 1;

    form.value = {
      latitude: null,
      longitude: null,

      addressName: "",

      city: "",
      district: "",

      street: "",
      houseNumber: "",

      landmark: "",

      photo: null,
      photoPreview: "",
    };

    if (import.meta.client) {
      localStorage.removeItem(
        "findme-address-draft"
      );
    }
  };

  // Chargement du brouillon
  onMounted(() => {
    const draft = localStorage.getItem(
      "findme-address-draft"
    );

    if (draft) {
      try {
        const parsed = JSON.parse(draft);

        form.value = {
          ...form.value,
          ...parsed,
          photo: null, // Impossible de restaurer un File
        };
      } catch (error) {
        console.error(
          "Erreur lors du chargement du brouillon",
          error
        );
      }
    }
  });

  // Sauvegarde automatique
  watch(
    form,
    (value) => {
      if (import.meta.client) {
        localStorage.setItem(
          "findme-address-draft",
          JSON.stringify(value)
        );
      }
    },
    {
      deep: true,
    }
  );

  return {
    form,
    currentStep,
    nextStep,
    previousStep,
    resetForm,
  };
};