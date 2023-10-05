export class Player {
    constructor(game) {
        this.game = game;
        this.width = 100;
        this.height = 91.3;
        this.position = {
            x: 0,
            y: 100
        }
    }
    update() {

    }
    draw(context) {
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}