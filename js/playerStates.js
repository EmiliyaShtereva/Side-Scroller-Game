const states = {
    SITTING: 0,
    RUNNING: 1,
    JUMPING: 2,
    FALLING: 3,
    ATTACK: 4,
    SITTINGLEFT: 5,
    RUNNINGLEFT: 6,
    JUMPINGLEFT: 7,
    FALLINGLEFT: 8,
    ATTACKLEFT: 9
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
        this.player.height = 76;
        this.player.maxFrame = 3;
    }
    handleInput(input) {
        if (input.includes('d')) {
            this.player.setState(states.RUNNING);
        } else if (input.includes('a')) {
            this.player.setState(states.RUNNINGLEFT);
        } else if (input.includes('Enter')) {
            this.player.setState(states.ATTACK);
        } else if (input.includes('w') && input.includes('d')) {
            this.player.setState(states.JUMPING);
        } else if (input.includes('w') && input.includes('a')) {
            this.player.setState(states.JUMPINGLEFT);
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
        this.player.height = 76;
        this.player.maxFrame = 6;
    }
    handleInput(input) {
        if (input.includes('w') && input.includes('d')) {
            this.player.setState(states.JUMPING);
        } else if (input.includes('w') && input.includes('a')) {
            this.player.setState(states.JUMPINGLEFT);
        } else if (input.includes('Enter')) {
            this.player.setState(states.ATTACK);
        } else if (!input.includes('a') && !input.includes('d')) {
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
        this.player.height = 76;
        this.player.maxFrame = 0;
    }
    handleInput(input) {
        if (this.player.velocity.y > this.player.weight && input.includes('d')) {
            this.player.setState(states.FALLING);
        } else if (!this.player.onGround() && this.player.velocity.y === 0 && input.includes('d')) {
            this.player.setState(states.FALLING);
        } else if (this.player.velocity.y > this.player.weight && input.includes('a')) {
            this.player.setState(states.FALLINGLEFT);
        } else if (!this.player.onGround() && this.player.velocity.y === 0 && input.includes('a')) {
            this.player.setState(states.FALLINGLEFT);
        } else if (input.includes('Enter')) {
            this.player.setState(states.ATTACK);
        } else if (this.player.velocity.y === 0) {
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
        this.player.height = 76;
        this.player.maxFrame = 0;
    }
    handleInput(input) {
        if (this.player.onGround() || this.player.velocity.y === 0) {
            this.player.setState(states.SITTING);
        } else if (input.includes('Enter')) {
            this.player.setState(states.ATTACK);
        }
    }
}

export class Attack extends State {
    constructor(player) {
        super('ATTACK');
        this.player = player;
    }
    enter() {
        this.player.createImage('./../img/Knight_1/Attack 2.png');
        this.player.width = 96;
        this.player.height = 76;
        this.player.maxFrame = 3;
    }
    handleInput(input) {
        if (!input.includes('Enter')) {
            this.player.setState(states.SITTING);
        }
    }
}

export class SittingLeft extends State {
    constructor(player) {
        super('SITTINGLEFT');
        this.player = player;
    }
    enter() {
        this.player.createImage('./../img/Knight_1/Idleleft.png');
        this.player.width = 66;
        this.player.height = 76;
        this.player.maxFrame = 3;
    }
    handleInput(input) {
        if (input.includes('d')) {
            this.player.setState(states.RUNNING);
        } else if (input.includes('a')) {
            this.player.setState(states.RUNNINGLEFT);
        } else if (input.includes('Enter')) {
            this.player.setState(states.ATTACKLEFT);
        } else if (input.includes('w') && input.includes('d')) {
            this.player.setState(states.JUMPING);
        } else if (input.includes('w') && input.includes('a')) {
            this.player.setState(states.JUMPINGLEFT);
        }
    }
}

export class RunningLeft extends State {
    constructor(player) {
        super('RUNNINGLEFT');
        this.player = player;
    }
    enter() {
        this.player.createImage('./../img/Knight_1/Runleft.png');
        this.player.width = 69;
        this.player.height = 76;
        this.player.maxFrame = 6;
    }
    handleInput(input) {
        if (input.includes('w') && input.includes('d')) {
            this.player.setState(states.JUMPING);
        } else if (input.includes('w') && input.includes('a')) {
            this.player.setState(states.JUMPINGLEFT);
        } else if (input.includes('Enter')) {
            this.player.setState(states.ATTACKLEFT);
        } else if (!input.includes('a') && !input.includes('d')) {
            this.player.setState(states.SITTINGLEFT);
        } 
    }
}

export class FallingLeft extends State {
    constructor(player) {
        super('FALLINGLEFT');
        this.player = player;
    }
    enter() {
        if (this.player.onGround()) this.player.velocity.y -= 20;
        this.player.createImage('./../img/Knight_1/Fallingleft.png');
        this.player.width = 79;
        this.player.height = 76;
        this.player.maxFrame = 0;
    }
    handleInput(input) {
        if (this.player.onGround() || this.player.velocity.y === 0) {
            this.player.setState(states.SITTINGLEFT);
        } else if (input.includes('Enter')) {
            this.player.setState(states.ATTACKLEFT);
        }
    }
}

export class JumpingLeft extends State {
    constructor(player) {
        super('JUMPINGLEFT');
        this.player = player;
    }
    enter() {
        if (this.player.onGround() || this.player.velocity.y === 0) this.player.velocity.y -= 20;
        this.player.createImage('./../img/Knight_1/Jump1left.png');
        this.player.width = 80;
        this.player.height = 76;
        this.player.maxFrame = 0;
    }
    handleInput(input) {
        if (this.player.velocity.y > this.player.weight && input.includes('d')) {
            this.player.setState(states.FALLING);
        } else if (!this.player.onGround() && this.player.velocity.y === 0 && input.includes('d')) {
            this.player.setState(states.FALLING);
        } else if (this.player.velocity.y > this.player.weight && input.includes('a')) {
            this.player.setState(states.FALLINGLEFT);
        } else if (!this.player.onGround() && this.player.velocity.y === 0 && input.includes('a')) {
            this.player.setState(states.FALLINGLEFT);
        } else if (input.includes('Enter')) {
            this.player.setState(states.ATTACKLEFT);
        } else if (this.player.velocity.y === 0) {
            this.player.setState(states.SITTINGLEFT);
        }
    }
}

export class AttackLeft extends State {
    constructor(player) {
        super('ATTACKLEFT');
        this.player = player;
    }
    enter() {
        this.player.createImage('./../img/Knight_1/Attack 2left.png');
        this.player.width = 96;
        this.player.height = 76;
        this.player.maxFrame = 3;
    }
    handleInput(input) {
        if (!input.includes('Enter')) {
            this.player.setState(states.SITTINGLEFT);
        }
    }
}