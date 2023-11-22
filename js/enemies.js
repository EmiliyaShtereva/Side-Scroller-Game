import { CollisionAnimation } from "./collisionAnimation.js";

class Enemy {
    constructor() {
        this.frameX = 0;
        this.frameTimer = 0;
        this.markedForDeletion = false;
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

        const dx = (this.game.player.position.x + this.game.player.width / this.devider1) - (this.position.x + this.width / this.devider2);
        const dy = (this.game.player.position.y + this.game.player.height / this.devider3) - (this.position.y + this.height / this.devider4);
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < this.width / this.devider5 + this.game.player.width / this.devider6) {
            if (this.game.player.currentState === this.game.player.states[4] || this.game.player.currentState === this.game.player.states[9]) {
                this.markedForDeletion = true;
                this.game.collisions.push(new CollisionAnimation(this.game, {x: this.position.x + this.width * 0.5, y: this.position.y + this.height * 0.5}));
            } else {
                this.game.gameOver = true;
            }
        }
    }
    draw(context) {
        context.drawImage(this.image, this.frameX * this.width, 0, this.width, this.height, this.position.x, this.position.y, this.width, this.height);
    }
}

// demon
export class Demon extends Enemy{
    constructor(game, {x, y}) {
        super();
        this.game = game;
        this.width = 240;
        this.height = 180;
        this.image = this.createImage('./../img/enemies/demon-Files/demon-attack.png');
        this.maxFrame = 10;
        this.fps = 11;
        this.position = {
            x,
            y
        }
        this.devider1 = 2.7;
        this.devider2 = 1.6;
        this.devider3 = 1.7;
        this.devider4 = 1.5;
        this.devider5 = 5;
        this.devider6 = 2.3;
    }
    createImage(imageSrc) {
        const image = new Image();
        image.src = imageSrc;
        return this.image = image;
    }
    update(input, deltaTime) {
        super.update(input, deltaTime);
        const flameDx = (this.game.player.position.x + this.game.player.width / 2.7) - (this.position.x + this.width / 3.5);
        const flameDy = (this.game.player.position.y + this.game.player.height / 2) - (this.position.y + this.height / 1.2);
        const flameDistance = Math.sqrt(flameDx * flameDx + flameDy * flameDy);
        if ((this.frameX > 6 && flameDistance < this.width / 6 + this.game.player.width / 2)) {
            this.game.gameOver = true;
        }
    }
}

// fireskull
export class FireSkull extends Enemy {
    constructor(game, { x, y }) {
        super();
        this.game = game;
        this.width = 96.1;
        this.height = 112;
        this.image = this.createImage('./../img/enemies/Fire-Skull-Files/fire-skull.png');
        this.maxFrame = 7;
        this.fps = 9;
        this.position = {
            x,
            y
        }
        this.devider1 = 2.7;
        this.devider2 = 2.2;
        this.devider3 = 1.7;
        this.devider4 = 1.6;
        this.devider5 = 4.5;
        this.devider6 = 2.3;
    }
    createImage(imageSrc) {
        const image = new Image();
        image.src = imageSrc;
        return this.image = image;
    }
}

// ghost
export class Ghost extends Enemy {
    constructor(game, { x, y }) {
        super();
        this.game = game;
        this.width = 64;
        this.height = 80;
        this.image = this.createImage('./../img/enemies/Ghost-Files/ghost-idle.png');
        this.maxFrame = 6;
        this.fps = 9;
        this.position = {
            x,
            y
        }
        this.devider1 = 2.7;
        this.devider2 = 2;
        this.devider3 = 1.7;
        this.devider4 = 2;
        this.devider5 = 6;
        this.devider6 = 2.5;
    }
    createImage(imageSrc) {
        const image = new Image();
        image.src = imageSrc;
        return this.image = image;
    }
}

// hellhound
export class HellHound extends Enemy {
    constructor(game, { x, y }) {
        super();
        this.game = game;
        this.width = 64;
        this.height = 32;
        this.image = this.createImage('./../img/enemies/Hell-Hound-Files/hell-hound-idle.png');
        this.maxFrame = 5;
        this.fps = 7;
        this.position = {
            x,
            y
        }
        this.devider1 = 2.7;
        this.devider2 = 2;
        this.devider3 = 1.7;
        this.devider4 = 1.5;
        this.devider5 = 5.5;
        this.devider6 = 2.3;
    }
    createImage(imageSrc) {
        const image = new Image();
        image.src = imageSrc;
        return this.image = image;
    }
}

// nightmare
export class Nightmare extends Enemy {
    constructor(game, { x, y }) {
        super();
        this.game = game;
        this.width = 128;
        this.height = 96;
        this.image = this.createImage('./../img/enemies/NIghtmare-Files/nightmare-idle.png');
        this.maxFrame = 3;
        this.fps = 9;
        this.position = {
            x,
            y
        }
        this.devider1 = 2.7;
        this.devider2 = 2.7;
        this.devider3 = 1.7;
        this.devider4 = 1.2;
        this.devider5 = 4;
        this.devider6 = 2.3;
    }
    createImage(imageSrc) {
        const image = new Image();
        image.src = imageSrc;
        return this.image = image;
    }
}