# useApi

## Objectif

`useApi.ts` centralise les appels HTTP et les interceptions de requête/réponse.
Il permet de :

- ajouter des headers globaux
- tracer les requêtes sortantes
- gérer les réponses API
- transformer les erreurs métier en `BusinessError`
- transformer les erreurs techniques en `TechnicalError`
- afficher des notifications toast en cas d'échec

## Comportement

- `interceptRequest(url, options)` enrichit les headers et logge la requête.
- `interceptResponse(response, url)` lit la réponse et lève une erreur si nécessaire.
- `handleError(error)` envoie un toast et conserve le bon type d'erreur.
- `fakeAuthRequest(url, options)` simule le backend pour les routes d'authentification.

## Méthodes exportées

- `request(url, options)`
- `post(url, body)`

## Utilisation

```ts
const api = useApi()
const result = await api.post('/auth/register', { name, email, password })
```

## Notes

- Le module est actuellement configuré pour les endpoints internes `/auth/login` et `/auth/register`.
- Remplace la simulation par de vrais appels réseau pour une production réelle.
