# Au Bon Goût - Site Web Traiteur

Site web premium pour Au Bon Goût, traiteur événementiel à Lapouyade.

## 📋 Structure du site

### Pages principales
- **Accueil** (`/`) - Carrousel hero + présentation services
- **Qui sommes-nous ?** (`/qui-sommes-nous`) - Présentation de l'entreprise
- **Nos services** (`/nos-services`) - Liste des prestations avec cartes cliquables
- **Nos réalisations** (`/nos-realisations`) - Galerie photo masonry avec lightbox
- **Contact** (`/contact`) - Formulaire de contact

### Pages services (sous `/nos-services/`)
- Nos spécialités (`/nos-services/nos-specialites`)
- Votre mariage (`/nos-services/votre-mariage`)
- Vos cocktails (`/nos-services/vos-cocktails`)
- Réception associative (`/nos-services/reception-associative`)
- Plateaux repas (`/nos-services/plateaux-repas`)
- Cocktail apéritif (`/nos-services/cocktail-aperitif`)
- Cocktail déjeunatoire ou dînatoire (`/nos-services/cocktail-dejeunatoire-ou-dinatoire`)
- Buffet froid & lendemain de mariage (`/nos-services/buffet-froid-et-lendemain-de-mariage`)
- Livraison / portage de repas à domicile (`/nos-services/livraison-de-repas-a-domicile`)

## 📝 Modifier les contenus

### Textes et informations
Les principaux contenus se trouvent dans :
- **Header** : `src/components/Header.tsx` - Menu navigation + téléphones
- **Footer** : `src/components/Footer.tsx` - Coordonnées, horaires, liens
- **Pages services** : `src/pages/services/*.tsx` - Textes de chaque prestation
- **Page d'accueil** : `src/pages/Home.tsx` - Services en grille
- **Carrousel** : `src/components/HeroCarousel.tsx` - Slides hero

### Coordonnées
**Adresse** : 22 B AVENUE DE VERDUN, 33620 LAPOUYADE  
**Téléphones** : 05 57 49 41 30 • 06 82 38 02 04  
**Fax** : 05 57 69 08 29

À modifier dans :
- `src/components/Header.tsx` (icône téléphone + popover)
- `src/components/Footer.tsx` (bloc coordonnées)
- `src/components/StickyCallButton.tsx` (bouton flottant mobile)
- `src/components/HeroCarousel.tsx` (bouton "Nous appeler")

### Horaires
À modifier dans `src/components/Footer.tsx`, section horaires d'ouverture.

## 🖼️ Gestion des images

### Dossier galerie
**Emplacement** : `src/assets/gallery/`

**Convention de nommage** : `aubon-gout-<categorie>-lapouyade-<numero>.jpg`
- **Catégories** : buffet, cocktail, reception, plats, mariage
- **Numéros** : 01, 02, 03...

**Exemples** :
- `aubon-gout-buffet-lapouyade-01.jpg`
- `aubon-gout-cocktail-lapouyade-02.jpg`
- `aubon-gout-reception-lapouyade-01.jpg`

### Images actuellement importées (11 photos)
1. `aubon-gout-buffet-lapouyade-01.jpg` → Buffet traiteur
2. `aubon-gout-buffet-lapouyade-02.jpg` → Buffet gastronomique
3. `aubon-gout-buffet-lapouyade-03.jpg` → Buffet réception
4. `aubon-gout-buffet-lapouyade-04.jpg` → Buffet froid
5. `aubon-gout-buffet-lapouyade-05.jpg` → Buffet événement
6. `aubon-gout-buffet-lapouyade-06.jpg` → Buffet mariage
7. `aubon-gout-cocktail-lapouyade-01.jpg` → Cocktail dînatoire
8. `aubon-gout-cocktail-lapouyade-02.jpg` → Cocktail apéritif
9. `aubon-gout-reception-lapouyade-01.jpg` → Réception traiteur
10. `aubon-gout-plats-lapouyade-01.jpg` → Plats traiteur
11. `aubon-gout-plats-lapouyade-02.jpg` → Cuisine française

### Carrousel page d'accueil (4 images en rotation auto 4s)
Images utilisées : 
- Slide 1 : `aubon-gout-buffet-lapouyade-01.jpg`
- Slide 2 : `aubon-gout-cocktail-lapouyade-01.jpg`
- Slide 3 : `aubon-gout-buffet-lapouyade-03.jpg`
- Slide 4 : `aubon-gout-reception-lapouyade-01.jpg`

**À modifier dans** : `src/components/HeroCarousel.tsx` (lignes 9-12 pour les imports)

**Fonctionnalités** :
- Auto-rotation toutes les 4 secondes
- Pause au survol
- Flèches navigation gauche/droite
- Puces indicateurs cliquables
- Swipe mobile
- 2 CTA visibles : "Demander un devis" + "Nous appeler"

### Page Nos réalisations
Toutes les 11 images de `src/assets/gallery/` sont affichées avec :
- **Layout masonry** responsive (colonnes : 1 mobile / 2 tablet / 3 desktop)
- **Lightbox** au clic (zoom, navigation flèches/swipe, ESC pour fermer)
- **Filtres par catégorie** : Tous, Buffets (6), Cocktails (2), Réceptions (3)
- **Hover effects** : scale 1.04, élévation shadow, overlay gradient
- **Lazy-load** : images chargées progressivement

**À modifier dans** : `src/pages/Realisations.tsx`

### Images par sous-page service
Chaque page service contient :
- Hero image plein largeur (21:9 ou 16:9)
- Galerie 3-6 photos avec lightbox
- Alt text descriptif pour SEO

**À modifier dans** : `src/pages/services/*.tsx`

