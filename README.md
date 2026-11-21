# Lab 10 – Bottom Tabs (Login / Welcome)

Une petite application React Native (Expo) avec deux écrans qu'on change grâce à une barre d'onglets en bas :

- **Login** : un formulaire avec email, mot de passe et un bouton « Log in ».
- **Welcome** : un écran d'accueil avec un petit message de bienvenue.

Pas de vraie connexion ici : le but du lab est surtout d'apprendre la **navigation par onglets** (Bottom Tab Navigation).

## Ce qu'il y a dans le projet

| Fichier | Rôle |
|---|---|
| `App.js` | Met en place la navigation et les deux onglets |
| `LoginScreen.js` | L'écran de connexion |
| `WelcomeScreen.js` | L'écran de bienvenue |

## Ce qu'il faut avant de commencer

- [Node.js](https://nodejs.org) installé sur l'ordinateur
- L'application **Expo Go** sur le téléphone
- Le PC et le téléphone sur le **même Wi-Fi**

## Comment lancer le projet

**1. Créer un projet Expo vide** (dans un nouveau dossier) :

```bash
npx create-expo-app@latest MyTabsApp --template blank
cd MyTabsApp
```

**2. Copier les 3 fichiers** (`App.js`, `LoginScreen.js`, `WelcomeScreen.js`) dans `MyTabsApp`, et remplacer l'ancien `App.js`.

**3. Installer la navigation :**

```bash
npx expo install @react-navigation/native @react-navigation/bottom-tabs react-native-screens react-native-safe-area-context
```

**4. Démarrer l'application :**

```bash
npx expo start -c
```

**5. Scanner le QR code** avec Expo Go. Et voilà !

## Ce qu'on doit voir

- Un en-tête orange avec le titre de l'écran (`Login` ou `Welcome`)
- Un fond gris foncé
- Deux onglets en bas pour passer d'un écran à l'autre

<p>
  <img src="screenshots/1.jpeg" alt="Écran Login" width="280">
  &nbsp;&nbsp;&nbsp;
  <img src="screenshots/2.jpeg" alt="Écran Welcome" width="280">
</p>

<p><em>À gauche : l'écran Login. À droite : l'écran Welcome.</em></p>

