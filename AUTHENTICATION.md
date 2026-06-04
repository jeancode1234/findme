# Authentification du projet findMe

Ce document décrit le système d'authentification implémenté dans cette application Nuxt 4.
Il couvre le login, l'inscription, la gestion des erreurs, les interceptors API et le middleware de protection.

## Architecture générale

Le système d'authentification se compose de plusieurs parties principales :

1. `app/composables/useAuth.ts`
   - Fournit l'état d'authentification global.
   - Gère la connexion, la déconnexion, l'inscription et la restauration de session.
   - Expose les erreurs métiers ou techniques via `error` et `errorType`.

2. `app/composables/useLoginForm.ts`
   - Gère l'état du formulaire de connexion.
   - Effectue la validation en temps réel des champs `email` / `téléphone` et `mot de passe`.
   - Appelle `auth.login()` et affiche les erreurs côté formulaire.

3. `app/composables/useApi.ts`
   - Intercepte les requêtes et réponses API.
   - Sépare les erreurs métiers (`BusinessError`) et techniques (`TechnicalError`).
   - Envoie des notifications toast en cas d'erreur.

4. `app/components/auth/LoginForm.vue`
   - Affiche l'interface de connexion.
   - Affiche les erreurs de champ et les messages globaux.

5. `app/pages/auth/login.vue`
   - Rend le composant `LoginForm` sur la route `/auth/login`.

6. `app/middleware/auth.ts`
   - Redirige vers `/auth/login` si l'utilisateur n'est pas authentifié.

7. `app/middleware/logging.ts`
   - Logge chaque navigation de page pour tracer les parcours utilisateur.

## Flux de connexion

### Affichage du formulaire

L'utilisateur arrive sur `/auth/login`.
La page importe et affiche `app/components/auth/LoginForm.vue`.

### Validation en temps réel

`useLoginForm.ts` valide les champs sur chaque modification :

- email ou téléphone valide
- mot de passe requis

Les erreurs apparaissent sous le champ correspondant et empêchent l'envoi si nécessaire.

### Soumission

Si le formulaire est valide, `auth.login()` est appelé.

### Traitement côté `useAuth`

`useAuth.ts` :

- réinitialise `error` et `errorType`
- appelle `useApi.post('/auth/login', ...)`
- stocke le token et l'utilisateur dans `localStorage`
- remonte les erreurs métiers ou techniques

## Gestion des erreurs

Les erreurs sont maintenant gérées de façon plus claire :

- `BusinessError` : erreur métier affichée directement à l'utilisateur
- `TechnicalError` : erreur technique affichée sous forme de message générique
- `useApi.ts` logge les erreurs et affiche des notifications toast
- `useAuth.ts` expose `errorType` pour distinguer métier/technique

## Middleware et protection de route

- `app/middleware/auth.ts` protège les pages sécurisées.
- `app/middleware/logging.ts` trace les redirections et les visites de page.

## Notes UX

- le bouton de connexion est désactivé pendant le chargement
- les erreurs sont affichées localement et via popup
- le formulaire prévient l'utilisateur avant l'envoi

## Fichiers clés

- `app/composables/useAuth.ts`
- `app/composables/useLoginForm.ts`
- `app/composables/useApi.ts`
- `app/composables/useToast.ts`
- `app/composables/useLogger.ts`
- `app/middleware/auth.ts`
- `app/middleware/logging.ts`

## Personnalisation backend

Remplace la simulation interne de `app/composables/useApi.ts` par tes endpoints réels et conserve la séparation des erreurs métier/technique. Pour les tokens sécurisés, utilise des cookies HTTP-only si besoin.
