# Au Bon Goût - Site Premium

Site web premium pour le restaurant traiteur "Au Bon Goût" à Lapouyade, Gironde.

## 🎨 Stack Technique

- **Framework**: React 18 + TypeScript
- **Build**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui + Radix UI
- **Routing**: React Router v6
- **Icons**: Lucide React

## 📁 Architecture

```
src/
├── components/
│   ├── ui/              # Composants UI shadcn
│   ├── Header.tsx       # Header sticky avec navigation
│   ├── Footer.tsx       # Footer avec informations
│   ├── AnimatedSection.tsx  # Wrapper pour animations
│   ├── Contact.tsx      # Section contact
│   ├── ContactForm.tsx  # Formulaire de contact
│   └── ...
├── pages/
│   ├── Home.tsx         # Page d'accueil (/)
│   ├── About.tsx        # Qui sommes-nous (/qui-sommes-nous)
│   ├── Services.tsx     # Nos services (/nos-services)
│   ├── Realisations.tsx # Nos réalisations (/nos-realisations)
│   └── Contact.tsx      # Contact (/contact)
├── assets/              # Images et médias
└── index.css            # Design system (couleurs, tokens)
```

## 🎨 Design System

### Couleurs (HSL)
- **Primary**: Ambre doré (32 85% 55%)
- **Secondary**: Beige chaud (28 40% 90%)
- **Accent**: Doré clair (32 80% 88%)
- **Background**: Blanc cassé (28 25% 97%)

### Typographie
- **Titres**: Playfair Display (serif)
- **Texte**: Inter (sans-serif)

### Animations
- Durées: 200-600ms
- Easing: cubic-bezier pour smoothness
- Scroll reveal avec Framer Motion
- Hover effects avec scale & glow

## 🚀 Installation & Développement

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour production
npm run build

# Prévisualiser le build
npm run preview
```

## 📝 Comment Éditer

### Modifier les couleurs
Éditer `src/index.css` - section `:root`

### Modifier les textes
- **Page d'accueil**: `src/pages/Home.tsx`
- **À propos**: `src/pages/About.tsx`
- **Services**: `src/pages/Services.tsx`
- **Contact**: `src/components/Contact.tsx`

### Modifier les coordonnées
Rechercher et remplacer dans tous les fichiers:
- Téléphone: `0557494130`
- Email: `contact@aubongout-33.fr`
- Adresse: `22 B Avenue de Verdun, 33620 Lapouyade`

### Remplacer les images
1. Ajouter vos images dans `src/assets/`
2. Importer dans les composants: `import myImage from "@/assets/mon-image.jpg"`
3. Remplacer les références existantes

## 📊 Performance & SEO

### Optimisations incluses:
- ✅ Lazy loading des images
- ✅ Animations performantes (GPU-accelerated)
- ✅ Bundle splitting automatique
- ✅ Meta tags SEO sur chaque page
- ✅ Schema.org markup (LocalBusiness)
- ✅ Responsive design (mobile-first)
- ✅ Accessibilité (A11Y) - contraste AA

### Objectifs Lighthouse:
- Performance: ≥90
- Accessibility: ≥90
- Best Practices: ≥90
- SEO: ≥90

## 📞 Contact

**Au Bon Goût - Hervé Godinaud**
- 📍 22 B Avenue de Verdun, 33620 Lapouyade
- 📞 05 57 49 41 30
- 📧 contact@aubongout-33.fr
- 🌐 Zone: 200 km autour de Lapouyade

## 🏆 Distinctions

Médaillé Saveurs d'Or 1999 - Concours de produits régionaux Saveurs de Poitou Charentes

---

Développé avec ❤️ pour une expérience utilisateur premium
