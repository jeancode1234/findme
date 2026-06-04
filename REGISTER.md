# Register / Inscription

Ce document décrit le système d'inscription implémenté dans l'application Nuxt `findMe`.
Il couvre le formulaire, la validation, la gestion des erreurs et la redirection automatique après une inscription réussie.

## Fichiers clés

- `app/components/auth/RegisterForm.vue` : composant d'interface pour l'inscription.
- `app/pages/auth/register.vue` : page qui rend le composant d'inscription.
- `app/composables/useRegisterForm.ts` : composable qui gère l'état du formulaire, la validation et l'envoi.
- `app/composables/useAuth.ts` : composable d'authentification global qui expose `register()`.
- `app/composables/useApi.ts` : wrapper API avec interception et classe d'erreurs.
- `app/composables/useToast.ts` : notifications popup pour succès et erreur.

## Fonctionnement général

### 1. Page d'inscription

L'utilisateur arrive sur `/auth/register`.
La page affiche `app/components/auth/RegisterForm.vue`.

### 2. Interface du formulaire

Le formulaire propose :

- nom complet
- email ou téléphone
- mot de passe
- confirmation du mot de passe
- case à cocher pour accepter les conditions
- bouton d'envoi
- messages d'erreur par champ
- notification toast en cas de succès ou d'erreur

### 3. Validation en temps réel

`useRegisterForm.ts` vérifie :

- `fullName` non vide
- `email` ou téléphone valide
- `password` d'au moins 8 caractères
- `confirmPassword` identique à `password`
- `agreeTerms` coché

La validation est déclenchée par un `watch` sur les champs.

### 4. Soumission

`handleSubmit()` :

- valide le formulaire
- affiche un message global si la validation échoue
- appelle `auth.register()` si tout est valide

### 5. Enregistrement côté `useAuth`

`useAuth.ts` :

- appelle `useApi.post('/auth/register', ...)`
- gère l'état `loading`
- stocke le token et l'utilisateur dans `localStorage`
- expose une classification `errorType` (`business` / `technical`)

### 6. Interception et gestion des erreurs

`useApi.ts` sépare :

- les erreurs métiers (`BusinessError`)
- les erreurs techniques (`TechnicalError`)

Les erreurs sont loggées via `useLogger.ts` et affichées avec des popups toast.

### 7. Redirection après inscription

Après inscription réussie, `RegisterForm.vue` surveille `auth.isAuthenticated` et redirige automatiquement l'utilisateur vers `/`.

### 8. Notifications utilisateur

- succès : popup verte avec confirmation de création de compte
- erreur métier : message clair renvoyé par le service
- erreur technique : message générique invitant à réessayer

## Personnalisation backend

Pour connecter ce module à une API réelle :

1. Remplace la simulation dans `useApi.ts` par des appels à ton backend.
2. Conserve la logique d'interception et de distinction des erreurs.
3. Renvoie le token et l'utilisateur côté serveur.
4. Gère les erreurs spécifiques de l'API en les transformant en `BusinessError` ou `TechnicalError`.

## Résumé du flux

1. utilisateur ouvre `/auth/register`
2. saisit les informations d'inscription
3. le formulaire valide chaque champ en direct
4. `auth.register()` est appelé
5. si succès, le compte est enregistré et l'utilisateur est connecté
6. l'utilisateur est redirigé vers la page d'accueil