### Optimisations images
- **Formats** : WebP/AVIF préférés (fallback JPG)
- **Compression** : "visually lossless"
- **Responsive** : srcset 400/800/1200/1800px
- **Lazy-load** : attribut `loading="lazy"`
- **EXIF** : métadonnées nettoyées
- **Alt text** : descriptif court (ex: "Cocktail dînatoire – Au Bon Goût Lapouyade")

## 🎨 Design & Style

### Palette couleurs (HSL)
- **Primary** (doré/ambre) : `hsl(32 85% 55%)`
- **Secondary** (beige chaud) : `hsl(28 40% 90%)`
- **Accent** (doré clair) : `hsl(32 80% 88%)`
- **Background** (blanc cassé) : `hsl(28 25% 97%)`

**Définie dans** : `src/index.css` (variables CSS custom properties)

### Typographie
- **Titres** : Playfair Display (serif élégant)
- **Texte** : Inter (sans-serif moderne, lisibilité optimale)
- **Interlignage** : 1.6–1.7 (espacement confortable)
- **Tracking** : +0.2–0.4px sur les extraits

### Composants UI
- **Cartes services** : 
  - Rayon 24-28px (coins très arrondis)
  - Ombre douce : `0 10px 30px rgba(0,0,0,0.08)`
  - Hover : `0 16px 40px rgba(0,0,0,0.12)` + translation Y -2px
  - Image 16:9 cover avec rayon synchronisé
  - Badge titre pastille crème/doré (border-radius 9999px)
  
- **Boutons** :
  - Primary : fond doré, texte blanc
  - Outline : bordure 2px white, fond semi-transparent
  - Hover : transitions 300ms smooth

### Animations
- **Scroll-reveal** : stagger 60-80ms, easing ease-out 240-320ms
- **Hover effects** : 
  - Scale 1.04 sur images
  - Brightness +2% sur images
  - Élévation shadow douce
  - Lueur dorée (drop-shadow)
- **Transitions** : 200-450ms, cubic-bezier pour smoothness
- **Parallax** : léger sur bannières hero

## 🚀 Commandes de développement

```bash
# Installation des dépendances
npm install

# Lancement du serveur de développement (port 8080)
npm run dev

# Build de production optimisé
npm run build

# Prévisualisation du build
npm run preview
```

## 📱 Fonctionnalités

### SEO
- ✅ H1 unique par page (≤60 caractères)
- ✅ Meta descriptions optimisées (140-160 caractères)
- ✅ Alt text descriptif sur toutes les images
- ✅ URLs propres et crawlables (slugs en français)
- ✅ Schema.org LocalBusiness (adresse, téléphones, horaires)
- ✅ Breadcrumbs visibles sur sous-pages
- ✅ Semantic HTML (`<header>`, `<main>`, `<section>`, `<article>`)

### Accessibilité
- ✅ Contraste AA (WCAG 2.1)
- ✅ Focus visible sur tous les éléments interactifs
- ✅ Aria-labels sur icônes et boutons
- ✅ Navigation clavier complète
- ✅ Skip links (si besoin)

### Performance
- ✅ Images lazy-load (sauf above-the-fold)
- ✅ Optimisation WebP/AVIF
- ✅ Animations GPU-accelerated (transform, opacity)
- ✅ Responsive images (srcset)
- ✅ Bundle splitting automatique (Vite)
- ✅ LCP < 2.2s, CLS ≈ 0

**Objectifs Lighthouse** :
- Performance : ≥90
- Accessibility : ≥90
- Best Practices : ≥90
- SEO : ≥90

### UX/UI
- ✅ Header sticky avec glass effect (backdrop-blur)
- ✅ Carrousel auto 4s avec pause au survol
- ✅ Lightbox avec swipe mobile + navigation flèches
- ✅ Bouton téléphone flottant mobile (bas-droite, 56px)
- ✅ Micro-interactions sur tous les éléments cliquables
- ✅ Loading states et transitions fluides
- ✅ Responsive design mobile-first

## 📞 Intégration téléphone (clic-to-call)

Le clic sur les boutons téléphone déclenche automatiquement l'appel :
- **Header desktop** : icône téléphone → popover avec 2 numéros cliquables
- **Header mobile** : numéros dans le menu déroulant
- **Carrousel hero** : bouton "Nous appeler" blanc semi-transparent
- **Bouton flottant mobile** : bas-droite, 56px, sticky

**Numéros** :
- Principal : 05 57 49 41 30 (`tel:0557494130`)
- Mobile : 06 82 38 02 04 (`tel:0682380204`)

## 🌍 Zone d'intervention

Jusqu'à ~200 km autour de Lapouyade :
- Bordeaux (50 km)
- Libourne (45 km)
- Pessac (55 km)
- Mérignac (60 km)
- Bassin d'Arcachon (85 km)
- Et toute la Gironde + départements limitrophes

## 🏆 Distinctions

**Médaillé Saveurs d'Or 1999**  
Concours de produits régionaux - Saveurs de Poitou Charentes

## 📄 Technologies

- **Framework** : React 18 + TypeScript
- **Build** : Vite (ultra-rapide)
- **Routing** : React Router DOM v6
- **Styling** : Tailwind CSS + CSS custom properties
- **Animations** : Framer Motion (60fps)
- **Carrousel** : Embla Carousel + Autoplay
- **Icons** : Lucide React
- **UI Components** : Shadcn/ui (Radix UI primitives)
- **Forms** : React Hook Form + Zod validation
- **Lightbox** : Yet Another React Lightbox

---

**Au Bon Goût - Hervé Godinaud**  
Le goût de la tradition, servi avec élégance

📍 22 B Avenue de Verdun, 33620 Lapouyade  
📞 05 57 49 41 30 • 06 82 38 02 04  
📠 Fax : 05 57 69 08 29

🌐 Site développé avec ❤️ par Lovable
