# findMe

Application Nuxt 4 avec un système d'authentification client simple, une gestion d'erreurs centralisée et des modules réutilisables.

## Vue d'ensemble

Ce projet propose :

- une page de connexion (`/auth/login`) et une page d'inscription (`/auth/register`)
- un composable d'authentification global (`app/composables/useAuth.ts`)
- un wrapper API avec interceptions et gestion d'erreurs (`app/composables/useApi.ts`)
- un système de notifications popup (`app/composables/useToast.ts`)
- un logger applicatif pour tracer les demandes et erreurs (`app/composables/useLogger.ts`)
- des pages protégées via middleware (`app/middleware/auth.ts`)
- une page d'erreur globale (`app/error.vue`)

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview production

```bash
npm run preview
```

## Documentation du projet

- `AUTHENTICATION.md` : fonctionnement du login et de l'authentification
- `REGISTER.md` : fonctionnement de l'inscription, redirection et validation
- `app/composables/README.md` : vue d'ensemble des composables
- `app/middleware/README.md` : explication des middlewares disponibles

## Fonctionnalités clés

- validation client riche pour l'inscription et la connexion
- interception des requêtes API et classification des erreurs métier / techniques
- notifications toast pour les retours utilisateur
- redirection automatique vers la page d'accueil après inscription réussie
- protection de route pour les pages sécurisées comme `/dashboard`

## Notes

Le backend est actuellement simulé avec un stub `fakeAuthRequest` dans `app/composables/useApi.ts`.
Pour une intégration réelle, remplacez cette simulation par vos endpoints API.
