# Monday, Nov 10th

```sh
```

# Backbone Routers

Backbone Routers work virtually the same as Path.js.

```js
var App = Backbone.Router.extend({
    initialize: function(){
        this.appView = new appView();
        this.collection = new EtsyCollection();

        Backbone.history.start();
    },
    routes: {
        "etsy": "showEtsyItems", // matches http://example.com/#etsy
        "etsy/:id": "showEtsyItem", // matches http://example.com/#etsy/1234
        "download/*path": "downloadFile", // matches http://example.com/#/download/user/images/hey.gif
        "*actions": "defaultRoute" // matches anything not matched before this, i.e. http://example.com/#anything-here
    },
    defaultRoute: function(){
        //...
    },
    downloadFile: function(path){
        //...
    },
    showEtsyItems: function(){
        //...
    },
    showEtsyItem: function(id){
        //...
    }
})

window.onload = app;

function app(){
    var app = new App();
}
```

# Dealing wth Backbone (How do I approach a problem in Backbone?)

Backbone has four primary parts:

1. Backbone.Model
2. Backbone.Collection
3. Backbone.View
4. Backbone.Router

Most of the difficulty of Backbone comes from a few scenarios:

1. I have a bunch of nested views, and I need to make a view for my app, a view for my menu, a view for my sidebar, and a view for my main content. Each item in the main content then has 4 sub-views. HOW DO I ORGANIZE MY CODE FOR THIS!?

    Simply enough, a Backbone.View can be attached to anything, be it a Router, a Model, or a Collection. How you tell the View to `render()` is up to you.

2. I have a Collection from Foursquare, and a Collection from Yelp. How can I relate the two models?

    This is a little harder to explain, but you can use `Backbone.Relational` (a plugin). This essentially helps you tie to different Collections together by matching names or geolocations (or anything other property) between two or more Collections.

## Organizing big applications (and PubSub)

Imagine you were designing Gmail with Backbone. Gmail has mutliple menus, configurable options, different tabs, settings for your account, google chat/hangouts, calendar integrations, etc.

Sometimes in our apps, we need child views (inbox and hangouts tabs) to "talk" to each other. I mentioned someting called PubSub before. PubSub means "Publisher/Subscriber". It's also commonly referred to the Mediator pattern.

In a simple form, this just means that there is a global object (or object higher in the scope) that `publish()'es` to events with data, and there are multiple Views (or Models, etc) in the app dealing with unrelated parts of the app that `subscribe()` to these events.

We can demonstrate this simple structure with jQuery:

```js
(function($) {

    var o = $({});

    $.subscribe = function() {
        o.on.apply(o, arguments);
    };

    $.unsubscribe = function() {
        o.off.apply(o, arguments);
    };

    $.publish = function() {
        o.trigger.apply(o, arguments);
    };

}(jQuery));
```

We can use this code inside our app with two views quite easily (even when those two views hold no references to each other):

```js
var View1 = Backbone.Model.extend({
    initialize: function(){
        $.subscribe('SomeEventName', function(data){
            // ... do something with the data
        })
    }
})

var View2 = Backbone.Model.extend({
    events: {
        'click button': 'handleClick'
    },
    handleClick: function(event){
        event.preventDefault();
        $.publish('SomeEventName', { some: 'data' });
    }
})
```

This is something we can use by including the snippet at the top of this section.

# Backbone Events (http://backbonejs.org/#Events-catalog)

We can also tie-in Backbone's `Event` system, which uses jQuery events behind the scenes. We handle events in Backbone with:

```js
var object = {};

_.extend(object, Backbone.Events);

object.on("alert", function(msg) {
  alert("Triggered " + msg);
});

object.trigger("alert", "an event");
```

So, when we create a Model instance, somwhere inside Backbone.Model's source-code this happens:

```js
Backbone.Model = function(){
    // ...
    _.extend(this, Backbone.Events)
    // ...
}
```

Thus, we can use `on()`, `off()`, and `trigger()` with our Models:

```js
// define
var M = Backbone.Model.extend({});

// create
var m1 = new M();

// use
m1.on('change', function(){
    // ...
})
m1.on('change:name', function(){
    // ...
})
m1.on('change:name change:date', function(){
    // ...
})

m1.trigger('change:date', {})
```

We can listen to Model events inside of Views with `model.on()`:

```js
var M = Backbone.Model.extend({});
var V = Backbone.View.extend({
    initialize: function(){
        this.model.on("change:title change:author", this.render, this);
    },
    render: function(){
        // ...
    }
})
```

We can also just to a View instance to subscribe to a Model's events (slightly different way of doing the same thing):

```js
var M = Backbone.Model.extend({});
var V = Backbone.View.extend({
    initialize: function(){

        // listenTo() is called with:
        //      listenTo(model, eventName, callback)
        // listenTo() actually does this behind the scenes:
        //      model.on(eventName, callback, this)
        // in other words, it implies `this` is the object swinging the `callback` sword/function
        
        this.listenTo(this.model, "change:title change:author", this.render);
    },
    render: function(){
        // ...
    }
})
```

# Review of HTTP Verbs

```
url             HTTP Method  Operation
/api/books      GET          Get an array of all books (COLLECTION)
/api/books/:id  GET          Get the book with id of :id (MODEL)
/api/books      POST         Add a new book and return the book with an id attribute added (MODEL)
/api/books/:id  PUT          Update the book with id of :id (MODEL)
/api/books/:id  DELETE       Delete the book with id of :id (MODEL)
```

# Complexity in Backbone

We built an app that generates random names for your kids, to ensure they become "Pro Rippers":

- http://matthiasak.github.io/ProRipperNameGenerator/
- https://github.com/matthiasak/ProRipperNameGenerator

This idea came from this article: http://www.tetongravity.com/story/ski/how-to-name-your-kid-to-become-a-pro-ripper

# Homework

We are going to build an app in Backbone. This is going to be a large, group homework assignment due Thursday, Nov 13th.

Here are some requirements:

1. You must have a group of atleast 2 people, and each person must either fork the repo or be a contributor on that repo. **Each person must make atleast 10 commits throughout the week. I will verify and check.** That means... commit once an hour and you will easily get this.
2. You must have tests written for your project.
3. You must use a script loader.
4. You must have `"use strict";` in your code.
5. You must implement proper error handling if arguments don't meet expectations (`throw new Error("some error message")`).
6. You must use lodash templates.
7. You must use Backbone through and through.
8. You must use atleast 2 different Browser APIs, and you must either include polyfills for older browsers, or gracefully show error messages for browsers that don't support a Browser API.
9. You must structure your code with Single Responsibility Principle in mind.
10. You must use jQuery Promises. :-)
