# Instructions pour créer les favicons et icônes

## Étape 1: Créer votre logo
Créez un logo simple avec vos initiales "Y" ou "YB" (Youssef BIS) dans un éditeur d'image.

## Étape 2: Générer les favicons
Utilisez un générateur de favicon en ligne gratuit:
- **Recommandé**: https://realfavicongenerator.net/
- Alternative: https://favicon.io/

## Tailles nécessaires:
1. **favicon.ico** - 16x16, 32x32, 48x48 (format ICO)
2. **favicon-16x16.png** - 16x16 pixels
3. **favicon-32x32.png** - 32x32 pixels
4. **apple-touch-icon.png** - 180x180 pixels
5. **icon-192x192.png** - 192x192 pixels (pour Android)
6. **icon-512x512.png** - 512x512 pixels (pour Android)
7. **preview.jpg** - 1200x630 pixels (pour partage social)

## Étape 3: Placer les fichiers
Placez tous les fichiers générés dans le dossier `assets/`

## Idées de design pour votre logo:
- **Option 1**: Initiales "Y" stylisées avec un gradient bleu (#007bff)
- **Option 2**: "YB" (Youssef BIS) avec un symbole de code </>
- **Option 3**: Un icône minimaliste représentant code + data analytics
- **Couleurs**: Utilisez le thème de votre site (bleu #007bff, fond sombre #0a0e27)

## Alternative rapide:
Si vous n'avez pas de logo, vous pouvez utiliser temporairement:
- Emoji 👨‍💻 ou 💼
- Ou créer un simple carré avec vos initiales

## Outils de création gratuits:
1. **Canva** - https://www.canva.com/ (facile, templates gratuits)
2. **Figma** - https://www.figma.com/ (professionnel, gratuit)
3. **GIMP** - https://www.gimp.org/ (logiciel gratuit comme Photoshop)
4. **Photopea** - https://www.photopea.com/ (Photoshop en ligne gratuit)

## Template SVG simple (copier dans un fichier .svg):
```svg
<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#007bff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0056b3;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Fond -->
  <rect width="512" height="512" rx="80" fill="#0a0e27"/>
  
  <!-- Cercle gradient -->
  <circle cx="256" cy="256" r="200" fill="url(#grad1)" opacity="0.2"/>
  
  <!-- Lettre Y -->
  <text x="256" y="330" font-family="Inter, Arial" font-size="280" font-weight="bold" 
        fill="url(#grad1)" text-anchor="middle">Y</text>
  
  <!-- Badge BIS -->
  <rect x="170" y="390" width="172" height="50" rx="25" fill="url(#grad1)"/>
  <text x="256" y="423" font-family="Inter, Arial" font-size="28" font-weight="600" 
        fill="#ffffff" text-anchor="middle">BIS</text>
</svg>
```

Enregistrez ce fichier comme `logo.svg`, puis utilisez un convertisseur en ligne pour créer les PNG.
