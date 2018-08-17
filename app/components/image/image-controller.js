//Your ImageService is a global class what can you do here to instantiate it?
import ImageService from "./image-service.js"

let imgService = new ImageService()

function draw(img) {
    //WHere to put that imgURL
    console.log(img)
    //add a background image to an element with js
    document.body.style.backgroundImage = `url('${img.lgUrl}')`;
}

export default class ImageController {
    constructor() {
        this.getImg()
    }
    getImg() {
        imgService.getImg(draw)
    }
}

