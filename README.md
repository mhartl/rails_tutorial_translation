Ce dossier contient la source HTML du [Ruby on Rails Tutorial book](http://ruby.railstutorial.org/ruby-on-rails-tutorial-book) (ainsi qu'une application Rails minimale). Consultez le [Rails Tutorial Translation wiki](https://github.com/mhartl/rails_tutorial_translation/wiki) pour plus d'information.

[Site Heroku french]: http://french.railstutorial.org/	"Site Heroku français"
[Branche francaise]:  https://github.com/mhartl/rails_tutorial_translation/tree/french "Branche française"

# À l'intention des traducteurs français

## INTRODUCTION

Ce fichier contient quelques informations utiles pour la traduction du tutoriel. Ce fichier, balisé Markdown, peut être édité et modifié (dans TextMate, utiliser le _Preview_ pour visualiser le rendu).

## LIENS UTILES

* Pour lire le tutoriel français online : [Site Heroku french][]
* Pour consulter la branche française de contrôle de version : [Branche francaise][]

## CONVENTIONS

### Texte non traduit

Lorsqu'un texte n'est pas traduit en français, le laisser entre \[(...)\] (crochet + parenthèses).

	[(\_version anglaise\_)]

Une traduction peut être proposée en ajoutant deux parenthèses à l'intérieur des crochets :

	[(_version anglaise_)(_proposition française à valider_)]

### Marque de fin

Pour marquer la fin d'une partie de traduction (quand tout le texte qui précède est traduit en français et que tout le texte qui suit est encore en anglais), on peut utiliser la marque…
		<!-- FIN FRENCH -->
… qui permet de retrouver rapidement à partir de quel endroit il faut commencer la traduction complète.

### Traductions systématiques

Afin de préserver l'homogénéité du texte, certains mots peuvent être traduits de façon systématique.

* Listing X.X -> Extrait X.X
* Figure X.X  -> Illustration X.X

## COMMANDES UTILES

### Updater sa version locale
git pull --rebase origin french

### Transmettre ses modifications online
<faire des modifications>
git add . 														# Ajoute tous les fichiers modifiés
git commit -m "_message_"							# Définit le commit
 # git pull --rebase origin french		# Au cas où
git push origin french								# Upload les modifications

### Déployer la nouvelle version sur Heroku
Note : il faut être autorisé (par Michael Hartl)
<code>$ git push heroku french:master</code>