// types/auth.d.ts
declare global {
  interface LoginPayload {
    email: string;
    password: string;
  }

  interface RegisterPayload {
    name: string;
    email: string;
    password: string;
  }

  interface UserProfile {
    id: string;
    name: string;
    email: string;
    role: "user" | "admin";
    addressCount: number;
    createdAt: string;
  }

  interface AuthResponse {
    success: boolean;
    data: {
      user: UserProfile;
      token: string;
    };
  }

  interface MeResponse {
    success: boolean;
    data: {
      user: UserProfile;
    };
  }
}
export {};
