# Wed, Oct 8th

```sh
 ________________________________________
/ today we reviewed looping and #5 on    \
| yesterday's homework, Array functions, |
| writing our own array functions,       |
| Prototypes, constructors, arguments,   |
| this, Function.call, and Prototype     |
\ Chaining                               /
 ----------------------------------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

# Code from class - HW12 Part 1 Number 5

```js
/**
 * 5. given an array of Date() objects (Oct 4th 2014, Oct 3rd 2014, Sept 30th 2014, Sept 1st 2012, March 13th 2010), in that order, sort them chronologically. Use http://devdocs.io/javascript/global_objects/date for reference on creating Date() objects with a specific date.
 */

/**
 * forEach function
 */
function forEach(array, callback){
    "use strict";
    for(var i = 0; i < array.length; i++){
        callback(array[i], i, array);
    }
}

/**
 * the Date-sorting functions
 */
function sortDateCheat(dates){
    return dates.sort(function(d1, d2){
        return d1.getTime() > d2.getTime() ? 1 : -1
    })
}

function sortDateForLoop(dates){
    for(var i = 0; i < dates.length; i++){
        findLowestDateAndSwap(null, i, dates);
    }
}

function findLowestDateAndSwap(value, i, array){
    for(var j = i+1; j < dates.length; j++){
        if(+dates[j] < +dates[i]){
            var temp = dates[i];
            dates[i] = dates[j];
            dates[j] = temp;
        }
    }
}

function sortDateForEach(dates){
    dates.forEach(findLowestDateAndSwap);
}

function sortDateCustomForEach(dates){
    forEach(dates, findLowestDateAndSwap);
}

/**
 * setup
 */
var dates = [
    new Date(2014, 9, 4),
    new Date(2014, 9, 3),
    new Date(2014, 8, 29),
    new Date(2012, 9, 1),
    new Date(2015, 2, 13)
];

console.log(dates)

sortDateForLoop(dates);
// sortDateForEach(dates);
// sortDateCustomForEach(dates);

console.dir(dates)
```

# Function.call, Function.apply, Function.bind (make comparisons to calling sum in these different ways)

# Inheritance / OOP (http://bonsaiden.github.io/JavaScript-Garden/#object.prototype)

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

    Wizard.prototype = new Character();
    Wizard.prototype.constructor = Wizard;
```

# Books!

- http://eloquentjavascript.net/
- I brought books into class. There are 8 books in total. If you don't take them home, put them in the closet.

# Resources

- Don't forget about http://bonsaiden.github.io/JavaScript-Garden which still has a TON to keep reading over.

# Homework

## Part 1

Complete your [day 12 homework](./day12.md)

## Part 2

> This is to be done as a group assignment. We may have one group of 3 students.
> 1. Send me a hipchat or email about who is on who's team
> 2. Have one person Create a Github Repo for the project, then each other person will need to be added as collaborators (see https://help.github.com/articles/adding-collaborators-to-a-personal-repository/).
> 3. Remember back to our discussion on Git and merge conflicts. Those problems can and probably will arise. :-)

1. Write your own forEach function (like we did in class). It takes the array and the function (referred to as a callback) as arguments:
    ```js
    function forEach(list, callback) { /* Do stuff */ }
    ```

2. Write your own map, reduce, and filter functions that use your custom forEach to do their work.

3. Write a function called pluck that extracts a list of property names:
    ```js
    function pluck(list, propertyName) { /* Do stuff*/ }

    var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
    pluck(stooges, 'name');
    // => ["moe", "larry", "curly"]
    ```

4. Write a function called reject that returns the values in list without the elements that the truth test (predicate) passes. The opposite of filter.
    ```js
    function reject(list, predicate) { /* Do stuff */ }

    var odds = reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
    //=> [1, 3, 5]
    ```

5. Write a function called find that looks through each value in the list, returning the first one that passes a truth test (predicate), or undefined if no value passes the test. The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list.
    ```js
    function find(list, predicate) { /* Do stuff */ }

    var even = find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
    //=> 2
    ```

6. Write a function called where that looks through each value in the list, returning an array of all the values that contain all of the key-value pairs listed in properties.
    ```js
    function where(list, properties) { /* Do stuff */ }

    where(listOfPlays, {author: "Shakespeare", year: 1611});
    // => [{title: "Cymbeline", author: "Shakespeare", year: 1611},
    //     {title: "The Tempest", author: "Shakespeare", year: 1611}]
    ```
