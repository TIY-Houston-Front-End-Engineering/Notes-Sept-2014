# Tue, October 7th

```sh
 _________________________________________
/ Today, we reviewed try/catch/finally    \
| and throw, we covered merge conflicts   |
| in Git, we introduced variadic behavior |
| and the arguments object, and then we   |
| discussed how to incorporate errors,    |
| arguments, type checking, and forEach   |
\ to sum any amount of numbers            /
 -----------------------------------------
   \         __------~~-,
    \      ,'            ,
          /               \
         /                :
        |                  '
        |                  |
        |                  |
         |   _--           |
         _| =-.     .-.   ||
         o|/o/       _.   |
         /  ~          \ |
       (____@)  ___~    |
          |_===~~~.`    |
       _______.--~     |
       \________       |
                \      |
              __/-___-- -__
             /            _ \
```

# debugger with Chrome

- `console.log()`
- `console.assert()`
- `console.count()`
- `console.dir()`
- `console.trace()`
- `console.time()`/`console.timeEnd()`
- `performance.now()`
- `console.timeline()`/`console.timelineEnd()`
- `console.profile()`/`console.profileEnd()`
- `inspect(any html element, or function)`
- `console.timeStamp()` - // label the timeline
- `copy()` - copy an object as a string to clipboard

more info: https://developer.chrome.com/devtools/docs/console-api

# handling merge conflicts

We talked about handling merge conflicts with Git. If you have questions, ask your peers or me. :-)

There's lots of good write-ups out there, as well. One I found via GoodOlGoogleSearch™ is http://githowto.com/resolving_conflicts.

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

# `arguments` (variadic behavior)

```js
/**
 * sum functions
 */
function sumOnlyTwoNumbers(a, b){
    "use strict";
    return a + b;
}
function sumForLoop(){
    "use strict";
    var args = Array.prototype.slice.apply(arguments, []),
        sum = 0;
    for(var i = 0; i < args.length; i++){
        sum += args[i];
    }
    return sum;
}
function sumForEach(){
    "use strict";
    var args = Array.prototype.slice.apply(arguments, []),
        sum = 0;
    args.forEach(function(num){ sum += num; });
    return sum;
}
function sumForEachCustom(){
    "use strict";
    "use strict";
    var args = Array.prototype.slice.apply(arguments, []),
        sum = 0;
    forEach(args, function(){ sum += arguments[0]; });
    return sum;
}

/**
 * forEach functions
 */
function forEach(array, callback){
    "use strict";
    for(var i = 0; i < array.length; i++){
        callback(array[i], i);
    }
}
Array.prototype.forEach = function(callback){
    "use strict";
    for(var i = 0; i < this.length; i++){
        callback(array[i], i);
    }
}
```

# Homework

1. Read and reflect (write a few paragraphs on your blog, just 200 words or something.) - http://nautil.us/issue/17/big-bangs/how-i-rewired-my-brain-to-become-fluent-in-math-rd
2. Create a new repo for the following code. Follow the directions in the comments.

    Need help? Use hipchat, and http://devdocs.io/ !!! Don't ignore resources :-)

    # Part I

    ```js
    // use EACH the iteration methods discussed in class today (for loop, Array.forEach, custom forEach) for EACH of the following problems
    // 1. calculate the sum of numbers (can be any number of arguments)
    // 2. calculate the average of numbers
    // 3. find the largest number of the inputs
    // 4. find the longest string of the inputs
    // 5. given an array of Date() objects (Oct 4th 2014, Oct 3rd 2014, Sept 30th 2014, Sept 1st 2012, March 13th 2010), in that order, sort them chronologically. Use http://devdocs.io/javascript/global_objects/date for reference on creating Date() objects with a specific date.
    ```

    # Part II

    ```js
    // set up arrays
    var numbers = [1,12,4,18,9,7,11,3,101,5,6];
    var strings = ['this','is','a','collection','of','words'];

    var customers = [
        { firstname : 'Joe', lastname : 'Blogs'},
        { firstname : 'John', lastname : 'Smith'},
        { firstname : 'Dave', lastname : 'Jones'},
        { firstname : 'Jack', lastname : 'White'}
    ];

    console.log(customers);

    // YOUR CODE WILL GO IN THIS NEXT SECTION
    // find all customers whose firstname starts with 'J',
    // map() those people into an array of objects like: { name : c.firstname + " " + c.lastname }
    // then sort alphabetically

    var projections = customers
        .filter(function(c){ /* ... */ })
        .map(function(c){  /* ... */ })
        .sort(sortByName);

    function sortByName(c1, c2) {
        "use strict";
        //...
    }

    console.log(projections);
    ```