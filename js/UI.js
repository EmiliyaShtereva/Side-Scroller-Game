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
        context.save();
        context.shadowOffsetX = 1;
        context.shadowOffsetY = 1;
        context.shadowColor = 'rgba(0, 0, 0, 0.7)';
        context.shadowBlur = 3

        context.font = this.fontSize + 'px ' + this.fontFamily;
        context.textAlign = 'left';
        context.filStyle = this.game.fontColor;
        context.fillText('D - left', this.position.x, 100);
        context.fillText('A - right', this.position.x, 130);
        context.fillText('W & D / A - jump', this.position.x, 160);
        context.fillText('Enter - attack', this.position.x, 190);

        if (this.game.gameWin) {
            context.textAlign = 'center';
            context.font = this.fontSize * 2 + 'px ' + this.fontFamily;
            context.fillText('Congratulations brave knight,',
                this.game.width * 0.5,
                this.game.height * 0.3
            );
            context.fillText('You have successfully escaped',
                this.game.width * 0.5,
                this.game.height * 0.5
            );
            context.fillText('the town full of blood thursty monsters!!!',
                this.game.width * 0.5,
                this.game.height * 0.7
            );
        }
        context.restore();
    }
    init() {
        this.position = {
            x: 100
        };
    }
}