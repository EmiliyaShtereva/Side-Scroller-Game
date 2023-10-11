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
        this.player.height = 66;
        this.player.maxFrame = 3;
    }
    handleInput(input) {
        if(input.includes('a') || input.includes('d')) {
            this.player.setState(states.RUNNING);
        } else if(input.includes('w')) {
            this.player.setState(states.JUMPING);
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
        this.player.width = 69;
        this.player.height = 66;
        this.player.maxFrame = 6;
    }
    handleInput(input) {
        if(input.includes('w')) {
            this.player.setState(states.JUMPING);
        } else if(!input.includes('a') && !input.includes('d')) {
            this.player.setState(states.SITTING);
        }
    }
}

export class Jumping extends State {
    constructor(player) {
        super('JUMPING');
        this.player = player;
    }
    enter() {
        if (this.player.onGround() || this.player.velocity.y === 0) this.player.velocity.y -= 20;
        this.player.createImage('./../img/Knight_1/Jump1.png');
        this.player.width = 80;
        this.player.height = 66;
        this.player.maxFrame = 0;
    }
    handleInput(input) {
        if(this.player.velocity.y > this.player.weight) {
            this.player.setState(states.FALLING);
        } else if(!this.player.onGround() && this.player.velocity.y === 0) {
            this.player.setState(states.FALLING);
        } else if(this.player.velocity.y === 0) {
            this.player.setState(states.SITTING);
        }
    }
}

export class Falling extends State {
    constructor(player) {
        super('FALLING');
        this.player = player;
    }
    enter() {
        if (this.player.onGround()) this.player.velocity.y -= 20;
        this.player.createImage('./../img/Knight_1/Falling.png');
        this.player.width = 79;
        this.player.height = 66;
        this.player.maxFrame = 0;
    }
    handleInput(input) {
        if(this.player.onGround() || this.player.velocity.y === 0) {
            this.player.setState(states.SITTING);
        }
    }
}