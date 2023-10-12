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
        this.width = 541;
        this.height = 31;
        this.ground1 = './../img/layers/ground.png';

        this.groundLayers = [
            new PLatforms(this.game, this.width, this.height, this.ground1, {x: 0, y: this.game.height - this.height}),
            new PLatforms(this.game, this.width, this.height, this.ground1, {x: this.width * 2, y: this.game.height - this.height}),
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
            new PLatforms(this.game, this.width, this.height, this.ground1, {x: 0, y: this.game.height - this.height}),
            new PLatforms(this.game, this.width, this.height, this.ground1, {x: this.width * 2, y: this.game.height - this.height}),
        ];
    }
}