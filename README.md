# 🐶 CynO'Clock

CynO'Clock est une application web qui présente une galerie de chiots trop mignons 🐾. Ce projet a été développé dans un cadre pédagogique afin de manipuler Node.js, Express et EJS tout en intégrant une maquette HTML/CSS existante.

---

## 🚀 Objectif

Mettre en place une application Node.js avec Express permettant d'afficher dynamiquement :
- Une page d'accueil
- Une liste de chiots
- Une fiche individuelle pour chaque chiot

---

## 🛠️ Technologies utilisées

- Node.js
- Express.js
- EJS (Embedded JavaScript Templates)
- HTML5 / CSS3 (issus du dossier d'intégration)

---

## 📁 Structure du projet

cynoclock/
├── data/
│ └── dogs.js # Données des chiots
├── integration/ # Dossier fourni avec HTML/CSS
├── public/
│ ├── css/
│ └── images/ # Images des chiots + screenshots
├── views/
│ ├── partials/ # Fragments EJS : head, menu, footer
│ ├── home.ejs # Page d'accueil
│ ├── dogs.ejs # Liste des chiots
│ └── dog.ejs # Détail d'un chiot
├── cynoclock.js # Fichier principal du serveur
└── package.json # Dépendances et scripts


---

## 📦 Installation et lancement

1. **Cloner le dépôt**

- ``git clone https://github.com/TonySaes/cynoclock.git``
- ``cd cynoclock``

- Installer les dépendance
- ``npm install``

- Lancer l'application
- ``node cynoclock.js``

L'application sera accessible sur : http://localhost:3000

## 💻 Fonctionnalités

- Navigation via menu fixe

- Liste de chiots générée dynamiquement depuis dogs.js

- Fiche individuelle pour chaque chiot

- Mise en page responsive (HTML/CSS fourni)

- Utilisation de partials EJS (head, menu, footer)


## 🎓 Contexte pédagogique

Ce projet fait partie d’un exercice de formation visant à :

- Comprendre le routing avec Express

- Gérer les vues dynamiques avec EJS

- Structurer un projet avec Node.js

- Réutiliser une maquette HTML existante

