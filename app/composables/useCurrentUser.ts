import type { User } from "~/types/auth";

export const useCurrentUser = () => {
  const user = useState<User | null>(
    "current-user",
    () => null
  );

  const setUser = (value: User) => {
    user.value = value;
  };

  const clearUser = () => {
    user.value = null;
  };

  return {
    user,
    setUser,
    clearUser,
  };
};