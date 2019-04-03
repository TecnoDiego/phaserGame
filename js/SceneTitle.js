/* SceneTitle.js */
class SceneTitle extends Phaser.Scene {
    
    constructor() {
        super({ key: "SceneTitle" });
    }
    
    preload() {
        this.load.image("btnPlay",
            "assets/images/sprBtnPlay.png");
    }
    
    create() {
        // Add button in the middle of the scene
        // and make it interactive
        this.btnPlay = this.add.sprite(
            this.game.config.width * 0.5,
            this.game.config.height * 0.5,
            "btnPlay"
        );
        this.btnPlay.setInteractive();

        // Event when pressing the button
        this.btnPlay.on("pointerdown", function() {
        this.scene.start("SceneMain");
        }, this); 
    }
}