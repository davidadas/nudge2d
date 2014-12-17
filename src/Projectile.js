this.nudge2d = this.nudge2d || {}; // Initialize namespace

(function (window) {
  /**
   * @param sprite the projectile animation
   * @param vX velocity along the x-axis
   * @param vY velocity along the y-axis
   * @param damage
   * @constructor
   */
  function Projectile(sprite, vX, vY, damage) {
    this.initialize(sprite, vX, vY, damage);
  }
  Projectile.prototype = new createjs.Sprite();
  Projectile.prototype.Sprite_initialize = Projectile.prototype.initialize;

  Projectile.prototype.initialize = function(sprite, vX, vY, damage){
    var animation = nudge2d.AssetManifest.projectile;
    var spritesheet = new createjs.SpriteSheet(animation);

    this.Sprite_initialize(spritesheet, sprite);
    this.vX = vX;
    this.vY = vY;
    this.damage = damage || 1;
  };

  /**
   * Advance the animation of the projectile
   * @param stage a reference to the parent stage
   */
  Projectile.prototype.tick = function(stage){
    // Advance the projectile forward
    this.x += this.vX;
    this.y += this.vY;

    var units = nudge2d.Scene.collidables;
    for(var i = 0; i < units.length; i++){
      var hasCollision = ndgmr.checkRectCollision(this, sprites[i]);
      if(!!hasCollision){
        units[i].health -= this.damage;
        nudge2d.Scene.removeNode(this);
      }
    }

    // If outside the game boundary, remove.
    if(this.x > stage.getBounds().x || this.x < 0)
      nudge2d.Scene.removeNode(this);
  };

  nudge2d.Projectile = Projectile;
}(window));