import Img from "../../models/Image.js"

const url = '//bcw-getter.herokuapp.com/?url=';
const url2 = 'http://www.splashbase.co/api/v1/images/'
const apiUrl = url + encodeURIComponent(url2);


const imgApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});

export default class ImageService {
	getImg(callback) {
		console.log("Looking for a good pic")
		imgApi.get('search?query=beach').then(res => {
			let images = res.data.images.map(i => new Img(i))
			let randI = Math.floor(Math.random() * images.length)
			let image = images[randI]
			callback(image)
		})
	}
}
