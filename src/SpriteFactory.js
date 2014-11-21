function SpriteFactory(loader) {
    this.manifest = loader;
    this.sprites = {
      grunt: {
        "images": [loader.getResult("grunt")],
        frames: {width: 126, height: 118},
        "animations": {
          "dead":  [0,   4],
          "idle":  [5,  10],
          "shoot": [11, 14],
          "walk":  [15, 23]
        }
      },
      titan: {
        "images": [loader.getResult("titan")],
        frames: {width: 227, height: 158},
        "animations": {
          "dead": [0,   4],
          "idle": [5,  10],
          "punch":[11, 20],
          "shoot":[21, 27],
          "walk": [28, 38]
        }
      },
      walker: {
        "images": [loader.getResult("walker")],
        frames: {width: 166, height: 121},
        "animations": {
          "dead": [0,   4],
          "idle": [5,  10],
          "shoot":[11, 16],
          "walk": [17, 26]
        }
      }
    };

  this.getSprite = function(enemy){
    var spritesheet = new createjs.SpriteSheet(this.sprites[enemy]);
    return new createjs.Sprite(spritesheet, "walk");
  }
}