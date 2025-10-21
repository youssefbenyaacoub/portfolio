# Script pour convertir le favicon SVG en PNG de différentes tailles
# Nécessite Inkscape ou ImageMagick

$svgPath = "assets/favicon.svg"
$outputDir = "assets"

# Vérifier si Inkscape est installé
$inkscapePath = "C:\Program Files\Inkscape\bin\inkscape.exe"

if (Test-Path $inkscapePath) {
    Write-Host "✅ Inkscape trouvé, conversion en cours..."
    
    # Générer favicon.ico (16x16, 32x32, 48x48 combinés)
    & $inkscapePath --export-type="png" --export-filename="$outputDir/favicon-16.png" --export-width=16 --export-height=16 $svgPath
    & $inkscapePath --export-type="png" --export-filename="$outputDir/favicon-32.png" --export-width=32 --export-height=32 $svgPath
    & $inkscapePath --export-type="png" --export-filename="$outputDir/favicon-48.png" --export-width=48 --export-height=48 $svgPath
    & $inkscapePath --export-type="png" --export-filename="$outputDir/apple-touch-icon.png" --export-width=180 --export-height=180 $svgPath
    & $inkscapePath --export-type="png" --export-filename="$outputDir/favicon-512.png" --export-width=512 --export-height=512 $svgPath
    
    Write-Host "✅ Conversion terminée!"
} else {
    Write-Host "❌ Inkscape non trouvé."
    Write-Host "📥 Téléchargez Inkscape: https://inkscape.org/release/"
    Write-Host ""
    Write-Host "Alternative: Utilisez un convertisseur en ligne:"
    Write-Host "🌐 https://cloudconvert.com/svg-to-png"
    Write-Host "🌐 https://convertio.co/fr/svg-png/"
}
