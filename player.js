export class Player {
    constructor(game) {
        this.game = game;
        this.width = 72.5;
        this.height = 86;
        this.position = {
            x: 200,
            y: this.game.height - this.height
        };
        this.vy = 0;
        this.weight = 1;
        this.idleImage = document.getElementById('idlePlayer');
        this.speed = 0;
        this.maxSpeed = 7;
    }
    update(input) {
        // horizontal movement
        this.position.x += this.speed;
        if (input.includes('d')) this.speed = this.maxSpeed;
        else if (input.includes('a')) this.speed = -this.maxSpeed;
        else this.speed = 0;

        if (this.position.x < 100) this.position.x = 100;
        if (this.position.x > 450) this.position.x = this.position.x = 450;

        // vertical movement
        if (input.includes('w') && this.onGround()) this.vy -= 20;
        this.position.y += this.vy;
        if (!this.onGround()) this.vy += this.weight;
        else this.vy = 0;
    }
    draw(context) {
        context.drawImage(this.idleImage, 0, 0, this.width, this.height, this.position.x, this.position.y, this.width, this.height)
    }
    onGround() {
        return this.position.y >= this.game.height - this.height;
    }
}