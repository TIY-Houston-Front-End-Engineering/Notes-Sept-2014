# React, Mithril, and other "Virtual DOM" frameworks

Pressed by my own curiosity, I started a journey to understand what can be generalized and unified in the different implementations of a React-like library. The best way I know to understand something isn't just to learn how it works but which problems it's trying to solve and **why it's designed that way**.

I'll start with a bare model and then I'll add feature after feature trying to explain the design decisions (just like Etsy, Promises, Routing, Backbone Views, Backbone Models/Collections, Backbone Router, ...), pointing when possible to the corresponding implementations in React, Mithril and Mercury.

Backbone is an MVC framework focused on building really structured classes that pull information from the web and printing it to the DOM. When application size/scale/structure gets unruly, it can be difficult to manage the complexity of DOM writing and interaction.

React and others take a very different approach to making apps render fast - there's this concept of a virtual DOM. Imagine the virtual DOM like a long English paper. If the data behind a React Component (similar to a Backbone View) changes, then React automatically creates a new string of HTML and puts it in the Virtual DOM (our big English paper). The virtual DOM engine knows how to find the smallest section of the HTML that changed, and write that to the live DOM.

It's a really fast way to draw browser updates. Think of it like using a hammer with nails. You can hammer a hundred nails into a fence-board to keep it secure from strong winds, or you can find the weak point and put just one nail in. That's what the virtual DOM does :-) it finds where to update the smallest part of the DOM, optimizing how the browser renders.

# History of React

> So, the history of React is that we had this awesome way of building front-end on PHP called XHP. We had been using it very successfully on the server for a while and when you moved to JS you were left with bare DOM manipulation which was terrible.
>
> The idea of React was to port the XHP way of writing interfaces to JS. The three main characteristics are:
>
> - syntax extension to write XML inside of JS
> - components
> - using JS to generate markup (and not a template language)
>
> The big question that needed to be answered was how do you deal with updates? On the server you just re-render the entire page so you don't have to deal with this. In React, the diff algorithm and lifecycle methods were invented.

React contains this nice "middle-state" called the virtual DOM, which is the result of the PHP serverside XHP implementations :-)

Why? There are three major reasons:

- Performance - the virtual DOM can render updates REALLY fast
- Flexibility - the React Components are really flexible, composable, and even work nested
- Testability - React Components can be embedded easily in TDD/BDD suites :D

# Intro the Virtual DOM

Manual DOM manipulation is messy and keeping track of the previous DOM state is hard. A solution to this problem is to write your code as if you were recreating the entire DOM whenever state changes. Of course, if you actually recreated the entire DOM every time your application state changed, your app would be very slow and your input fields would lose focus.

> https://github.com/Matt-Esch/virtual-dom

# React Components

React Components are defined in JavaScript as objects. Observe the following code. The comments above each block are what will be generated when rendered by React.

```js
// <a href="http://facebook.github.io/react/">React</a>
var anchor = {
  tag: 'a',
  attrs: {href: 'http://facebook.github.io/react/'},
  children: 'React'
};

// <p class="lead">
//   <span>A JavaScript library for building user interfaces </span>
//   <a href="http://facebook.github.io/react/">React</a>
// </p>
var paragraph = {
  tag: 'p',
  attrs: {className: {'lead': true}},
  children: [
    {
      tag: 'span',
      children: 'A JavaScript library for building user interfaces '
    },
    react
  ]
};
```

# How React Implements Views (kinda)

React has some intrinsic methods to create "views", which essentially return a state object (like above), with nested components.

```js
// a simple view, outputs a bolded link
function anchorView(state) {
  return {
    tag: 'a',
    attrs: {href: state.url},
    children: {
      tag: 'b',
      children: state.text
    }
  };
}
```

# Composing Views (putting one view inside another)

An interesting property of such views is that they can be composed with any function that outputs JSON, and included inside other views really easily. This means you can use the power of functional programming in the view world:

```js
// button: object -> VDOM (a view without styling, the output of my library)
function button(style) {
  return {
    tag: 'button',
    attrs: {className: style}
  };
}

// boostrap: string -> object (Bootstrap 3 style)
function bootstrap(type) {
  var style = {btn: true};
  style['btn-' + type] = true;
  return style;
}

// boostrap: string -> object (Pure css style)
function pure(type) {
  var style = {'pure-button': true};
  style['pure-button-' + type] = true;
  return style;
}

// bootstrapButton: string -> VDOM
// bootstrapButton is a function that passes inputs to bootstrap(),
// takes the output from boostrap() and passes it to button()
var bootstrapButton = compose(button, bootstrap);

// pureButton: string -> VDOM
// so we could have styling for different kinds of buttons, with
// minimal extra effort! (yey)
var pureButton = compose(button, pure);

console.log(bootstrapButton('primary'));
```

prints

