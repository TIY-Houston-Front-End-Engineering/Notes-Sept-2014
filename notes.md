- http://www.korenlc.com/backbone-js-tutorial-getting-started-with-backbone/
- https://github.com/facebook/flux/tree/master/examples/flux-chat
- http://www.thinkful.com/learn/angularjs-tutorial-build-a-gmail-clone/Introduction
- http://dailyjs.com/web-app.html
- https://www.joyent.com/developers/node/design
- http://www.sitepoint.com/5-typical-javascript-interview-exercises/
- http://adodson.com/hello.js/
- http://api.ai/ WOW
- https://wit.ai/
- http://robflaherty.github.io/jquery-annotated-source/
- http://backbonejs.org/docs/backbone.html
- mithril MVC
- https://speakerdeck.com/paullewis/edge-layout-performance-panel-intro
- advanced debugging with chrome - https://docs.google.com/presentation/d/17HjGp4pQlNh2WIwKiTcUpDLIuOdkUcRmALFuoytQsjU/preview#slide=id.p
- https://github.com/derickbailey/backbone.marionette
- https://github.com/derickbailey/backbone.compute
- https://github.com/adunkman/node-trello
- http://www.zell-weekeat.com/support-for-older-browsers/
- http://www.luster.io/blog/9-29-14-mobile-web-checklist.html
- http://asteroids-c9-alexbergin.c9.io/app/index.html
- http://tristanedwards.me/sweetalert
- http://stack.gl/#examples
- http://www.airpair.com/angularjs/posts/top-10-mistakes-angularjs-developers-make
- http://www.airpair.com/angularjs
- http://fluentconf.com/fluent2015/public/cfp/350
- https://www.legalzoom.com/LZWeb/MyAccount/OrderStatus.aspx?TIMESTRING=vI%2bbV%2bqo3tWACQxwmn1tLw%3d%3d&iProcess=0&isNewSignUp=False
- http://updates.html5rocks.com/2014/09/Precision-Touch-for-Precise-Gestures
- http://www.ocf.berkeley.edu/~horie/persp.txt
- http://www.letscodejavascript.com/v3/blog/2014/09/react_review
- http://eloquentjavascript.net/
- https://github.com/gelstudios/gitfiti

reflection from Tuesday 10/6:

	- one of the most asked questions is "I could name this argument anything, right?"
	- what if we taught by accessing arguments first, and THEN introduced named variables?
	- bracket-notation
	- falsy vs truthy

Ops:
---
√ Net Mag ????
- FOWA
º Hacktoberfest
º ConvergeRVA
- HoustonJS site
- Space City JS additions
- dstllry.co
- mkeas update with metalsmith
- wrinklefree js
- CPA for Space City JS
- "coworking in Houston" blog post

# jQuery, jQuery plugins

	- see Wrinklefree jQuery and HTML5

# Routing, Path.js, wikipedia and :target, JS functions based on the URL, deeplinking

	```
	https://github.com/TIY-Houston-Q3-Front-End/Notes/blob/master/class_30/index.md
	```

# lodash

	```
	Functions looked at:

	_.filter
	_.template
	_.extend
	_.map
	_.reduce
	_.forEach
	_.contains
	_.keys
	_.clone
	_.pick
	_.compact
	_.union
	_.flatten
	_.zip
	_.difference
	```

# heroku

# node and express

# tdd

	- http://visionmedia.github.io/mocha/ - Mocha provides a test runner (e.g. describe and it).
	- http://chaijs.com/ - Chai provides the expectations (e.g. to.be.true).
	- https://github.com/mrdavidlaing/javascript-koans

# Writing Testable JavaScript

	- [Video](https://www.youtube.com/watch?v=OzjogCFO4Zo)
	- [Slides](https://speakerdeck.com/rmurphey/writing-testable-javascript)
	- [Article](http://alistapart.com/article/writing-testable-javascript)

# Extra resources

	- [Crockford on JavaScript](http://yuiblog.com/crockford/)
	- [JavaScript: The Better Parts](https://www.youtube.com/watch?v=bo36MrBfTk4)
	- [Code Newbie](http://www.codenewbie.org/)

# backbone (Model, Router, View)

	- https://github.com/TIY-Houston-Q3-Front-End/Notes/tree/master/class_36
	- https://github.com/TIY-Houston-Q3-Front-End/Notes/tree/master/class_37
	- https://github.com/TIY-Houston-Q3-Front-End/Notes/tree/master/class_44

# CSS-only parallax

# localStorage, require.js, loader.js

	- https://github.com/TIY-Houston-Q3-Front-End/Notes/tree/master/class_52

# HW assignment: build a blog, from scratch, with SCSS, restly, underscore templating, $.serializeArray()

# HW assignment: build a webapp that plugs into GH api (create api_token), issues and comments can update in realtime, BONUS: add ability to close and comment issues

# yeoman

	- http://yeoman.io
	- In general, only for new applications.
	- Disclaimer: It's easy to let yeoman be an obstacle to understanding the underlying tools.
	- Uses NPM packages to generate scaffold

	```sh
	$ npm install -g yo
	$ npm install -g generator-tiy-webapp

	# Start yeoman
	$ yo
	```

# gulp

	- Gulp is like a factory, files come in and different files come out.
	- Gulp plugins do much of the heavy lifting.
	- Gulp plugins are just node packages that you install with npm. (e.g. gulp-ruby-sass)
	- The foundation of gulp is the "file stream" created with gulp.src(pattern).
	- You fit streams together with .pipe
	- You create tasks with gulp.task('task-name', aFunction)
	- Yeoman's tiy-webapp has a pretty nice gulpfile already

	```sh
	# build files into dist
	$ gulp
	# build and watch for changes
	$ gulp watch
	```

# design patterns

	- http://addyosmani.com/resources/essentialjsdesignpatterns/book/
