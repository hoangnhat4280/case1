class Background {
    x;
    y;
    w;
    h;
    color;
    speed;
    canvas;
    ctx;

    constructor(x, y, w, h, color, speed) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
        this.speed = speed;
        this.canvas = document.getElementById('screen-game');
        this.ctx = this.canvas.getContext('2d');
    }

    draw() {

        const image = new Image();
        image.src = 'bground.jpg';
        this.ctx.drawImage(image, this.x, this.y, this.w, this.h);

    }
}