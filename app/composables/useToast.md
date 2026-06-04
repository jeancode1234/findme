# useToast

## Objectif

`useToast.ts` gère les notifications popup affichées à l'utilisateur.

## Structure

- `toasts` : tableau des messages affichés
- `success(message, title)` : notification de succès
- `error(message, title)` : notification d'erreur
- `info(message, title)` : notification d'information
- `removeToast(id)` : ferme une notification

## Composant lié

Le composant `app/components/NotificationToast.vue` utilise `useToast()` pour afficher les toasts.

## Utilisation

```ts
const toast = useToast()
toast.success('Inscription réussie')
```

## Notes

- Les notifications se ferment automatiquement après 4,5 secondes.
- Ce composable permet de séparer la logique d'affichage des messages du composant lui-même.
