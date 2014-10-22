#!/bin/sh
#
# test for a Folder name and URL
echo $1 - $2
re='^[-a-zA-Z_\./:@]+$'
if ! [ -n "${1}" ] ; then
   echo "error 1: call this script with a folder name and a git SSH URL to clone" >&2; exit 1
fi
if ! [ -n "${2}" ] ; then
   echo "error 2: call this script with a folder name and a git SSH URL to clone" >&2; exit 1
fi

# setup our directory
mkdir $1
cd $1

# start git in this folder and setup the Git URL as the origin
git init
git remote add origin $2
git commit -am "initial"
git pull origin master

# setup some files
touch ./index.html
mkdir ./css
mkdir ./dist
mkdir ./js
mkdir ./test
mkdir ./templates
touch ./js/app.js
touch ./test/main.js
touch ./test.html
bower install normalize.css typeplate-starter-kit jquery lodash pathjs Loader mocha chai

# insert some links into the HTML

echo '<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="./bower_components/normalize.css/normalize.css">
    <link rel="stylesheet" type="text/css" href="./bower_components/typeplate-starter-kit/css/typeplate.css">
    <title></title>
</head>
<body>
    <script type="text/javascript" src="./bower_components/Loader/loader.js" id="loaderjs" data-app="./js/app.js"></script>
</body>
</html>' >> ./index.html

# setup our default app.js file

echo '
window.onload = app;

// runs when the DOM is loaded
function app(){

    // load some scripts (uses promises :D)
    loader.load(
        {url: "./bower_components/jquery/dist/jquery.min.js"},
        {url: "./bower_components/lodash/dist/lodash.min.js"},
        {url: "./bower_components/pathjs/path.min.js"}
    ).then(function(){
        _.templateSettings.interpolate = /{([\s\S]+?)}/g;

        // start app?
    })

}
' >> ./js/app.js

# setup our test.html file

echo '<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="./bower_components/mocha/mocha.css">
    <title></title>
</head>
<body>
    <div id="mocha"></div>
    <script type="text/javascript" src="./bower_components/jquery/dist/jquery.min.js"></script>
    <script type="text/javascript" src="./bower_components/lodash/dist/lodash.min.js"></script>
    <script type="text/javascript" src="./bower_components/mocha/mocha.js"></script>
    <script type="text/javascript" src="./bower_components/chai/chai.js"></script>
    <!-- load all of your declaration files and what not here -->
    <!-- for example, <script type="text/javascript" src="./js/libs/EtsyClient.js"></script> -->
    <script type="text/javascript" src="./test/main.js"></script>
</body>
</html>' >> ./test.html

# write to our testing js

echo '
_.templateSettings.interpolate = /{([\s\S]+?)}/g;

mocha.setup({
    ui: "bdd",
    ignoreLeaks: true
});

var assert = chai.assert;
var expect = chai.expect;

//--- your setup code goes here (i.e. create test instances of your Constructors)
//--- your setup code goes here

//--- your tests go here
// an example test suite
describe("Array", function(){
    describe("#indexOf()", function(){
        it("should return -1 when the value is not present", function(){
            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
        })
    })
})
//--- your tests go here

mocha.globals(["jQuery"]);
mocha.run();
' >> ./test/main.js

# download our gulp file, install gulp and stuff from npm
curl https://raw.githubusercontent.com/TIY-Houston-Front-End-Sept-2014/Notes/master/examples/extras/gulpfile.js > ./gulpfile.js
npm install gulp gulp-autoprefixer gulp-jshint --save-dev
npm install express

# write to our .gitignore
echo "node_modules" >> .gitignore

# get our post-commit hook to auto-commit to gh-pages
curl https://raw.githubusercontent.com/TIY-Houston-Front-End-Sept-2014/Notes/master/examples/extras/git-hook-post-commit.sh > .git/hooks/post-commit
chmod a+x .git/hooks/post-commit

# finish up on git
git add --all .
git commit -am "ok, wrapping up install process and setting up $2"
git branch gh-pages
git push --all
