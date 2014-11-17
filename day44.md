# A visual description of Responsive Design

- responsive vs. adaptive

![./day44/1.gif]

- relative vs. static

![./day44/2.gif]

- with/without breakpoints

![./day44/3.gif]

- flow vs. static

![./day44/4.gif]

- nested vs. not nested

![./day44/5.gif]

- fonts

![./day44/6.gif]

- max width

![./day44/7.gif]

- desktop first vs. mobile first

![./day44/8.gif]

- vectors vs images

![./day44/9.gif]

# An Introduction to SCSS (Sassy CSS)

LESS, Sass and Compass compile a language into CSS (which can be read by a browser). These are called CSS Preprocessors. The (arguably) most popular of these preprocessors is SCSS, which is a derivative of the original Sass language, but has taken over the official Sass nomenclature. In otherwords, Sass and SCSS are nearly synonymous now.

Currently, our `gulp watch` command loads a `gulpfile.js` and starts watching for changes on files and runs a local node server. Part of these gulp tasks is a `gulp-autoprefixer` that turns our CSS in the `./css` directory into prefixed, cross-browser compatible CSS in the `./dist` directory.

Our [setup-project.sh file](./examples/extras/setup-project.sh) will be modified to compile SCSS files in the SCSS directory, create CSS from them, then prefix those CSS files and store them in `./dist`.

## Resources

- http://sass-lang.com/guide
- https://www.npmjs.org/package/gulp-sass

## SCSS syntax

- variables

    ```scss
    $font-stack:    Helvetica, sans-serif;
    $primary-color: #333;

    body {
        font: 100% $font-stack;
        color: $primary-color;
    }
    ```

- nesting

    ```scss
    nav {
        ul {
            margin: 0;
            padding: 0;
            list-style: none;
        }

          li { display: inline-block; }

        a {
            display: block;
            padding: 6px 12px;
            text-decoration: none;
        }
    }
    ```

- partials and import

    You can create partial Sass files that contain little snippets of CSS that you can include in other Sass files. This is a great way to modularize your CSS and help keep things easier to maintain. A partial is simply a Sass file named with a leading underscore. You might name it something like `_partial.scss`. The underscore lets Sass know that the file is only a partial file and that it should not be generated into a CSS file. Sass partials are used with the `@import` directive.

    ```scss
    // _reset.scss

    html,
    body,
    ul,
    ol {
        margin: 0;
        padding: 0;
    }
    ```

    ```scss
    /* base.scss */

    @import 'reset';

    body {
        font: 100% Helvetica, sans-serif;
        background-color: #efefef;
    }
    ```

- mixins and extensions

    Mixins exist to avoid repeating a lot of stuff.

    ```scss
    @mixin border-radius($radius) {
      -webkit-border-radius: $radius;
         -moz-border-radius: $radius;
          -ms-border-radius: $radius;
              border-radius: $radius;
    }

    .box { @include border-radius(10px); }
    ```

    Extensions exist to create subclasses of classes, etc.

    ```scss
    .message {
        border: 1px solid #ccc;
        padding: 10px;
        color: #333;
    }

    .success {
        @extend .message;
        border-color: green;
    }

    .error {
        @extend .message;
        border-color: red;
    }

    .warning {
        @extend .message;
        border-color: yellow;
    }
    ```

- operators

    tldr; `+`, `-`, `*`, `/`, `%`

    ```scss
    .container { width: 100%; }

    article[role="main"] {
        float: left;
        width: 600px / 960px * 100%;
    }

    aside[role="complimentary"] {
        float: right;
        width: 300px / 960px * 100%;
    }
    ```

# Introduction to SMACSS

SMACSS (pronounced “smacks”) is more style guide than rigid framework. There is no library to download or install. SMACSS is a way to examine your design process and is a way to fit those rigid frameworks into a flexible thought process.

## Categorizing

At the very core of SMACSS is categorization. By categorizing CSS rules, we begin to see patterns and can define better practices around each of these patterns.

There are five types of categories:

1. Base
- Layout
- Module
- State
- Theme

Each category has certain guidelines that apply to it. This somewhat succinct separation allows us to ask ourselves questions during the development process. How are we going to code things and why are we going to code them that way?

### Base rules

Base rules are the defaults. They are almost exclusively single element selectors but it could include attribute selectors, pseudo-class selectors, child selectors or sibling selectors. Essentially, a base style says that wherever this element is on the page, it should look like this.

```css
html, body, form { margin: 0; padding: 0; }
input[type=text] { border: 1px solid #999; }
a { color: #039; }
a:hover { color: #03C; }
```

