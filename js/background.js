class Layer {
    constructor(game, width, height, speedModifier, image) {
        this.game = game;
        this.width = width;
        this.height = height;
        this.speedModifier = speedModifier;
        this.image = this.createImage(image);
        this.position = {
            x: 0,
            y: 0
        }
    }
    update(input) {
        if (this.position.x < -this.width) this.position.x = 0;
        
        if (input.includes('d')) this.position.x -= this.speedModifier;
        else if (input.includes('a') && this.game.player.scrollOffset > 0) this.position.x += this.speedModifier;
    }
    draw(context) {
        context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
        context.drawImage(this.image, this.position.x + this.width, this.position.y, this.width, this.height);
    }
    createImage(imageSrc) {
        const image = new Image();
        image.src = imageSrc;
        return this.image = image;
    }
}

export class Background {
    constructor(game) {
        this.game = game;
        this.width = 2000;
        this.height = 176;
        this.layer1image = './../img/layers/clouds.png';
        this.layer2image = './../img/layers/town.png';
        this.layer3image = './../img/layers/buildings.png';
        this.layer1 = new Layer(this.game, this.game.width, this.game.height, 2, this.layer1image);
        this.layer2 = new Layer(this.game, this.game.width, this.game.height, 3, this.layer2image);
        this.layer3 = new Layer(this.game, this.width, this.game.height, 4, this.layer3image);
        this.backgroundLayers = [this.layer1, this.layer2, this.layer3];
    }
    update(input) {
        this.backgroundLayers.forEach(layer => {
            layer.update(input);
        })
    }
    draw(context) {
        this.backgroundLayers.forEach(layer => {
            layer.draw(context);
        })
    }
}