export class CollisionAnimation {
    constructor(game, {x, y}) {
        this.game = game;
        this.image = this.createImage('./../img/explosion/Explosion_1.png');
        this.spriteWidth = 700;
        this.spriteHeight = 448;
        this.sizeModifier = Math.random() + 2;
        this.width = this.spriteWidth / this.sizeModifier;
        this.height = this.spriteHeight / this.sizeModifier;
        this.position = {
            x: x - this.width * 0.5,
            y: y - this.width * 0.4
        };
        this.frameX = 0;
        this.maxFrame = 9;
        this.markedForDeletion = false;
        this.fps = 15;
        this.frameInterval = 1000 / this.fps;
        this.frameTimer = 0;
    }
    draw(context) {
        context.drawImage(this.image, this.frameX * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.position.x, this.position.y, this.width, this.height);
    }
    update(input, deltaTime) {
        if (input.includes('d')) this.position.x -= this.game.player.speed;
        else if (input.includes('a') && this.game.player.scrollOffset > 0) this.position.x += this.game.player.speed;

        if (this.frameTimer > this.frameInterval) {
            this.frameX++;
            this.frameTimer = 0;
        } else {
            this.frameTimer += deltaTime;
        }

        if (this.frameX > this.maxFrame) this.markedForDeletion = true;
    }
    createImage(imageSrc) {
        const image = new Image();
        image.src = imageSrc;
        return this.image = image;
    }
}