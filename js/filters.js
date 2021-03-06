"use strict";

myApp.filter('interpolate', function (version) {
    return function(text) {
       return String(text).replace(/\%VERSION\%/mg, version);
     }
});

// just copy paste the example above to add more filters

myApp.filter('cut', function () {
        return function (value, wordwise, max, tail) {
            if (!value) return '';

            max = parseInt(max, 10);
            if (!max) return value;
            if (value.length <= max) return value;

            value = value.substr(0, max);
            if (wordwise) {
                var lastspace = value.lastIndexOf(' ');
                if (lastspace != -1) {
                    value = value.substr(0, lastspace);
                }
            }

            return value + (tail || ' …');
        };
    });