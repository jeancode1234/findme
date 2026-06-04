# Composables

Ce dossier contient les modules partagés de l'application `findMe`.
Chaque composable gère une responsabilité claire : authentification, formulaire, API, notifications et journalisation.

## Modules disponibles

- `useAuth.ts` : gestion de l'authentification globale, connexion, inscription, restauration de session.
- `useApi.ts` : wrapper API avec interceptions de requête/response et classification des erreurs.
- `useLoginForm.ts` : validation et gestion du formulaire de connexion.
- `useRegisterForm.ts` : validation et gestion du formulaire d'inscription.
- `useToast.ts` : gestion des notifications popup et stockage des toasts.
- `useLogger.ts` : logs applicatifs structurés pour le debug et l'audit.
- `errors.ts` : définitions des erreurs métiers et techniques.

## Bonnes pratiques

- Importer `useAuth()` partout où l'état de session est nécessaire.
- Utiliser `useApi()` pour centraliser les appels HTTP et la gestion d'erreur.
- Garder les composants UI légers ; déléguer la logique à des composables.
- Conserver des erreurs métier claires et les afficher avec `useToast()`.
