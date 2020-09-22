 
const assertEqual = require('./assertEqual');

const head = require('./head') ; 

const tail = require('./tail') ;

const eqArrays = require('./eqArrays')

const assertArraysEqual = require('./assertArraysEqual')

const middle = require('./middle') 

const findKey = require('./findKey')

const findKeyByValue = require('./findKeyByValue')

const map = require('./map')

const takeUnit = require('./takeUnit')

const without = require('./without')


module.exports = { 
  assertEqual,
   tail, 
  middle, 
  assertArraysEqual, 
   head, 
   eqArrays,
   findKey,
   findKeyByValue,
   map,
} 
assertEqual(1,1)
// const _ = require('./index')