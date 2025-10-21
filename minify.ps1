# Script pour minifier CSS et JS
# Usage: .\minify.ps1

Write-Host "==================================" -ForegroundColor Cyan
Write-Host " MINIFICATION CSS & JS" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# Fonction pour minifier CSS basique
function Minify-CSS {
    param($inputFile, $outputFile)
    
    Write-Host "Minification de $inputFile..." -ForegroundColor Yellow
    
    $content = Get-Content $inputFile -Raw
    
    # Supprime les commentaires CSS
    $content = $content -replace '/\*[\s\S]*?\*/', ''
    
    # Supprime les espaces multiples
    $content = $content -replace '\s+', ' '
    
    # Supprime les espaces autour des symboles
    $content = $content -replace '\s*{\s*', '{'
    $content = $content -replace '\s*}\s*', '}'
    $content = $content -replace '\s*:\s*', ':'
    $content = $content -replace '\s*;\s*', ';'
    $content = $content -replace '\s*,\s*', ','
    
    # Supprime le dernier point-virgule avant }
    $content = $content -replace ';}', '}'
    
    $content | Out-File -FilePath $outputFile -Encoding UTF8 -NoNewline
    
    $originalSize = (Get-Item $inputFile).Length
    $minifiedSize = (Get-Item $outputFile).Length
    $savedPercent = [math]::Round((($originalSize - $minifiedSize) / $originalSize) * 100, 2)
    
    Write-Host "✓ Terminé! Économie: $savedPercent%" -ForegroundColor Green
    Write-Host "  Original: $([math]::Round($originalSize / 1KB, 2)) KB → Minifié: $([math]::Round($minifiedSize / 1KB, 2)) KB" -ForegroundColor Gray
    Write-Host ""
}

# Fonction pour minifier JS basique
function Minify-JS {
    param($inputFile, $outputFile)
    
    Write-Host "Minification de $inputFile..." -ForegroundColor Yellow
    
    $content = Get-Content $inputFile -Raw
    
    # Supprime les commentaires //
    $content = $content -replace '//.*', ''
    
    # Supprime les commentaires /* */
    $content = $content -replace '/\*[\s\S]*?\*/', ''
    
    # Supprime les espaces multiples
    $content = $content -replace '\s+', ' '
    
    # Supprime les espaces autour des opérateurs
    $content = $content -replace '\s*=\s*', '='
    $content = $content -replace '\s*{\s*', '{'
    $content = $content -replace '\s*}\s*', '}'
    $content = $content -replace '\s*\(\s*', '('
    $content = $content -replace '\s*\)\s*', ')'
    $content = $content -replace '\s*,\s*', ','
    $content = $content -replace '\s*;\s*', ';'
    
    $content | Out-File -FilePath $outputFile -Encoding UTF8 -NoNewline
    
    $originalSize = (Get-Item $inputFile).Length
    $minifiedSize = (Get-Item $outputFile).Length
    $savedPercent = [math]::Round((($originalSize - $minifiedSize) / $originalSize) * 100, 2)
    
    Write-Host "✓ Terminé! Économie: $savedPercent%" -ForegroundColor Green
    Write-Host "  Original: $([math]::Round($originalSize / 1KB, 2)) KB → Minifié: $([math]::Round($minifiedSize / 1KB, 2)) KB" -ForegroundColor Gray
    Write-Host ""
}

# Vérifier que les fichiers existent
if (-not (Test-Path "frontend-styles.css")) {
    Write-Host "❌ Erreur: frontend-styles.css introuvable!" -ForegroundColor Red
    exit 1
}

if (-not (Test-Path "frontend-script.js")) {
    Write-Host "❌ Erreur: frontend-script.js introuvable!" -ForegroundColor Red
    exit 1
}

# Minifier CSS
Minify-CSS -inputFile "frontend-styles.css" -outputFile "frontend-styles.min.css"

# Minifier JS
Minify-JS -inputFile "frontend-script.js" -outputFile "frontend-script.min.js"

Write-Host "==================================" -ForegroundColor Cyan
Write-Host " MINIFICATION TERMINÉE!" -ForegroundColor Green
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Fichiers créés:" -ForegroundColor Cyan
Write-Host "  • frontend-styles.min.css" -ForegroundColor White
Write-Host "  • frontend-script.min.js" -ForegroundColor White
Write-Host ""
Write-Host "Pour de meilleurs résultats, utilisez:" -ForegroundColor Yellow
Write-Host "  • CSS: https://cssminifier.com/" -ForegroundColor Gray
Write-Host "  • JS: https://javascript-minifier.com/" -ForegroundColor Gray
Write-Host ""
