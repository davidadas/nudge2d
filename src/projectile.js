this.nudge2d = this.nudge2d || {}; // Initialize namespace

(function (window) {
  /**
   * @param options
   * @constructor
   */
  function Projectile( options ) {
    this.initialize(options);
  }
  Projectile.prototype = new createjs.Sprite();
  Projectile.prototype.Sprite_initialize = Projectile.prototype.initialize;

  Projectile.prototype.initialize = function( options ){
    var animation = nudge2d.AssetManifest.projectile;
    var spritesheet = new createjs.SpriteSheet(animation);

    // Default Projectile properties
    this.vX = options.velocityX || 0;
    this.vY = options.velocityY || 0;
    this.x  = options.x || 0;
    this.y  = options.y || 0;
    this.damage = options.damage || 0;

    this.Sprite_initialize(spritesheet, options.type);
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