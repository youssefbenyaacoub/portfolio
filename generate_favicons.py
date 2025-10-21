"""
Script pour générer tous les favicons nécessaires
Nécessite: pip install Pillow cairosvg
"""

try:
    from PIL import Image
    import cairosvg
    import io
    import os
    
    def generate_favicons():
        """Génère tous les favicons à partir du logo SVG"""
        
        # Chemin du fichier SVG
        svg_path = "assets/logo.svg"
        output_dir = "assets"
        
        if not os.path.exists(svg_path):
            print(f"❌ Fichier {svg_path} non trouvé!")
            print("Créez d'abord votre logo en SVG.")
            return
        
        print("🎨 Génération des favicons...")
        
        # Tailles à générer
        sizes = {
            "favicon-16x16.png": 16,
            "favicon-32x32.png": 32,
            "apple-touch-icon.png": 180,
            "icon-192x192.png": 192,
            "icon-512x512.png": 512,
            "preview.jpg": 1200  # Pour Open Graph
        }
        
        for filename, size in sizes.items():
            output_path = os.path.join(output_dir, filename)
            
            try:
                # Convertir SVG en PNG avec cairosvg
                png_data = cairosvg.svg2png(
                    url=svg_path,
                    output_width=size if filename != "preview.jpg" else 1200,
                    output_height=size if filename != "preview.jpg" else 630
                )
                
                # Ouvrir avec PIL
                img = Image.open(io.BytesIO(png_data))
                
                # Convertir en JPEG pour preview.jpg
                if filename.endswith('.jpg'):
                    # Créer un fond blanc pour JPEG
                    bg = Image.new('RGB', img.size, (10, 14, 39))  # Couleur de fond du site
                    if img.mode == 'RGBA':
                        bg.paste(img, mask=img.split()[3])
                    else:
                        bg.paste(img)
                    bg.save(output_path, 'JPEG', quality=90)
                else:
                    img.save(output_path, 'PNG')
                
                print(f"✅ {filename} créé ({size}x{size if filename != 'preview.jpg' else 630})")
                
            except Exception as e:
                print(f"❌ Erreur pour {filename}: {e}")
        
        # Créer favicon.ico (multi-tailles)
        try:
            ico_sizes = [16, 32, 48]
            images = []
            
            for size in ico_sizes:
                png_data = cairosvg.svg2png(url=svg_path, output_width=size, output_height=size)
                img = Image.open(io.BytesIO(png_data))
                images.append(img)
            
            ico_path = os.path.join(output_dir, "favicon.ico")
            images[0].save(
                ico_path,
                format='ICO',
                sizes=[(s, s) for s in ico_sizes],
                append_images=images[1:]
            )
            print(f"✅ favicon.ico créé (16x16, 32x32, 48x48)")
            
        except Exception as e:
            print(f"❌ Erreur pour favicon.ico: {e}")
        
        print("\n✨ Génération terminée!")
        print("\n📋 Prochaines étapes:")
        print("1. Vérifiez les fichiers dans le dossier assets/")
        print("2. Ouvrez votre site dans un navigateur")
        print("3. Vérifiez que les favicons s'affichent correctement")
        
    if __name__ == "__main__":
        print("=" * 50)
        print("🎨 Générateur de Favicons")
        print("=" * 50)
        generate_favicons()

except ImportError as e:
    print("❌ Modules manquants!")
    print("\n📦 Installation requise:")
    print("pip install Pillow cairosvg")
    print("\nSous Windows, vous aurez aussi besoin de:")
    print("1. Télécharger GTK+ runtime: https://github.com/tschoonj/GTK-for-Windows-Runtime-Environment-Installer")
    print("2. Ou utilisez un générateur en ligne: https://realfavicongenerator.net/")
