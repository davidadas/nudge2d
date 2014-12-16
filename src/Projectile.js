this.nudge2d = this.nudge2d || {}; // Initialize namespace

(function (window) {
  /**
   * @param sprite the projectile animation
   * @param vX velocity along the x-axis
   * @param vY velocity along the y-axis
   * @constructor
   */
  function Projectile(sprite, vX, vY) {
    this.initialize(sprite, vX, vY);
  }
  Projectile.prototype = new createjs.Sprite();
  Projectile.prototype.Sprite_initialize = Projectile.prototype.initialize;

  Projectile.prototype.initialize = function(sprite, vX, vY){
    var animation = nudge2d.AssetManifest.projectile;
    var spritesheet = new createjs.SpriteSheet(animation);

    this.Sprite_initialize(spritesheet, sprite);
    this.vX = vX;
    this.vY = vY;
  };

  /**
   * Advance the animation of the projectile
   * @param stage a reference to the parent stage
   */
  Projectile.prototype.tick = function(stage){
    // Advance the projectile forward
    this.x += this.vX;
    this.y += this.vY;

    // If outside the game boundary, remove.
    if(this.x > stage.getBounds().x)
      nudge2d.Scene.removeNode(this);
  };

  nudge2d.Projectile = Projectile;
}(window));