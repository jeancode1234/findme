import { computed, reactive, ref, watch } from "vue";
import { useAuth } from "./useAuth";
import { useToast } from "./useToast";

export const useRegisterForm = () => {
  const auth = useAuth();

  const toast = useToast();

  const name = ref("");

  const email = ref("");

  const password = ref("");

  const confirmPassword = ref("");

  const agreeTerms = ref(false);

  const errorMessage = ref("");

  const validationErrors = reactive<Record<string, string>>({});

  const validateName = () => {
    if (!name.value.trim()) {
      validationErrors.name =
        "Le nom est obligatoire";
    } else {
      delete validationErrors.name;
    }
  };

  const validateEmail = () => {
    if (!email.value.trim()) {
      validationErrors.email =
        "L'email est obligatoire";
      return;
    }

    const regex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email.value)) {
      validationErrors.email =
        "Adresse email invalide";
    } else {
      delete validationErrors.email;
    }
  };

  const validatePassword = () => {
    if (!password.value.trim()) {
      validationErrors.password =
        "Le mot de passe est obligatoire";
      return;
    }

    if (password.value.length < 6) {
      validationErrors.password =
        "Minimum 6 caractères";
    } else {
      delete validationErrors.password;
    }
  };

  const validateConfirmPassword = () => {
    if (!confirmPassword.value.trim()) {
      validationErrors.confirmPassword =
        "Confirmation obligatoire";
      return;
    }

    if (
      confirmPassword.value !==
      password.value
    ) {
      validationErrors.confirmPassword =
        "Les mots de passe ne correspondent pas";
    } else {
      delete validationErrors.confirmPassword;
    }
  };

  const validateTerms = () => {
    if (!agreeTerms.value) {
      validationErrors.agreeTerms =
        "Veuillez accepter les conditions";
    } else {
      delete validationErrors.agreeTerms;
    }
  };

  const validate = () => {
    validateName();

    validateEmail();

    validatePassword();

    validateConfirmPassword();

    validateTerms();

    return (
      Object.keys(validationErrors).length ===
      0
    );
  };

  /*
   * Validation temps réel
   */

  watch(name, validateName);

  watch(email, validateEmail);

  watch(password, () => {
    validatePassword();

    validateConfirmPassword();
  });

  watch(
    confirmPassword,
    validateConfirmPassword,
  );

  watch(agreeTerms, validateTerms);

  const handleSubmit =
    async (): Promise<boolean> => {
      errorMessage.value = "";

      if (!validate()) {
        return false;
      }

      try {
        await auth.register({
          name: name.value,
          email: email.value,
          password: password.value,
        });

        toast.success(
          "Compte créé avec succès",
        );

        await navigateTo(
          "/",
        );

        return true;
      } catch (error) {
        errorMessage.value =
          auth.error.value ??
          "Inscription impossible";

        return false;
      }
    };

  const isFormValid = computed(
    () =>
      name.value.trim().length > 0 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        email.value,
      ) &&
      password.value.length >= 6 &&
      confirmPassword.value ===
        password.value &&
      agreeTerms.value,
  );

  return {
    name,
    email,
    password,
    confirmPassword,
    agreeTerms,

    nameError: computed(
      () => validationErrors.name,
    ),

    emailError: computed(
      () => validationErrors.email,
    ),

    passwordError: computed(
      () => validationErrors.password,
    ),

    confirmPasswordError: computed(
      () =>
        validationErrors.confirmPassword,
    ),
agreeTermsError: computed(
      () =>
        validationErrors.agreeTerms,
    ),
    loading: auth.loading,

    errorMessage,

    isAuthenticated:
      auth.isAuthenticated,

    isFormValid,

    handleSubmit,
  };
};