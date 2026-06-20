<template>
  <div class="bg-white rounded-2xl border p-8">
    <div class="mb-8">
      <h2 class="text-2xl font-bold text-[#203B51]">
        Informations sur l'adresse
      </h2>

      <p class="text-slate-500 mt-2">
        Veuillez renseigner les détails physiques de votre emplacement pour
        faciliter le repérage.
      </p>
    </div>

    <div class="border-t pt-8">
      <div class="grid lg:grid-cols-2 gap-8">
        <!-- Colonne gauche -->
        <div>
          <!-- Nom complet -->
          <div class="mb-6">
            <label class="block font-medium mb-2">
              Nom complet (ou Nom du local) *
            </label>

            <input
              v-model="form.addressName"
              type="text"
              class="input"
              placeholder="ex: Résidence Bella"
              @blur="validateField('addressName', form.addressName)"
            />

            <p v-if="errors.addressName" class="error">
              {{ errors.addressName }}
            </p>
          </div>

          <!-- Ville + Quartier -->
          <div class="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <label class="block font-medium mb-2"> Ville / Quartier * </label>

              <input
                v-model="form.city"
                type="text"
                class="input"
                placeholder="Douala, Akwa"
                @blur="validateField('city', form.city)"
              />

              <p v-if="errors.city" class="error">
                {{ errors.city }}
              </p>
            </div>

            <div>
              <label class="block font-medium mb-2"> Numéro de porte * </label>

              <input
                v-model="form.houseNumber"
                type="text"
                class="input"
                placeholder="ex: 104"
                @blur="validateField('houseNumber', form.houseNumber)"
              />

              <p v-if="errors.houseNumber" class="error">
                {{ errors.houseNumber }}
              </p>
            </div>
          </div>

          <!-- Rue -->
          <div class="mb-6">
            <label class="block font-medium mb-2">
              Nom de la rue / avenue *
            </label>

            <input
              v-model="form.street"
              type="text"
              class="input"
              placeholder="ex: Rue des Écoles"
              @blur="validateField('street', form.street)"
            />

            <p v-if="errors.street" class="error">
              {{ errors.street }}
            </p>
          </div>

          <!-- Points de repère -->
          <div>
            <label class="block font-medium mb-2">
              Points de repère (Optionnel)
            </label>

            <textarea
              v-model="form.landmark"
              rows="4"
              class="input"
              placeholder="ex: En face de la boulangerie Saker, portail bleu"
            />
          </div>
        </div>

        <!-- Colonne droite -->
        <div>
          <AddressPhotoStep
            :photo-preview="form.photoPreview"
            :original-size="originalSize"
            :compressed-size="compressedSize"
            :format-size="formatSize"
            @photo-selected="handlePhoto"
          />

          <p v-if="errors.photo" class="error mt-2">
            {{ errors.photo }}
          </p>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="border-t mt-8 pt-6 flex items-center justify-between">
      <div class="text-sm text-slate-500">
        ☁️ Sauvegarde automatique (Brouillon)
      </div>

      <div class="flex gap-4">
        <button
          @click="$emit('previous')"
          class="px-6 py-3 border rounded-xl hover:bg-slate-50"
        >
          Précédent
        </button>

        <button
          :disabled="!form.photo"
          @click="$emit('next')"
          class="px-6 py-3 rounded-xl transition"
          :class="
            form.photo
              ? 'bg-[#203B51] text-white hover:bg-[#082F5A]'
              : 'bg-slate-200 text-slate-400 cursor-not-allowed'
          "
        >
          Suivant →
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AddressPhotoStep from "./AddressPhotoStep.vue";

defineProps<{
  form: any;
  errors: Record<string, string>;
  validateField: (field: string, value: string) => void;

  originalSize: number;
  compressedSize: number;
  formatSize: (size: number) => string;
}>();

const emit = defineEmits(["photo-selected", "previous", "next"]);

const handlePhoto = (file: File) => {
  emit("photo-selected", file);
};
</script>

<style scoped>
.input {
  @apply w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-600;
}

.error {
  @apply text-red-500 text-sm mt-1;
}
</style>