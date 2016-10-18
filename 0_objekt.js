"use strict";




let clovek = {
	vyska: 1.83,	// 183 cm
	vaha: 70,		// 70 kg
	bmi: function() {
		return this.vaha / (this.vyska^2)
	}
}

console.log(clovek.bmi())


clovek.vyska = 1.70
clovek.vaha = 55
console.log(clovek.bmi())
