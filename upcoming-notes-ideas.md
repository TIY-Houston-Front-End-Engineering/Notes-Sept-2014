# jQuery, jQuery plugins, API stuff

- see Wrinklefree jQuery and HTML5

---------------------------------------

## Week 7

- Homework ideas
    ```
    - $.get() and $.post() to Tiny Server
    - Backbone.Sync() to Tiny Server
    - Make Todo application CRUD, not local transient data
    - new project idea: create a beautiful web app that generates pro skier names for your future yung'uns http://www.tetongravity.com/story/ski/how-to-name-your-kid-to-become-a-pro-ripper
    - create a recipe book / app with Backbone
    - Soundcloud player (like I had Amy do -- a record album cover, hover play button, spinning vinyl)
    - Countable.js — Live word-counting in JavaScript - http://sachaschmid.ch/Countable/
    ```

## Week 8

- sloth, lazy-loading
- https://vimeo.com/96425312
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
- [Interview Questions](http://www.toptal.com/javascript/interview-questions)
- [What you may learn about jQuery by reading its source code](http://quickleft.com/blog/18-surprises-from-reading-jquery-s-source-code)
- Treat the DOM as a Lazy-Susan - batch processing with $.write/$.read (why batching DOM reads/writes speeds up code)


## Week 9 

- Start brainstorming final projects

    > I'm sure there are more concepts than this, but for example, if the app covered a list like this would it be sufficient for us to judge their skill set and knowledge?
    >
    >
        - Creation of the framework, with a DB initialized
        - App is checked into GitHub with a valid README
        - App is deployed onto Heroku showing understanding of deployment with at least one provider
        - App utilizes at least one gem, beyond user auth.
        - App has user authentication
        - Test cases exist testing major parts of the application
        - Models use has_many, has_one, belongs_to and has_many through
        - There is some basic caching used
        - The asset pipeline is correctly used
        - There is one example of CRUD
        - The User model has at least two roles

- SASS and SMACSS

## Week 9.5 - 11 - React / Flux / Mithril

- https://github.com/facebook/flux
- http://kenwheeler.github.io/mcfly/
- https://gcanti.github.io/2014/10/29/understanding-react-and-reimplementing-it-from-scratch-part-1.html