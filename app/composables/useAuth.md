# useAuth

## Objectif

`useAuth.ts` fournit l'état d'authentification partagé dans l'application.
Il gère :

- la connexion (`login`)
- l'inscription (`register`)
- la déconnexion (`logout`)
- la restauration de session depuis `localStorage`
- le suivi du token et de l'utilisateur
- la classification des erreurs métier/technique

## Export

- `user` : état utilisateur
- `token` : jeton d'authentification
- `loading` : état de chargement
- `error` : message d'erreur courant
- `errorType` : `business` ou `technical`
- `isAuthenticated` : booléen de session active
- `login(credentials)`
- `register(data)`
- `logout()`
- `restoreSession()`

## Utilisation

```ts
const auth = useAuth()

await auth.login({ email, password })
```

## Notes

- La persistance se fait dans `localStorage`.
- Le module utilise `useApi` pour communiquer avec l'API.
- `errorType` permet de distinguer une erreur de validation métier d'une erreur technique.
