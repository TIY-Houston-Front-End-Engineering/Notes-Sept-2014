# Wednesday, November 5th

```sh
 ______________________________________
/ today we chatted about Backbone.View \
| and introduced ourselves to general  |
\ Backbone 'style'                     /
 --------------------------------------
  \   ^__^
   \  (oo)\_______        ________
      (__)\       )\/\    |Super |
          ||----W |       |Milker|
          ||    UDDDDDDDDD|______|
```

# Backbone Models

Imagine we wanted to write our own class to manage:

- pulling and syncing data from a server
- enforcing defaults on domain data
- providing validation functions
- an event system for updates to domain data

This all falls under the Backbone Model.

> **Note:** our setup-script.sh has been updated to include Backbone!

# Creating our first Backbone Model

In Backbone-world, we always **create our own constructors by extending the default**.

```js
var Task = Backbone.Model.extend({
    // ...
})
var t1 = new Task({});
console.log(t1);
```

`t1` looks like this:

![](./examples/day33/backbone1.png)

Notice a few properties on this 'feller:
- `attributes` - a collection of key/value pairs that are passed to the instance constructor (`new Task({ ... })`) or provided in the `defaults`.
- `changed` - an object that will hold any key/value pairs of the Model instance that were just changed
- `cid` - there is a unique id given to every element created by a Backbone constructor (View, Model, etc). This is that unique id for this Model instance. For now, we'll just accept this exists and move on.

Notice some methods on our `prototype`, provided by Backbone.Model, which are accessible on the instance `t1`:
- `changedAttributes()` - returns a copy of the `changed` object, used to get the diff between the current and previous state for the instance
- `clear()` - empties out a Model's data
- `clone()` - creates an exact replica in memory of the Model instance and its data
- `fetch()` - pulls JSON information from a defined URL
- `initialize()` - whenever the constructor was called (`new Task()`), our `initialize` function is called. This is similar to our `init()` function created on the vanilla JavaScript stuff when we were learning about APIs.
- `off()/on()` - used to handle add/update/delete events, and so forth
- `sync()` - attempts to push this instance data up to a server
- `toJSON()` - creates a POJO (plain old JS object literal) with all the data from the instance.
- `set()/get()` - these are the getter and setter methods to use when retrieving or updating an instance's data; **you must use these when manipulating the model's data.**

# Options

There are two cases we supply options to our Backbone instances:
1. as part of the configuration to `Backbone.Model.extend({})`
2. as part of the options object to `new Task({})`

**We define the code for our `Task()` constructor and prototype in #1, and we define the specific data for our instance in #2.**

# Options for `Backbone.Model.extend()`

We can pass options in `Backbone.Model.extend({})`:

```js
var Task = Backbone.Model.extend({
    defaults: {
        title: 'Task title',
        isDone: false,
        inProgress: true
    },
    validate: function(attrs, options){
        if (!attrs.name){
            alert('Your animal must have a name!');
        }
        if (attrs.name.length < 2){
            alert('Your animal\'s name must have more than one letter!');
        }
    },
});
```

# Options for `new Task({})`

Backbone will pass the options object from `new Task({})` into `validate({})`. **If you want to pass options to validate, you need to write your `validate()` to handle that. By default `validate()` does nothing.**

We can pass instance data to the constructor:

```js
var t1 = new Task({
    title: "Some task name",
    dueDate: new Date(),
    isDone: false,
    inProgress: true
})
```

Any options passed into a Model instance constructor (`new Task({})`) will be validated and stored in the instance's `attributes` property.

# Backbone Collections

Collections are just lists of a particular Model with events that fire when something is added, changed, removed, etc. A Collection constructor is created (surprise!) yet again with `Backbone.Collection.extend({})`:

```js
var TaskList = Backbone.Collection.extend({
    model: Task
    // url: someUrlToPullAJsonArray
});
```

Notice that we only add one property to the options, a Model constructor, **NOT a Model instance**. There is an **optional** `url` argument that Backbone will use (when `fetch()` is called) to fill a Collection with Models populated with data from that `url`.

Let's create a Collection instance, and pass it an array of JSON data:

```js
var tasks = new TaskList([
    {title: "some task", isDone: true},
    {title: "some task 2", inProgress: false},
    {title: "some task 3"}
]);
```

The `tasks` Collection instance looks like this in the Chrome Dev Console:

![](./examples/day33/backbone2.png)

Notice a few properties on this 'feller:
- `length` - the number of Models in this Collection.
- `models` - an array of Models created/added by the constructor or through `Collection#add()`

Notice some methods on our `prototype`, provided by Backbone.Collection, which are accessible on the instance `tasks`. There are a **lot**, because Collections deal with arrays of Models, and Backbone uses lodash behind the scenes. Thus, it makes sense why we would see a lot of methods here:
- `add()` - adds a Model to the Collection and triggers an event
- `fetch()` - pulls down an updated Collection from a specified URL, returns a Promise object
- `get()/set()`
- `forEach()`
- `on()/off()`
- and of course all the lodash methods



