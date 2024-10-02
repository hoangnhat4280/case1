class Apple {
    x;
    y;
    w;
    h;
    image;
    speed;
    canvas;
    ctx;

    constructor(x, y, w, h, image, speed) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.image = image;
        this.speed = speed;
        this.canvas = document.getElementById('screen-game');
        this.ctx = this.canvas.getContext('2d');
    }

    draw() {
        const image = new Image();
        image.src = this.image;
        this.ctx.drawImage(image, this.x, this.y, this.w, this.h);

    }

    moveDown() {
        this.y += this.speed;
        if (this.y + this.h >= 900) {
            this.y = 0;
            score.score--;
        }
        this.draw();
    }
}