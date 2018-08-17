import Img from "../../models/Image.js"

const url = '//bcw-getter.herokuapp.com/?url=';
const url2 = 'http://www.splashbase.co/api/v1/images/random'
const apiUrl = url + encodeURIComponent(url2);


const imgApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});

export default class ImageService {
	getImg(callWhenDone) {
		// ^^^^^^^ How do you call this function?
		console.log("Looking for a good pic")
		imgApi().then(res => {
			let img = new Img(res.data)
			callWhenDone(img)
		})
	}
}
