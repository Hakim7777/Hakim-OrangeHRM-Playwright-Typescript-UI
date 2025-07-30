# 🎯 Requirements – Projet d’Orangehrm Playwright (OrangeHRM)

## 🧪 Objectif principal
Apprendre l’automatisation de tests UI avec Playwright TypeScript en utilisant le site [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com/) comme environnement d'entraînement.

Projet strictement **éducatif** et **expérimental**, séparé du framework principal GitHub.

---

## 🌐 Site web cible

**Nom du site** : OrangeHRM Demo  
**URL** : https://opensource-demo.orangehrmlive.com/  
**Type** : Application de gestion des ressources humaines (HRM) de démonstration  
**Fonctionnalités disponibles pour les tests** :
- Connexion / Déconnexion
- Navigation dashboard (PIM, Admin, Leave, Time, Recruit)
- Gestion des employés (ajout, modification, suppression)
- Recherche avancée via filtres PIM
- Formulaires et modales (Ajout employé, Confirmations)
- Export / Import de fichiers
- Notifications et alertes

---

## 🧱 Structure du projet

```
Orangehrm/
├── configOrangehrm/            # Fichier de configuration Playwright
├── testsOrangehrm/             # Scénarios de test UI OrangeHRM
├── pagesOrangehrm/             # Page Object Models OrangeHRM
├── utilsOrangehrm/             # Fonctions utilitaires
├── loggerOrangehrm/            # Système de log avec Winston
├── dataOrangehrm/              # Données statiques ou générées
├── allure-results-Orangehrm/   # Résultats Allure
```

---

## 🧰 Technologies & librairies utilisées

| Outil / Lib         | Utilisation                          |
|---------------------|--------------------------------------|
| Playwright          | Exécution des tests automatisés      |
| TypeScript          | Langage principal                    |
| Allure              | Génération de rapports               |
| Winston             | Logging avancé                       |
| Dotenv              | Gestion des variables secrètes       |
| Faker               | Génération de données fictives       |

---

## ✅ Cas d’usage à automatiser (proposés)

1. Se connecter avec des credentials par défaut
2. Vérifier la présence des modules du dashboard
3. Ajouter un nouvel employé via PIM
4. Modifier les informations d’un employé existant
5. Supprimer un employé et valider l’alerte de confirmation
6. Rechercher des employés avec filtres multiples
7. Importer un fichier CSV d’employés
8. Exporter la liste des employés
9. Tester l’affichage et la fermeture des notifications

---

## 🔐 Données de test

- Utiliser les credentials par défaut Fourni : `Admin / admin123`  
- Générer des données fictives via `@faker-js/faker` pour l’ajout d’employés  
- Stocker les données critique (URL, identifiants) dans `.env`

---

## 📌 Objectifs pédagogiques

- Appliquer le **Page Object Model** pour OrangeHRM
- Générer des rapports Allure
- Implémenter un logger personnalisé
- Manipuler `selectors`, `dialogs`, `modals`
- Structurer proprement un projet de tests UI Playwright
- Gérer les scénarios CRUD et workflows RHM

---

## ✍️ Auteur

**Hakim SAHRAOUI**  
QA Engineer – Casablanca 🇲🇦  
Certifié ISTQB + A4Q Selenium –  QA Automation Playwright  
Projet personnel d’Orangehrm (OrangeHRM) – Juillet 2025
