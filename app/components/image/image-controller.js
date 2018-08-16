//Your ImageService is a global class what can you do here to instantiate it?
import ImageService from "./image-service.js"

let imgService = new ImageService()

function draw(imgUrl) {
    //WHere to put that imgURL

    //add a background image to an element with js
}

export default class ImageController {
    constructor() {
        this.getImg()
    }
    getImg() {
        imgService.getImage(draw)
    }
}

