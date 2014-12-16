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
    this.activeState = "idle";

    this.Sprite_initialize(spritesheet, this.activeState);

    // Default properties.
    this.primWeapon = "blue_bullet";
  };

  /**
   * Changes the current animation of the unit
   * @param {String} state the new animation
   */
  Champion.prototype.setAnimation = function(state){
    this.activeState = state;
  };

  // Fires unit's primary weapon.
  Champion.prototype.firePrimary = function(){
    this.setAnimation("shoot");
    var bullet = new nudge2d.Projectile(this.primWeapon, 30, 0);
    bullet.x = this.x+30;
    bullet.y = this.y+35;
    // Add the bullet to the scene.
    nudge2d.Scene.addNode(bullet);
  };

  /**
   * Advance the animation of the Champion unit
   * @param stage a reference to the parent stage
   */
  Champion.prototype.tick = function(stage){
    if(this.activeState != this.currentAnimation){
      this.gotoAndPlay(this.activeState);
    }

  };

  nudge2d.Champion = Champion;
}(window));