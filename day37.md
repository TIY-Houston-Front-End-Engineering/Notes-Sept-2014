# Tuesday, Nov 11th

```sh
```

# BaaS (Backend as a Service)

Backends-as-a-Service replace the need for a dev-team to implement particular pieces of functionality on our servers. In our case, this means that instead of coding a "smart" server in Node.js (or something), we can just host our code on Github and use some resource (via JavaScript).

BaaS's vary a little from typical API's, because htey let you store your own application data in your own defined structure on someone else's server :-)

There are many BaaS's out there, some of which have already been mentioned in our [day24 notes](./day24.md):

- Dropbox - https://www.dropbox.com/developers/datastore
- AWS - http://aws.amazon.com/sdk-for-browser/
- Firebase - https://www.firebase.com/how-it-works.html
- Parse - https://parse.com/docs/js_guide#javascript_guide - https://parse.com/downloads/javascript/parse-1.2.19.js
- Meteor (has a deploy tool just like heroku, comes with front end and back end code) - http://docs.meteor.com/#top

# All about that BaaS, bout that BaaS...

Building an application is full of tedious and difficult tasks. Nearly every app needs a database, an API, and authentication. With Firebase — all of this is done for you.

- Save data in the cloud

    Firebase is a realtime NoSQL database. That means, we just push and pull JSON to/from it.

    This is ideal for things like multiplayer games, too, because Firebase establishes a WebSocket connection (persistent, open TCP connection), which provides very fast bi-directional messages.

- RESTful

    At a high level, Firebase is simply a database with a RESTFul API. Each individual Firebase (read: app) has a name and its own URL endpoint. Therefore if your Firebase’s name is `my-firebase`, the URL would be `https://my-firebase.firebaseio.com/`. Using this API endpoint you can easily store and read data right out of your Firebase.

- Builtin Authentication

    Firebase also provides a Simple Login Service with several types of built-in authentication. Simple Login allows you to authenticate with email and password or third party providers such as Facebook, Twitter, Google, and GitHub. If you need to integrate with your own login system, that’s no problem. Simple Login supports custom login methods as well.

# Firebase

1. Install it with:

    ```sh
    $ bower install --save backfire
    ```

2. Include the downloaded `firebase.js` and `backbone-firebase.js` in your app (using loader?)
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

