# useLoginForm

## Objectif

`useLoginForm.ts` pilote le formulaire de connexion et sa validation côté client.

## Fonctionnalités

- validation en temps réel des champs
- gestion des erreurs de champ
- envoi des données vers `useAuth.login()`
- état de chargement
- affichage des messages de retour utilisateur

## Champs

- `email`
- `password`
- `remember`
- `emailError`
- `passwordError`
- `formError`

## Validation

- `email` doit être un email valide ou un téléphone valide
- `password` ne peut pas être vide

## Flux

1. chaque modification déclenche `validateForm()`
2. `isFormValid` devient `true` lorsque le formulaire est cohérent
3. `handleSubmit()` appelle `auth.login()` si le formulaire est valide
4. les erreurs sont stockées dans `formError`

## Utilisation

```ts
const loginForm = useLoginForm()
await loginForm.handleSubmit()
```
