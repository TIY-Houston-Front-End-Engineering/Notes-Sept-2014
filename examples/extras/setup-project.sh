#!/bin/sh
echo $1 - $2
re='^[-a-zA-Z_\./:@]+$'
if ! [ -n "${1}" ] ; then
   echo "error 1: call this script with a folder name and a git SSH URL to clone" >&2; exit 1
fi
if ! [ -n "${2}" ] ; then
   echo "error 2: call this script with a folder name and a git SSH URL to clone" >&2; exit 1
fi

mkdir $1
cd $1
git init
git remote add origin $2
git commit -am "initial"
git pull origin master
touch index.html
mkdir css
mkdir dist
mkdir js
git add --all .
git commit -am "creating some stuff"
bower install normalize.css typeplate-starter-kit jquery lodash

echo '<link rel="stylesheet" type="text/css" href="./bower_components/normalize.css/normalize.css">' >> index.html
echo '<link rel="stylesheet" type="text/css" href="./bower_components/typeplate-starter-kit/css/typeplate.css">' >> index.html
echo '<script type="text/javascript" src="./bower_components/jQuery/dist/jquery.min.js"></script>' >> index.html
echo '<script type="text/javascript" src="./bower_components/lodash/dist/lodash.min.js"></script>' >> index.html

curl https://raw.githubusercontent.com/TIY-Houston-Front-End-Sept-2014/Notes/master/examples/extras/gulpfile.js > ./gulpfile.js
npm install gulp gulp-autoprefixer gulp-jshint --save-dev
echo "node_modules" >> .gitignore
curl https://raw.githubusercontent.com/TIY-Houston-Front-End-Sept-2014/Notes/master/examples/extras/git-hook-post-commit.sh > .git/hooks/post-commit
chmod a+x .git/hooks/post-commit

git add --all .
git commit -am "ok, wrapping up"
git branch gh-pages
git push --all
