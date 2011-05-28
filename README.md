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

### Note introduction

Pour vous faciliter complètement la vie, vous pouvez trouver des raccourcis shell à utiliser à la fin de ce chapitre.

### Updater sa version locale
	$ git pull --rebase origin french

### Transmettre ses modifications online
<faire des modifications>
	$ git add . 														# Ajoute tous les fichiers modifiés
	$ git commit -m "_message_"							# Définit le commit
	# $ git pull --rebase origin french			# Au cas où
	$ git push origin french								# Upload les modifications

### Déployer la nouvelle version sur Heroku
Cette commande permet d'actualiser les changements sur le site de la version française ([Site Heroku french][]).
Note : il faut être autorisé (par Michael Hartl)
	$ git push heroku french:master
	
## RACCOURCIS SHELL

Pour ne pas avoir à taper chaque fois toutes les commandes, vous pouvez utiliser les codes et les fichiers ci-dessous.

### Au jour le jour

Procédure à utiliser **après que les fichiers et les codes de la section suivante («&nbsp;Fichiers et codes&nbsp;») ont été implémentés**.

Note pour mémo : la préfixe "tmh" correspond à "Tutoriel Michael Hartl"

	<Ouvrir une fenêtre Terminal (Shell)>
	$ tmh-dir         # Pour se placer dans le dossier de la traduction
	$ tmh-serveur     # Pour lancer le serveur
	<Attendre le lancement du serveur rails, puis…>
	$ tmh-site        # Pour afficher le site dans le navigateur
	<Ouvrir une autre fenêtre Terminal (Shell)>
	<Procéder à la traduction/aux corrections>
	$ tmh-pull        # Pour récupérer les modifications éventuelles
	                  # faites par d'autres collaborateurs
	$ tmh-push "Message du commit/Corrections effectuées" 
	                  # Pour déposer un nouveau commit

### Fichiers et codes

**Ajouter les raccourcis**

**Note importante** :

* Il est impératif de définir le chemin d'accès à votre propre dossier local (repère \[1\] dans le code ci-dessous).
* Si vous n'êtes pas sur MAC, il faut redéfinir la ligne au repère \[2\] permettant l'ouverture de votre site local dans votre navigateur.

Le code ci-dessous doit être ajouté à votre fichier `**.bashrc**`.

	# ***************************************************************
	#
	# POUR TUTORIEL RAILS MICHAEL HARTL
	#
	# ***************************************************************
	
	echo -e "\n\n/*--------------------------------------------"
	echo -e "|  TUTORIEL RAILS MICHAEL HARTL"
	echo -e "|"
	echo -e "|  Liste des raccourcis "
	echo -e "|"
	echo -e "|\ttmh-dir                  Se placer au bon endroit"
	echo -e "|\ttmh-serveur               Lance le serveur rails"
	echo -e "|\ttmh-site                  Ouvrir le site local (dans Firefox)"
	echo -e "|\t                          (Note : le faire dans une autre fenêtre)"
	echo -e "|\ttmh-add \"message\"       Nouveau commit"
	echo -e "|\ttmh-pull                  Puller les changements distants"
	echo -e "|\ttmh-push                  Push sur GitHub et Heroku"
	echo -e "| --------------------------------------------*/"
	
	# [1] Indiquer ici le chemin d'accès au dossier de traduction
	alias tmh-dir="cd 	~/ROR_Tutoriel/rails_tutorial_translation/rails_tutorial_translation;"
	
	# [2] Pour lancer le serveur rails et l'ouvrir dans Firefox
	# Sur MAC :
	alias tmh-serveur="rails server"
	alias tmh-site="open -a /Applications/Firefox.app http://localhost:3000/"
	# Sur PC : ?
	# Sur Unix : ?
	
	# Pour ajouter un nouveau commit
	alias tmh-add="../../new_commit.sh"
	
	# Pour pull/pusher les changements sur GitHub et Heroku
	alias tmh-pull="git pull --rebase origin french"
	alias tmh-push="git push origin french; git push heroku french:master"

Note : ajouter la ligne…

	. $HOME/.bashrc

… à votre fichier `.bash_profile` si ce fichier ne la contient pas pour que ces raccourcis soient ajoutés automatiquement à l'ouverture du shell.

**Créer un fichier `new_commit.sh`**

*Note importante : ce fichier doit absolument se trouver dans le dossier qui contient le dossier principal de la traduction.*
DOSSIER > rails_tutorial_translation > rails_tutorial_translation
        > new_commit.sh

Code à copier dans le fichier :

	#!/bin/sh
	# Pour commettre (commit) un nouveau dépôt
	# Syntaxe :
	#		./new_commit.sh "Message du commit"
	
	# [Il faudrait s'assurer qu'un message a bien été donné]
	
	# Echo du message
	echo "Message du commit : " $1 ;
	
	# Faire le mandat de dépôt
	git add .
	git commit -m "$1"

Penser à autoriser l'exécution du fichier :

	$ chmod 744 ./new_commit.sh
