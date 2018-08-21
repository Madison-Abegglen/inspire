import QuoteService from "./quote-service.js";

let qs = new QuoteService


function draw(quote) {
	let template = `
	<div class="col-sm-3">
		<h2> QOTD: </h2>
		<h4>"${quote.quote}"</h4>
		<h4>-${quote.author}</h4>	
	</div>
	`
	document.getElementById('quote').innerHTML = template;
}

export default class QuoteController {
	constructor() {
		qs.getQuote(draw)
	}
}
