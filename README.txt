# DÉPANN’TECH — dossier complet

## Contenu
- `index.html` : site public
- `style.css` : design complet
- `app.js` : chargement dynamique de `data.json`, boutons de devis et affichage boutique
- `data.json` : toutes les informations modifiables
- `gestion.html` : administration GitHub
- `uploads/` : dossier prévu pour les images envoyées depuis l'administration

## Installation
1. Dans le dépôt GitHub `D-pann-Tech-2`, remplace les fichiers du site par ceux de ce dossier.
2. Conserve la branche `main`.
3. Vérifie que GitHub Pages publie bien la branche `main`.
4. Ouvre `gestion.html`.
5. Entre le token fine-grained uniquement dans la page d'administration.

## Token GitHub
Le token n'est volontairement PAS stocké dans le navigateur par `gestion.html`.
Il doit avoir :
- Repository access : Only select repositories → `D-pann-Tech-2`
- Contents : Read and write
- Metadata : Read-only

Après un rechargement complet de la page d'administration, il faudra le saisir à nouveau. C'est volontaire : cela évite de sauvegarder un secret dans le navigateur.

## Devis
Les boutons « Demander un devis », « Devis gratuit » et « Obtenir un devis » ouvrent une fenêtre modale.
Le formulaire utilise FormSubmit pour l'envoi vers l'adresse configurée dans `data.json`.

IMPORTANT : lors de la première réception, FormSubmit peut demander une confirmation de l'adresse e-mail de réception.

## Sécurité
GitHub Pages est un hébergement statique. Un token GitHub avec droit d'écriture ne doit jamais être placé dans le code public du site. Ici, le token est saisi uniquement dans `gestion.html` et conservé en mémoire pendant la session.

## À personnaliser
Dans `gestion.html`, connecte-toi puis modifie :
- nom
- téléphone
- e-mail
- adresse
- horaires
- carte
- titre et texte d'accueil
- statistiques
- services
- produits
- prix
- stocks
- visibilité
- logo
- photo principale
- photos produits
- textes des pages
