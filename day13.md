# functions as building blocks, constructors, prototype chain

    ```
    more function work: https://github.com/TIY-Houston-Q3-Front-End/Notes/blob/master/class_12/homework.js
    - DOM templating from scratch
    - window.onload = app;
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

    Wizard.prototype = Object.create(Character.prototype);
    // or
    Wizard.prototype = new Character();
    Wizard.prototype.constructor = Wizard;
```

# Resources

http://eloquentjavascript.net/

# Homework

> This is to be done as a group assignment. We may have one group of 3 students.

One of the most useful exercises I've ever done as a programmer is the following:

1. Write your own forEach function. It takes the array and the function (referred to as a callback) as arguments:
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
