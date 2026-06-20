export const useToken = () => {
  const token = useCookie<string | null>(
    "findme_token",
    {
      default: () => null,
    }
  );

  const setToken = (value: string) => {
    token.value = value;
  };

  const clearToken = () => {
    token.value = null;
  };

  return {
    token,
    setToken,
    clearToken,
  };
};