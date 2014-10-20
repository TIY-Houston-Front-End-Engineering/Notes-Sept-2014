# Monday, Oct 20th

```sh
 _________________________________________
/ Today we talked about routing and       \
| path.js, loading scripts and Loader.js, |
| some light inheritance stuff in         |
| JavaScript, and we went to Poetic       |
\ Systems. :-)                            /
 -----------------------------------------
  \            .    .     .
   \      .  . .     `  ,
    \    .; .  : .' :  :  : .
     \   i..`: i` i.i.,i  i .
      \   `,--.|i |i|ii|ii|i:
           UooU\.'@@@@@@`.||'
           \__/(@@@@@@@@@@)'
                (@@@@@@@@)
                `YY~~~~YY'
                 ||    ||
```

# Note

> our setup script has been installed to include stuff from today :-) (bower, pathjs)

# Routing, Path.js, wikipedia and :target, JS functions based on the URL, deeplinking

When you go to Gmail and load:
- The _chats_ tab, the URL changes to `https://mail.google.com/mail/u/0/#chats`.
- The inbox is `https://mail.google.com/mail/u/0/#inbox`.
- The spam folder is `https://mail.google.com/mail/u/0/#spam`.

Whenever you click a link that has a URL like:
```html
<a href="#target"></a>
```

The browser interprets a tap/click on this link as "scroll the element with the target id into view". If that target id doesn't exist, the browser will scroll to the top.

No matter what, you will see "#target" be appended to the end of the browser's live URL, and after clicking on multiple target links, you can actually hit the browser's Back and Forward buttons to navigate back and forth along the same page.

We as JavaScript developers can build Single Page App routing experiences on-top of this :-)

In simplest form, we will be doing:

```js
window.addEventListener('hashchange', callbackFunction);
```

However, we will be using a library called Path.js (git://github.com/mtrpcic/pathjs.git), which is installable via bower:
```sh
bower install pathjs
```

Example code for the Etsy site:
```js
EtsyClient.prototype.setupRouting = function(){
    var self = this;

    Path.map("#/").to(function() {
        self.showListings();
    });

    Path.map("#/listing/:id").to(function() {
        console.log(this);
        self.showListing(this.params.id);
    });

    // set the default hash
    Path.root("#/");
    Path.listen();
}
```

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

# Script Loaders

We uncovered something interesting when working with `$.get()`: we can load any file type, not just JSON. We learned to load template files, or anything accessible via a URL.

We already know one method of putting scripts onto a  website:

```html
<script type="text/javascript" src="..."></script>
```

One popular method of loading JavaScript files into the DOM (the live website) is to do so via JavaScript. This is doable in two ways:
1. The JS will create a script element on the page with `document.createElement('script')` and set its `src` attribute, or
2. The JS will download the text of a JS file via AJAX and when that is done, create a script element and set its `textContent` to that of the AJAX result

These last two methods of "loading JavaScript with JavaScript" are used on sites when:
1. We want to load only a certain script file at a certain time, such as when one area of the page is scrolled into view.
2. We want to load a certain polyfill if the browser doesn't have a certain functionality supported

Number 2 here is a major one - polyfills. It's been mentioned a couple of times now that `Array.prototype.map` doesn't exist in browsers older then IE9. Well, it just so happens that we can test for this, and then load a polyfill (a piece of code that enables a newer feature in an older browser) all in JavaScript:

```js
if(!Array.prototype.map){
    loader.load({url:"./js/url-to-ES5-polyfill.js"}).then(function(){
        // do something when it is done?
    })
}
```

The script-loader used here is something Matt built, simply named Loader (https://github.com/matthiasak/Loader), but there are many script loaders out there. The most popular is called require.js (http://requirejs.org/).

All are, again, installable via bower:

```sh
bower install Loader
```

## Using Loader is easy.

Load one file.
```js
loader.load(
    {url:"..."}
).then(function(){
    // do something when it is done?
})
```

Load three files.
```js
loader.load(
    {url:"..."},
    {url:"..."},
    {url:"..."}
).then(function(){
    // do something when it is done?
})
```

# Polyfills

Finding polyfills is so easy: https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills
Finding if your browser supports something is so easy: http://caniuse.com/
