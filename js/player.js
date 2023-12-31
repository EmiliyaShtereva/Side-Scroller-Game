import { Sitting, Running, Jumping, Falling, RunningLeft, FallingLeft, JumpingLeft, Attack, SittingLeft, AttackLeft } from "./playerStates.js";

export class Player {
    constructor(game) {
        this.game = game;
        this.width;
        this.position = {
            x: 200,
            y: 200
        };
        this.velocity = {
            x: 0,
            y: 0
        }
        this.scrollOffset = 0;
        this.weight = 1.3;
        this.image;
        this.frameX = 0;
        this.maxFrame;
        this.fps = 15;
        this.frameInterval = 1000 / this.fps;
        this.frameTimer = 0;
        this.speed = 5.5;
        this.states = [new Sitting(this), new Running(this), new Jumping(this), new Falling(this), new Attack(this), new SittingLeft(this), new RunningLeft(this), new JumpingLeft(this), new FallingLeft(this), new AttackLeft(this)];
        this.currentState = this.states[0];
        this.currentState.enter();
    }
    update(input, deltaTime) {
        this.currentState.handleInput(input);
        // horizontal movement
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;

        if (input.includes('d') && this.position.x < 550) { 
            this.velocity.x = this.speed; 
        } else if ((input.includes('a') && this.position.x > 100) || 
                (input.includes('a') && this.scrollOffset === 0 && this.position.x > 0)) { 
            this.velocity.x = -this.speed; 
        } else {
            this.velocity.x = 0;
        }

        if (input.includes('d')) this.scrollOffset += this.speed;
        else if (input.includes('a') && this.scrollOffset > 0) this.scrollOffset -= this.speed;

        // vertical movement
        if (!this.onGround()) this.velocity.y += this.weight;

        // sprite animation
        if (this.frameTimer > this.frameInterval) {
            this.frameTimer = 0;
            if (this.frameX < this.maxFrame) this.frameX++;
            else this.frameX = 0;
        } else {
            this.frameTimer += deltaTime;
        }

        if (this.scrollOffset >= 11550) {
            this.game.gameWin = true;
        }
    }
    draw(context) {
        context.drawImage(this.image, this.frameX * this.width, 0, this.width, this.height, this.position.x, this.position.y, this.width, this.height);
    }
    onGround() {
        return this.position.y >= this.game.height - this.height;
    }
    createImage(imageSrc) {
        const image = new Image();
        image.src = imageSrc;
        return this.image = image;
    }
    setState(state) {
        this.currentState = this.states[state];
        this.currentState.enter();
    }
    init() {
        this.width;
        this.height = 76;
        this.position = {
            x: 200,
            y: 200
        };
        this.velocity = {
            x: 0,
            y: 0
        }
        this.scrollOffset = 0;
    }
}