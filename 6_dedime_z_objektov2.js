"use strict";




// class SpecialArray extends Array {
// 	constructor() {
// 		super(...arguments)
// 	}

// 	sum() {
// 		let sum = 0
// 		for (let i of this) {
// 			sum += i
// 		}
// 		return sum
// 	}
// }

// let ary = new SpecialArray(1, 2, 3)
// console.log(ary.sum())




Array.prototype.sum = function() {
	let sum = 0
	for (let i of this) {
		sum += i
	}
	return sum
}
let ary2 = [1,2,3]
console.log(ary2.sum())