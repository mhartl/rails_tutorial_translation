This is the HTML source (together with a minimal Rails app) for the [Ruby on Rails Tutorial book](http://ruby.railstutorial.org/ruby-on-rails-tutorial-book). See the [Rails Tutorial Translation wiki](https://github.com/mhartl/rails_tutorial_translation/wiki) for more information.

# À l'intention des traducteurs français

## Conventions

### Texte non traduit

Lorsqu'un texte n'est pas traduit en français (dans le doute), le laisser entre [(...)] (crochet + parenthèses).
	[(_version anglaise_)]
Une traduction peut être proposée en ajoutant deux parenthèses à l'intérieur des crochets :
	[(_version anglaise_)(_proposition française à valider_)]

### Marque de fin

Pour marquer la fin d'une partie de traduction (quand tout le texte qui précède est traduit en français et que tout le texte qui suit est encore en anglais), on peut utiliser la marque…
		<!-- FIN FRENCH -->
… qui permet de retrouver rapidement à partir de quel endroit il faut commencer la traduction complète.

## COMMANDES UTILES

### Updater sa version locale
git pull --rebase origin french

### Transmettre ses modifications online
<faire des modifications>
// git pull --rebase origin french		# Au cas où
git add . 														# Ajoute tous les fichiers modifiés
git commit -m "_message_"							# Définit le commit
git push origin french								# Upload les modifications

### Déployer la nouvelle version sur Heroku
Note : il faut être autorisé (par Michael Hartl)
git push heroku french:master