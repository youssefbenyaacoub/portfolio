# 🚀 Guide Git & GitHub - Portfolio Youssef Ben Yaacoub

## ✅ ÉTAPE 1: Repository Local Initialisé!

```bash
✓ git init
✓ git config user.name "Youssef Ben Yaacoub"
✓ git config user.email "youssef.benyaacoub@esen.tn"
✓ git add .
✓ git commit -m "Initial commit"
```

**37 fichiers** ajoutés avec succès! 🎉

---

## 📋 ÉTAPE 2: Créer le Repository sur GitHub

### Option A: Via l'Interface Web (Recommandé)

1. **Aller sur GitHub:**
   - Ouvre https://github.com/new
   - Ou clique sur "+" → "New repository"

2. **Configurer le repository:**
   ```
   Repository name: portfolio
   Description: Portfolio de Youssef Ben Yaacoub - Full Stack Developer & Data Analyst | BIS ESEN | youssefbenyaacoub.dev
   
   ☑ Public
   ☐ Add a README (on en a déjà un)
   ☐ Add .gitignore (on en a déjà un)
   ☐ Choose a license
   ```

3. **Cliquer "Create repository"**

4. **Copier les commandes affichées** (GitHub te les donne)

---

## 📤 ÉTAPE 3: Connecter et Pousser le Code

### Une fois le repository créé sur GitHub:

```powershell
# Ajouter l'origine remote (remplace USERNAME par ton nom d'utilisateur GitHub)
git remote add origin https://github.com/USERNAME/portfolio.git

# Renommer la branche en main (optionnel, GitHub utilise main maintenant)
git branch -M main

# Pousser le code
git push -u origin main
```

### Exemple avec ton username:
```powershell
git remote add origin https://github.com/youssefbenyaacoub/portfolio.git
git branch -M main
git push -u origin main
```

---

## 🔐 ÉTAPE 4: Authentification GitHub

### Si demandé, tu as 2 options:

#### Option A: Personal Access Token (Recommandé)

1. Aller sur: https://github.com/settings/tokens/new
2. Donner un nom: "Portfolio Token"
3. Sélectionner scopes:
   - ☑ repo (tous)
4. Cliquer "Generate token"
5. **COPIER LE TOKEN** (tu ne le reverras plus!)
6. Lors du push, utiliser:
   - Username: `youssefbenyaacoub`
   - Password: `<TON_TOKEN>`

#### Option B: GitHub CLI (Plus simple)

```powershell
# Installer GitHub CLI
winget install --id GitHub.cli

# S'authentifier
gh auth login

# Puis pousser normalement
git push -u origin main
```

---

## 📊 ÉTAPE 5: Activer GitHub Pages

### Pour héberger ton site GRATUITEMENT:

1. Sur GitHub, aller dans ton repository
2. **Settings** → **Pages**
3. Source: **Deploy from a branch**
4. Branch: **main** / **/ (root)**
5. Cliquer **Save**

⏰ Attendre 2-3 minutes...

✅ Ton site sera live sur:
```
https://youssefbenyaacoub.github.io/portfolio/
```

---

## 🔄 ÉTAPE 6: Commandes Git Courantes

### Après modifications futures:

```powershell
# Voir les changements
git status

# Ajouter tous les fichiers modifiés
git add .

# Créer un commit
git commit -m "✨ Description du changement"

# Pousser vers GitHub
git push

# Exemples de messages de commit:
git commit -m "🎨 Amélioration design hero section"
git commit -m "🐛 Correction bug responsive mobile"
git commit -m "📱 Optimisation images SVG"
git commit -m "✨ Ajout section expérience"
git commit -m "📝 Mise à jour CV"
```

### Voir l'historique:
```powershell
git log --oneline --graph --all
```

### Annuler des changements:
```powershell
# Annuler changements non commités
git checkout -- .

# Revenir au commit précédent
git reset --soft HEAD~1
```

---

## 🌐 ÉTAPE 7: Domaine Personnalisé (Optionnel)

### Si tu achètes youssefbenyaacoub.dev:

1. Dans GitHub Pages settings, ajouter **Custom domain**:
   ```
   youssefbenyaacoub.dev
   ```

2. Dans ton registrar (Namecheap/OVH), ajouter DNS:
   ```
   Type: A
   Host: @
   Value: 185.199.108.153
   
   Type: CNAME
   Host: www
   Value: youssefbenyaacoub.github.io
   ```

3. Attendre 24-48h pour propagation DNS ✅

---

## 📋 CHECKLIST COMPLÈTE:

- [x] Git initialisé localement
- [x] Premier commit créé (37 fichiers)
- [x] .gitignore créé
- [ ] Repository GitHub créé
- [ ] Code poussé sur GitHub
- [ ] GitHub Pages activé
- [ ] Site live testé
- [ ] Domaine personnalisé (optionnel)

---

## 🆘 PROBLÈMES COURANTS:

### "Permission denied (publickey)"
**Solution:** Utiliser Personal Access Token au lieu de SSH

### "remote: Repository not found"
**Solution:** Vérifier l'URL du repository
```powershell
git remote -v
git remote set-url origin https://github.com/USERNAME/portfolio.git
```

### "Updates were rejected"
**Solution:** Pull avant push
```powershell
git pull origin main --rebase
git push
```

---

## 🎯 COMMANDES RAPIDES:

```powershell
# Workflow quotidien
git status              # Voir changements
git add .               # Ajouter tout
git commit -m "Message" # Commiter
git push                # Pousser

# Créer une branche
git checkout -b nouvelle-feature
git push -u origin nouvelle-feature

# Merger une branche
git checkout main
git merge nouvelle-feature
git push
```

---

## 📚 RESSOURCES:

- **GitHub:** https://github.com
- **GitHub Pages:** https://pages.github.com
- **Git Documentation:** https://git-scm.com/doc
- **GitHub Student Pack:** https://education.github.com/pack

---

## ✅ PROCHAINES ÉTAPES:

1. **Créer repository GitHub** (5 min)
2. **Pousser le code** (2 min)
3. **Activer GitHub Pages** (2 min)
4. **Tester le site live** (1 min)
5. **Partager sur LinkedIn** 🎉

---

**Status:** ✅ Git initialisé - Prêt pour GitHub!
**Fichiers:** 37 fichiers commités
**Taille:** 12,918 insertions
**Date:** 21 Octobre 2025

🚀 **Ton portfolio est prêt à être partagé au monde!**
