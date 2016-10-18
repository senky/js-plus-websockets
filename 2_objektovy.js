"use strict";




// deklaracie
class A {
	constructor() {
		this.a = 1
		this.b = 2
	}

	getA() {
		return this.a
	}
}

class B extends A {
	constructor() {
		super()
	}

	getB() {
		return this.b
	}
}

// inicializacie
let a = new A()
let b = new B()

// not-so-wow moment
console.log(a.getA()) // 1
console.log(b.getB()) // 2
console.log(b.getA()) // 1
