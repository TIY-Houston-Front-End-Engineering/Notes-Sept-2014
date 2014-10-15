# Wednesday, Oct 15th

# Prototypes, Constructors, `this`

> http://bonsaiden.github.io/JavaScript-Garden/#object.prototype

```js
    function Character(name){
        this.name = name;
    }

    Character.prototype.fight = function(){
        console.log(this.name, this.power);
    }

    function Wizard(name){
        Character.apply(this, arguments);
        this.power = 10;
    }

    Wizard.prototype = new Character();
    Wizard.prototype.constructor = Wizard;
```

# lodash

	```
	Functions looked at:

	_.filter
	_.template
	_.extend
	_.map
	_.reduce
	_.forEach
	_.contains
	_.keys
	_.clone
	_.pick
	_.compact
	_.union
	_.flatten
	_.zip
	_.difference
	```

# Curriculum from today
- REST APIs (http://stackoverflow.com/questions/671118/what-exactly-is-restful-programming)
- Etsy's REST API and how to use it:
	1. We created an App with Etsy here: https://www.etsy.com/developers/documentation/getting_started/register
	2. Then we got an API key from here: https://www.etsy.com/developers/your-apps
		> The API key acts as our password
	3. We looked at the `listing` reference here: https://www.etsy.com/developers/documentation/reference/listing and the `user` reference here: https://www.etsy.com/developers/documentation/reference/user
	> **NOTE**: All entities (i.e. listing, user, shop) are part of the data, and have their own 'endpoint', just like `listing` and `user` above.
	4. We tested the REST API 'endpoints' with our API key:
		- get all active listings: https://openapi.etsy.com/v2/listings/active?api_key=aavnvygu0h5r52qes74x9zvo
		- we found this product on Etsy's website: https://www.etsy.com/listing/114711047/small-snow-white-cube-made-from-english
		- we found the same product on the API: https://openapi.etsy.com/v2/listings/114711047?api_key=aavnvygu0h5r52qes74x9zvo
		- we saw that this user made the product: https://www.etsy.com/shop/madebymanos?ref=l2-shopheader-name
		- we found that same user on the Etsy API: https://openapi.etsy.com/v2/users/19181170?api_key=aavnvygu0h5r52qes74x9zvo
	5. We wrote some code (modified at lunch to work Cross-domain: from http://localhost:3000 to https://etsy.com)
		```
		var etsy_url = "https://openapi.etsy.com/";
		var version = "v2/";
		var model = "listings/";
		var filter = "active";
		var js = ".js";
		var api_key = "aavnvygu0h5r52qes74x9zvo";
		var complete_api_url = etsy_url + version;

		$.getJSON(complete_api_url + model + filter + js + "?" + "api_key=" + api_key + "&callback=?").then(function(data){
			console.log(data);
		});
		```

# Homework
```

To be done, polished, and provided on Monday.
- Spend longer than 20 minutes and wrote nothing? Ask someone for help or move on!
- Up past 12:30am? GO TO BED!
- Keep "Do Not Disturb" on while you code. Every distraction costs you ~20min of time. Work in 'sprints'. This is scientifically proven.

 _______
| steps |
 -------
  \
   \
       ___
     {~._.~}
      (   )
     ()~*~()
     (_)-(_)

1) create a simple index.html file and an app.js file, (don't forget to include jQuery, normalize, typeplate, lodash, too)
2) in the JS
- write an EtsyClient() constructor and functions on that prototype to pull info from Etsy (using our example code above)
- create three *.tmpl files:
	- listings - should print HTML for a group of listings
	- listing - should print HTML for a single listing
	- user - should print HTML about a user
- templating with lodash: http://lodash.com/docs#template
- the EtsyClient(), when created with `new`, should load all the listings and display the listings template
- when a listing is clicked, the page should show that single listing's information AND get the user associated with the listing and show that information with the user template

NOTE: jQuery.get()/.getJSON() will be used to access over the 'network':
- the template files
- the Etsy API

3) use the server.js and package.json file provided at (https://github.com/TIY-Houston-Q3-Front-End/NodeServerRocks)
4) use myth (http://myth.io) to help you write smaller, cleaner CSS

Some setup code:
----------------------

function EtsyClient(options) {
    if (!options.api_key) {
        throw new Error("Yo dawg, I heard you like APIs. Y U NO APIKEY!?!?");
    }
    this.etsy_url = "https://openapi.etsy.com/";
    this.version = options.api_version || "v2/";
    this.api_key = options.api_key;
    this.complete_api_url = this.etsy_url + this.version;
}

EtsyClient.prototype.pullAllActiveListings = function() {
    var model = 'listings';
    var filter = 'active';
    return $.getJSON(this.complete_api_url + model + filter + ".js?api_key=" + this.api_key + "&callback=?").then(function(data) {
        console.log(data);
    });
}

EtsyClient.prototype.getListingInfo = function(id) {
    var model = 'listings';
    return $.getJSON(this.complete_api_url + model + '/' + id + ".js?api_key=" + this.api_key + "&callback=?").then(function(data) {
        console.log(data);
    });
}

// user?
```