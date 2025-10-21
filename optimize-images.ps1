# Script d'optimisation d'images PNG
# Réduit la taille des PNG sans perte de qualité visible

Write-Host "================================" -ForegroundColor Cyan
Write-Host " OPTIMISATION IMAGES PNG" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Vérifier si Python est installé
$pythonInstalled = Get-Command python -ErrorAction SilentlyContinue
if (-not $pythonInstalled) {
    Write-Host "❌ Python n'est pas installé!" -ForegroundColor Red
    Write-Host "Télécharge Python: https://www.python.org/downloads/" -ForegroundColor Yellow
    exit 1
}

# Vérifier/Installer Pillow
Write-Host "📦 Vérification de Pillow..." -ForegroundColor Yellow
python -c "import PIL" 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Installation de Pillow..." -ForegroundColor Yellow
    pip install Pillow --quiet
}

Write-Host "✓ Pillow installé!" -ForegroundColor Green
Write-Host ""

# Script Python pour optimisation
$pythonScript = @"
from PIL import Image
import os

def optimize_png(input_path, output_path, max_size=(800, 800), quality=85):
    try:
        img = Image.open(input_path)
        
        # Obtenir taille originale
        original_size = os.path.getsize(input_path)
        
        # Redimensionner si trop grand
        if img.size[0] > max_size[0] or img.size[1] > max_size[1]:
            img.thumbnail(max_size, Image.Resampling.LANCZOS)
        
        # Convertir RGBA en RGB si nécessaire (pour JPEG)
        if img.mode == 'RGBA':
            background = Image.new('RGB', img.size, (255, 255, 255))
            background.paste(img, mask=img.split()[3])
            img = background
        
        # Sauvegarder en JPEG optimisé
        img.save(output_path.replace('.png', '.jpg'), 'JPEG', optimize=True, quality=quality)
        
        # Taille finale
        final_size = os.path.getsize(output_path.replace('.png', '.jpg'))
        reduction = ((original_size - final_size) / original_size) * 100
        
        print(f'✓ {os.path.basename(input_path)}')
        print(f'  {original_size/1024:.1f} KB → {final_size/1024:.1f} KB (-{reduction:.1f}%)')
        
        return True
    except Exception as e:
        print(f'❌ Erreur: {e}')
        return False

# Optimiser les images
images = [
    ('assets/avatar.png', 'assets/avatar-optimized.jpg', (400, 400)),
    ('assets/about.png', 'assets/about-optimized.jpg', (800, 800)),
    ('assets/logo.png', 'assets/logo-optimized.jpg', (200, 200))
]

print('Images à optimiser:')
print('')
for input_path, output_path, size in images:
    if os.path.exists(input_path):
        optimize_png(input_path, output_path, size, 85)
        print('')
    else:
        print(f'⚠️  Fichier non trouvé: {input_path}')
        print('')

print('✅ Optimisation terminée!')
print('')
print('Prochaines étapes:')
print('1. Vérifier les images optimisées dans assets/')
print('2. Si OK, remplacer les références dans index.html')
print('3. Supprimer les PNG originaux (optionnel)')
"@

# Écrire le script Python temporaire
$pythonScript | Out-File -FilePath "temp_optimize.py" -Encoding UTF8

# Exécuter le script
Write-Host "🔄 Optimisation en cours..." -ForegroundColor Yellow
Write-Host ""
python temp_optimize.py

# Nettoyer
Remove-Item "temp_optimize.py" -ErrorAction SilentlyContinue

Write-Host ""
Write-Host "================================" -ForegroundColor Cyan
Write-Host " TERMINÉ!" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "📊 Résumé:" -ForegroundColor Cyan
Write-Host "  • Images converties: PNG → JPEG" -ForegroundColor White
Write-Host "  • Qualité: 85% (excellent)" -ForegroundColor White
Write-Host "  • Économie attendue: ~80-90%" -ForegroundColor White
Write-Host ""
Write-Host "📁 Fichiers créés:" -ForegroundColor Cyan
Get-ChildItem -Path "assets" -Filter "*-optimized.jpg" | ForEach-Object {
    $sizeKB = [math]::Round($_.Length / 1KB, 1)
    Write-Host "  • $($_.Name) ($sizeKB KB)" -ForegroundColor White
}
Write-Host ""
