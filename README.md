# DÉPANN’TECH — GitHub Pages + Administration

Cette version garde le site vitrine et ajoute une administration compatible avec GitHub Pages.

## Mise en ligne
1. Crée un dépôt GitHub.
2. Mets `index.html`, `admin.html`, `data.json` à la racine.
3. Active **Settings → Pages → Deploy from branch → main / root**.

## Administration
Ouvre `admin.html`. Elle utilise l’API GitHub pour modifier `data.json`.

Pour fonctionner, crée un **Fine-grained Personal Access Token** GitHub limité à ce dépôt, avec la permission **Contents: Read and write**. Le token est demandé dans la page d’administration et n’est pas enregistré dans le dépôt ni dans le localStorage.

L’administration permet de modifier :
- coordonnées, téléphone, e-mail, horaires et carte ;
- titre et texte d’accueil ;
- statistiques ;
- services ;
- produits, prix, stock, visibilité et URL des images ;
- textes de la section atelier.

### Important
GitHub Pages est un hébergement statique. Le formulaire de devis utilise FormSubmit comme dans la version précédente. Configure l’adresse e-mail de réception dans l’administration.

Les changements enregistrés dans `data.json` passent ensuite par GitHub Pages ; selon le déploiement, quelques instants peuvent être nécessaires avant de voir les modifications sur le site public.
