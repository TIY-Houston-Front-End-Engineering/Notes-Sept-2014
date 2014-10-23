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

# Homework

This is going to be a large, group homework assignment due Thursday, Oct 30th.

Here are some requirements:

1. You must have a group of atleast 2 people, and each person must either fork the repo or be a contributor on that repo. **Each person must make atleast 15 commits throughout the week. I will verify and check.**
2. You must have tests written for your project.
3. You must use a script loader.
4. You must have `"use strict";` in your code.
5. You must implement proper error handling if arguments don't meet expectations (`throw new Error("some error message")`).
6. You must use lodash templates.
7. You must use use atleast 2 different service APIs (one of those APIs cannot be Etsy).
8. You must use atleast 2 different Browser APIs, and you must either include polyfills for older browsers, or gracefully show error messages for browsers that don't support a Browser API.
9. You must structure your code with Single Responsibility Principle in mind.
10. You must use jQuery Promises. :-)

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

Aside from what `hello.js` provides access to, the following list is a large list of APIs that provide a mix of CORS/JSONP/proxy-able services:

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

> Using the Google SDK (a .js file) may be necessary and the easiest way to get started with Google APIs

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
- FlightAware - http://flightaware.com/commercial/flightxml/

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

## Real Devices

- The LEAP Motion - https://www.leapmotion.com/ - https://developer.leapmotion.com/documentation/skeletal/javascript/index.html
- Oculus - http://www.oculus.com/dk2/ - https://github.com/Instrument/oculus-bridge
- Tessel - https://tessel.io/ - https://tessel.io/docs
- Nest - https://nest.com/ - https://developer.nest.com/documentation/control - https://developer.nest.com/documentation/alert

# Browser APIs (from previous Notes)

This last section is all about Browser APIs available to us. We've encountered a few already, such as the `requestAnimationFrame()` function that syncs our drawing and DOM manipulation code to the computer's 60Hz refresh rate.

This are great to explore and build on-top of, because they are what create truly immersive applications.

- Device Orientation (http://simpl.info/deviceorientation/)
- `getUserMedia()` (http://simpl.info/getusermedia/)
- Geolocation (https://github.com/samdutton/simpl/blob/master/geolocation/js/main.js)
- Fullscreen API (http://simpl.info/fullscreen/)
- HTML5 Input types (http://simpl.info/inputtypes/)
- localStorage (http://simpl.info/localstorage/)
- Mutation Observer (http://simpl.info/mutationobserver/)
- Object.observe() (http://simpl.info/observe/)
- Notification API (http://aurelio.audero.it/demo/web-notifications-api-demo.html) and (http://caniuse.com/notifications)
- Page Visibility API (http://simpl.info/pagevisibility/)
- Web Workers (http://simpl.info/webworkers/)
- Web Speech API (https://simpl.info/stt/) and Web Speech SYnthesis API (http://simpl.info/tts/)
- GamePad API (http://caniuse.com/#feat=gamepad) and (http://www.html5rocks.com/en/tutorials/doodles/gamepad/)
- online/offline status (http://caniuse.com/online-status)
- requestAnimationFrame (http://caniuse.com/requestanimationframe)
- screen orientation API - lock the screen in a particular direction (http://aurelio.audero.it/demo/screen-orientation-api-demo.html) and (http://caniuse.com/screen-orientation)


# Interface Patterns to explore

> **NOTE**: Your first priority is to make usable, flexible sites, NOT just pretty websites. http://tympanus.net/codrops/2013/11/22/applying-app-design-concepts-to-website-design/

- http://tympanus.net/Development/FullscreenForm/
- http://tympanus.net/Development/NotificationStyles/bar-slidetop.html
- http://tympanus.net/Development/SelectInspiration/index4.html
- http://tympanus.net/Development/TooltipStylesInspiration/round.html
- http://tympanus.net/Development/ArticleIntroEffects/index3.html
- http://tympanus.net/Development/ButtonComponentMorph/
- http://tympanus.net/Development/ButtonComponentMorph/index3.html
- http://tympanus.net/Development/ButtonComponentMorph/index5.html
- http://tympanus.net/Development/MinimalForm/
- http://tympanus.net/Development/3DGridEffect/index2.html
- http://tympanus.net/Development/FullscreenOverlayStyles/
- http://tympanus.net/Development/BookPreview/
- http://tympanus.net/Development/ResponsiveMultiLevelMenu/index3.html
- http://tympanus.net/Tutorials/PagePreloadingEffect/
- http://tympanus.net/Tutorials/CircularProgressButton/
- http://tympanus.net/Tutorials/AnimatedBorderMenus/index3.html
- http://tympanus.net/Tutorials/NaturalLanguageForm/
- http://tympanus.net/Tutorials/ExpandingOverlayEffect/
- http://tympanus.net/Blueprints/GridGallery/
- http://tympanus.net/Blueprints/FullWidthTabs/
- http://tympanus.net/Blueprints/SplitLayout/
- http://tympanus.net/Blueprints/OnScrollEffectLayout/
- http://tympanus.net/Blueprints/ResponsiveMultiColumnForm/
- http://tympanus.net/Blueprints/ProductGridLayout/
- http://tympanus.net/Blueprints/AnimatedHeader/
- http://tympanus.net/Blueprints/TooltipMenu/
- http://tympanus.net/Blueprints/VerticalTimeline/
- http://tympanus.net/Blueprints/HorizontalSlideOutMenu/
- http://tympanus.net/Blueprints/ScrollingLayout/
- http://tympanus.net/Blueprints/SlidePushMenus/
- http://tympanus.net/Blueprints/QuotesRotator/
- http://tympanus.net/Blueprints/VerticalIconMenu/