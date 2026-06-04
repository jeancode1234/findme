# Middleware

Ce dossier contient les middlewares Nuxt utilisés par l'application.

## `auth.ts`

- protège les pages sécurisées
- vérifie `useAuth().isAuthenticated`
- redirige vers `/auth/login` si l'utilisateur n'est pas connecté

## `logging.ts`

- trace les transitions de page
- logge les informations de navigation (`from`, `to`, `timestamp`)
- utile pour le debug et l'audit

## Utilisation

Chaque page peut déclarer un middleware via `definePageMeta` :

```ts
definePageMeta({ middleware: ['auth', 'logging'] })
```

## Bonnes pratiques

- protéger les routes sensibles avec `auth`
- ajouter `logging` pour suivre le parcours utilisateur
- étendre ces middlewares si tu veux une gestion d'erreurs globale côté route
