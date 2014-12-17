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
    this.activeState = "idle";

    this.Sprite_initialize(spritesheet, this.activeState);
    this.health = 100;
  };

  /**
   * Changes the current animation of the unit
   * @param {String} state the new animation
   * @param onComplete callback after animation completes
   */
  Enemy.prototype.setAnimation = function(animation, onComplete){
    var callback = onComplete || function(){};
    this.activeState = animation;
    this.on("animationend", callback);
  };

  Enemy.prototype.notifyHit = function(target){
    if(target instanceof Projectile){
      this.health -= target.damage;
      nudge2d.Scene.removeNode(target);
    }
  };

  /**
   * Advance the animation of the Enemy
   * @param stage a reference to the parent stage
   */
  Enemy.prototype.tick = function(stage){
    if(this.activeState != this.currentAnimation){
      this.gotoAndPlay(this.activeState);
    }

    // Enemy killed animation
    if(this.health <= 0)
      this.setAnimation("dead", function(){
        nudge2d.Scene.removeNode(this);
      });
  };

  nudge2d.Enemy = Enemy;
}(window));