# Tuesday, October 14th

```js
 _________________________________________
/ Today we covered Promises, $.when,      \
| $.then, wrote our own Promise           |
| implementation and showed how $.get     |
| works, we covered lodash and underscore |
| a little bit, and looked at templating. |
| Finally, we watched a video on making   |
\ our own games :)                        /
 -----------------------------------------
          \
           \
            \          __---__
                    _-       /--______
               __--( /     \ )XXXXXXXXXXX\v.
             .-XXX(   O   O  )XXXXXXXXXXXXXXX-
            /XXX(       U     )        XXXXXXX\
          /XXXXX(              )--_  XXXXXXXXXXX\
         /XXXXX/ (      O     )   XXXXXX   \XXXXX\
         XXXXX/   /            XXXXXX   \__ \XXXXX
         XXXXXX__/          XXXXXX         \__---->
 ---___  XXX__/          XXXXXX      \__         /
   \-  --__/   ___/\  XXXXXX            /  ___--/=
    \-\    ___/    XXXXXX              '--- XXXXXX
       \-\/XXX\ XXXXXX                      /XXXXX
         \XXXXXXXXX   \                    /XXXXX/
          \XXXXXX      >                 _/XXXXX/
            \XXXXX--__/              __-- XXXX/
             -XXXXXXXX---------------  XXXXXX-
                \XXXXXXXXXXXXXXXXXXXXXXXXXX/
                  ""VXXXXXXXXXXXXXXXXXXV""

```

# Promises, `$.Deferred`, `$.get/getJSON/ajax/post`

`$.get()` is built on top of a built-in object in JavaScript called `XMLHttpRequest`.

First off, to see how much crazy detail exists for `XMLHttpRequest()`'s, have a look at https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest.

## XMLHttpRequest

Using `XMLHttpRequest` is a bit like this:

```js
var myRequest = new XMLHttpRequest();
myRequest.onload = function(){
    var json = JSON.parse(this.responseText);
    console.log(json);
};
myRequest.open("get", "https://api.github.com/users/matthiasak", true);
myRequest.send();
```

This is actually quite similar to yesterday's `$.getJSON()` example:

```js
$.getJSON("https://api.github.com/users/matthiasak").then(function(data){
    console.log(data);
})
```

## Building our own Promises (but very incomplete)

Both methods still use a `callback` function: `myRequest.onload = ...` and `$.get().then(...)`. This implies some sort of magic that jQuery uses... but really... it isn't magic at all. :-)

Imagine a `Promise` function and prototype:

```js
function Promise(request){}
Promise.prototype.then = function(callback){}
```

Now just assume we can use:

```js
function get(url){
    var myRequest = new XMLHttpRequest();
    var p = new Promise(myRequest);
    myRequest.open("get", url, true);
    myRequest.send();
    return p;
}
````

Then, we can implement the `Promise()` methods:

```js
function Promise(request){
    this.request = request;
}
Promise.prototype.then = function(callback){
    var self = this;
    var feedDataIntoCallback = function(){
        var json = JSON.parse(self.request.responseText);
        callback(json);
    }

    if(this.request.readyState === 4){
        feedDataIntoCallback();
    } else {
        this.request.onload = feedDataIntoCallback;
    }
}
```

Let's string all of that together:

```js
function get(url){
    var myRequest = new XMLHttpRequest();
    var p = new Promise(myRequest);
    myRequest.open("get", url, true);
    myRequest.send();
    return p;
}
function Promise(request){
    this.request = request;
}
Promise.prototype.then = function(callback){
    var self = this;
    var feedDataIntoCallback = function(){
        var json = JSON.parse(self.request.responseText);
        callback(json);
    }

    if(this.request.readyState === 4){
        feedDataIntoCallback();
    } else {
        this.request.onload = feedDataIntoCallback;
    }
}

