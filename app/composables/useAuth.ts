// composables/useAuth.ts
import { useApi } from "./useApi";
import { toast } from "vue-sonner";
import { logger } from "~/utils/logger"; // Import de notre nouveau logger

export const useAuth = () => {
  const api = useApi();
  const authToken = useCookie("findme_token", {
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
    sameSite: "lax",
  });

  const user = ref<UserProfile | null>(null);
  const isLoading = ref(false);
  const globalError = ref("");
  const fieldErrors = ref<Record<string, string>>({});

  /**
   * Gestionnaire d'erreurs centralisé (Technique)
   */
  const handleApiError = (context: string, error: any) => {
    // Utilisation du logger technique
    logger.technical(context, error, "AUTH");

    if (error.status === 422 && error.data?.error?.fields) {
      fieldErrors.value = error.data.error.fields;
      toast.error("Veuillez vérifier les champs du formulaire.");
    } else {
      globalError.value =
        error.data?.error?.message || "Une erreur est survenue.";
      toast.error(globalError.value);
    }
  };

  /**
   * Connexion
   */
  const login = async (payload: LoginPayload) => {
    isLoading.value = true;
    globalError.value = "";
    fieldErrors.value = {};
    try {
      const response = await api.post<AuthResponse>("/api/auth/login", payload);
      if (response?.data?.token) {
        authToken.value = response.data.token;
        user.value = response.data.user;

        // LOG MÉTIER
        logger.business("USER_LOGIN", {
          userId: user.value.id,
          email: payload.email,
        });

        toast.success("Connexion réussie !");
        return response.data.user.role;
      }
      return null;
    } catch (error: any) {
      handleApiError("AuthLogin", error);
      return null;
    } finally {
      isLoading.value = false;
    }
  };

  /**
   * Inscription
   */
  const register = async (payload: RegisterPayload) => {
    isLoading.value = true;
    globalError.value = "";
    fieldErrors.value = {};
    try {
      const response = await api.post<AuthResponse>(
        "/api/auth/register",
        payload,
      );
      if (response?.data?.token) {
        authToken.value = response.data.token;
        user.value = response.data.user;

        // LOG MÉTIER
        logger.business("USER_REGISTER", {
          userId: user.value.id,
          email: payload.email,
        });

        toast.success("Bienvenue sur findMe !");
        return response.data.user.role;
      }
      return "user";
    } catch (error: any) {
      handleApiError("AuthRegister", error);
      return null;
    } finally {
      isLoading.value = false;
    }
  };

  /**
   * Récupération profil (me)
   */
  const me = async () => {
    if (!authToken.value) return;
    try {
      const response = await api.get<MeResponse>("/api/auth/me");
      if (response?.data?.user) user.value = response.data.user;
    } catch (error: any) {
      // Log technique spécifique
      logger.technical("AuthMe", error, "AUTH");
      authToken.value = null;
      user.value = null;
    }
  };

  /**
   * Déconnexion
   */
  const logout = async () => {
    try {
      await api.post("/api/auth/logout");
      // LOG MÉTIER
      logger.business("USER_LOGOUT", { userId: user.value?.id });
    } catch (error: any) {
      logger.technical("AuthLogout", error, "AUTH");
    } finally {
      authToken.value = null;
      user.value = null;
      toast.info("Vous avez été déconnecté.");
      navigateTo("/auth/login");
    }
  };

  return {
    user,
    isLoading,
    globalError,
    fieldErrors,
    login,
    register,
    me,
    logout,
    isAuthenticated: computed(() => !!authToken.value),
  };
};
