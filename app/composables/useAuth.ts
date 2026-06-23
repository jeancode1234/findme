import { useApi } from "./useApi";
import { toast } from "vue-sonner";
import { logger } from "~/utils/logger";

export const useAuth = () => {
  const api = useApi();
  const authToken = useCookie("findme_token", {
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
    sameSite: "lax",
  });

  // Regex : Min 8 car., au moins 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const user = ref<UserProfile | null>(null);
  const isLoading = ref(false);
  const globalError = ref("");
  const fieldErrors = ref<Record<string, string>>({});

  const clearError = (field: string) => {
    if (fieldErrors.value[field]) delete fieldErrors.value[field];
  };

  /**
   * Validation temps réel par champ
   * @param field - Nom du champ
   * @param value - Valeur saisie
   * @param compareValue - Optionnel : valeur pour comparer (ex: confirmation mot de passe)
   */
  const validateField = (
    field: string,
    value: string,
    compareValue?: string,
  ) => {
    let error = "";

    if (field === "name" && value.length < 3) error = "Min. 3 caractères.";
    if (field === "email" && !/^\S+@\S+\.\S+$/.test(value))
      error = "Email invalide.";
    if (field === "password" && !passwordRegex.test(value)) {
      error = "Min. 8 car. (Maj, min, chiffre, spécial).";
    }
    if (field === "confirmPassword" && value !== compareValue) {
      error = "Les mots de passe ne correspondent pas.";
    }

    fieldErrors.value[field] = error;
  };

  /**
   * Validation globale avant envoi
   */
  const validateForm = (payload: any) => {
    const errors: Record<string, string> = {};

    if (payload.name !== undefined && payload.name.length < 3)
      errors.name = "Min. 3 caractères.";
    if (payload.email !== undefined && !/^\S+@\S+\.\S+$/.test(payload.email))
      errors.email = "Email invalide.";
    if (
      payload.password !== undefined &&
      !passwordRegex.test(payload.password)
    ) {
      errors.password = "Min. 8 car. (Maj, min, chiffre, spécial).";
    }
    if (
      payload.confirmPassword !== undefined &&
      payload.confirmPassword !== payload.password
    ) {
      errors.confirmPassword = "Les mots de passe ne correspondent pas.";
    }

    fieldErrors.value = errors;
    return Object.keys(errors).length === 0;
  };

  const handleApiError = (context: string, error: any) => {
    logger.technical(context, error, "AUTH");
    if (error.status === 422 && error.data?.error?.fields) {
      fieldErrors.value = error.data.error.fields;
      toast.error("Veuillez vérifier les champs.");
    } else {
      globalError.value =
        error.data?.error?.message || "Une erreur est survenue.";
      toast.error(globalError.value);
    }
  };

  const login = async (payload: LoginPayload) => {
    isLoading.value = true;
    try {
      const response = await api.post<AuthResponse>("/api/auth/login", payload);
      if (response?.data?.token) {
        authToken.value = response.data.token;
        user.value = response.data.user;
        toast.success("Connexion réussie !");
        return response.data.user.role;
      }
    } catch (error: any) {
      handleApiError("AuthLogin", error);
      throw error;
    } finally {
      isLoading.value = false;
    }
  };

  const register = async (payload: RegisterPayload) => {
    isLoading.value = true;
    try {
      const response = await api.post<AuthResponse>(
        "/api/auth/register",
        payload,
      );
      if (response?.data?.token) {
        authToken.value = response.data.token;
        user.value = response.data.user;
        toast.success("Bienvenue sur findMe !");
        return response.data.user.role;
      }
      return "user";
    } catch (error: any) {
      handleApiError("AuthRegister", error);
      throw error;
    } finally {
      isLoading.value = false;
    }
  };

  const me = async () => {
    if (!authToken.value) return;
    try {
      const response = await api.get<MeResponse>("/api/auth/me");
      if (response?.data?.user) user.value = response.data.user;
    } catch {
      user.value = null;
    }
  };

  const logout = async () => {
    try {
      await api.post("/api/auth/logout");
    } catch (error: any) {
      logger.technical("AuthLogout", error, "AUTH");
    } finally {
      authToken.value = null;
      user.value = null;
      toast.info("Déconnexion réussie.");
      await navigateTo("/auth/login");
    }
  };

  return {
    user,
    isLoading,
    globalError,
    fieldErrors,
    clearError,
    validateField,
    validateForm,
    login,
    register,
    me,
    logout,
    isAuthenticated: computed(() => !!authToken.value && !!user.value),
  };
};
