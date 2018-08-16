import QuoteService from "./quote-service.js";

let qs = new QuoteService


function draw(quote) {
	console.log(quote)


	//template stuff here
}

export default class QuoteController {
	constructor() {
		this.getQuote()
	}

	getQuote() {
		qs.getQuote(draw)
	}
}
