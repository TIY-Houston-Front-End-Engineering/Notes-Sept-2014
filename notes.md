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

Ops:
---
√ Net Mag ????
- FOWA
- Hacktoberfest
- HoustonJS site
- Space City JS additions
- dstllry.co
- mkeas update with metalsmith
- wrinklefree js
- CPA for Space City JS
- "coworking in Houston" blog post

# arguments (variadic behavior)

	```
	function test(){
	    console.log(arguments);
	}

	test(1); // [1]
	test(1, 2, 3); // [1, 2, 3]

	/**
	 * Variadic Behavior
	 */

	function sum3(a, b, c) {
	    console.log(a + b + c);
	}

	sum3(1, 2, 3); // 6
	sum3(1, 2); /// NaN (why? 1+2+undefined is NaN)
	sum3(1, 2, 3, 4); // 6 (why? code ignores last argument)

	function sumAll( /* arguments */ ) {
	    var numbers = [].slice.call(arguments);
	    var sum = 0;
	    numbers.forEach(function(n) {
	        sum += n;
	    });
	    console.log(sum);
	}

	sumAll(1, 2, 3); //--> 6
	// sumAll(1, 2, 3, 4); //--> 10
	// sumAll(1, 2); //--> 3
	// sumAll(); //--> 0

	// test arguments
	function sum3() {
	    var numbers = [].slice.call(arguments);
	    if (numbers.length !== 3) {
	        console.log("Invalid number of parameters -- sum3");
	        return;
	    }
	    var sum = 0;
	    numbers.forEach(function(n) {
	        sum += n;
	    });
	    console.log(sum);
	}

	sum3(1, 2); //--> Invalid number of parameters -- sum3
	sum3(1, 2, 3, 4); //--> Invalid number of parameters -- sum3
	sum3(1, 2, 3); //--> 6

	// modify sum all to only take numbers

	/**
	 * input: numbers only
	 * returns: sum of the numbers
	 */

	function sumAllNumbersOnly( /* arguments */ ) {
	    var numbers = [].slice.call(arguments); /// variadic behavior - keyadic behavior
	    var sum = 0;
	    numbers.forEach(function(n) {
	        if (typeof n !== "number") { // type checking
	            alert('hey jackass');
	            throw new Error("Excuse me sir/madam, you are trying to get the sum of a number and a string. I believe this is incorrect use of my function. Good day."); // error handling
	        }
	        sum += n;
	    });
	    console.log(sum);
	}

	sumAllNumbersOnly(1, 2, 3, "a"); //--> Excuse me sir/madam, you are trying to get the sum of a number and a string. I believe this is incorrect use of my function. Good day.
	sumAllNumbersOnly(1, 2, 3); //--> 6
	```

# functions as building blocks, constructors, prototype chain

	```
	more function work: https://github.com/TIY-Houston-Q3-Front-End/Notes/blob/master/class_12/homework.js
	- DOM templating from scratch
	- window.onload = app;

	stopwatch and prototype homework: https://github.com/TIY-Houston-Q3-Front-End/Notes/tree/master/class_26

	BONUS: start recreating http://thecolourclock.co.uk/ in HTML/CSS/JS. Currently it is only made in Flash.
	```

# errors, try/catch/finally, throw

	```
	/**
	 * EXAMPLE: when asking the user for a number
	 */

	function askForANumber(){
	    var number = prompt("please provide a number");
	    try {
	        handleResponse(number);
	    } catch(e) {
	        // :mindblown:
	        console.log(e, e.stack);
	        askForANumber(); // recursion
	    }
	}

	function handleResponse(number){
	    number = parseFloat(number); // handle decimal places too, with parseFloat
	    if(typeof number !== "number" || Number.isNaN(number)){ // is it not a number or is it NaN?
	        throw new Error("Whatch'you talkin' bout? SAY WAT AGAIN."); // if yes, throw error
	    } else {
	        alert('You typed in a number: '+number+'!');
	    }
	}

	askForANumber();
	```

# jQuery, jQuery plugins

	- see Wrinklefree jQuery and HTML5

# jQuery, $.get/JSON(), $.on(), $.Deferred and Promises

	```
	http://api.jquery.com/category/events/event-object/
	https://github.com/TIY-Houston-Q3-Front-End/Notes/blob/master/class_27/index.md
	https://github.com/TIY-Houston-Q3-Front-End/Notes/blob/master/class_41/review-18-to-27.md
	```

# APIs

	```
	https://api.github.com/users/jacobthemyth
	https://api.github.com/users/jacobthemyth/repos
	https://api.github.com/users/jacobthemyth/starred
	https://api.github.com/users/jacobthemyth/orgs
	```

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

# Function.call, Function.apply, Function.bind

# Inheritance / OOP

	```js
		function Character(name){
			this.name = name;
		}

		Character.prototype.fight = function(){
			console.log(this.name, this.power);
		}

		function Wizard(name){
			Character.apply(this, arguments);
			this.power = 10;
		}

		Wizard.prototype = Object.create(Character.prototype);
		// or
		Wizard.prototype = new Character();
		Wizard.prototype.constructor = Wizard;
	```

# debugger with Chrome

	- console.log
	- console.assert
	- console.count
	- console.dir
	- console.trace
	- console.time/timeEnd
	- performance.now()
	- console.timeline/timelineEnd
	- console.profile/profileEnd
	- inspect(any html element, or function)
	- console.timeStamp() - // label the timeline
	- copy() - copy an object as a string to clipboard

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