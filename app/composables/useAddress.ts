// composables/useAddress.ts
import { useApi } from "./useApi";

export const useAddress = () => {
  const api = useApi();
  const addresses = ref<Address[]>([]);
  const isLoading = ref(false);

  const fetchAddresses = async () => {
    isLoading.value = true;
    try {
      const response = await api.get<AddressResponse>("/api/addresses");
      if (response?.data?.addresses) {
        addresses.value = response.data.addresses;
      }
    } catch (error) {
      console.error("Erreur lors du chargement des adresses", error);
    } finally {
      isLoading.value = false;
    }
  };

  return { addresses, fetchAddresses, isLoading };
};
