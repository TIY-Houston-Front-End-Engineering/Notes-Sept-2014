# Friday, Oct 31st

```sh
 _________________________________________
/ today we talked about Node.js, Express, \
\ Proxying, and Heroku                    /
 -----------------------------------------
          \      (__)
           \     /oo|
            \   (_"_)*+++++++++*
                   //I#\\\\\\\\I\
                   I[I|I|||||I I `
                   I`I'///'' I I
                   I I       I I
                   ~ ~       ~ ~
                     Scowleton
```

# Intro

Whenever you run `gulp watch` in your terminal, there is some node.js code that runs a server. This server is created with `express`, which is installed on our project directory automatically by the `setup-project.sh`.

Now, before we begin the process of working with Heroku, consider the following:
```sh
(1) Have you setup a heroku account? If not, do that now. http://heroku.com
(2) install https://toolbelt.heroku.com/
(3) run `npm init` to create a package.json file, answer the questions (or just hit enter)
```

Got that done? Good.

Now if you are **starting a new project**, congratulations! The setup script already created everything you need.

Otherwise, if you want to modify your current files, you will need to update or grab a few things:

1. Copy [the Procfile](./examples/extras/Procfile) to your project folder. This tells Heroku to run your webserver with node.
2. Copy [the heroku-server.js file](./examples/extras/heroku-server.js) to your project folder. This is the node.js script run by Procfile.
3. Overwrite your gulpfile.js with [this new version](./examples/extras/gulpfile.js).
4. Copy [the server.js file](./examples/extras/server.js) to your project folder.
5. run
    ```sh
        npm install express method-override request lodash --save
    ```

#  Getting started with Proxying

In the `server.js` file, there is a spot that says `add your proxies here`, with some examples, including proxying BreweryDB. Follow those as examples, and if you have any questions I will add/update them here for documentation. :-)

# Pushing to Heroku

Heroku is setup via the heroku toolbelt we installed. It essentially is a command-line program, nothing more, nothing less.

If you look at your git remotes (i.e. Github), you will see where your endpoints are:

```sh
mattbook-air:BreweryDBAPI matthiasak$ git remote -v
origin  git@github.com:TIY-Houston-Front-End-Sept-2014/TIY_HW24.git (fetch)
origin  git@github.com:TIY-Houston-Front-End-Sept-2014/TIY_HW24.git (push)
```

That `origin` above is why we do `git push origin master` or `git push origin gh-pages`. It means we are pushing to Github, and to the master or gh-pages branch.

Now run (where appName is some name for the app):
```sh
heroku create <appName>
```

If you don't provide an appName, then Heroku will choose one for you.

Now check your git remotes:
```sh
mattbook-air:BreweryDBAPI matthiasak$ git remote -v
heroku  git@heroku.com:tiy24yo.git (fetch)
heroku  git@heroku.com:tiy24yo.git (push)
origin  git@github.com:TIY-Houston-Front-End-Sept-2014/TIY_HW24.git (fetch)
origin  git@github.com:TIY-Houston-Front-End-Sept-2014/TIY_HW24.git (push)
```

Now, you just need to do this to get a working server on Heroku:
```sh
git add --all .
git commit -am "some message -- pushing to heroku?"
git push heroku master
```

**Now anytime you want to update Heroku, you will run the previous code. `git push --all` will NOT work.**

# Want to easily open your shiny new app on Heroku's website?

```sh
heroku open
```