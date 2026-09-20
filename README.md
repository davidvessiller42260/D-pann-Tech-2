# DÉPANN’TECH — version GitHub Pages

Cette version garde l'apparence et les fonctionnalités publiques du site, mais elle est adaptée à un hébergement statique comme **GitHub Pages**.

## Mise en ligne sur GitHub

1. Créez un nouveau dépôt GitHub.
2. Envoyez **tous les fichiers de ce dossier** à la racine du dépôt.
3. Ouvrez **Settings → Pages**.
4. Dans **Build and deployment**, choisissez **Deploy from a branch**.
5. Sélectionnez la branche `main` et le dossier `/ (root)`.
6. Enregistrez. GitHub Pages publiera automatiquement le site.

## Configurer l'e-mail des devis

Ouvrez `config.js` et remplacez :

```js
email: ""
```

par votre adresse, par exemple :

```js
email: "votre-adresse@email.com"
```

Le formulaire utilise **FormSubmit** pour envoyer les demandes de devis. Lors du premier envoi, FormSubmit peut demander de confirmer l'adresse e-mail.

## Important

GitHub Pages n'exécute pas PHP. La version GitHub est donc statique : le site public, les fenêtres de devis/appel, la carte et l'envoi de devis fonctionnent côté navigateur.

L'ancien espace **Administration** qui modifiait `data.json` directement sur le serveur n'est pas inclus dans cette version, car GitHub Pages ne permet pas à PHP d'écrire des fichiers. Les textes et coordonnées affichés dans cette version sont ceux de la V12 fournie.

Pour modifier le contenu du site, il suffit d'éditer `index.html` et `config.js`, puis de pousser les changements sur GitHub.

## Structure

- `index.html` — site complet
- `config.js` — adresse e-mail utilisée par le formulaire
- `uploads/` — dossier prévu pour les images
- `.nojekyll` — permet à GitHub Pages de servir les fichiers tels quels
