# Système de Gestion des IDs Utilisateur

## Vue d'ensemble

Le système d'authentification a été amélioré pour inclure un système d'ID utilisateur unique afin de:
- **Empêcher les doublons**: Chaque utilisateur ne peut avoir qu'un seul compte
- **Vérifier l'existence de l'ID**: Avant de valider une connexion, on s'assure que l'ID existe

## Architecture

### Base de données d'utilisateurs simulée (`useApi.ts`)

Une base de données locale stocke les utilisateurs avec la structure suivante:

```typescript
type StoredUser = {
  id: string;              // ID unique (ex: user-1717000000000)
  name: string;            // Nom complet
  email: string;           // Email unique
  password: string;        // Mot de passe (à hasher en production)
};
```

### Fonctions d'accès

#### `getUserByEmail(email: string)`
- Recherche un utilisateur par email (case-insensitive)
- Retourne l'utilisateur ou `undefined`
- Utilisée pour vérifier les doublons et authentifier

#### `getUserById(id: string)`
- Recherche un utilisateur par ID
- Retourne l'utilisateur ou `undefined`
- Utilisée pour valider l'existence de l'ID

#### `createUser(name, email, password)`
- Crée un nouvel utilisateur avec un ID unique
- Format de l'ID: `user-${Date.now()}` (ex: user-1717000000000)
- Ajoute l'utilisateur à la base de données
- Retourne l'utilisateur créé

## Flux d'Inscription

1. L'utilisateur remplit le formulaire avec nom, email et mot de passe
2. Validation côté client (format, longueur, etc.)
3. À la soumission, `auth.register()` est appelé
4. `useApi` effectue les vérifications:
   - ✅ Tous les champs sont requis
   - ✅ **NOUVEAU**: L'email n'existe pas déjà (empêche les doublons)
5. Si validation réussie:
   - Un nouvel utilisateur est créé avec un ID unique
   - L'utilisateur est connecté automatiquement
6. Si l'email existe déjà:
   - Message d'erreur: "Cet email est déjà associé à un compte"
   - Suggestion: utiliser un autre email ou se connecter

## Flux de Connexion

1. L'utilisateur entre son email et mot de passe
2. Validation côté client
3. À la soumission, `auth.login()` est appelé
4. `useApi` effectue les vérifications:
   - ✅ Email et mot de passe requis
   - ✅ **NOUVEAU**: L'utilisateur existe (recherche par email)
   - ✅ **NOUVEAU**: Le mot de passe est correct
   - ✅ **NOUVEAU**: L'ID utilisateur existe (vérification d'intégrité)
5. Si tout est valide:
   - L'utilisateur est connecté avec son ID existant
6. Si l'email n'existe pas ou le mot de passe est incorrect:
   - Message d'erreur générique: "Email ou mot de passe incorrect"

## Exemple d'utilisateurs initiaux

```typescript
const users: StoredUser[] = [
  {
    id: "user-001",
    name: "Utilisateur Test",
    email: "test@example.com",
    password: "password123",
  },
];
```

Vous pouvez tester la connexion avec:
- Email: `test@example.com`
- Mot de passe: `password123`

## Migration vers Production

Pour connecter à un backend réel:

1. **Backend doit fournir les données**:
   - Endpoint `/auth/login`: prend email/password, retourne {id, name, email, token}
   - Endpoint `/auth/register`: prend name/email/password, retourne {id, name, email, token}

2. **Gestion des IDs**:
   - Les IDs doivent être générés par le backend (UUID, MongoDB ObjectId, etc.)
   - Chaque utilisateur a exactement un ID unique
   - L'ID ne change jamais

3. **Vérifications à implémenter côté backend**:
   - À l'inscription: vérifier que l'email n'existe pas
   - Au login: vérifier que l'utilisateur existe et le mot de passe est correct
   - Dans tous les cas: vérifier que l'ID de l'utilisateur est valide

4. **Sécurité**:
   - Hasher les mots de passe (bcrypt, argon2, etc.)
   - Ne jamais stocker les mots de passe en clair
   - Utiliser des tokens JWT sécurisés
   - Valider l'ID utilisateur à chaque requête authentifiée

## Messages d'erreur

### Inscription
- **"Cet email est déjà associé à un compte. Veuillez vous connecter ou utiliser un autre email."**
  - L'email existe déjà → doublon détecté

### Connexion
- **"Email ou mot de passe incorrect. Vérifiez vos identifiants."**
  - L'utilisateur n'existe pas OU le mot de passe est incorrect

- **"Erreur: l'ID utilisateur n'existe pas. Veuillez contacter le support."**
  - L'utilisateur existe mais n'a pas d'ID valide (erreur de base de données)

## Fichiers modifiés

- `app/composables/useApi.ts`: Ajout du système d'ID et des vérifications
