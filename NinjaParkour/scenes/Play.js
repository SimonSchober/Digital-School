import { Player } from "../objects/Player.js";
import { Trampoline } from "../objects/Trampoline.js";

export class Play extends Phaser.Scene {
  constructor() {
    super("play");
    this.player = null;
  }

  create() {
    //Erstelle Level
    const map = this.make.tilemap({ key: "level1" });

    //Erstelle Kachelsets/Tileset
    const backgroundYellowTileset = map.addTilesetImage(
      "background_yellow",
      "background_yellow"
    );
    const terrainTileset = map.addTilesetImage("tileset", "terrain");
    const terrainCollideTileset = map.addTilesetImage(
      "tileset_collide",
      "terrain"
    );
    const backgroundBlueTileset = map.addTilesetImage(
      "background_blue",
      "background_blue"
    );
    const backgroundGreyTileset = map.addTilesetImage(
      "background_grey",
      "background_grey"
    );
    const spikesTileset = map.addTilesetImage("spike", "spikes");

    //Erstelle Ebenen/Layer
    const backgroundLayer = map.createLayer("background", [
      backgroundGreyTileset,
      backgroundBlueTileset,
      backgroundYellowTileset,
    ]);
    const terrainLayer = map.createLayer("terrain", [
      terrainTileset,
      terrainCollideTileset,
    ]);
    const trapsLayer = map.createLayer("traps", spikesTileset);

    //Erstelle Spieler
    this.player = new Player(this, 200, 600, "Max", "Mask Dude");

    //Kamera verfolgt Spieler
    this.cameras.main.startFollow(this.player, true);
    this.cameras.main.setZoom(1.4);
    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    //Erstelle Kollision mit den Blöcken
    terrainLayer.setCollisionByProperty({ collide: true });
    this.physics.add.collider(this.player, terrainLayer);

    //Kill Bausteine
    // const killTraps = map.filterTiles((tile) => tile.properties.kill === true);
    trapsLayer.setCollisionByProperty({ kill: true });
    this.physics.add.collider(this.player, trapsLayer, () => {
      this.player.kill();
    });

         //Durchsuche Trampolin Layer und erstelle Trampoline
         const trampolineLayer = map.getObjectLayer("trampolines");
         //Liste für alle Trampoline
         const trampolines = [];
         //Erstelle Trampolin für jedes Trampolin in der Tiled Map
         for (const trampoline of trampolineLayer.objects) {
             const newTrampoline = new Trampoline(this, trampoline.x, trampoline.y);
             //Füge neues Trampolin zur Liste hinzu
             trampolines.push(newTrampoline);
         }
 
         //Kollision mit Trampolinen
         this.physics.add.collider(this.player, trampolines, (player, trampoline) => {
             trampoline.jump(player);
         })
 
     }

     
     update() {}
  }

    



