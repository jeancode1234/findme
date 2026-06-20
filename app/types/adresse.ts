export interface Gps {
  latitude: number;
  longitude: number;
}

export interface Address {
  id: string;
  userId: string;
  label: string;
  country: string;
  city: string;
  district: string;
  street: string;
  houseNumber: string;
  postalCode: string | null;
  gps: Gps;
  photo: string;
  status: "active" | "pending";
  createdAt: string;
}

export interface AddressResponse {
  success: boolean;
  data: {
    total: number;
    remaining: number;
    addresses: Address[];
  };
}
