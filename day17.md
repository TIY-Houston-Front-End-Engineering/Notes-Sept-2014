# Promises, $.Deferred, $.get/getJSON/ajax/post

    - when, then, resolve

# Prototypes, Constructors, `this`

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

# templating

- with innerHTML
- with lodash/underscore
