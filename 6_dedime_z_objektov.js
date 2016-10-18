"use strict";




function Obdlznik(a, b) {
	this.a = a
	this.b = b
	this.c = 406

	this.obsah = function() {
		return this.a * this.b
	}

	// return this
}

let a = new Obdlznik(2,4)
console.log(a.obsah())

// let b = Obdlznik.apply({}, [2, 4])
// console.log(b.obsah())




function Stvorec(a) {
	this.a = a
	this.b = a

	this.obsah = function() {
		return `aaa`
	}
}
// Stvorec extends Obdlznik
// Stvorec.prototype = new Obdlznik
Stvorec['a-b'] = new Obdlznik

let c = new Stvorec(2)
console.log(c.obsah())
// console.log(b.c)
