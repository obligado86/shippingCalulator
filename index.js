const shippingForm = document.querySelector("#shipping-calc");

shippingForm.addEventListener('submit', event => {
	event.preventDefault();
	let destination = shippingForm.shipTo.value;
	let kilo = shippingForm.unit.value;
	let cost = ""
	let result = ""
	let output = ""
	if(kilo <= 0.5){
		cost = 90
	} else if(kilo <= 1){
		cost = 120
	} else if(kilo <= 3){
		cost = 250
	} else if(kilo <= 5){
		cost = 380
	} else if(kilo <= 10){
		cost = 550
	} else if(kilo > 10){
		destination = false
	}

	switch(destination){
	case "local":
		result = cost * 1.0;
		output = `&#8369 ${result}`
		break;
	case "overseas":
		result = cost * 1.5;
		output = `&#8369 ${result}`
		break;
	case false:
		output = "maximum of 10kl only"
	default:
		result = 0;
	}

	console.log(result)
	document.querySelector("#result").innerHTML = output

})