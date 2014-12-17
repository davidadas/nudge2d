this.nudge2d = this.nudge2d || {}; // Initialize namespace

(function (window) {
  /**
   * @param sprite the Enemy sprite
   * @constructor
   */
  function Enemy(sprite) {
    this.initialize(sprite);
  }
  Enemy.prototype = new createjs.Sprite();
  Enemy.prototype.Sprite_initialize = Enemy.prototype.initialize;

  Enemy.prototype.initialize = function(sprite){
    var animation = nudge2d.AssetManifest[sprite];
    var spritesheet = new createjs.SpriteSheet(animation);

    this.Sprite_initialize(spritesheet, "idle");
    this.health = 100;
  };

  /**
   * Changes the current animation of the unit
   * @param {String} state the new animation
   */
  Enemy.prototype.setAnimation = function(state){
    if(state != this.currentAnimation){
      this.gotoAndPlay(state);
    }
  };

  /**
   * Advance the animation of the Enemy
   * @param stage a reference to the parent stage
   */
  Enemy.prototype.tick = function(stage){
    // Enemy killed animation
    if(this.health <= 0){
      this.setAnimation("dead");
      this.on("animationend", this.stop)
    }
  };

  nudge2d.Enemy = Enemy;
}(window));