```js
{
  "tag": "button",
  "attrs": {
    "className": {
      "btn": true,
      "btn-primary": true
    }
  }
}
```

You obtain flexibility without loss of control:

- you can rely on the expressiveness of JavaScript instead of learning a separate template language
- the output of a view is determined by its input
- you can customize the output simply applying a JSON transformation


# React rendering

React has this `render()` method that takes a state object (a view) from above, and creates that associated HTML:

```js
// puts
// <a href="http://facebook.github.io/react/">React</a>
// in document.body
React.render(anchorView({
  href: 'http://facebook.github.io/react/',
  text: 'React'
}), document.body);
```

# Installing React

Do you really have to ask? (troll).

```sh
bower install react --save
```

- `--save` stores React as a dependency in `bower.json`.
- `npm install ... --save` does the same with `package.json`. Since we added `node_modules` to our `.gitignore`, whenever someone clones our repos (`git clone ...`) they can simply run `npm install`, which reads the `package.json` file and installs all `--save`d packages.

# The Official™ React Build `render()`

As discussed above, there are ways to create React Components, and then render them to the screen. You are now ready to try the Real React Way™.

```js
var HelloMessage = React.createClass({displayName: 'HelloMessage',
  render: function() {
    // anytime render() is called, React will create a string of HTML and give that to the virtual DOM
    // render(tagName, elementAttributes, text, properties)

    return React.createElement("div", {}, "Hello ", this.props.name); //<-- this.props is {name: "..."} from line below
  }
});

React.render(React.createElement(HelloMessage, {name: "John"}), document.body);
```

This code creates a constructor called HelloMessage. When we want to visually update the DOM, we tell React to `render(components)` and pass one or more components (which can have subcomponents)

# Stateful React Components

React Components have their own default properties that React code will access (sorta like Backbone Views, Models, etc):

- displayName: a canonical name for this component,
- getInitialState: a method that returns a state object when a component is first created,
- componentDidMount: a method that is called when the component is mounted (rendered) to the DOM,
- componentWillUnmount: a method that is called when a component is unmounted (removed) from the DOM,
- render: a method that returns a Virtual DOM object that represents the HTML of the component/view,
- setState: a method on React Components that, when called, tells the Virtual DOM to re-render to the screen.

The other method on this component (`tick()`) is run in the code by `componentDidMount()`. This is akin to creating your own `init` method on a Backbone.View and calling `init` from `initialize`.

```js
var Timer = React.createClass({
  displayName: 'Timer',
  getInitialState: function() {
    return {secondsElapsed: 0};
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      React.createElement("div", {}, "Seconds Elapsed: ", this.state.secondsElapsed)
    );
  }
});

React.render(React.createElement(Timer, null), document.body);
```

Here's a breakdown of this code in chronological order:

1. The above code `render()`s a React Component to `document.body`.
- Internally, the `Timer` component gets attached to `document.body`.
- `getInitialState()` is called, which returns a tiny state object with `{secondsElapsed: 0}`.
- When this happens, `componentDidMount()` is called,
- ... which creates a `setInterval()`, that calls `tick` every 1000ms.
- After `componentDidMount()` is called, React internally tells this Component to `render()`.
- Every second after this, `tick()` is called,
- ... which calls `this.setState()` with a new state object
- ... `setState()` in React internally tells this Component to `render()` automatically, drawing the updated state to the screen.

# Event Handling and Synthetic Events

With React you simply pass your event handler as a camelCased prop.

```js
var Timer = React.createClass({
  ...,
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  ...
});

React.render(React.createElement(Timer, {onClick: this.tick}), document.body);
```

React ensures that all events behave identically in IE8+ by implementing a synthetic event system, not unlike Backbone.View.

If you'd like to use React on a touch device such as a phone or tablet, simply call React.initializeTouchEvents(true); to enable touch event handling.

# Under the Hood: Autobinding and Event Delegation

Under the hood, React does a few things to keep your code performant and easy to understand.

1. **Autobinding**: When creating callbacks in JavaScript, you usually need to use `self`. With React, every callback method is automatically bound to `this`, so you don't have to use `self`.
2. **Event delegation**: React attaches event handlers to the top-level DOM element of that component - simlarly to Backbone.View's `events`. When a component is mounted or unmounted, the event handlers are simply added or removed from the DOM.

# What Components Should Have State?

The Timer component above has state. How do we know when to give a component state, or just pass in new props to `render()`?

- Sometimes you need to respond to user input, a server request or the passage of time. For this you use state.
- **Try to keep as many of your components as possible stateless.**
- A common pattern is to create several stateless components that just `render()` data, and have a stateful component above them in the hierarchy that passes its state to its children via `props`. The stateful component encapsulates all of the interaction logic, while the stateless components take care of rendering data in a declarative way.
- State should contain data that a component's event handlers may change to trigger a UI update. (such as the Timer component's `secondsElapsed`)

