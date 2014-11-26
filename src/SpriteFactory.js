function SpriteFactory(loader) {
    this.manifest = loader;
    this.sprites = {
      grunt: {
        "images": [loader.getResult("grunt")],
        "frames": {width: 126, height: 118},
        "animations": {
          "dead":  [0,   4],
          "idle":  [5,  10],
          "shoot": [11, 14],
          "walk":  [15, 23]
        }
      },
      titan: {
        "images": [loader.getResult("titan")],
        "frames": {width: 227, height: 158},
        "animations": {
          "dead":  [0,   4],
          "idle":  [5,  10],
          "punch": [11, 20],
          "shoot": [21, 27],
          "walk":  [28, 38]
        }
      },
      walker: {
        "images": [loader.getResult("walker")],
        "frames": {width: 166, height: 121},
        "animations": {
          "dead":  [0,   4],
          "idle":  [5,  10],
          "shoot": [11, 16],
          "walk":  [17, 26]
        }
      },
      champ: {
        "images": [loader.getResult("champ")],
        "frames": {width: 137, height: 137},
        "animations": {
          "attack":         [0,   6],
          "attack_crouch":  [7,  13],
          "attack_jump":    [14, 20],
          "crouch":         [21, 26],
          "dead":           [27, 31],
          "hurt":           [32, 34],
          "idle":           [35, 40],
          "jump":           [41, 46],
          "load_gun":       [47, 52],
          "load_gun_crouch":[53, 58],
          "run":            [59, 73],
          "shoot":          [74, 79],
          "shoot_crouch":   [80, 84],
          "unload_gun":     [85, 90],
          "unload_gun_crouch":[91, 96],
          "walk":           [97, 111]
        }
      }
    };

  this.getSprite = function(enemy){
    var spritesheet = new createjs.SpriteSheet(this.sprites[enemy]);
    return new createjs.Sprite(spritesheet, "idle");
  }
}