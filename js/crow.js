export class Crow {
    constructor(game) {
        this.game = game;
        this.width = 48;
        this.height = 27;
        this.image = this.createImage('./../img/crow/Crow.png');
        this.maxFrame = 7;
        this.frameX = 0;
        this.fps = 2;
        this.frameInterval = 1000 / this.fps;
        this.frameTimer = 0;
        this.position = {
            x: this.game.ground.groundWidth * 22 + 100,
            y: this.game.height - this.game.ground.groundHeight - this.height
        }
    }
    update(input, deltaTime) {
        if (this.frameTimer > 1000 / this.fps) {
            this.frameTimer = 0;
            if (this.frameX < this.maxFrame) this.frameX++;
            else this.frameX = 0;
        } else {
            this.frameTimer += deltaTime;
        }

        if (input.includes('d')) this.position.x -= this.game.player.speed;
        else if (input.includes('a') && this.game.player.scrollOffset > 0) this.position.x += this.game.player.speed;
    }
    draw(context) {
        context.drawImage(this.image, this.frameX * this.width, 0, this.width, this.height, this.position.x, this.position.y, this.width, this.height);
    }
    createImage(imageSrc) {
        const image = new Image();
        image.src = imageSrc;
        return this.image = image;
    }
    init() {
        this.position = {
            x: this.game.ground.groundWidth * 22 + 100,
            y: this.game.height - this.game.ground.groundHeight - this.height
        }
    }
}