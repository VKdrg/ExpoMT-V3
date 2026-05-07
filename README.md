# Exposition Solacroup
Intégration de la version digitale de l'exposition sur Marie-Thérèse Solacroup, pour la Fondation Solacroup Hébert.

## Installer le projet
### Prérequis :
- Avoir un système d'exploitation à jour.
- Avoir un éditeur de code à jour installé (VS Code ou équivalent)

### Installation
1. Sans dossier
    - Ouvrir VS Code. 
    - Dans le menu Explorer (première icone en haut à gauche), puis cliquer Clone Repository.
    - Coller l'URL du projet dans la zone de texte ( https://github.com/VKdrg/ExpoSolacroup.git )

2. Avec dossier
    - Dans l'Explorateur de Fichiers (Windows), ou dans Finder (Mac), créer un nouveau dossier
    - Ouvrir VS Code.
    - Dans VS Code, ouvrir un terminal (Terminal > New Terminal ou Ctrl+Shift+ù)
    - Dans ce terminal, coller la commande suivante :
```sh
git clone https://github.com/VKdrg/ExpoSolacroup.git
```


## Lancer le projet
<!-- Pour Windows et Mac -->
- Dans le terminal VS Code, taper la commande suivante :
```sh
npm run dev
```
- Ctrl+Cliquer le lien [LocalHost](http://localhost:5173) pour l'ouvrir dans un navigateur, ou copier-coller l'url dans la barre de recherche d'un navigateur au choix ( idéalement Chrome ou Firefox )

### Erreurs possibles et comment y remédier
1. Si le terminal retourne ``Error : npm command not found``, taper la commande suivante :
```sh
npm i 
```
Une fois npm installé, relancer la commande qui a provoqué l'erreur.

2. si le terminal retourne ``Error : missing script "dev"``, taper la commande suivante :
```sh
cd .\ExpositionSolacroup\
```
Une fois déplacé dans le dossier parent au fichier des scripts, relancer la commande qui à provoqué l'erreur.


## Modifier le contenu du site
### Remarques
- La syntaxe du fichier (``"clé": "valeur"``) ne peut pas être changée
- Les clés ne peuvent pas être changées
- Toujours mettre les ``clés`` et ``valeurs`` entre double guillemets (""), et les séparer par ":"
- Les chapitres sont délimités par des accolades, et séparés par une virgule.

### Chapitres

1. Modifier un chapitre existant
    - Dans le fichier [SiteContent.json](ExpositionSolacroup/SiteContent.json), sélectionner puis modifier la valeur à changer. 
    - Lancer le projet pour voir les modifications (cf. partie "Installer le projet").

2. Créer un nouveau chapitre
    - Dans le fichier [SiteContent.json](ExpositionSolacroup/SiteContent.json), copier-coller un chapitre existant ou créer un nouveau chapitre vierge, à l'aide du template suivant :
    ```json
    {
        "id": ,
        "title" : "",
        "subtitle": "",
        "illuDesktop":"",
        "illuMobile": "",
        "quote": "",    <!-- quotation marks \u00AB \u00BB, linebreak \n -->
        "content": {
            "col1": "",
            "col2": "",
            "col3": "" 
        },
        "audio": ""
    }
    ```
    - Compléter le template ci-dessus ou modifier les valeurs copiées-collées.


### Medias
#### Remplacer un média existant
1. Remplacer le média dans le dossier [public](ExpositionSolacroup/public)

2. Dans le fichier SiteContent.json, importer l'url du media de cette manière : 
```json
"clé": "/nouveau-fichier.extension"
```


### Menu
1. Modifier un lien du menu
    - Dans le fichier [Layout.jsx](ExpositionSolacroup/src/Components/Layout/Layout.jsx), modifier l'url du lien entre double guillemets ("")
    - Si nécessaire, modifier le texte d'affichage
```html
<Link to="url">Texte d'affichage</Link>
```

2. Créer un lien supplémentaire
    - Dans le fichier [Layout.jsx](ExpositionSolacroup/src/Components/Layout/Layout.jsx), créer un nouveau lien dans le contenant ``<div id="btm-links"></div>``
    - Organiser les liens dans l'ordre désiré.
    
___
