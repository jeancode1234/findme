<template>
  <Register />
</template>

<script setup>
import RegisterForm from '../../components/auth/RegisterForm.vue'
import Register from '~/components/auth/Register.vue';

definePageMeta({ middleware: ['logging'] })
</script>
