import { Player } from "./player.js";
import { InputHandler } from "./input.js";
import { Background } from "./background.js";
import { Ground } from "./platforms.js";
import { Demon, FireSkull, Ghost, HellHound, Nightmare } from "./enemies.js";

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
            // this.demon = new Demon(this);
            // this.fireSkull = new FireSkull(this); 
            // this.ghost = new Ghost(this);
            this.hellHound = new HellHound(this);
            // this.nightmare = new Nightmare(this);
            
            // this.enemyTimer = 0;
            // this.enemyInterval = 1000;
            this.gameOver = false;
        }
        update(deltaTime) {
            this.background.update(this.input.keys);
            this.ground.update(this.input.keys);
            this.player.update(this.input.keys, deltaTime);
            // this.demon.update(this.input.keys, deltaTime);
            // this.fireSkull.update(this.input.keys, deltaTime);
            // this.ghost.update(this.input.keys, deltaTime);
            this.hellHound.update(this.input.keys, deltaTime);
            // this.nightmare.update(this.input.keys, deltaTime);

        }
        draw(context) {
            this.background.draw(context);
            this.ground.draw(context);
            this.player.draw(context);
            // this.demon.draw(context);
            // this.fireSkull.draw(context);
            // this.ghost.draw(context);
            this.hellHound.draw(context);
            // this.nightmare.draw(context);
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
        if (game.player.position.y > game.height) {
            game.ground.init();
            game.background.init();
            game.player.init();
            // game.demon.init();
            // game.fireSkull.init();
            // game.ghost.init();
            game.hellHound.init();
            // game.nightmare.init();
        };
        if(!game.gameOver) requestAnimationFrame(animate);
    }
    animate(0);
});