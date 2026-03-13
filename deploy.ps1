# deploy.ps1 - Script PowerShell pour build et deploy Angular sur GitHub Pages

# 1. Nettoyage des anciens fichiers
Write-Host '🧹 Nettoyage des anciens fichiers...'
Remove-Item -Recurse -Force "dist" -ErrorAction SilentlyContinue
# Ne supprime pas node_modules à chaque fois pour gagner du temps
Remove-Item -Force "package-lock.json" -ErrorAction SilentlyContinue

# 2. Réinstallation des dépendances si nécessaire
Write-Host '📦 Vérification des dépendances...'
if (-Not (Test-Path "node_modules")) {
    Write-Host '🔄 Installation des dépendances...'
    npm install
} else {
    Write-Host '✅ Les dépendances existent déjà.'
}

# 3. Build Angular pour production
Write-Host '🏗️ Build Angular pour production...'
ng build --configuration production --base-href=/PortFolio-Adel/

# 4. Vérification du dossier dist
if (-Not (Test-Path "dist/portfolio-adel")) {
    Write-Host '❌ Erreur : Le dossier dist/portfolio-adel n''existe pas. Build échoué.'
    exit 1
} else {
    Write-Host '✅ Build réussi. Dossier dist/portfolio-adel présent.'
}

# 5. Déploiement sur GitHub Pages
Write-Host '🚀 Déploiement sur GitHub Pages...'
npx angular-cli-ghpages --dir=dist/portfolio-adel

Write-Host '🎉 Déploiement terminé ! Vérifie ton site sur : https://<TON_UTILISATEUR>.github.io/PortFolio-Adel/'
