declare namespace Gallery {
    interface images {
        img: string,
        caption: string
    }
    class Gallery {
        images: Array<images>
        constructor(public images: images): void
        public addSlide(img: images["img"], caption: images["caption"]): this
        getSlides(): images
    }
}

export = Gallery