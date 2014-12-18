this.nudge2d = this.nudge2d || {}; // Initialize namespace

(function (window) {
  /**
   *
   * @constructor
   */
  function Champion() {
    this.initialize();
  }
  Champion.prototype = new createjs.Sprite();
  Champion.prototype.Sprite_initialize = Champion.prototype.initialize;

  Champion.prototype.initialize = function(){
    var animation = nudge2d.AssetManifest.champ;
    var spritesheet = new createjs.SpriteSheet(animation);

    this.Sprite_initialize(spritesheet, "idle");

    // Default Champion properties
    this.primWeapon = {
      type: "blue_bullet",
      velocityX: 30,
      velocityY: 0,
      x: this.x+30,
      y: this.y+30,
      damage: 5
    }
  };

  /**
   * Changes the current animation of the unit
   * @param {String} state the new animation
   */
  Champion.prototype.setAnimation = function(state){
    if(state != this.currentAnimation){
      this.gotoAndPlay(state);
    }
  };

  // Fires unit's primary weapon.
  Champion.prototype.firePrimary = function(){
    this.setAnimation("shoot");
    var bullet = new nudge2d.Projectile(this.primWeapon);
    // Add the bullet to the scene.
    nudge2d.Scene.addNode(bullet);
  };

  /**
   * Advance the animation of the Champion unit
   * @param stage a reference to the parent stage
   */
  Champion.prototype.tick = function(stage){};

  nudge2d.Champion = Champion;
}(window));