


export class Preloader extends Phaser.Scene {
    constructor() {
        super('preloader');

        this.characterTypes = [
            'Mask Dude',
            'Ninja Frog',
            'Pink Man',
            'Virtual Guy'
        ]

    }

    preload() {

        //lade alle Bilder für das Level
        this.load.image("terrain", "assets/PixelAdventure/Terrain/Terrain (16x16).png");
        this.load.image("background_grey", "assets/PixelAdventure/Background/Gray.png");
        this.load.image("background_blue", "assets/PixelAdventure/Background/Blue.png");
        this.load.image("background_yellow", "assets/PixelAdventure/Background/Yellow.png");
        this.load.image("spikes", "assets/PixelAdventure/Traps/Spikes/Idle.png")

        //Lade level.json
        this.load.tilemapTiledJSON("level1", "assets/tiled/level1.json");

        //lade alle Bilder von allen Charakteren
        for (let characterType of this.characterTypes) {

            this.load.spritesheet({
                key: `${characterType}_idle`,
                url: `assets/PixelAdventure/Main Characters/${characterType}/Idle (32x32).png`,
                frameConfig: {
                    frameWidth: 32,
                    frameHeight: 32,
                    startFrame: 0,
                    endFrame: 11
                }
            });

                //Lade Trampolin Spritesheets
        this.load.spritesheet({
            key: `trampoline_idle`,
            url: `assets/PixelAdventure/Traps/Trampoline/Idle.png`,
            frameConfig: {
                frameWidth: 28,
                frameHeight: 28,
                startFrame: 0,
                endFrame: 0
            }
        });

            this.load.spritesheet({
                key: `${characterType}_run`,
                url: `assets/PixelAdventure/Main Characters/${characterType}/Run (32x32).png`,
                frameConfig: {
                    frameWidth: 32,
                    frameHeight: 32,
                    startFrame: 0,
                    endFrame: 11
                }
            });

            this.load.spritesheet({
                key: `${characterType}_jump`,
                url: `assets/PixelAdventure/Main Characters/${characterType}/Jump (32x32).png`,
                frameConfig: {
                    frameWidth: 32,
                    frameHeight: 32,
                    startFrame: 0,
                    endFrame: 0
                }
            });

            this.load.spritesheet({
                key: `${characterType}_double_jump`,
                url: `assets/PixelAdventure/Main Characters/${characterType}/Double Jump (32x32).png`,
                frameConfig: {
                    frameWidth: 32,
                    frameHeight: 32,
                    startFrame: 0,
                    endFrame: 5
                }
            });

            this.load.spritesheet({
                key: `${characterType}_hit`,
                url: `assets/PixelAdventure/Main Characters/${characterType}/Hit (32x32).png`,
                frameConfig: {
                    frameWidth: 32,
                    frameHeight: 32,
                    startFrame: 0,
                    endFrame: 6
                }
            });
        }

    }

    create() {
        this.scene.start("play");
    }

}