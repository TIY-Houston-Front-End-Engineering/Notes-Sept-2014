# backbone (Model, Router, View)

- https://github.com/TIY-Houston-Q3-Front-End/Notes/tree/master/class_36
- https://github.com/TIY-Houston-Q3-Front-End/Notes/tree/master/class_37
- https://github.com/TIY-Houston-Q3-Front-End/Notes/tree/master/class_44
- Webster Wizerd
- Parse
- Firebase

# Serializing a form

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

# Model#validate

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
