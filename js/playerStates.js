const states = {
    SITTING: 0,
    RUNNING: 1,
    JUMPING: 2,
    FALLING: 3,
}

class State {
    constructor(state) {
        this.state = state;
    }
}


export class Sitting extends State {
    constructor(player) {
        super('SITTING');
        this.player = player;
    }
    enter() {
        this.player.createImage('./../img/Knight_1/Idle.png');
        this.player.width = 67;
        this.player.maxFrame = 3;
    }
    handleInput(input) {
        if(input.includes('a') || input.includes('d')) {
            this.player.setState(states.RUNNING);
        }
    }
}

export class Running extends State {
    constructor(player) {
        super('RUNNING');
        this.player = player;
    }
    enter() {
        this.player.createImage('./../img/Knight_1/Run.png');
        this.player.width = 70;
        // this.player.frameX = 0;
        this.player.maxFrame = 6;
    }
    handleInput(input) {
        if(input.includes('s')) {
            this.player.setState(states.SITTING);
        } else if(input.includes('w')) {
            this.player.setState(states.JUMPING);
        }
    }
}

export class Jumping extends State {
    constructor(player) {
        super('JUMPING');
        this.player = player;
    }
    enter() {
        if (this.player.onGround()) this.player.vy -= 20;
        this.player.createImage('./../img/Knight_1/Jump1.png');
        this.player.width = 80;
        this.player.maxFrame = 0;
        // this.player.frameX = 0;
    }
    handleInput(input) {
        if(this.player.vy > this.player.weight) {
            this.player.setState(states.FALLING);
        }
    }
}

export class Falling extends State {
    constructor(player) {
        super('FALLING');
        this.player = player;
    }
    enter() {
        if (this.player.onGround()) this.player.vy -= 20;
        this.player.createImage('./../img/Knight_1/Falling.png');
        this.player.width = 80;
        this.player.maxFrame = 0;
        // this.player.frameX = 3;
    }
    handleInput(input) {
        if(this.player.onGround()) {
            this.player.setState(states.RUNNING);
        }
    }
}