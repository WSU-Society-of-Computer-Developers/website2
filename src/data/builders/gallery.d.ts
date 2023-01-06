declare namespace Gallery {
    interface image {
        img: string,
        caption: string
    }
    type images = Array<image>
    class Gallery {
        images: Array<images>
        constructor(public images?: images): void
        public addSlide(img: image["img"], caption: image["caption"]): this
        getSlides(): images
    }
}



export = Gallery.Gallery