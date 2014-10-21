# Wednesday, Oct 22nd

```sh
 ________________________________
/ Today is all about Test Driven \
\ Development.                   /
 --------------------------------
  \
   \          .
       ___   //
     {~._.~}//
      ( Y )K/
     ()~*~()
     (_)-(_)
     Luke
     Sywalker
     koala
```

# BDD and TDD

> **Disclaimer**: Behavior Driven Development and Test Driven Development are typically included under the same moniker, and really don't differ too much. We will specifically focus on BDD. But seriously, they are almost exactly the same thing save a function or two's names.

BDD is a weird, backwards way of programming. It is slower to do this, but writing tests for your code **before** writing the complete implementation of your code makes you think about the Single Responsibility Principle and how your Constructors/Prototypes should be structured.

In other words, Behavior Driven Development **uses** forces you to invoke your functions first, and then declare them later.

Weird, huh? So how do we use our code before it's written? Won't that throw errors?

**Yes!** That is exactly the point of this next section:

##### BDD is implemented using a process typically termed "Red, Green, Refactor":

1. You write a single test, make the test fail (i.e. a Constructor `Cat()` doesn't exist yet),
2. Then you make that test pass (i.e. create a Constructor `Cat()`),
3. Finally you repeat this process until your app is complete.

##### Why is this awesome on big projects?

Whenever someone uses your code, makes edits to it, or you simply haven't touched the code for a while and there's a new version of jQuery out (or whatever other dependencies you are using), your code may no longer work.

Wouldn't it be nice if some tests could tell you with certainty that your code will work?

Hint: that is what TDD will do :-)

However, that means writing tests isn't good enough, you have to write **testable JavaScript**.

# Installing a testing framework

Mocha and Chai are two separate projects that are used in tandem to provide a testing framework. I have taken the liberty of adding these to our setup-projects.sh file at https://github.com/TIY-Houston-Front-End-Sept-2014/Notes/blob/master/examples/extras/setup-project.sh.

These are just driven by JavaScript, and thus can be run by Node (i.e. by Gulp) or in the browser (which is the method we will take).

I have already updated our `setup-projects.sh` file to create a `test` folder with a `main.js` file inside, and a `test.html` file in the project's root directory.

If you are needing some documentation for Mocha and Chai:

- Mocha - (http://mochajs.github.io/mocha/) - Mocha provides a test runner (e.g. `describe` and `it`).
- Chai - (http://chaijs.com/) - Chai provides the expectations (e.g. `to.be.true`).

# Writing Testable JavaScript

There's a lot of fantastic resources out there to whet your whistle, but these particular resources below are a great start to learning how others write testable JavaScript:

- [Video](https://www.youtube.com/watch?v=OzjogCFO4Zo)
- [Slides](https://speakerdeck.com/rmurphey/writing-testable-javascript)
- [Article](http://alistapart.com/article/writing-testable-javascript)

# Other resources

- JavaScript Koans - (https://github.com/mrdavidlaing/javascript-koans)