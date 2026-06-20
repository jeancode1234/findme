<template>
  <AddressStepper :currentStep="currentStep" />

  <AddressLocationStep
    v-if="currentStep === 1"
    :latitude="form.latitude"
    :longitude="form.longitude"
    :errors="errors"
    @locate="handleLocate"
    @update-position="updatePosition"
    @next="goToStep2"
  />

  <AddressDetailsStep
    v-if="currentStep === 2"
    :form="form"
    :errors="errors"
    :validate-field="validateField"
    :original-size="originalSize"
    :compressed-size="compressedSize"
    :format-size="formatSize"
    @photo-selected="handlePhoto"
    @previous="previousStep"
    @next="goToStep3"
  />

  <AddressConfirmationStep
    v-if="currentStep === 3"
    :form="form"
    @previous="previousStep"
    @submit="publishAddress"
  />
</template>
<script setup lang="ts">
import AddressStepper from "~/components/adress/AddressStepper.vue";
import AddressLocationStep from "~/components/adress/AddressLocationStep.vue";
import AddressDetailsStep from "~/components/adress/AddressDetailsStep.vue";
import AddressConfirmationStep from "~/components/adress/AddressConfirmationStep.vue";

import { useAddressCreation } from "~/composables/useAddress";
import { useAddressValidation } from "~/composables/useAddressValidation";
import { useGeolocation } from "~/composables/useGeolocation";
import { useAddressPhoto } from "~/composables/useAddressPhoto";
import { useAddressSubmission } from "~/composables/useAddressSubmission";

import { useRouter } from "vue-router";

const router = useRouter();

const { form, currentStep, nextStep, previousStep } = useAddressCreation();

const { errors, validateStep1, validateStep2, validateField } =
  useAddressValidation();

const { locateUser } = useGeolocation();

const {
  originalSize,
  compressedSize,
  compressImage,
  generatePreview,
  formatSize,
} = useAddressPhoto();

const { submitAddress } = useAddressSubmission();

const handleLocate = async () => {
  try {
    const position = await locateUser();

    form.value.latitude = position.latitude;
    form.value.longitude = position.longitude;
  } catch (error) {
    console.error(error);
  }
};

const updatePosition = (position: { latitude: number; longitude: number }) => {
  form.value.latitude = position.latitude;
  form.value.longitude = position.longitude;
};

const handlePhoto = async (file: File) => {
  const compressed = await compressImage(file);

  form.value.photo = compressed;
  form.value.photoPreview = generatePreview(compressed);

  validateField("photo", compressed);
};

const goToStep2 = () => {
  if (validateStep1(form.value)) {
    nextStep();
  }
};

const goToStep3 = () => {
  if (validateStep2(form.value)) {
    nextStep();
  }
};

const publishAddress = async () => {
  await submitAddress(form.value);

  router.push("/");
};
</script>

<style>
</style>