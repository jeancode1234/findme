# useRegisterForm

## Objectif

`useRegisterForm.ts` pilote l'inscription utilisateur et sa validation côté client.

## Fonctionnalités

- validation des champs d'inscription
- gestion des erreurs techniques et métiers
- appel à `useAuth.register()`
- déclenchement de notifications en cas de succès ou d'échec

## Champs

- `fullName`
- `email`
- `password`
- `confirmPassword`
- `agreeTerms`
- `fullNameError`
- `emailError`
- `passwordError`
- `confirmPasswordError`
- `formError`

## Validation

- `fullName` doit être renseigné
- `email` doit être un email ou un téléphone valide
- `password` doit contenir au moins 8 caractères
- `confirmPassword` doit correspondre à `password`
- `agreeTerms` doit être coché

## Flux

1. `watch()` surveille les changements de champ et relance la validation
2. `validateForm()` met à jour les erreurs de chaque champ
3. si le formulaire est valide, `handleSubmit()` appelle `auth.register()`
4. en cas de succès, une notification s'affiche et la page redirige vers `/`

## Utilisation

```ts
const registerForm = useRegisterForm()
await registerForm.handleSubmit()
```