get("https://api.github.com/users/matthiasak").then(function(data){
    console.log(data);
})
```

Looks a bit more like `$.get()` now!

```js
$.getJSON("https://api.github.com/users/matthiasak").then(function(data){
    console.log(data);
})
```

jQuery provides so much more than `$.get()`. The real power is in the Promises, which are able to not only handle when **one** request finished, but handle **multiple requests in parallel**.

## Handling multiple Promises in parallel

```js
var promise1 = $.get(...);
var promise2 = $.get(...);

$.when(promise1, promise2).then(function(resultsOfPromise1, resultsOfPromise2){
    // ...
})
```

# Underscore / lodash

Underscore (http://underscorejs.org/, `bower install underscore`) and lodash (https://lodash.com/, `bower install lodash`) are two sides of the same coin.

People originally used Underscore for two reasons:
- in older browsers, it gave us the ability to use `_.forEach()` even though they don't have ES5 (which provides functions like `Array.prototype.forEach`, etc)
- it also provided a TON of utility functions that today I see as essential to the JavaScript developer's toolbelt

Sometime later, lodash came along and stole the show. Lodash happens to have all the exact same functions AND signatures: (i.e. it also gets stored on a global variable `_` with methods like `_.forEach()`). Lodash simply is faster, which is why I prefer it.

Many of the functions from our previous homework are actually implemented in lodash: https://lodash.com/docs

That means `_.forEach`, `_.filter`, `_.reduce`, `_.map`, `_.where`, `_.reject`, etc are all there. Yey! :yey:

One thing I will focus on today with lodash is new: `_.template`, which can be used to plug data (from AJAX) into HTML and put it on the DOM.

## EDIT

> Add this to your code when after including lodash:

    ```js
    _.templateSettings.interpolate = /{([\s\S]+?)}/g;
    ```


```js
var someHtmlString = "<h1>{title}</h1>";
document.body.innerHTML = _.template(someHtmlString, {title: 'This is my title text'})
```

Templating makes it very easy to write only a little JavaScript to generate a lot of HTML, unlike yesterday's example.

In fact, I can quickly scale this up to handle large amounts of data, such as the user info from the Github API:

```js
var someHtmlString = [
        "<img src='{avatar_url}'>",
        "<h1>{name}</h1>",
        "<ul>",
            "<li> blog: {blog} </li>",
            "<li> location: {location} </li>",
            "<li> email: {email} </li>",
        "</ul>"
    ].join("");

function writeToDOM(data){
    document.body.innerHTML = _.template(someHtmlString, data);
}

$.getJSON("https://api.github.com/users/matthiasak").then(writeToDOM)
```

# Resources

- Video on "making Space Invaders from scratch": http://vimeo.com/105955605

## EDIT

Shawn setup this awesome install "script" / checklist: https://gist.github.com/prufrock123/7a3d84263e2bc06e1bec#file-gistfile1-md

I decided I would help y'all automate this with a little shell script:

```sh
curl https://raw.githubusercontent.com/TIY-Houston-Front-End-Sept-2014/Notes/master/examples/extras/setup-project.sh > install.sh
chmod a+x install.sh
./install.sh <folderName> <gitSshUrl>
```

Where foldername is the name of the folder you are going to create, and the SSH URL is your github repo url that you will be cloning

# Homework

Recreate the design for the Github Repos page (e.g. https://github.com/matthiasak?tab=repositories).

- install all the goodies to your new Github repo with bower (normalize, typeplate, jquery)
- save our gulpfile, and run `npm install gulp gulp-autoprefixer gulp-jshint --save-dev`
- create our git-post-hook
- https://api.github.com/ lists endpoints for grabbing information off of Github. I crawled through the URL's and found that I could grab my:
    - user info from https://api.github.com/users/matthiasak
    - and repos info from https://api.github.com/users/matthiasak/repos
    - **NOTE** replace my username with your own
- you will need to do multiple, parallel queries with `$.when()` to pull the data from Github
- use `_.template`
    > Add this to your code when after including lodash:

    ```js
    _.templateSettings.interpolate = /{([\s\S]+?)}/g;
    ```
