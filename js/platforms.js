class PLatforms {
    constructor(game, width, height, image, {x, y}) {
        this.game = game;
        this.width = width;
        this.height = height;
        this.image = this.createImage(image);
        this.position = {
            x,
            y
        }
    }
    update(input) {
        if (
            this.game.player.position.y + this.game.player.height < this.position.y &&
            this.game.player.position.y + this.game.player.height + this.game.player.velocity.y >= this.position.y &&
            this.game.player.position.x + this.game.player.width / 1.5 > this.position.x &&
            this.game.player.position.x <= this.position.x + this.width
        ) {
            this.game.player.velocity.y = 0;
        }

        if (input.includes('d')) this.position.x -= this.game.player.speed;
        else if (input.includes('a') && this.game.player.scrollOffset > 0) this.position.x += this.game.player.speed;
    }
    draw(context) {
        context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
    createImage(imageSrc) {
        const image = new Image();
        image.src = imageSrc;
        return this.image = image;
    }
}

export class Ground {
    constructor(game) {
        this.game = game;
        this.groundWidth = 541;
        this.groundHeight = 31;
        this.highgroundWidth = 129;
        this.highgroundHeight = 64;
        this.platformWidth = 80;
        this.platformHeight = 16;
        this.groundImage = './../img/layers/ground.png';
        this.highgroundImage = './../img/layers/highground.png';
        this.platformImage = './../img/layers/platform.png';

        this.groundLayers = [
            new PLatforms(this.game, this.groundWidth, this.groundHeight, this.groundImage, {x: 0, y: this.game.height - this.groundHeight}),
            new PLatforms(this.game, this.highgroundWidth, this.highgroundHeight, this.highgroundImage, {x: this.groundWidth + 200, y:this.game.height - this.highgroundHeight}),
            new PLatforms(this.game, this.groundWidth, this.groundHeight, this.groundImage, {x: this.groundWidth * 2, y: this.game.height - this.groundHeight}),
            new PLatforms(this.game, this.platformWidth, this.platformHeight, this.platformImage, {x: this.groundWidth * 3 + 100, y: this.game.height - 100}),
            new PLatforms(this.game, this.platformWidth, this.platformHeight, this.platformImage, {x: this.groundWidth * 3 + 300, y: this.game.height - 200}),
            new PLatforms(this.game, this.groundWidth, this.groundHeight, this.groundImage, {x: this.groundWidth * 4, y: this.game.height - this.groundHeight}),
            new PLatforms(this.game, this.highgroundWidth, this.highgroundHeight, this.highgroundImage, {x: this.groundWidth * 5 + 150, y:this.game.height - this.highgroundHeight}),
            new PLatforms(this.game, this.platformWidth, this.platformHeight, this.platformImage, {x: this.groundWidth * 5 + 400, y: this.game.height - 150}),
            new PLatforms(this.game, this.platformWidth, this.platformHeight, this.platformImage, {x: this.groundWidth * 5 + 600, y: this.game.height - 250}),
            new PLatforms(this.game, this.groundWidth, this.groundHeight, this.groundImage, {x: this.groundWidth * 7 - 200, y: this.game.height - this.groundHeight}),
            new PLatforms(this.game, this.groundWidth, this.groundHeight, this.groundImage, {x: this.groundWidth * 7 + 500, y: this.game.height - this.groundHeight}),
            new PLatforms(this.game, this.platformWidth, this.platformHeight, this.platformImage, {x: this.groundWidth * 8 + 400, y: this.game.height - 170}),
            new PLatforms(this.game, this.platformWidth, this.platformHeight, this.platformImage, {x: this.groundWidth * 8 + 600, y: this.game.height - 250}),
            new PLatforms(this.game, this.groundWidth, this.groundHeight, this.groundImage, {x: this.groundWidth * 9 - 50, y: this.game.height - this.groundHeight}),
            new PLatforms(this.game, this.highgroundWidth, this.highgroundHeight, this.highgroundImage, {x: this.groundWidth * 10 + 100, y:this.game.height - this.highgroundHeight}),
            new PLatforms(this.game, this.platformWidth, this.platformHeight, this.platformImage, {x: this.groundWidth * 11 - 200, y: this.game.height - 150}),
            new PLatforms(this.game, this.groundWidth, this.groundHeight, this.groundImage, {x: this.groundWidth * 11, y: this.game.height - this.groundHeight}),
            new PLatforms(this.game, this.groundWidth, this.groundHeight, this.groundImage, {x: this.groundWidth * 12, y: this.game.height - this.groundHeight}),
            new PLatforms(this.game, this.highgroundWidth, this.highgroundHeight, this.highgroundImage, {x: this.groundWidth * 13 + 150, y:this.game.height - this.highgroundHeight}),
            new PLatforms(this.game, this.highgroundWidth, this.highgroundHeight, this.highgroundImage, {x: this.groundWidth * 13 + 279, y:this.game.height - this.highgroundHeight}),
            new PLatforms(this.game, this.highgroundWidth, this.highgroundHeight, this.highgroundImage, {x: this.groundWidth * 13 + 408, y:this.game.height - this.highgroundHeight}),
            new PLatforms(this.game, this.platformWidth, this.platformHeight, this.platformImage, {x: this.groundWidth * 14 + 100, y: this.game.height - 200}),
            new PLatforms(this.game, this.platformWidth, this.platformHeight, this.platformImage, {x: this.groundWidth * 14 + 350, y: this.game.height - 200}),
            new PLatforms(this.game, this.platformWidth, this.platformHeight, this.platformImage, {x: this.groundWidth * 14 + 600, y: this.game.height - 200}),
            new PLatforms(this.game, this.platformWidth, this.platformHeight, this.platformImage, {x: this.groundWidth * 14 + 800, y: this.game.height - 200}),
            new PLatforms(this.game, this.groundWidth, this.groundHeight, this.groundImage, {x: this.groundWidth * 16, y: this.game.height - this.groundHeight}),
            new PLatforms(this.game, this.groundWidth, this.groundHeight, this.groundImage, {x: this.groundWidth * 17, y: this.game.height - this.groundHeight}),
            new PLatforms(this.game, this.groundWidth, this.groundHeight, this.groundImage, {x: this.groundWidth * 18, y: this.game.height - this.groundHeight}),
            new PLatforms(this.game, this.highgroundWidth, this.highgroundHeight, this.highgroundImage, {x: this.groundWidth * 17 + 200, y:this.game.height - this.groundHeight - this.highgroundHeight}),
            new PLatforms(this.game, this.platformWidth, this.platformHeight, this.platformImage, {x: this.groundWidth * 18 - 100, y: this.game.height - 200}),
            new PLatforms(this.game, this.platformWidth, this.platformHeight, this.platformImage, {x: this.groundWidth * 18 + 60, y: this.game.height - 300}),
            new PLatforms(this.game, this.highgroundWidth, this.highgroundHeight, this.highgroundImage, {x: this.groundWidth * 19 + 150, y:this.game.height - this.highgroundHeight}),
            new PLatforms(this.game, this.highgroundWidth, this.highgroundHeight, this.highgroundImage, {x: this.groundWidth * 19 + 279, y:this.game.height - this.highgroundHeight}),
            new PLatforms(this.game, this.platformWidth, this.platformHeight, this.platformImage, {x: this.groundWidth * 19 + 520, y: this.game.height - 200}),
            new PLatforms(this.game, this.highgroundWidth, this.highgroundHeight, this.highgroundImage, {x: this.groundWidth * 20 + 200, y:this.game.height - this.highgroundHeight}),
            new PLatforms(this.game, this.highgroundWidth, this.highgroundHeight, this.highgroundImage, {x: this.groundWidth * 20 + 329, y:this.game.height - this.highgroundHeight}),
            new PLatforms(this.game, this.groundWidth, this.groundHeight, this.groundImage, {x: this.groundWidth * 21 + 100, y: this.game.height - this.groundHeight}),
            new PLatforms(this.game, this.groundWidth, this.groundHeight, this.groundImage, {x: this.groundWidth * 22 + 100, y: this.game.height - this.groundHeight}),
            new PLatforms(this.game, this.groundWidth, this.groundHeight, this.groundImage, {x: this.groundWidth * 23 + 100, y: this.game.height - this.groundHeight}),
        ];
    }
    update(input) {
        this.groundLayers.forEach(layer => {
            layer.update(input);
        })
    }
    draw(context) {
        this.groundLayers.forEach(layer => {
            layer.draw(context);
        })
    }
    init() {
        this.groundLayers = [
            new PLatforms(this.game, this.groundWidth, this.groundHeight, this.groundImage, {x: 0, y: this.game.height - this.groundHeight}),
            new PLatforms(this.game, this.highgroundWidth, this.highgroundHeight, this.highgroundImage, {x: this.groundWidth + 200, y:this.game.height - this.highgroundHeight}),
            new PLatforms(this.game, this.groundWidth, this.groundHeight, this.groundImage, {x: this.groundWidth * 2, y: this.game.height - this.groundHeight}),
            new PLatforms(this.game, this.platformWidth, this.platformHeight, this.platformImage, {x: this.groundWidth * 3 + 100, y: this.game.height - 100}),
            new PLatforms(this.game, this.platformWidth, this.platformHeight, this.platformImage, {x: this.groundWidth * 3 + 300, y: this.game.height - 200}),
            new PLatforms(this.game, this.groundWidth, this.groundHeight, this.groundImage, {x: this.groundWidth * 4, y: this.game.height - this.groundHeight}),
            new PLatforms(this.game, this.highgroundWidth, this.highgroundHeight, this.highgroundImage, {x: this.groundWidth * 5 + 150, y:this.game.height - this.highgroundHeight}),
            new PLatforms(this.game, this.platformWidth, this.platformHeight, this.platformImage, {x: this.groundWidth * 5 + 400, y: this.game.height - 150}),
            new PLatforms(this.game, this.platformWidth, this.platformHeight, this.platformImage, {x: this.groundWidth * 5 + 600, y: this.game.height - 250}),
            new PLatforms(this.game, this.groundWidth, this.groundHeight, this.groundImage, {x: this.groundWidth * 7 - 200, y: this.game.height - this.groundHeight}),
            new PLatforms(this.game, this.groundWidth, this.groundHeight, this.groundImage, {x: this.groundWidth * 7 + 500, y: this.game.height - this.groundHeight}),
            new PLatforms(this.game, this.platformWidth, this.platformHeight, this.platformImage, {x: this.groundWidth * 8 + 400, y: this.game.height - 170}),
            new PLatforms(this.game, this.platformWidth, this.platformHeight, this.platformImage, {x: this.groundWidth * 8 + 600, y: this.game.height - 250}),
            new PLatforms(this.game, this.groundWidth, this.groundHeight, this.groundImage, {x: this.groundWidth * 9 - 50, y: this.game.height - this.groundHeight}),
            new PLatforms(this.game, this.highgroundWidth, this.highgroundHeight, this.highgroundImage, {x: this.groundWidth * 10 + 100, y:this.game.height - this.highgroundHeight}),
            new PLatforms(this.game, this.platformWidth, this.platformHeight, this.platformImage, {x: this.groundWidth * 11 - 200, y: this.game.height - 150}),
            new PLatforms(this.game, this.groundWidth, this.groundHeight, this.groundImage, {x: this.groundWidth * 11, y: this.game.height - this.groundHeight}),
            new PLatforms(this.game, this.groundWidth, this.groundHeight, this.groundImage, {x: this.groundWidth * 12, y: this.game.height - this.groundHeight}),
            new PLatforms(this.game, this.highgroundWidth, this.highgroundHeight, this.highgroundImage, {x: this.groundWidth * 13 + 150, y:this.game.height - this.highgroundHeight}),
            new PLatforms(this.game, this.highgroundWidth, this.highgroundHeight, this.highgroundImage, {x: this.groundWidth * 13 + 279, y:this.game.height - this.highgroundHeight}),
            new PLatforms(this.game, this.highgroundWidth, this.highgroundHeight, this.highgroundImage, {x: this.groundWidth * 13 + 408, y:this.game.height - this.highgroundHeight}),
            new PLatforms(this.game, this.platformWidth, this.platformHeight, this.platformImage, {x: this.groundWidth * 14 + 100, y: this.game.height - 200}),
            new PLatforms(this.game, this.platformWidth, this.platformHeight, this.platformImage, {x: this.groundWidth * 14 + 350, y: this.game.height - 200}),
            new PLatforms(this.game, this.platformWidth, this.platformHeight, this.platformImage, {x: this.groundWidth * 14 + 600, y: this.game.height - 200}),
            new PLatforms(this.game, this.platformWidth, this.platformHeight, this.platformImage, {x: this.groundWidth * 14 + 800, y: this.game.height - 200}),
            new PLatforms(this.game, this.groundWidth, this.groundHeight, this.groundImage, {x: this.groundWidth * 16, y: this.game.height - this.groundHeight}),
            new PLatforms(this.game, this.groundWidth, this.groundHeight, this.groundImage, {x: this.groundWidth * 17, y: this.game.height - this.groundHeight}),
            new PLatforms(this.game, this.groundWidth, this.groundHeight, this.groundImage, {x: this.groundWidth * 18, y: this.game.height - this.groundHeight}),
            new PLatforms(this.game, this.highgroundWidth, this.highgroundHeight, this.highgroundImage, {x: this.groundWidth * 17 + 200, y:this.game.height - this.groundHeight - this.highgroundHeight}),
            new PLatforms(this.game, this.platformWidth, this.platformHeight, this.platformImage, {x: this.groundWidth * 18 - 100, y: this.game.height - 200}),
            new PLatforms(this.game, this.platformWidth, this.platformHeight, this.platformImage, {x: this.groundWidth * 18 + 60, y: this.game.height - 300}),
            new PLatforms(this.game, this.highgroundWidth, this.highgroundHeight, this.highgroundImage, {x: this.groundWidth * 19 + 150, y:this.game.height - this.highgroundHeight}),
            new PLatforms(this.game, this.highgroundWidth, this.highgroundHeight, this.highgroundImage, {x: this.groundWidth * 19 + 279, y:this.game.height - this.highgroundHeight}),
            new PLatforms(this.game, this.platformWidth, this.platformHeight, this.platformImage, {x: this.groundWidth * 19 + 520, y: this.game.height - 200}),
            new PLatforms(this.game, this.highgroundWidth, this.highgroundHeight, this.highgroundImage, {x: this.groundWidth * 20 + 200, y:this.game.height - this.highgroundHeight}),
            new PLatforms(this.game, this.highgroundWidth, this.highgroundHeight, this.highgroundImage, {x: this.groundWidth * 20 + 329, y:this.game.height - this.highgroundHeight}),
            new PLatforms(this.game, this.groundWidth, this.groundHeight, this.groundImage, {x: this.groundWidth * 21 + 100, y: this.game.height - this.groundHeight}),
            new PLatforms(this.game, this.groundWidth, this.groundHeight, this.groundImage, {x: this.groundWidth * 22 + 100, y: this.game.height - this.groundHeight}),
            new PLatforms(this.game, this.groundWidth, this.groundHeight, this.groundImage, {x: this.groundWidth * 23 + 100, y: this.game.height - this.groundHeight}),
        ];
    }
}