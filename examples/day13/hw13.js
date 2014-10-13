(function() {
    "use strict";

    /**
     * forEach item in the list, pass it to callback with its index
     */

    function forEach(list, callback) {
        for (var i = 0, len = list.length; i < len; i++) {
            callback(list[i], i, list);
        }
    }

    /**
     * creates a new array, where each item in the return is the result of the callback function for that iteration
     * @param  {array}   subject
     * @param  {Function} callback
     * @return {array}
     */

    function map(subject, callback) {
        var newsubject = [];
        forEach(subject, function(val, i, arr) {
            newsubject.push(callback(val, i, arr));
        })
        return newsubject;
    }

    function reduce(list, callback, initialValue) {
        var value,
            prevVal = initialValue;

        // if initialValue, prepend to list
        if(initialValue) list.unshift(initialValue);
        // for each item (starting from first position)
        forEach(list, function(val, i, arr) {
            if(i === 0) return;
            // overwrite the previous result with the latest one
            prevVal = callback(prevVal, arr[i], i, arr);
        });
        // return the final value
        return prevVal;
    }

    function map(subject, callback) {
        var newsubject = [];
        forEach(subject, function(val, i, arr) {
            newsubject.push(callback(val, i, arr));
        })
        return newsubject;
    }

    function filter(list, callback) {
        var newList = [];
        forEach(list, function(val, i, arr) {
            if (callback(val, i, arr)) {
                newList.push(val);
            }
        })
        return newList;
    }

    function pluck(list, propertyName) {
        var newList = [];
        forEach(list, function(val, i, arr) {
            newList.push(val[propertyName]);
        })
        return newList;
    }

    var stooges = [{
        name: 'moe',
        age: 40
    }, {
        name: 'larry',
        age: 50
    }, {
        name: 'curly',
        age: 60
    }];
    console.dir(pluck(stooges, 'name'));

    function reject(list, callback) {
        var newList = [];
        forEach(list, function(val, i, arr) {
            if (!callback(val, i, arr)) {
                newList.push(val);
            }
        })
        return newList;
    }

    var odds = reject([1, 2, 3, 4, 5, 6], function(num) {
        return num % 2 == 0;
    });
    console.log(odds)

    // ---------------------
    // Remember this from day 8?
    // Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
    // ---------------------

    function findLongestWordNonReduceVersion(words) {
        "use strict";
        var longestWord = "";
        words.forEach(function(w) {
            if (longestWord.length > w.length) longestWord = w;
        });
        return longestWord;
    }

    function findLongestWordReduceVersion(words) {
        "use strict";
        return words.reduce(function(prev, cur, i, arr) {
            console.log("prev:", prev, "cur:", cur);
            return prev.length > cur.length ? prev : cur;
        });
    }

    // ---------------------
    // Let's count the occurrences of words in an array of words
    // ---------------------
    function countWordsReduceVersion(words) {
        "use strict";
        return reduce(words, function(prev, cur, i, arr) {
            prev[cur] = prev[cur] ? prev[cur] + 1 : 1;
            return prev;
        }, {});
    }

    countWordsReduceVersion("hello there".split(" "))

    // ---------------------
    // Let's count the occurrences of words in an array of words from project gutenberg
    // ---------------------
    var url = "http://www.gutenberg.org/cache/epub/47083/pg47083.txt"
    $.get(url).then(function(data){
        console.log(countWordsReduceVersion(data.split(/\s+/)))
    })

    // ---------------------
    // Let's draw some info from our github profiles to the screen
    // NOTE: you will need jQuery loaded on the page!
    // ---------------------
    var githubUsername = "matthiasak";
    var url = "https://api.github.com/users/"+githubUsername;
    $.get(url).then(function(data){
        drawProfile(data);
    })
    function drawProfile(data) {
        document.body.innerHTML = [
            '<h1>',
            data.name,
            '</h1>',
            '<h2> blog:',
            data.blog,
            '</h2>'
        ].join('')
    }

})();
