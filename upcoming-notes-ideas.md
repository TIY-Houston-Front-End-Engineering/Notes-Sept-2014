# jQuery, jQuery plugins, API stuff

- see Wrinklefree jQuery and HTML5

# heroku

# node and express

# Backbone

http://www.korenlc.com/backbone-js-tutorial-getting-started-with-backbone/
https://github.com/derickbailey/backbone.marionette
https://github.com/derickbailey/backbone.compute
https://github.com/TIY-GVL-FEE-2014-Aug/backbone-adventure

## backbone (Model, Router, View)

- https://github.com/TIY-Houston-Q3-Front-End/Notes/tree/master/class_36
- https://github.com/TIY-Houston-Q3-Front-End/Notes/tree/master/class_37
- https://github.com/TIY-Houston-Q3-Front-End/Notes/tree/master/class_44
- Webster Wizerd
- Parse
- Firebase

## Serializing a form

If you need to get data out of a form, you can use `this.$el.serializeArray()` to grab the data out of the form. However, the result will look like:

```js
[
  {
    name: "a",
    value: "1"
  },
  {
    name: "b",
    value: "2"
  },
  {
    name: "c",
    value: "3"
  },
  {
    name: "d",
    value: "4"
  },
  {
    name: "e",
    value: "5"
  }
]
```

To transform the data into a form that you can pass to a model or collection, you can use the following code:

```js
$.fn.serializeObject = function(){
  return this.serializeArray().reduce(function(acum, i){
    acum[i.name] = i.value;
    return acum;
  }, {});
};

$('.my-form').serializeObject();
```

Now the results look like:

```js
{
  a: "1",
  b: "2",
  c: "3",
  d: "4",
  e: "5"
}
```

## Model#validate

http://jsbin.com/zicinu/2/edit

## Firebase
1. Install it with:
    ```sh
    $ bower install --save backfire
    ```
2. Include firebase.js and backbone-firebase.js in your index.html (if you're not using wiredeps)
3. Use `Backbone.Firebase.Collection` for your collection constructor, and give it a `firebase` property of your app url.

    ```js
    var TodoList = Backbone.Firebase.Collection.extend({
      model: Todo,
      firebase: "https://<your-firebase>.firebaseio.com"
    });
    ```

4. If you're modifying the models directly (like in the library app), you'll probably also need to link your model constructor to firebase.
    ```js
    var Todo = Backbone.Model.extend({
      firebase: "https://<your-firebase>.firebaseio.com"
    })
    ```


# CSS-only parallax

# SCSS and SMACSS

http://www.smashingmagazine.com/2012/04/20/decoupling-html-from-css/
https://smacss.com/book/prototyping

# React and Flux

https://github.com/facebook/flux

# Interview practice questions

http://www.sitepoint.com/5-typical-javascript-interview-exercises/

# WebGL

http://stack.gl/#examples

# The Call Stack

http://www.youtube.com/watch?v=8aGhZQkoFbQ&feature=youtu.be



## Week 2

- currentColor property (border color, box-shadow --> color)
- Homework Ideas
    > "Is it beer o'clock yet?"
    > [bonus.js](https://gist.githubusercontent.com/masondesu/1eafc9e7dff1ca7666ba/raw/59bca2a7c7e6f89cc977fee57165b3cf4ebede08/bonus.js)

## Week 5

https://vimeo.com/96425312

## Week 6

https://gist.github.com/maxpert/8110903

## Week 7

- sloth and lazy image loading
- canvas - http://codepen.io/donovanh/blog/particles
- CSS ONLY PARALLAX
- [Interview Questions](http://www.toptal.com/javascript/interview-questions)
- [What you may learn about jQuery by reading its source code](http://quickleft.com/blog/18-surprises-from-reading-jquery-s-source-code)
- [Make your JS work with CommonJS and AMD](http://ifandelse.com/its-not-hard-making-your-library-support-amd-and-commonjs/)
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

- Treat the DOM as a Lazy-Susan - batch processing with $.write/$.read
- ES6, http://bjorn.tipling.com/advanced-objects-in-javascript, and Traceur
- Angular 2.0, React, Bacon/RxJS, Backbone/Marionette, Ember, Mithril

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
