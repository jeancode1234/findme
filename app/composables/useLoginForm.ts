import { computed, reactive, ref, watch } from "vue";
import { useAuth } from "./useAuth";

export const useLoginForm = () => {
  const auth = useAuth();

  const email = ref("");
  const password = ref("");
  const remember = ref(false);

  const errorMessage = ref("");

  const validationErrors = reactive<Record<string, string>>({});

  const validateEmail = () => {
    delete validationErrors.email;

    if (!email.value.trim()) {
      validationErrors.email = "L'email est obligatoire";
      return;
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.value)) {
      validationErrors.email =
        "Adresse email invalide";
    }
  };

  const validatePassword = () => {
    delete validationErrors.password;

    if (!password.value.trim()) {
      validationErrors.password =
        "Le mot de passe est obligatoire";
      return;
    }

    if (password.value.length < 6) {
      validationErrors.password =
        "Minimum 6 caractères";
    }
  };

  const validate = () => {
    validateEmail();
    validatePassword();

    return (
      Object.keys(validationErrors).length === 0
    );
  };

  watch(email, () => {
    validateEmail();
  });

  watch(password, () => {
    validatePassword();
  });

  const emailError = computed(
    () => validationErrors.email || ""
  );

  const passwordError = computed(
    () => validationErrors.password || ""
  );

  const isFormValid = computed(() => {
    return (
      email.value.trim() !== "" &&
      password.value.trim() !== "" &&
      Object.keys(validationErrors).length === 0
    );
  });

  const handleSubmit = async () => {
    errorMessage.value = "";

    if (!validate()) {
      return;
    }

    try {
      await auth.login({
        email: email.value,
        password: password.value,
        remember: remember.value,
      });

      await navigateTo("/dashboard");
    } catch (error) {
      errorMessage.value =
        auth.error.value ||
        "Connexion impossible";
    }
  };

  return {
    email,
    password,
    remember,

    emailError,
    passwordError,

    errorMessage,

    loading: auth.loading,

    isAuthenticated:
      auth.isAuthenticated,

    isFormValid,

    handleSubmit,
  };
};