# Nesting Components in React

We're going to demo a ToDo list app as an intro to nesting components (like nesting Views in Backbone).

```js
var TodoApp = React.createClass({
  displayName: 'TodoApp',
  getInitialState: function() {
    return {items: [], text: ''};
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([this.state.text]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  },
  render: function() {
    return ...
  }
});

React.render(React.createElement(TodoApp, null), document.body);
```

Here's a breakdown of this code in chronological order:

1. The above code `render()`s a React Component to `document.body`.
- Internally, the `TodoApp` component gets attached to `document.body`.
- `getInitialState()` is called, which returns a tiny state object with `{items: [], text ''}`.
- When this happens, `componentDidMount()` is called, which does nothing here (it is an empty function by default, kinda like Backbone's `initialize()`).

You'll notice that the `render()` is left empty right now. Let's put together a nested structure of React Components:

```js
var TodoApp = React.createClass({
  ...,
  render: function() {
    return (
      // <-- create a div
      React.createElement("div", null,
        // <-- embed an h3 with TODO
        React.createElement("h3", null, "TODO"),
        // <-- embed a TodoList component, with some JSON items as state
        React.createElement(TodoList, {items: this.state.items}),
        // <-- embed a form with a submit event handler
        React.createElement("form", {onSubmit: this.handleSubmit},
          // <-- embed an input tag with a change event handler
          React.createElement("input", {onChange: this.onChange, value: this.state.text}),
          // <-- embed a button
          React.createElement("button", null, 'Add #' + (this.state.items.length + 1))
        )
      )
    );
  }
});
```

> Notes/comments in the code above.

The `TodoList` component from above is the following. Notes/comments in the code again:

```js
var TodoList = React.createClass({
  displayName: 'TodoList',
  render: function() {
    var createItem = function(itemText) {
      return React.createElement("li", null, itemText);
    };
    // <-- return a ul, with an array of li's inside it
    // <-- this.props.items is an array
    // <-- ... array.map creates a new array
    // <-- ... that new array consists of a bunch of li components returned by createItem()
    return React.createElement("ul", null, this.props.items.map(createItem));
  }
});
```

# JSX

React has tools that compile this strange language (JSX) into HTML and JavaScript. React's JSX looks like this (from our Timer example earlier):

```
var Timer = React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 0};
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
    );
  }
});

React.render(<Timer />, mountNode);
```

and the resulting code compiled by the tool is what we saw earlier in this write-up:

```js
var Timer = React.createClass({displayName: 'Timer',
  getInitialState: function() {
    return {secondsElapsed: 0};
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      React.createElement("div", null, "Seconds Elapsed: ", this.state.secondsElapsed)
    );
  }
});

React.render(React.createElement(Timer, null), mountNode);
```

For more info on the JSX compiler, see:

- http://facebook.github.io/react/downloads.html#npm
- https://www.npmjs.org/package/gulp-cjsx

# Resources

- [This slidedeck about React (PDF)](./examples/day41/hackreactor.pdf)
- The official React site - http://facebook.github.io/react/
- React Docs - http://facebook.github.io/react/docs/getting-started.html
- https://www.npmjs.org/package/gulp-cjsx
- React + Google Material UI = http://material-ui.com/#/components/buttons

# Closing thoughts

React is amazingly useful for building UI views/components. It's fast, flexible, and let's us use the same JS code on the client (browser) or server (Node.js) to create an HTML string (Virtual DOM). In the browser, we can use that to just set `innerHTML`. On the server, we can just send down the HTML string and have the browser render this as a regular ol' HTML file.

# Homework

- Monday, Nov 17th

    1. I will be reviewing your BB projects here shortly, and grading them.
    - Watch http://vimeo.com/96425312 and **blog** about what you learned.
    - Continue reading through https://github.com/matthiasak/Vunderlistfest, we will complete this as we progress this week.
    - **start brainstorming final projects** - we will discuss this first thing in the morning

        > Some general thoughts, prerequisites, and other tidbits:
        >
        >
            - App has organized UX, number of screens, mockups, workflow, typography/fonts, images, design
            - App is checked into GitHub with a valid README
            - App is deployed onto Heroku showing understanding of deployment with at least one provider
            - App uses Firebase or Parse
            - App has some sort of authentication (either through Firebase/Parse, or through hello.js, etc)
            - App has tests
            - App has things like searching, user form input, or some level of search and filtering for information

- Tuesday, Nov 18th

    1. Clone this and add some features https://github.com/matthiasak/Vunderlistfest, we will complete this as we progress this week.
        1. On page 1:
            - add the ability to add and delete a TodoList to the TodoLists Collection
        - On page 2:
            - add the ability to edit and "mark done" a Todo in a Todos Collection
    - Brainstorm final projects,
    - Finally try test yourself with these JS interview questions http://www.toptal.com/javascript/interview-questions