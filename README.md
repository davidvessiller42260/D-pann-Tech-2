# DÉPANN’TECH — GitHub Pages + Administration

Version statique professionnelle compatible GitHub Pages.

## Fichiers
- `index.html` : site public
- `admin.html` : administration
- `data.json` : contenu du site
- `uploads/` : dossier pour les images envoyées par l’administration

## Administration
Ouvrir `admin.html`, renseigner le compte GitHub, le dépôt, la branche `main` et un token fine-grained avec **Contents: Read and write** uniquement sur ce dépôt.

L’administration permet notamment d’envoyer :
- un logo
- une photo principale / bannière
- des photos produits
- les textes, coordonnées, services et produits

Les images sont envoyées dans le dépôt GitHub via l’API GitHub. Le token n’est pas stocké dans le dépôt.

## Important
Pour un site public, ne donnez jamais le token GitHub à quelqu’un.
