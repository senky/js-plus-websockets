"use strict";




// this vo funkcii obsahuje **kontext** funkcie
function hello() {
	console.log(`hello ${this.name}`)
}

// call zavola funkciu v danom kontexte
hello.call({name: `Jakub`})
hello.call({name: `Lukáš`})
