# useLogger

## Objectif

`useLogger.ts` fournit un ensemble de fonctions de logging structurées pour l'application.

## Fonctions disponibles

- `info(message, details)`
- `warn(message, details)`
- `error(message, details)`
- `debug(message, details)`

## Utilisation

Ce composable est utilisé pour tracer :

- les interceptions de requêtes API
- les erreurs métier et techniques
- les étapes de validation du formulaire
- les transitions de pages via middleware

```ts
const logger = useLogger()
logger.info('Validation du formulaire', { email, valid: true })
```

## Notes

- Les logs sont actuellement écrits dans la console.
- Tu peux étendre ce module pour envoyer les logs vers un service externe.
