import { reactive } from "vue";

export const useAddressValidation = () => {
  const errors = reactive<Record<string, string>>({});

  const clearErrors = () => {
    Object.keys(errors).forEach(
      (key) => delete errors[key]
    );
  };

  const validateStep1 = (form: any) => {
    clearErrors();

    if (
      form.latitude === null ||
      form.longitude === null
    ) {
      errors.location =
        "Veuillez sélectionner votre position sur la carte.";
    }

    return Object.keys(errors).length === 0;
  };

  const validateStep2 = (form: any) => {
    clearErrors();

    if (!form.addressName?.trim()) {
      errors.addressName =
        "Le nom complet ou nom du local est obligatoire.";
    }

    if (!form.city?.trim()) {
      errors.city =
        "La ville est obligatoire.";
    }

    if (!form.district?.trim()) {
      errors.district =
        "Le quartier est obligatoire.";
    }

    if (!form.street?.trim()) {
      errors.street =
        "La rue ou avenue est obligatoire.";
    }

    if (!form.houseNumber?.trim()) {
      errors.houseNumber =
        "Le numéro de porte est obligatoire.";
    }

    if (!form.photo) {
      errors.photo =
        "La photo du bâtiment est obligatoire.";
    }

    return Object.keys(errors).length === 0;
  };

  const validateField = (
    field: string,
    value: any
  ) => {
    delete errors[field];

    switch (field) {
      case "addressName":
        if (!value?.trim()) {
          errors.addressName =
            "Le nom complet ou nom du local est obligatoire.";
        }
        break;

      case "city":
        if (!value?.trim()) {
          errors.city =
            "La ville est obligatoire.";
        }
        break;

      case "district":
        if (!value?.trim()) {
          errors.district =
            "Le quartier est obligatoire.";
        }
        break;

      case "street":
        if (!value?.trim()) {
          errors.street =
            "La rue ou avenue est obligatoire.";
        }
        break;

      case "houseNumber":
        if (!value?.trim()) {
          errors.houseNumber =
            "Le numéro de porte est obligatoire.";
        }
        break;

      case "photo":
        if (!value) {
          errors.photo =
            "La photo du bâtiment est obligatoire.";
        }
        break;
    }
  };

  return {
    errors,
    validateStep1,
    validateStep2,
    validateField,
  };
};