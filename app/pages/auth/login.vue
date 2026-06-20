<template>
  <Login />
</template>

<script setup>
import LoginForm from '../../components/auth/LoginForm.vue'
import Login from '~/components/auth/Login.vue';
definePageMeta({ middleware: ['logging'] })
</script>
