let Jack;
let Jackson;
let box;
let grounds;
let isJumping;

function setup() {
    let canvas = new Canvas(600, 400);
    canvas.parent("game");
    world.gravity.y = 10;

    Jack = new Sprite(100, 100, 40, 40, "dynamic");
    Jack.color = "Orange";
    Jack.strokeWeight = 3;
    Jack.diameter = 40;
    Jack.textColor = 'black';
    Jack.text = "Jack";
    Jack.bounciness = 0.8;

    Jackson = new Sprite(100, 0, 40, 40, "dynamic");
    Jackson.color = "red";
    Jackson.strokeWeight = 3;
    Jackson.diameter = 40;
    Jackson.textColor = 'black';
    Jackson.text = "Jackson";
    Jackson.bounciness = 3.8;

    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 5; y++) {
            let box = new Sprite(100 + x * 40, 340 - y * 40, 30, 30);
            box.color = "red";
            box.addAni("flappy", "FlappyAnimation.png", { frameSize: [100, 50], frameCount: 2 });
        }
    }
    grounds = new Group();
    grounds.color = "green";

    let ground = new grounds.Sprite(300, 380, 600, 40, "static");
    let ground2 = new grounds.Sprite(500, 200, 200, 40, "static");

}

function draw() {
    clear()
    background(0, 100, 250);


    if (kb.pressing("left")) {
        Jack.vel.x = -10;
    } else if (kb.pressing("right")) {
        Jack.vel.x = 10;
    } else {
        Jack.vel.x = 0;
    }

    if (isJumping === false && kb.presses("up")) {
        isJumping = true;
        Jack.vel.y = -10;
    }

    if (ball.collides(grounds)) {
        isJumping = false;
    }


}