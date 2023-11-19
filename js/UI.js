export class UI {
    constructor(game) {
        this.game = game;
        this.fontSize = 22;
        this.fontFamily = 'Helvetica';
        this.position = {
            x: 100
        };
    }
    update(input) {
        if (input.includes('d')) this.position.x -= this.game.player.speed;
        else if (input.includes('a') && this.game.player.scrollOffset > 0) this.position.x += this.game.player.speed;
    }
    draw(context) {
        context.font = this.fontSize + 'px ' + this.fontFamily;
        context.textAlign = 'left';
        context.filStyle = this.game.fontColor;
        context.fillText('D for going left', this.position.x, 100);
        context.fillText('A for going right', this.position.x, 130);
        context.fillText('W and D or A for jumping', this.position.x, 160);
        context.fillText('Enter for attack', this.position.x, 190);
    }
    init() {
        this.position = {
            x: 100
        };
    }
}