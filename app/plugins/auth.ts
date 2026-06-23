// plugins/auth.ts
export default defineNuxtPlugin(async (nuxtApp) => {
  const { me } = useAuth();
  
  // Cette fonction s'exécute dès le chargement de l'application
  await me();
});