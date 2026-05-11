# Process Création de Site Client — TC Estran / Webstudio

---

## PARTIE 1 — CRÉATION DU SITE

---

### ÉTAPE 1 — Brief initial (appel ou RDV)

Informations à récupérer avant de commencer quoi que ce soit :

- Nom complet du client et nom commercial
- Activité exacte et zone géographique (ville, département)
- Numéro de téléphone et email professionnel
- Réseaux sociaux existants
- Photos disponibles (demander par WeTransfer ou Drive)
- Couleurs ou charte graphique existante (logo si dispo)
- Pages souhaitées (accueil, services, galerie, contact...)
- Délai souhaité

---

### ÉTAPE 2 — Choix du nom de domaine

**Avant le call, préparer 3-4 suggestions déjà vérifiées disponibles :**

Règles de sélection :
- Court et mémorisable
- Contient l'activité et/ou le nom + ville si possible
- Toujours prendre le `.fr` pour un artisan local
- Éviter les tirets en trop

Exemples :
- `martin-plomberie.fr`
- `plomberie-martin-caen.fr`
- `coiffure-dupont.fr`

Vérifier la disponibilité sur **ovh.com** avant de proposer.

**Achat du domaine :**
- C'est toi qui achètes sur ton compte OVH
- Tu factures au client via ta propre facture (ex: 25-30€/an)
- Le client ne voit pas le prix OVH — c'est ta marge de gestion
- Le domaine reste sous ton compte pendant la durée de la prestation

---

### ÉTAPE 3 — Mise en ligne rapide (Jour 1)

Objectif : faire indexer le site par Google le plus tôt possible, même si le site n'est pas terminé.

- [ ] Créer le repo GitHub (public)
- [ ] Créer une page `index.html` minimale contenant :
  - Nom du professionnel
  - Activité
  - Ville
  - Numéro de téléphone
  - Les bons mots-clés dans le texte (ex: "Plombier à Caen, Calvados")
- [ ] Configurer les DNS sur OVH (pointer le domaine vers GitHub Pages)
- [ ] Activer GitHub Pages sur le repo
- [ ] Créer un compte **Google Search Console** pour le domaine
- [ ] Soumettre le sitemap (`nomdusite.fr/sitemap.xml`)
- [ ] Demander l'indexation des pages disponibles

> L'indexation prend 2 à 6 semaines sur un nouveau domaine. En commençant dès le Jour 1, Google a le temps de travailler pendant que tu développes le site.

---

### ÉTAPE 4 — Développement du site

- [ ] Site complet, responsive (mobile en priorité)
- [ ] Pages définies avec le client lors du brief
- [ ] Photos intégrées (client ou Pexels si besoin)
- [ ] Formulaire de contact connecté à **Web3Forms** :
  - Demander au client de créer un compte sur web3forms.com
  - Il génère sa clé API et te l'envoie
  - Tu l'intègres dans le `<form>`
  - Les soumissions arrivent directement dans sa boîte mail
- [ ] SEO de base sur chaque page :
  - `<title>` unique et descriptif
  - `<meta name="description">` bien rédigée
  - Un seul `<h1>` par page avec les mots-clés
  - Balises `alt` sur toutes les images
- [ ] Sitemap.xml mis à jour avec toutes les pages

---

### ÉTAPE 5 — Livraison

- [ ] Vérification complète sur mobile et desktop
- [ ] Vérification de tous les liens et formulaires
- [ ] Demander la ré-indexation des pages finales sur Search Console
- [ ] Expliquer au client :
  - Le référencement prend 2 à 4 semaines minimum
  - Partager le lien sur ses réseaux accélère l'indexation
  - Créer une fiche **Google Business Profile** est fortement conseillé
- [ ] Livrer un accès en lecture seule au repo GitHub si souhaité

---

### RÉCAPITULATIF TIMING IDÉAL

| Jour | Action |
|------|--------|
| J1 | Brief + choix domaine + achat + page provisoire en ligne + Search Console |
| J2-J6 | Développement complet du site |
| J7 | Livraison + ré-indexation |

---

---

## PARTIE 2 — CESSATION DE PRESTATION

---

Cette partie s'applique en cas de fin de contrat, qu'elle soit à l'initiative du client ou de TC Estran.

---

### Conditions préalables

Aucun transfert n'est effectué tant qu'une facture est en attente de règlement.

---

### Ce qui est transféré au client

**1. Le nom de domaine**
- Procédure de transfert OVH vers le compte OVH du client
- Délai : 24 à 48h après demande
- Tu génères un code de transfert depuis ton espace OVH
- Le client le rentre dans son propre compte OVH
- Coût éventuel selon registrar : à la charge du client

**2. Les fichiers du site**
- Livraison des fichiers sources complets (zip ou accès GitHub)
- Le client peut héberger le site où il le souhaite ensuite
- Format : HTML/CSS/JS prêts à l'emploi, sans dépendance

**3. Les formulaires**
- Le client crée son propre compte Web3Forms avec son email
- Tu changes la clé API dans les fichiers sources avant livraison
- Les anciennes soumissions ne sont pas transférables

**4. Google Search Console**
- Tu ajoutes le client en tant que propriétaire principal
- Tu te retires ensuite de l'accès
- L'historique d'indexation reste intact pour le client

**5. Google Business Profile**
- Si tu l'as créé, tu transfères la gestion au compte Google du client
- Délai : immédiat

---

### Ce qui ne suit pas le client

- Ton compte OVH et tes accès personnels
- Les templates ou outils de développement utilisés
- Les photos issues de Pexels (licence libre, le client peut les réutiliser librement)

---

### Délai de cessation

Tout le processus de transfert est effectué dans un délai de **5 jours ouvrés** après règlement complet des factures en attente.

---

### Clause recommandée à intégrer dans tes contrats

> *"En cas de fin de prestation, TC Estran s'engage à transférer l'ensemble des éléments liés au site (domaine, fichiers sources, accès Search Console) dans un délai de 5 jours ouvrés suivant le règlement de toute facture en attente. Le client reste propriétaire de son contenu et de son nom de domaine à l'issue de la prestation."*

---

*Document interne TC Estran — Webstudio*
