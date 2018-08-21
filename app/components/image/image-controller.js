import ImageService from "./image-service.js"

let imgService = new ImageService()

function draw(img) {
    document.body.style.backgroundImage = `url('${img.url}')`;
}

export default class ImageController {
    constructor() {
        this.getImg()
    }
    getImg() {
        imgService.getImg(draw)
    }
}

