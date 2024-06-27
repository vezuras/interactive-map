git add .
git commit -m "Correction du chemin vers le fichier JavaScript"



git push origin gh-pages


uvicorn app:app --reload




Étape 1 : Vérifiez les branches existantes
Pour vérifier les branches disponibles sur votre dépôt local, utilisez :

sh
Copier le code
git branch
Pour vérifier les branches sur votre dépôt distant (GitHub), utilisez :

sh
Copier le code
git branch -r
Étape 2 : Poussez les modifications vers la bonne branche
Poussez les modifications vers la branche correcte. Supposons que votre branche soit gh-pages, utilisez :

sh
Copier le code
git push origin gh-pages
Commandes complètes pour un workflow typique
Voici les commandes complètes pour ajouter, committer et pousser vos modifications vers la branche gh-pages :

sh
Copier le code
cd D:\Programmation\envs\web_scraping_py3-10-8\Scripts\NUMMU\interactive-map
git add .
git commit -m "Mise à jour des annonces et correction de bugs"
git push origin gh-pages
Résumé
Assurez-vous que la branche vers laquelle vous poussez existe.
Utilisez la commande git branch pour vérifier les branches locales et git branch -r pour vérifier les branches distantes.
Utilisez la commande git push origin gh-pages pour pousser vers la branche gh-pages (ou remplacez gh-pages par le nom de la branche correcte).
Astuce
Si vous n'êtes pas sûr de la branche sur laquelle vous travaillez, vous pouvez toujours vérifier avec git status qui vous montrera la branche actuelle et les modifications en attente de commit.

PS D:\Programmation\envs\web_scraping_py3-10-8\Scripts\NUMMU\interactive-map> git branch
* gh-pages
  main
PS D:\Programmation\envs\web_scraping_py3-10-8\Scripts\NUMMU\interactive-map> git branch
* gh-pages
  main
PS D:\Programmation\envs\web_scraping_py3-10-8\Scripts\NUMMU\interactive-map> git push origin gh-pages
To https://github.com/vezuras/interactive-map.git
 ! [rejected]        gh-pages -> gh-pages (fetch first)
error: failed to push some refs to 'https://github.com/vezuras/interactive-map.git'
hint: Updates were rejected because the remote contains work that you do not
hint: have locally. This is usually caused by another repository pushing to
hint: the same ref. If you want to integrate the remote changes, use
hint: 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
PS D:\Programmation\envs\web_scraping_py3-10-8\Scripts\NUMMU\interactive-map>
ChatGPT
L'erreur que vous rencontrez signifie que le dépôt distant a des modifications que vous n'avez pas localement. Pour résoudre cela, vous devez d'abord récupérer ces modifications, les intégrer à votre branche locale, puis pousser vos modifications.

Voici les étapes à suivre :

Étape 1 : Tirer les modifications du dépôt distant
Tirez les modifications de la branche gh-pages du dépôt distant pour les intégrer à votre branche locale :

sh
Copier le code
git pull origin gh-pages
Si des conflits de fusion se produisent, vous devrez les résoudre manuellement avant de pouvoir poursuivre. Une fois les conflits résolus, ajoutez et validez les fichiers résolus :

sh
Copier le code
git add .
git commit -m "Résolution des conflits"
Étape 2 : Pousser les modifications vers le dépôt distant
Après avoir tiré et résolu les conflits (le cas échéant), vous pouvez maintenant pousser vos modifications :

sh
Copier le code
git push origin gh-pages
Résumé des commandes
Tirez les modifications du dépôt distant :

sh
Copier le code
git pull origin gh-pages
(Facultatif) Résolvez les conflits de fusion, puis ajoutez et validez les fichiers résolus :

sh
Copier le code
git add .
git commit -m "Résolution des conflits"
Poussez les modifications vers le dépôt distant :

sh
Copier le code
git push origin gh-pages
Exemple complet
sh
Copier le code
cd D:\Programmation\envs\web_scraping_py3-10-8\Scripts\NUMMU\interactive-map
git pull origin gh-pages
# Résoudre les conflits si nécessaire
git add .
git commit -m "Mise à jour des annonces et résolution des conflits"
git push origin gh-pages
En suivant ces étapes, vous devriez être en mesure de synchroniser votre branche locale avec la branche distante et pousser vos modifications sans erreurs.
