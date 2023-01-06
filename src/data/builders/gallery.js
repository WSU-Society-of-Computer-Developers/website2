export default class Gallery {
    constructor(images=[]) {
        this.images = images
    }
    addSlide(img, caption) {
        this.images.push({caption, img})
        return this
    }
    getSlides() {
        return this.images
    }
}