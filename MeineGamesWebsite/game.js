/*
    To Do:
    - Spieler
    - Springen/fliegen
    - Hindernisse
    - Punktestand
    - Animationen (fliegen, fallen)
    - Startmenü
    - Musik (Ein/Aus Button)
    - Hintergrund auswählen
    - Game Over Screen und highscore

    - Easter Egg
    - Items
*/

let highscore = localStorage.getItem("highscore");
if (highscore === null) {
    localStorage.setItem("highscore", 0);
}

let x = 80;
let y = 80;
let w = 32 * 1.2;
let h = 24 * 1.2;
let playerImg;
let score = 0;

let velocity = 0;
let acceleration = 0.6;

let gameState = 'start';

let oldMillis = 0;
let timeBetweenPipes = 1500;


//Javascript Object kann mehrere Eigenschaften haben
let pipeGaps = [];
let pipeBottomImg;
let pipeTopImg;
let pipeSpeed = 6;

let backgroundImage;

// Sound variables
let backgroundMusic;
let wooshSound;
let musicIsPlaying = false;

let player;





function preload() {
    //Flappy Bild laden bevor das Spiel beginnt
    //playerImg = loadImage('FlappyCar2.png');
    backgroundImage = loadImage('BlueDark.png');
    // playerImg = loadImage('assets/flappyCar2.png');
    pipeTopImg = loadImage('RöhreOben.png');
    pipeBottomImg = loadImage('RöhreUnten.png');

    // Musik laden
    backgroundMusic = loadSound('disco-funk.wav');
    wooshSound = loadSound('woosh.mp3');

    player = new Sprite(250, 80);
    player.scale = 0.6;
    player.addAni('jump', 'FlappyAnimation.png', { frameSize: [100, 50], frames: 2 });
    player.addAni('idle', 'FlappyAnimation.png', { frameSize: [100, 50], frames: 1 });
}

function setup() {
    //Canvas/Spielfeld erstellen
    const canvas = createCanvas(600, 400);
    canvas.parent('game');

}

function draw() {
    clear();

    player.ani = "jump";
    player.x = x;
    player.y = y;


    //Hintergrund zeichnen
    background(0, 0, 0);
    fill(255);
    textSize(28);

    //Zeichne Hintergrundbild
    image(backgroundImage, 0, 0, 600, 400);

    //Wenn Spiel startet, dann zeichne Start Text
    if (gameState === 'start') {
        text('Klicke um das Spiel zu starten', 100, 150);
    }

    //Wenn Spiel läuft, dann berechne neue Position
    if (gameState === 'play') {


        //Drehung des Spielers
        if (velocity > 0) {
            player.rotation = velocity * 2;
        } else {
            player.rotation = velocity * 4;
        }



        //Geschwindigkeit wird um Beschleunigung erhöht
        velocity = velocity + acceleration;
        //Position wird um Geschwindigkeit erhöht
        y = y + velocity;

        //Zeichne alle x Sekunden eine neue Röhre
        if (millis() > oldMillis + timeBetweenPipes) {
            oldMillis = millis();

            //Erstelle eine Röhre  image
            let newPipeGap = {
                x: 500,
                h: 140,
                y: 0,
                w: 40,
                isScore: true
            }
            newPipeGap.y = random(40, 360 - newPipeGap.h);

            //Füge Röhre zur Liste hinzu
            pipeGaps.push(newPipeGap);
        }

        //Alle Röhren anzeigen
        for (let i = 0; i < pipeGaps.length; i++) {

            let pipe = pipeGaps[i];

            //Entferne Röhre aus Liste, wenn sie aus dem Bildschirm ist
            if (pipe.x + pipe.w < 0) {
                pipeGaps.splice(i, 1);
                continue;
            }

            //Bewege Röhre nach links
            pipe.x = pipe.x - pipeSpeed;
            fill(255);

            //Zeichne obere Röhre
            //rect(pipe.x, 0, pipe.w, pipe.y);
            image(pipeTopImg, pipe.x, -300 + pipe.y, pipe.w, 300);

            //zeiche untere Röhre
            //rect(pipe.x, pipe.y + pipe.h, pipe.w, height - pipe.y + pipe.h);
            image(pipeBottomImg, pipe.x, pipe.y + pipe.h, pipe.w, 300);

            // fill(255, 0, 0);
            // rect(pipe.x, pipe.y, pipe.w, pipe.h);


            //Teste ob Spieler Röhre berührt
            //Überprüfe ob Spieler x Position auf der Röhre liegt
            if (x + w > pipe.x && x < pipe.x + pipe.w) {
                if (y < pipe.y || y + h > pipe.y + pipe.h) {
                    gameOver();
                }
            }

            //Wenn Spieler Röhre überquert, dann erhöhe Punktestand
            if (pipe.isScore && x > pipe.x + pipe.w) {
                pipe.isScore = false;
                score++;
            }
        }


    }


    //Wenn Game Over, dann zeichne Game Over Text
    if (gameState === 'gameOver') {
        text('Game Over', 200, 150);
        text('Highscore: ' + highscore, 200, 200);
    }

    //Zeichne Spieler an Position x,y
    //image(playerImg, x, y, w, h);

    //testen ob Spieler boden berührt
    if (y + h >= 400) {
        velocity = 0;
        y = 400 - h;
        gameOver();
    }
    if (y <= 0) {
        velocity = 0;
    }

    //Zeichne Punktestand
    text(score, 10, 30);

}

//Wenn Maus geklickt wird, dann springe
function mouseClicked() {

    //Wenn das Spiel nicht im play Modus ist, dann wechsel zu play Modus
    if (gameState !== 'play') {
        restart();
    }

    if (gameState === 'play') {

        wooshSound.play
            ();


    }
    //Ändere Geschwindigkeit ins negative, damit Spieler nach oben fliegt
    velocity = -10;

}

function gameOver() {
    gameState = 'gameOver';

    highscore = localStorage.getItem("highscore");
    if (score > highscore) {
        highscore = score;
        localStorage.setItem("highscore", score);
    }

}

function restart() {
    gameState = 'play';
    pipeGaps = [];
    score = 0;
    y = 100;
}

function toggleMusic() {
    musicIsPlaying = !musicIsPlaying;
    if (!musicIsPlaying) {
        backgroundMusic.loop();
    } else {
        backgroundMusic.stop();
    }
} 