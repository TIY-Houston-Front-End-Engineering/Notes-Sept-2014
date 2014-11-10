# Firebase

1. Install it with:

    ```sh
    $ bower install --save backfire
    ```

2. Include firebase.js and backbone-firebase.js in your app (using loader?)
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