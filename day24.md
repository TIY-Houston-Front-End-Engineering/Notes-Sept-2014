# Thursday, Oct 23rd

```sh
 ________________________________________
/ Today is all about the beautiful world \
\ of API's                               /
 ----------------------------------------
  \     .    _  .
   \    |\_|/__/|
       / / \/ \  \
      /__|O||O|__ \
     |/_ \_/\_/ _\ |
     | | (____) | ||
     \/\___/\__/  //
     (_/         ||
      |          ||
      |          ||\
       \        //_/
        \______//
       __ || __||
      (____(____)
```

# Model-View-Controller

We've just finished our stint in the Etsy API. We've learned that API's have a lot to offer, and that they make a service or ecosystem of apps more scalable and open, where we can integrate almost any services we choose into a nice "mashup".

We've already hit the nail on the head when it comes to MVC structure. The rest of the class is all about MVC frameworks, patterns, and problem-solving with code.

So let's have a gander again at MVC on last time. An MVC application is broken into three parts:

- `M` - Model: the data/JSON stored from Etsy, and maybe the methods that pull the data from the Etsy API
- `V` - View: the templates created, and maybe the methods that draw them to the screen
- `C` - Controller: the mechanisms used to control application flow and state, such as with Path.js to handle hash-routes

Most of the time, the Model is the part of our code that pulls and pushes information back-and-forth to an API.

So with that...

# Happy API days!

We are going to do a project on working with 2 or more real APIs. If you recall, APIs provide 3 primary methods for us front-end devs to access them:

1. CORS - JSON (not all are CORS)
2. non-CORS - JSONP (not all are JSONP)
3. server-side proxy (our local server makes the JSON request for us, and returns it to the browser)

Method 3 is a little harder for us to implement, but we'll get there soon. :-)

Now, we've been doing `$.get()` enough to get information from Etsy, for example, but we haven't used `$.post()` to push any information up to a live service.

By **authenticating** with a service, we can actually push information up to services. One particular library that can help us do that is `hello.js` (http://adodson.com/hello.js/#install).

Aside from what `hello.js` provides access to, the following list is a large list of APIs that provide a mix of CORS/JSONP/proxy-able services.

## Social APIs

- meetup - http://www.meetup.com/meetup_api/
- klout - https://klout.com/s/developers/v2
- twitter - https://dev.twitter.com/
    - twitter "intents" (put interactive widgets on your page and have someone tweet/reply to you via twitter) - https://dev.twitter.com/docs/intents
    - twitter for websites (follow button, embed tweets on a page) - https://dev.twitter.com/docs/tfw
    - REST API (uses OAuth) - https://dev.twitter.com/docs/api/1.1
- facebook - https://developers.facebook.com/
- linkedin - https://developer.linkedin.com/apis
- foursquare - https://developer.foursquare.com/
- yelp - http://www.yelp.com/developers/documentation/v2/search_api
- github - https://developer.github.com/v3/

## Food-related APIs

- Yummly - https://developer.yummly.com/

## Government and Civil APIs

- Capitol Words - http://capitolwords.org/term/code/?search=1
- CDC - https://data.cdc.gov/ and http://wonder.cdc.gov/
- Federal Data.gov project - https://www.data.gov/developers/apis

## Weather APIs

- Forecast.io - https://developer.forecast.io/

## Google APIs

> Using the Google SDJ (a .js file) may be necessary and the easiest way to get started with Google APIs

    - https://developers.google.com/api-client-library/javascript/start/start-js
    - https://developers.google.com/apis-explorer/#p/

- maps, directions, geocoder, places, etc - https://developers.google.com/maps/documentation/javascript/
- feed - https://developers.google.com/feed/v1/devguide
- plus - https://developers.google.com/+/web/
- static maps - just a url for an image, e.g.:

    > http://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284

- streetview api - again just a url, e.g.: http://maps.googleapis.com/maps/api/streetview?size=400x400&location=40.720032,-73.988354&fov=90&heading=235&pitch=10
- tasks - https://developers.google.com/google-apps/tasks/v1/reference/tasks/update
- Google custom search engine - https://developers.google.com/custom-search/json-api/v1/overview

## Music and Video APIs

- Spotify - https://developer.spotify.com/
- Soundcloud - https://developers.soundcloud.com/
- Deezer - http://developers.deezer.com/
- Grooveshark - http://developers.grooveshark.com/
- Rdio - http://www.rdio.com/developers/
- YouTube - https://developers.google.com/youtube/v3/getting-started
- Vimeo - https://developer.vimeo.com/
- BandsInTown - http://www.bandsintown.com/api/overview

## Image APIs

- Flickr - https://www.flickr.com/services/api/
- PlaceKitten - http://placekitten.com/
- PlaceBacn - http://placebacn.com/
- LoremPixel - http://lorempixel.com/

## File and Data Storage APIs

- Dropbox - https://www.dropbox.com/developers/datastore

    - also, embeddable JS widgets on your page -> https://www.dropbox.com/developers/dropins

- AWS - http://aws.amazon.com/sdk-for-browser/
- Firebase - https://www.firebase.com/how-it-works.html
- Parse - https://parse.com/docs/js_guide#javascript_guide - https://parse.com/downloads/javascript/parse-1.2.19.js
- Meteor (has a deploy tool just like heroku, comes with front end and back end code) - http://docs.meteor.com/#top

## Payments, Credit Card Processing, and Shopping Carts

- Stripe - https://stripe.com/docs/api
- Braintree - https://developers.braintreepayments.com/javascript+node/start/overview
- Paypal - https://developer.paypal.com/docs/api/
- Snipcart - https://snipcart.com/
- Gumroad - "Buy button right on your site" - https://gumroad.com/overlay

    - also, embed a product widget right on site - https://gumroad.com/embed

## Other / HackerNews / Startup-y APIs

- Producthunt - https://github.com/karan/Hook
- Trello - https://trello.com/docs/
- HackerNews - http://api.ihackernews.com/
- https://github.com/HackerNews/API
- Track Ships / Vessels - http://www.fleetmon.com/faq/public_api
- Wikipedia - http://www.mediawiki.org/wiki/API:Main_page
- Untappd - https://untappd.com/api/docs
- BreweryDB - http://www.brewerydb.com/developers
- 23andme - https://api.23andme.com/
- NYT - http://developer.nytimes.com/docs
- NPR - http://dev.npr.org/
- EasyPost - Shipping integration and postage ordering with FedEx/UPS/USPS/DHL - https://www.easypost.com/
- Wit - natural language processing - http://labs.wit.ai/demo/index.html
- Nest - https://developer.nest.com/documentation/control

## Dictionary / Words / Thesaurus APIs

- DictionaryAPI - http://dictionaryapi.com/ - example at http://whispering-island-7828.herokuapp.com/#magic

## GIFs

- https://github.com/giphy/GiphyAPI

## Real Estate APIs

- Trulia - http://developer.trulia.com/
- Zillow - http://www.zillow.com/howto/api/PropertyDetailsAPIOverview.htm
- http://www.getziptastic.com/

## Job APIs

- USA jobs - http://search.digitalgov.gov/developer/jobs.html
- current API you're using: http://www.authenticjobs.com/api/documentation/
- possible XML API: http://www.indeed.com/jsp/apiinfo.jsp
- JS-based API for LinkedIn Jobs: https://developer.linkedin.com/documents/getting-started-javascript-api
- Stack Overflow XML feed: http://careers.stackoverflow.com/jobs/feed?searchTerm=javascript&location=tx&range=160&distanceUnits=Miles

## Transportation APIs

- Uber - https://developer.uber.com/

