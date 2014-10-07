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

	more info: https://developer.chrome.com/devtools/docs/console-api

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

# jQuery, $.get/JSON(), $.on(), $.Deferred and Promises

- http://api.jquery.com/category/events/event-object/
- https://github.com/TIY-Houston-Q3-Front-End/Notes/blob/master/class_27/index.md
- https://github.com/TIY-Houston-Q3-Front-End/Notes/blob/master/class_41/review-18-to-27.md

# APIs

- https://api.github.com/users/jacobthemyth
- https://api.github.com/users/jacobthemyth/repos
- https://api.github.com/users/jacobthemyth/starred
- https://api.github.com/users/jacobthemyth/orgs

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