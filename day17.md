# `jQuery`, `$.get/JSON()`, `$.on()`, $.Deferred and Promises

- http://api.jquery.com/category/events/event-object/
- https://github.com/TIY-Houston-Q3-Front-End/Notes/blob/master/class_27/index.md
- https://github.com/TIY-Houston-Q3-Front-End/Notes/blob/master/class_41/review-18-to-27.md

# Function.call, Function.apply, Function.bind (make comparisons to calling sum in these different ways)

# Inheritance / OOP

> http://bonsaiden.github.io/JavaScript-Garden/#object.prototype

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

# functions as building blocks, constructors, prototype chain

    ```
    - underscore templating
    - window.onload = app;
    ```
