"use strict";




// let R = require('ramda')

// let posledne_dva = R.compose(R.slice(3, 5), R.split(', '))
// let zoznam = `mlieko, cokolada, chlieb, chipsy, klobasky (ale take fajne ako na DoD a Coder Feste)`

// console.log(posledne_dva(zoznam))




// let plus1 = function(number) {
// 	return number + 1
// }
let ary = [1,2,3,4,5]
// let plus_ary = ary.map(plus1)
// console.log(plus_ary)




let new_ary = ary.map((number) => number + 1)
console.log(new_ary)
