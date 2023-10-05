export class Player {
    constructor(game) {
        this.game = game;
        this.width = 72.5;
        this.height = 86;
        this.position = {
            x: 0,
            y: this.game.height - this.height
        }
        this.idleImage = document.getElementById('idlePlayer');
    }
    update() {
        this.position.x++;
    }
    draw(context) {
        context.drawImage(this.idleImage, 0, 0, this.width, this.height, this.position.x, this.position.y, this.width, this.height)
    }
}