### Layout rules

Layout rules divide the page into sections. Layouts hold one or more modules together.

```css
#header, #article, #footer {
    width: 960px;
    margin: auto;
}

#article {
    border: solid #CCC;
    border-width: 1px 0 0;
}
```

### Modules

Modules are the reusable, modular parts of our design. They are the callouts, the sidebar sections, the product lists and so on.

```css
.module > h2 {
    padding: 5px;
}

.module span {
    padding: 5px;
}
```

### State rules

State rules are ways to describe how our modules or layouts will look when in a particular state. Is it hidden or expanded? Is it active or inactive? They are about describing how a module or layout looks on screens that are smaller or bigger. They are also about describing how a module might look in different views like the home page or the inside page.

There is plenty of similarity between a sub-module style and a state style. They both modify the existing look of an element. However, they differ in two key ways:

1. State styles can apply to layout and/or module styles; and
- State styles indicate a JavaScript dependency.

It is this second point that is the most important distinction. Sub-module styles are applied to an element at render time and then are never changed again. State styles, however, are applied to elements to indicate a change in state while the page is still running on the client machine.

### Theme rules

Finally, Theme rules are similar to state rules in that they describe how modules or layouts might look, but in a particular theme (night mode?).

It is probably self-evident but a theme defines colours and images that give your application or site its look and feel. Separating the theme out into its own set of styles allows for those styles to be easily redefined for alternate themes.

```css
// in module-name.css
.mod {
    border: 1px solid;
}

// in theme.css
.mod {
    border-color: blue;
}
```

### Naming Rules

By separating rules into the five categories, naming convention is beneficial for immediately understanding which category a particular style belongs to and its role within the overall scope of the page. On large projects, it is more likely to have styles broken up across multiple files. In these cases, naming convention also makes it easier to find which file a style belongs to.

I like to use a prefix to differentiate between Layout, State, and Module rules. For Layout, I use `l-` but `layout-` would work just as well. Using prefixes like `grid-` also provide enough clarity to separate layout styles from other styles. For State rules, I like `is-` as in `is-hidden` or `is-collapsed`. This helps describe things in a very readable way.

```css
/* Example Module */
.example { }

/* Callout Module */
.callout { }

/* Callout Module with State */
.callout.is-collapsed { }

/* Form field module */
.field { }

/* Inline layout  */
.l-inline { }
```

### Rules of State Change

> See http://smacss.com/book/state

### Other tidbits

- keep specificity low

    For example, `body.article > #main > #content > #intro > p > b` would have a depth of applicability of 6 generations. If this selector was written as `.article #intro b` then the depth is still the same: 6 generations.

    The problem with such a depth is that it enforces a much greater dependency on a particular HTML structure.

    **Simplification of rules**

    ```css
    .pod {
        border: 1px solid #333;
    }

    .pod > h3 {
        margin-top: 5px;
    }

    .pod > ul {
        margin-bottom: 5px;
    }
    ```

- keep selectors simple

    Selectors can be fast or slow. To understand what makes a page render, we need to cover a few things first:

    - How CSS gets evaluated

        The style of an element is evaluated on element creation. Each node is evaluated and rendered to the viewport as it is received in order down the HTML.

        As the browser loads and renders an element, the browser scans the CSS, evaluating every CSS statement to find which ones match that element.

        For each CSS statement, the browser will read it from right-to-left and see if it matches the DOM element.

        If you have a rule like `body div#content p { color: #003366; }` then for every element — as it gets rendered to the page — it will:

        - first ask if it is a paragraph element.
        - If it is then it will work its way up the DOM and ask if it is a div with an ID of content.
        - If it finds what it is looking for, it will continue its way up the DOM until it reaches the body.

    - Some rules just suck

        Google Pagespeed (http://code.google.com/speed/page-speed/docs/rendering.html#UseEfficientCSSSelectors) recommends against using the following selectors:

        1. Rules with descendant selectors. E.g. `#content h3`
        - Rules with child or adjacent selectors. E.g. `#content > h3`
        - Rules with overly qualified selectors. E.g. `div#content > h3`
        - Rules that apply :hover to non-link elements. E.g. `div#content:hover`

    - Constrain yourself, don’t choke yourself

        I follow three simple guidelines to help limit the number of elements that need to be evaluated:

            1. Use child selectors
            - Avoid tag selectors for common elements
            - Use class names as the right-most selector

## Closing thoughts

https://github.com/jonathanpath/SASS-SMACSS