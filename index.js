let slider = document.getElementById("myRange");
let price = document.getElementById("price");
let views = document.getElementById("views");

const sliderValues = {
	1: "$8",
	2: "$12",
	3: "$16",
	4: "$24",
	5: "$36"
}

const viewsValues = {
	1: "10K",
	2: "50K",
	3: "100K",
	4: "500K",
	5: "1M"
}

views.innerHTML = viewsValues[slider.value]
price.innerHTML = sliderValues[slider.value];

slider.oninput = function () {
	price.innerHTML = sliderValues[this.value];
	views.innerHTML = viewsValues[this.value]
}

