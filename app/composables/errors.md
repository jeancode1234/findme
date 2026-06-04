# errors

## Objectif

`errors.ts` définit les classes d'erreur utilisées dans l'application.

## Erreurs disponibles

- `BusinessError`
  - représente une erreur métier
  - utilisée lorsque les données utilisateur sont invalides ou déjà existantes
- `TechnicalError`
  - représente une erreur technique
  - utilisée pour les problèmes réseau ou les endpoints introuvables

## Utilisation

`useApi.ts` lève ces erreurs pour permettre une classification claire dans `useAuth.ts`.

```ts
throw new BusinessError('Cette adresse email est déjà utilisée.')
```

## Notes

L'objectif est de séparer la logique métier des problèmes techniques pour une meilleure UX et un meilleur logging.
