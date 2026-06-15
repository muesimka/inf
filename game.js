const Game = {
    canvas: null,
    ctx: null,
    image: null,
    hero: null,

    init() {
        this.canvas = document.createElement("canvas");
        this.canvas.width = 600;
        this.canvas.height = 400;

        document.body.appendChild(this.canvas);

        this.ctx = this.canvas.getContext("2d");

        // Создаём героя
        this.hero = new Hero(this.ctx, CONFIG.images[0]);
        this.hero.init();
    },

    loadImage(index) {
        if (!CONFIG.images[index]) return;

        this.image = new Image();

        this.image.onload = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            this.ctx.drawImage(
                this.image,
                50,
                50,
                300,
                300
            );
        };

        this.image.src = CONFIG.images[index];
    }
};
