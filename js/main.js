import { Player } from "./player.js";
import { InputHandler } from "./input.js";
import { Background } from "./background.js";
import { Ground } from "./platforms.js";
import { Demon, FireSkull, Ghost, HellHound, Nightmare } from "./enemies.js";
import { UI } from "./UI.js";

window.addEventListener('load', function () {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth - 250;
    canvas.height = window.innerHeight - 300;

    class Game {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.background = new Background(this);
            this.ground = new Ground(this);
            this.player = new Player(this);
            this.input = new InputHandler();
            this.UI = new UI(this);
            this.enemies = [
                new Demon(this, { x: this.ground.groundWidth * 2 + 210, y: this.height - this.ground.groundHeight - 180 - 5 }),
                new Demon(this, { x: this.ground.groundWidth * 7 - 200, y: this.height - this.ground.groundHeight - 180 - 5 }),
                new Demon(this, { x: this.ground.groundWidth * 12 + 200, y: this.height - this.ground.groundHeight - 180 - 15 }),
                new Demon(this, { x: this.ground.groundWidth * 20 + 170, y: this.height - this.ground.groundHeight - 180 - 15 }),
                new FireSkull(this, { x: this.ground.groundWidth + 210, y: this.height - 250 }),
                new FireSkull(this, { x: this.ground.groundWidth * 3 + 420, y: this.height - 400 }),
                new FireSkull(this, { x: this.ground.groundWidth * 8 + 750, y: this.height - 400 }),
                new FireSkull(this, { x: this.ground.groundWidth * 18 + 50, y: this.height - 450 }),
                new Ghost(this, { x: this.ground.groundWidth - 64, y: this.height - this.ground.groundHeight - 80 }),
                new Ghost(this, { x: this.ground.groundWidth * 3 + 100, y: this.height - 100 - 80 }),
                new Ghost(this, { x: this.ground.groundWidth * 5 + 470, y: this.height - 270 - 80 }),
                new Ghost(this, { x: this.ground.groundWidth * 10 + 150, y: this.height - this.ground.highgroundHeight - 80 }),
                new Ghost(this, { x: this.ground.groundWidth * 14 + 360, y: this.height - 200 - 80 }),
                new HellHound(this, { x: (this.ground.groundWidth * 9 - 50) + this.ground.groundWidth - 64, y: this.height - this.ground.groundHeight - 32 }),
                new HellHound(this, { x: this.ground.groundWidth * 11 + 450, y: this.height - this.ground.groundHeight - 32 }),
                new HellHound(this, { x: this.ground.groundWidth * 13 + 300, y: this.height - this.ground.highgroundHeight - 32 }),
                new Nightmare(this, { x: this.ground.groundWidth * 4 + 250, y: this.height - this.ground.groundHeight - 96 }),
                new Nightmare(this, { x: this.ground.groundWidth * 7 + 600, y: this.height - this.ground.groundHeight - 96 }),
                new Nightmare(this, { x: this.ground.groundWidth * 11 + 200, y: this.height - this.ground.groundHeight - 96 }),
                new Nightmare(this, { x: this.ground.groundWidth * 16 + 300, y: this.height - this.ground.groundHeight - 96 }),
            ]
            this.collisions = [];
            this.gameOver = false;
            this.fontColor = 'black';
        }
        update(deltaTime) {
            this.background.update(this.input.keys);
            this.ground.update(this.input.keys);
            this.player.update(this.input.keys, deltaTime);
            this.enemies.forEach(enemy => {
                enemy.update(this.input.keys, deltaTime);
                if (enemy.markedForDeletion) this.enemies.splice(this.enemies.indexOf(enemy), 1);
            });
            this.collisions.forEach((collision, index) => {
                collision.update(this.input.keys, deltaTime);
                if (collision.markedForDeletion) this.collisions.splice(index, 1);
            });
            this.UI.update(this.input.keys);
        }
        draw(context) {
            this.background.draw(context);
            this.ground.draw(context);
            this.player.draw(context);
            this.enemies.forEach(enemy => {
                enemy.draw(context);
            });
            this.collisions.forEach(collision => {
                collision.draw(context);
            });
            this.UI.draw(context);
        }
        init() {
            this.enemies = [
                new Demon(this, { x: this.ground.groundWidth * 2 + 210, y: this.height - this.ground.groundHeight - 180 - 5 }),
                new Demon(this, { x: this.ground.groundWidth * 7 - 200, y: this.height - this.ground.groundHeight - 180 - 5 }),
                new Demon(this, { x: this.ground.groundWidth * 12 + 200, y: this.height - this.ground.groundHeight - 180 - 15 }),
                new Demon(this, { x: this.ground.groundWidth * 20 + 170, y: this.height - this.ground.groundHeight - 180 - 15 }),
                new FireSkull(this, { x: this.ground.groundWidth + 210, y: this.height - 250 }),
                new FireSkull(this, { x: this.ground.groundWidth * 3 + 420, y: this.height - 400 }),
                new FireSkull(this, { x: this.ground.groundWidth * 8 + 750, y: this.height - 400 }),
                new FireSkull(this, { x: this.ground.groundWidth * 18 + 50, y: this.height - 450 }),
                new Ghost(this, { x: this.ground.groundWidth - 64, y: this.height - this.ground.groundHeight - 80 }),
                new Ghost(this, { x: this.ground.groundWidth * 3 + 100, y: this.height - 100 - 80 }),
                new Ghost(this, { x: this.ground.groundWidth * 5 + 470, y: this.height - 270 - 80 }),
                new Ghost(this, { x: this.ground.groundWidth * 10 + 150, y: this.height - this.ground.highgroundHeight - 80 }),
                new Ghost(this, { x: this.ground.groundWidth * 14 + 360, y: this.height - 200 - 80 }),
                new HellHound(this, { x: (this.ground.groundWidth * 9 - 50) + this.ground.groundWidth - 64, y: this.height - this.ground.groundHeight - 32 }),
                new HellHound(this, { x: this.ground.groundWidth * 11 + 450, y: this.height - this.ground.groundHeight - 32 }),
                new HellHound(this, { x: this.ground.groundWidth * 13 + 300, y: this.height - this.ground.highgroundHeight - 32 }),
                new Nightmare(this, { x: this.ground.groundWidth * 4 + 250, y: this.height - this.ground.groundHeight - 96 }),
                new Nightmare(this, { x: this.ground.groundWidth * 7 + 600, y: this.height - this.ground.groundHeight - 96 }),
                new Nightmare(this, { x: this.ground.groundWidth * 11 + 200, y: this.height - this.ground.groundHeight - 96 }),
                new Nightmare(this, { x: this.ground.groundWidth * 16 + 300, y: this.height - this.ground.groundHeight - 96 }),
            ]
        }
    }

    const game = new Game(canvas.width, canvas.height);
    let lastTime = 0;

    function animate(timeStamp) {
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        console.log();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.update(deltaTime);
        game.draw(ctx);
        if (game.player.position.y > game.height || game.gameOver === true) {
            game.ground.init();
            game.background.init();
            game.player.init();
            game.init();
            game.UI.init();
            game.gameOver = false;
        };
        requestAnimationFrame(animate);
    }
    animate(0);
});