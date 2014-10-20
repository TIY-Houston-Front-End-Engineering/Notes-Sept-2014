# Caching stuff with `$.get()`

# Inheritance in JavaScript

**Vanilla method 1**: IE5+

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

Wizard.prototype = Character.prototype;
Wizard.prototype.constructor = Wizard;
```

**Vanilla method 2**: Requires IE9+ (ES5 - which also provides Array.map/filter/etc)

`Object.create()` is usable in IE9 and up: http://kangax.github.io/compat-table/es5/#Object.create

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
```

# heroku

# node and express