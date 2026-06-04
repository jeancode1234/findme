import { defineNuxtRouteMiddleware } from '#imports'
import { useLogger } from '../composables/useLogger'

export default defineNuxtRouteMiddleware((to, from) => {
  const logger = useLogger()
  logger.info('Middleware de navigation actif', {
    from: from.fullPath,
    to: to.fullPath,
    timestamp: new Date().toISOString(),
  })
})
