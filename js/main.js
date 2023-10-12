import { Player } from "./player.js";
import { InputHandler } from "./input.js";
import { Background } from "./background.js";
import { Ground } from "./platforms.js";

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
        }
        update(deltaTime) {
            this.background.update(this.input.keys);
            this.ground.update(this.input.keys);
            this.player.update(this.input.keys, deltaTime);
        }
        draw(context) {
            this.background.draw(context);
            this.ground.draw(context);
            this.player.draw(context);
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
        };
        requestAnimationFrame(animate);
    }
    animate(0);
});