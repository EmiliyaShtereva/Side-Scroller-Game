import { Sitting, Running, Jumping, Falling } from "./playerStates.js";

export class Player {
    constructor(game) {
        this.game = game;
        this.width;
        this.height = 86;
        this.position = {
            x: 200,
            y: this.game.height - this.height
        };
        this.vy = 0;
        this.weight = 1;
        this.image;
        this.frameX = 0;
        this.maxFrame;
        this.fps = 16;
        this.frameInterval = 1000/this.fps;
        this.frameTimer = 0;
        this.speed = 0;
        this.maxSpeed = 7;
        this.states = [new Sitting(this), new Running(this), new Jumping(this), new Falling(this),];
        this.currentState = this.states[0];
        this.currentState.enter();
    }
    update(input, deltaTime) {
        this.currentState.handleInput(input);
        // horizontal movement
        this.position.x += this.speed;
        if (input.includes('d')) this.speed = this.maxSpeed;
        else if (input.includes('a')) this.speed = -this.maxSpeed;
        else this.speed = 0;

        if (this.position.x < 100) this.position.x = 100;
        if (this.position.x > 450) this.position.x = this.position.x = 450;

        // vertical movement
        this.position.y += this.vy;
        if (!this.onGround()) this.vy += this.weight;
        else this.vy = 0;

        // sprite animation
        if (this.frameTimer > this.frameInterval) {
            this.frameTimer = 0;
            if (this.frameX < this.maxFrame) this.frameX++;
            else this.frameX = 0;
        } else {
            this.frameTimer += deltaTime;
        }
    }
    draw(context) {
        context.drawImage(this.image, this.frameX * this.width, 0, this.width, this.height, this.position.x, this.position.y, this.width, this.height)
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
}