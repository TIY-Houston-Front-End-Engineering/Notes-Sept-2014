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

# Homework

Create a brand new Github repo and use the new, shiny `setup-project.sh` in the `examples/extras` folder of this Notes repo to initialize everything.

Have a look at the `test` folder created by the script, the `test/main.js` file created by the script, and the `test.html` file created by the script.

The `test.html` file, when loaded in the browser, will load `mocha`, `chai`, `jquery`, `lodash`, and the `test/main.js` file. If you create any files under `/js/` which have Constructors and Prototypes declared, you will need to include those files in `test.html` as well (because the browser needs to load them to test them, of course).

Now, we are going to write some tests for Arrays to whet our whistle. Add the following to `main.js` in-between the comment sections marked 'your code here', and add your own code or value to every spot marked 'FILL_ME_IN' to make all the tests pass.

You can check that the tests are passing or failing by opening `test.html` in your browser via either of the following:

```sh
# if you are running the local server with `gulp watch`
open localhost:3000/test.html

# if you aren't
open ./test.html
```

```js
var FILL_ME_IN;
describe("About Arrays", function() {

    //We shall contemplate truth by testing reality, via spec expectations.
    it("should create arrays", function() {
        var emptyArray = [];
        expect(typeof(emptyArray)).to.equal(FILL_ME_IN);
        expect(emptyArray.length).to.equal(FILL_ME_IN);

        var multiTypeArray = [0, 1, "two",
            function() {
                return 3;
            }, {
                value1: 4,
                value2: 5
            },
            [6, 7]
        ];
        expect(multiTypeArray[0]).to.equal(FILL_ME_IN);
        expect(multiTypeArray[2]).to.equal(FILL_ME_IN);
        expect(multiTypeArray[3]()).to.equal(FILL_ME_IN);
        expect(multiTypeArray[4].value1).to.equal(FILL_ME_IN);
        expect(multiTypeArray[4]["value2"]).to.equal(FILL_ME_IN);
        expect(multiTypeArray[5][0]).to.equal(FILL_ME_IN);
    });

    it("should understand array literals", function() {
        var array = [];
        expect(array).to.equal([]);

        array[0] = 1;
        expect(array).to.equal([1]);

        array[1] = 2;
        expect(array).to.equal([1, FILL_ME_IN]);

        array.push(3);
        expect(array).to.equal(FILL_ME_IN);
    });

    it("should understand array length", function() {
        var fourNumberArray = [1, 2, 3, 4];

        expect(fourNumberArray.length).to.equal(FILL_ME_IN);
        fourNumberArray.push(5, 6);
        expect(fourNumberArray.length).to.equal(FILL_ME_IN);

        var tenEmptyElementArray = new Array(10);
        expect(tenEmptyElementArray.length).to.equal(FILL_ME_IN);

        tenEmptyElementArray.length = 5;
        expect(tenEmptyElementArray.length).to.equal(FILL_ME_IN);
    });

    it("should slice arrays", function() {
        var array = ["peanut", "butter", "and", "jelly"];

        expect(array.slice(0, 1)).to.equal(FILL_ME_IN);
        expect(array.slice(0, 2)).to.equal(FILL_ME_IN);
        expect(array.slice(2, 2)).to.equal(FILL_ME_IN);
        expect(array.slice(2, 20)).to.equal(FILL_ME_IN);
        expect(array.slice(3, 0)).to.equal(FILL_ME_IN);
        expect(array.slice(3, 100)).to.equal(FILL_ME_IN);
        expect(array.slice(5, 1)).to.equal(FILL_ME_IN);
    });

    it("should know array references", function() {
        var array = ["zero", "one", "two", "three", "four", "five"];

        function passedByReference(refArray) {
            refArray[1] = "changed in function";
        }
        passedByReference(array);
        expect(array[1]).to.equal(FILL_ME_IN);

        var assignedArray = array;
        assignedArray[5] = "changed in assignedArray";
        expect(array[5]).to.equal(FILL_ME_IN);

        var copyOfArray = array.slice();
        copyOfArray[3] = "changed in copyOfArray";
        expect(array[3]).to.equal(FILL_ME_IN);
    });

    it("should push and pop", function() {
        var array = [1, 2];
        array.push(3);

        expect(array).to.equal(FILL_ME_IN);

        var poppedValue = array.pop();
        expect(poppedValue).to.equal(FILL_ME_IN);
        expect(array).to.equal(FILL_ME_IN);
    });

    it("should know about shifting arrays", function() {
        var array = [1, 2];

        array.unshift(3);
        expect(array).to.equal(FILL_ME_IN);

        var shiftedValue = array.shift();
        expect(shiftedValue).to.equal(FILL_ME_IN);
        expect(array).to.equal(FILL_ME_IN);
    });
});
```

Some of these tests will be done in-class as an example, so pay attention. :-)