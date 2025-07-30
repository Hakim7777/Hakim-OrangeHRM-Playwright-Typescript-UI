# 🚀 Playwright TypeScript UI Automation – OrangeHRM  
[![Playwright](https://img.shields.io/badge/Playwright-Test-blue)](https://playwright.dev)  
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue)](https://www.typescriptlang.org/)  
[![Node.js](https://img.shields.io/badge/Node.js-v18-green)](https://nodejs.org/)  
[![Jenkins](https://img.shields.io/badge/Jenkins-CI--CD-brightgreen)](#)  
[![GitHub Actions](https://img.shields.io/badge/GitHub--Actions-CI-blue)](#)  
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)  

---

> **Framework d’automatisation UI complet basé sur Playwright & TypeScript, optimisé pour OrangeHRM.**  
> Supporte CI/CD avec GitHub Actions & Jenkins, et inclut une architecture scalable pour des tests E2E robustes.

---

## 📋 Table des matières

- 🔧 [Installation](#installation)
- ▶️ [Exécution des tests](#exécution-des-tests)
- 📂 [Structure du projet](#structure-du-projet)
- ✅ [Fonctionnalités testées](#fonctionnalités-testées)
- 🔄 [CI/CD intégré](#cicd-intégré)
- 🤝 [Contribuer](#contribuer)
- 📄 [Licence](#licence)
- 🔗 [Contact & LinkedIn](#contact--linkedin)

---

## 🔧 Installation

```bash
# Clonez le repo
git clone https://github.com/Hakim7777/Hakim-OrangeHRM-Playwright-Typescript-UI.git
cd Hakim-OrangeHRM-Playwright-Typescript-UI

# Installez les dépendances
npm install

# (Optionnel) Installez les navigateurs Playwright
npx playwright install --with-deps
````

---

## ▶️ Exécution des tests

```bash
# Lancer tous les tests
npx playwright test

# Lancer un test précis
npx playwright test testsApprentissage/LoginTest.spec.ts

# Ouvrir le rapport HTML après exécution
npx playwright show-report
```

---

## 📂 Structure du projet

```
├── src/
│   ├── pagesApprentissage/      # Page Objects (POM)
│   ├── testsApprentissage/      # Cas de test UI
│   ├── utilsApprentissage/      # Utilitaires (logger, data, helpers…)
│   └── dataApprentissage/       # Données de test (JSON, faker…)
├── .github/workflows/           # Workflows GitHub Actions CI
├── playwright-report/           # Rapports HTML générés
├── ScreenShootsApprentissage/   # Screenshots des échecs
├── Jenkinsfile                  # Pipeline Jenkins CI/CD
└── README.md                    # Documentation du projet
```

---

## ✅ Fonctionnalités testées

| Fichier                       | Description                            |
| ----------------------------- | -------------------------------------- |
| `LoginTest.spec.ts`           | Authentification Admin/Utilisateur     |
| `AddEmployeeTest.spec.ts`     | Création d’un nouvel employé           |
| `EditEmployeeTest.spec.ts`    | Modification des infos d’un employé    |
| `DeleteEmployeeTest.spec.ts`  | Suppression d’un employé               |
| `AdvancedSearchTest.spec.ts`  | Recherche avancée sur employés         |
| `ImportTest.spec.ts`          | Importation de fichiers d’employés     |
| `ExportTest.spec.ts`          | Export de la base employés (CSV/XLS)   |
| `NotificationBarTest.spec.ts` | Vérification des notifications système |
| `DataDrivenTest.spec.ts`      | Exemple de test data-driven            |

---

## 🔄 CI/CD intégré

### ✅ GitHub Actions

* Tests auto à chaque **push**/**pull request**
* Génération automatique des rapports HTML
* Config : `.github/workflows/playwright.yml`

### ✅ Jenkins

* Pipeline CI/CD complet (`Jenkinsfile`)
* Étapes principales :

  * Clone du repo
  * `npm ci` + `npx playwright install`
  * Lancement des tests
  * Publication des rapports HTML
  * Archivage screenshots & vidéos

---

## 🤝 Contribuer

1. Forkez ce repo
2. Créez une branche (`git checkout -b feature/ma-feature`)
3. Commitez (`git commit -m "Ajout nouvelle feature"`)
4. Poussez (`git push origin feature/ma-feature`)
5. Créez une **Pull Request**

---

## 📄 Licence

Projet sous licence MIT.
Voir [LICENSE](LICENSE) pour les détails.

---

## 🔗 Contact & LinkedIn

👤 [Abdelhakim SAHRAOUI](https://www.linkedin.com/in/hakim-alaoui-sahraoui-5a397a169/)
📧 [hakim.sahraoui.de@gmail.com](mailto:hakim.sahraoui.de@gmail.com)

---

```
