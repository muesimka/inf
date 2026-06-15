class Hero {
    constructor(ctx, imageSrc) {
        this.ctx = ctx;
        this.imageSrc = imageSrc;
        this.image = null;
    }

    init() {
        this.image = new Image();

        this.image.onload = () => {
            this.ctx.clearRect(0, 0, 600, 400);

            this.ctx.drawImage(
                this.image,
                50,
                50,
                300,
                300
            );
        };

        this.image.src = this.imageSrc;
    }
}
