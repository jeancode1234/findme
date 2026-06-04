<script setup lang="ts">
import NotificationToast from './components/NotificationToast.vue'
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
    <NotificationToast />
  </div>
</template>
