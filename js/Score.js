class Score {
    score;
    text;

    constructor(score,text) {
        this.text = text;
        this.score = score;
        this.canvas = document.getElementById('screen-game');
        this.ctx = this.canvas.getContext('2d');
    }

    draw() {
        this.ctx.fillStyle = "red";
        this.ctx.font = "30px Arial";
        this.ctx.fillText(this.text + this.score, 800, 65);
    }
}
