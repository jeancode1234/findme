// composables/useAddress.ts
import { ref } from "vue";
import { logger } from "~/utils/logger";
import { toast } from "vue-sonner";

const STORAGE_KEY = "findme_addresses_db";
const MAX_ADDRESSES = 4;

export const useAddress = () => {
  const addresses = ref<Address[]>([]);
  const activeAddress = ref<Address | null>(null);
  const isLoading = ref(false);

  // 1. READ ALL: Liste depuis le LocalStorage
  const fetchAddresses = () => {
    isLoading.value = true;
    const data = localStorage.getItem(STORAGE_KEY);
    addresses.value = data ? JSON.parse(data) : [];
    isLoading.value = false;
  };

  // 2. READ ONE
  const fetchAddressById = (id: string) => {
    fetchAddresses();
    const found = addresses.value.find((a) => a.id === id);
    activeAddress.value = found || null;
    return found;
  };

  // 3. CREATE: Avec limite de 4 adresses
  const createAddress = (data: Partial<Address>) => {
    fetchAddresses(); // S'assurer d'avoir les dernières données

    if (addresses.value.length >= MAX_ADDRESSES) {
      toast.error(`Limite de ${MAX_ADDRESSES} adresses atteinte.`);
      return null;
    }

    const newAddress = {
      ...data,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString(),
    } as Address;

    addresses.value.push(newAddress);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(addresses.value));

    logger.business("ADDRESS_CREATED", { id: newAddress.id });
    toast.success("Adresse créée avec succès.");
    return newAddress;
  };

  // 4. UPDATE
  const updateAddress = (id: string, data: Partial<Address>) => {
    const index = addresses.value.findIndex((a) => a.id === id);
    if (index !== -1) {
      addresses.value[index] = { ...addresses.value[index], ...data };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(addresses.value));
      logger.business("ADDRESS_UPDATED", { id });
      toast.success("Adresse mise à jour.");
    }
  };

  // 5. DELETE
  const deleteAddress = (id: string) => {
    addresses.value = addresses.value.filter((a) => a.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(addresses.value));
    logger.business("ADDRESS_DELETED", { id });
    toast.info("Adresse supprimée.");
  };

  // 6. SHARE (Simulation métier)
  const shareAddress = (id: string, method: "email" | "whatsapp") => {
    logger.business("ADDRESS_SHARED", { id, method });
    toast.success(`Adresse partagée via ${method}.`);
  };

  // 7. EXPORT PDF (Simulation de génération)
  const exportAddressPdf = (id: string) => {
    const addr = addresses.value.find((a) => a.id === id);
    if (!addr) return;

    // Simulation d'export simple
    logger.business("ADDRESS_EXPORTED", { id });
    toast.success("Génération du PDF en cours...");
    // Ici, vous ajouteriez la logique réelle de bibliothèque type jsPDF
  };

  return {
    addresses,
    activeAddress,
    isLoading,
    fetchAddresses,
    fetchAddressById,
    createAddress,
    updateAddress,
    deleteAddress,
    shareAddress,
    exportAddressPdf,
  };
};
