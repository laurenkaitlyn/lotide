# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @laurenkaitlyn/lotide`

**Require it:**

`const _ = require('@laurenkaitlyn/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: accepts an array and returns the first element in an array
* `tail(...)`: accepts an array and returns the last element in an array
* `middle(...)`: accepts an array returns the middle element (single element array for odd #) (2 elements if even #). return empty array if length is 3 >
* `countLetters(...)`: accpets a string and returns an object with key values pairs to show the count of each letter in the string.
* `countOnly(...)`: accepts an array of strings and returns an object that counts everything that was input 
* `eqArrays(...)`: accepts 2 arrays and returns true or false if they equal eachother
* `eqObjects(...)`: accepts 2 objects and returns true or false if they equal eachother
* `findKey(...)`: accepts an object and a callback function and returns the first key in that object
* `flatten(...)`: accepts an array where some elements can also be arrays and returns one flattened array
* `letterPositions(...)`: accepts a string and returns an object with all the characters of the string and where they were found in the string
* `map(...)`: accepts an array and a callback function returns the results of calling the function on each element in the array
* `takeUntil(...)`: accepts an array and a callback function and returns an array with all the elements from the original array until the callback is true
* `without(...)`: accepts an source array and an array of elements to remove returns an array without the elements in the second array