# jQuery, jQuery plugins, API stuff

- see Wrinklefree jQuery and HTML5

---------------------------------------

### BB auth:

```
$.ajaxSetup(
  beforeSend: function(xhr){
    xhr.setRequestHeader("Authorization", "Basic " + btoa("USERNAME" + ":" + "PASSWORD"));
  }
);

JavaScript btoa() function (a polyfill is available if btoa() is not supported in your target browser)
- https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64.btoa
- https://github.com/davidchambers/Base64.js
```

### http://wendynichols.github.io/Blog_project/#/

## Week 10-12

- sloth, lazy-loading
- https://vimeo.com/96425312
- https://html5-game-development.zeef.com/andre.antonio.schmitz
- http://webdesign.tutsplus.com/articles/7-css-units-you-might-not-know-about--cms-22573
- native two-way databinding

    ```
    function bindModelInput(obj, property, domElem) {
      Object.defineProperty(obj, property, {
        get: function() { return domElem.value; },
        set: function(newValue) { domElem.value = newValue; },
        configurable: true
      });
    }

    //<input id="foo">
    user = {}
    bindModelInput(user,'name',document.getElementById('foo')); //hey presto, we now have two-way data binding.
    ```

- http://dailyjs.com/2014/11/14/grant/
- lazy evaluation (http://filimanjaro.com/blog/2014/introducing-lazy-evaluation/)

    ```js
    function priceLt(x) {
       return function(item) { return item.price < x; };
    }
    var gems = [
       { name: 'Sunstone', price: 4 }, { name: 'Amethyst', price: 15 },
       { name: 'Prehnite', price: 20}, { name: 'Sugilite', price: 7  },
       { name: 'Diopside', price: 3 }, { name: 'Feldspar', price: 13 },
       { name: 'Dioptase', price: 2 }, { name: 'Sapphire', price: 20 }
    ];

    var chosen = _(gems).filter(priceLt(10)).take(3).value();
    ```

- canvas - http://codepen.io/donovanh/blog/particles
- CSS ONLY PARALLAX
- [What you may learn about jQuery by reading its source code](http://quickleft.com/blog/18-surprises-from-reading-jquery-s-source-code)
- Treat the DOM as a Lazy-Susan - batch processing with $.write/$.read (why batching DOM reads/writes speeds up code)


## Other shit

http://montagestudio.com/montagejs/
https://muut.com/riotjs/docs/
https://github.com/enaqx/awesome-react