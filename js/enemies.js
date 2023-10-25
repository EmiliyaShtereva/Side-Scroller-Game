class Enemy {
    constructor(game, width, height, image, {x, y}, maxFrame, fps) {
        this.game = game;
        this.width = width;
        this.height = height;
        this.image = this.createImage(image);
        this.position = {
            x,
            y
        }
        this.frameX = 0;
        this.maxFrame = maxFrame;
        this.fps = fps;
        this.frameInterval = 1000 / this.fps;
        this.frameTimer = 0;
    }
    update(input, deltaTime) {
        if (this.frameTimer > this.frameInterval) {
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
        // context.beginPath();
        // context.arc(this.position.x + this.width/2, this.position.y + this.height/1.2, this.width/3, 0, Math.PI * 2);
        // context.stroke();
    }
    createImage(imageSrc) {
        const image = new Image();
        image.src = imageSrc;
        return this.image = image;
    }
}

// demon
export class Demon {
    constructor(game) {
        this.game = game;
        this.width = 240;
        this.height = 180;
        this.image = './../img/enemies/demon-Files/demon-attack.png';
        this.maxFrame = 10;
        this.fps = 11;

        this.demonEnemies = [
            new Enemy(this.game, this.width, this.height, this.image, {x:this.game.ground.groundWidth * 2 + 210, y:this.game.height - this.game.ground.groundHeight - this.height - 5}, this.maxFrame, this.fps),
            new Enemy(this.game, this.width, this.height, this.image, {x:this.game.ground.groundWidth * 7 - 200, y:this.game.height - this.game.ground.groundHeight - this.height - 5}, this.maxFrame, this.fps),
            new Enemy(this.game, this.width, this.height, this.image, {x:this.game.ground.groundWidth * 12 + 200, y:this.game.height - this.game.ground.groundHeight - this.height - 70}, this.maxFrame, this.fps),
        ];
    }
    update(input, deltaTime) {
        this.demonEnemies.forEach((demon, i) => {
            demon.update(input, deltaTime);
            const flameDx = (this.game.player.position.x + this.game.player.width/2.7) - (demon.position.x + demon.width/3.5);
            const flameDy = (this.game.player.position.y + this.game.player.height/2) - (demon.position.y + demon.height/1.2);
            const demonDx = (this.game.player.position.x + this.game.player.width/2.7) - (demon.position.x + demon.width/1.6);
            const demonDy = (this.game.player.position.y + this.game.player.height/2) - (demon.position.y + demon.height/1.5);
            const flameDistance = Math.sqrt(flameDx * flameDx + flameDy * flameDy);
            const demonDistance = Math.sqrt(demonDx * demonDx + demonDy * demonDy);
            if ((demon.frameX > 6 && flameDistance < demon.width/6 + this.game.player.width/2) ||
                demonDistance < demon.width/5 + this.game.player.width/2) {
                // this.game.gameOver = true;
                this.demonEnemies.splice(i, 1);
            }
        });
    }
    draw(context) {
        this.demonEnemies.forEach(demon => {
            demon.draw(context);
        });
    } 
    init() {
        this.demonEnemies = [
            new Enemy(this.game, this.width, this.height, this.image, {x:this.game.ground.groundWidth * 2 + 210, y:this.game.height - this.game.ground.groundHeight - this.height - 5}, this.maxFrame, this.fps),
            new Enemy(this.game, this.width, this.height, this.image, {x:this.game.ground.groundWidth * 7 - 200, y:this.game.height - this.game.ground.groundHeight - this.height - 5}, this.maxFrame, this.fps),
            new Enemy(this.game, this.width, this.height, this.image, {x:this.game.ground.groundWidth * 12 + 200, y:this.game.height - this.game.ground.groundHeight - this.height - 70}, this.maxFrame, this.fps),
        ];
    }
}

// fireskull
export class FireSkull {
    constructor(game) {
        this.game = game;
        this.width = 96.1;
        this.height = 112;
        this.image = './../img/enemies/Fire-Skull-Files/fire-skull.png';
        this.maxFrame = 7;
        this.fps = 9;

        this.fireSkullEnemies = [
            new Enemy(this.game, this.width, this.height, this.image, {x:this.game.ground.groundWidth + 210, y:this.game.height - 250}, this.maxFrame, this.fps),
            new Enemy(this.game, this.width, this.height, this.image, {x:this.game.ground.groundWidth * 3 + 420, y:this.game.height - 400}, this.maxFrame, this.fps),
            new Enemy(this.game, this.width, this.height, this.image, {x:this.game.ground.groundWidth * 8 + 750, y:this.game.height - 400}, this.maxFrame, this.fps),
        ];
    }
    update(input, deltaTime) {
        this.fireSkullEnemies.forEach((skull, i) => {
            skull.update(input, deltaTime);
            const fireSkullDx = (this.game.player.position.x + this.game.player.width/2.7) - (skull.position.x + this.width/2.2);
            const fireSkullDy = (this.game.player.position.y + this.game.player.height/2) - (skull.position.y + this.height/1.6);
            const fireSkullDistance = Math.sqrt(fireSkullDx * fireSkullDx + fireSkullDy * fireSkullDy);
            if (fireSkullDistance < skull.width/6 + this.game.player.width/2.5) {
                // this.game.gameOver = true;
                this.fireSkullEnemies.splice(i, 1);
            }
        });
    }
    draw(context) {
        this.fireSkullEnemies.forEach(skull => {
            skull.draw(context);
        });
    } 
    init() {
        this.fireSkullEnemies = [
            new Enemy(this.game, this.width, this.height, this.image, {x:this.game.ground.groundWidth + 210, y:this.game.height - 250}, this.maxFrame, this.fps),
            new Enemy(this.game, this.width, this.height, this.image, {x:this.game.ground.groundWidth * 3 + 420, y:this.game.height - 400}, this.maxFrame, this.fps),
            new Enemy(this.game, this.width, this.height, this.image, {x:this.game.ground.groundWidth * 8 + 750, y:this.game.height - 400}, this.maxFrame, this.fps),
        ];
    }
}

// ghost
export class Ghost{
    constructor(game) {
        this.game = game;
        this.width = 64;
        this.height = 80;
        this.image = './../img/enemies/Ghost-Files/ghost-idle.png';
        this.maxFrame = 6;
        this.fps = 9;

        this.ghostEnemies = [
            new Enemy(this.game, this.width, this.height, this.image, {x:this.game.ground.groundWidth - this.width, y:this.game.height - this.game.ground.groundHeight - this.height}, this.maxFrame, this.fps),
            new Enemy(this.game, this.width, this.height, this.image, {x:this.game.ground.groundWidth * 3 + 100, y:this.game.height - 100 - this.height}, this.maxFrame, this.fps),
            new Enemy(this.game, this.width, this.height, this.image, {x:this.game.ground.groundWidth * 5 + 470, y:this.game.height - 270 - this.height}, this.maxFrame, this.fps),
            new Enemy(this.game, this.width, this.height, this.image, {x:this.game.ground.groundWidth * 10 + 150, y:this.game.height - this.game.ground.highgroundHeight - this.height}, this.maxFrame, this.fps),
            new Enemy(this.game, this.width, this.height, this.image, {x:this.game.ground.groundWidth * 14 + 360, y:this.game.height - 200 - this.height}, this.maxFrame, this.fps),
        ];
    }
    update(input, deltaTime) {
        this.ghostEnemies.forEach((ghost, i) => {
            ghost.update(input, deltaTime);
            const ghostDx = (this.game.player.position.x + this.game.player.width/2.7) - (ghost.position.x + this.width/2);
            const ghostDy = (this.game.player.position.y + this.game.player.height/2) - (ghost.position.y + this.height/2);
            const ghostDistance = Math.sqrt(ghostDx * ghostDx + ghostDy * ghostDy);
            if (ghostDistance < ghost.width/6 + this.game.player.width/4) {
                // this.game.gameOver = true;
                this.ghostEnemies.splice(i, 1);
            }
        });
    }
    draw(context) {
        this.ghostEnemies.forEach(ghost => {
            ghost.draw(context);
        });
    } 
    init() {
        this.ghostEnemies = [
            new Enemy(this.game, this.width, this.height, this.image, {x:this.game.ground.groundWidth - this.width, y:this.game.height - this.game.ground.groundHeight - this.height}, this.maxFrame, this.fps),
            new Enemy(this.game, this.width, this.height, this.image, {x:this.game.ground.groundWidth * 3 + 100, y:this.game.height - 100 - this.height}, this.maxFrame, this.fps),
            new Enemy(this.game, this.width, this.height, this.image, {x:this.game.ground.groundWidth * 5 + 470, y:this.game.height - 270 - this.height}, this.maxFrame, this.fps),
            new Enemy(this.game, this.width, this.height, this.image, {x:this.game.ground.groundWidth * 10 + 150, y:this.game.height - this.game.ground.highgroundHeight - this.height}, this.maxFrame, this.fps),
            new Enemy(this.game, this.width, this.height, this.image, {x:this.game.ground.groundWidth * 14 + 360, y:this.game.height - 200 - this.height}, this.maxFrame, this.fps),
        ];
    }
}

// hellhound
export class HellHound {
    constructor(game) {
        this.game = game;
        this.width = 64;
        this.height = 32;
        this.image = './../img/enemies/Hell-Hound-Files/hell-hound-idle.png';
        this.maxFrame = 5;
        this.fps = 7;

        this.hellHoundEnemies = [
            new Enemy(this.game, this.width, this.height, this.image, {x:(this.game.ground.groundWidth * 9 - 50) + this.game.ground.groundWidth - this.width, y:this.game.height - this.game.ground.groundHeight - this.height}, this.maxFrame, this.fps),
            new Enemy(this.game, this.width, this.height, this.image, {x:this.game.ground.groundWidth * 11 + 450, y:this.game.height - this.game.ground.groundHeight - this.height}, this.maxFrame, this.fps),
            new Enemy(this.game, this.width, this.height, this.image, {x:this.game.ground.groundWidth * 13 + 300, y:this.game.height - this.game.ground.highgroundHeight - this.height}, this.maxFrame, this.fps),
        ];
    }
    update(input, deltaTime) {
        this.hellHoundEnemies.forEach((hellHound, i) => {
            hellHound.update(input, deltaTime);
            const hellHoundDx = (this.game.player.position.x + this.game.player.width/2.7) - (hellHound.position.x + this.width/1.7);
            const hellHoundDy = (this.game.player.position.y + this.game.player.height/2) - (hellHound.position.y + this.height/1.5);
            const hellHoundDistance = Math.sqrt(hellHoundDx * hellHoundDx + hellHoundDy * hellHoundDy);
            if (hellHoundDistance < hellHound.width/4.5 + this.game.player.width/2.7) {
                // this.game.gameOver = true;
                this.hellHoundEnemies.splice(i, 1);
            }
        });
    }
    draw(context) {
        this.hellHoundEnemies.forEach(hellHound => {
            hellHound.draw(context);
        });
    } 
    init() {
        this.hellHoundEnemies = [
            new Enemy(this.game, this.width, this.height, this.image, {x:(this.game.ground.groundWidth * 9 - 50) + this.game.ground.groundWidth - this.width, y:this.game.height - this.game.ground.groundHeight - this.height}, this.maxFrame, this.fps),
            new Enemy(this.game, this.width, this.height, this.image, {x:this.game.ground.groundWidth * 11 + 450, y:this.game.height - this.game.ground.groundHeight - this.height}, this.maxFrame, this.fps),
            new Enemy(this.game, this.width, this.height, this.image, {x:this.game.ground.groundWidth * 13 + 300, y:this.game.height - this.game.ground.highgroundHeight - this.height}, this.maxFrame, this.fps),
        ];
    }
}

// nightmare
export class Nightmare {
    constructor(game) {
        this.game = game;
        this.width = 128;
        this.height = 96;
        this.image = './../img/enemies/NIghtmare-Files/nightmare-idle.png';
        this.maxFrame = 3;
        this.fps = 9;

        this.nightmareEnemies = [
            new Enemy(this.game, this.width, this.height, this.image, {x:this.game.ground.groundWidth * 4 + 250, y:this.game.height - this.game.ground.groundHeight - this.height}, this.maxFrame, this.fps),
            new Enemy(this.game, this.width, this.height, this.image, {x:this.game.ground.groundWidth * 7 + 600, y:this.game.height - this.game.ground.groundHeight - this.height}, this.maxFrame, this.fps),
            new Enemy(this.game, this.width, this.height, this.image, {x:this.game.ground.groundWidth * 11 + 200, y:this.game.height - this.game.ground.groundHeight - this.height}, this.maxFrame, this.fps),
            new Enemy(this.game, this.width, this.height, this.image, {x:this.game.ground.groundWidth * 16 + 300, y:this.game.height - this.game.ground.groundHeight - this.height}, this.maxFrame, this.fps),
        ];
    }
    update(input, deltaTime) {
        this.nightmareEnemies.forEach((nightmare, i) => {
            nightmare.update(input, deltaTime);
            const nightmareDx = (this.game.player.position.x + this.game.player.width/2.7) - (nightmare.position.x + this.width/2);
            const nightmareDy = (this.game.player.position.y + this.game.player.height/2) - (nightmare.position.y + this.height/1.2);
            const nightmareDistance = Math.sqrt(nightmareDx * nightmareDx + nightmareDy * nightmareDy);
            if (nightmareDistance < nightmare.width/3 + this.game.player.width/2.7) {
                // this.game.gameOver = true;
                this.nightmareEnemies.splice(i, 1);
            }
        });
    }
    draw(context) {
        this.nightmareEnemies.forEach(nightmare => {
            nightmare.draw(context);
        });
    } 
    init() {
        this.nightmareEnemies = [
            new Enemy(this.game, this.width, this.height, this.image, {x:this.game.ground.groundWidth * 4 + 250, y:this.game.height - this.game.ground.groundHeight - this.height}, this.maxFrame, this.fps),
            new Enemy(this.game, this.width, this.height, this.image, {x:this.game.ground.groundWidth * 7 + 600, y:this.game.height - this.game.ground.groundHeight - this.height}, this.maxFrame, this.fps),
            new Enemy(this.game, this.width, this.height, this.image, {x:this.game.ground.groundWidth * 11 + 200, y:this.game.height - this.game.ground.groundHeight - this.height}, this.maxFrame, this.fps),
            new Enemy(this.game, this.width, this.height, this.image, {x:this.game.ground.groundWidth * 16 + 300, y:this.game.height - this.game.ground.groundHeight - this.height}, this.maxFrame, this.fps),
        ];
    }
}