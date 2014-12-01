function SpriteFactory(loader) {
  this.manifest = loader;
  // Below is the full manifest of loaded sprites.
  // TODO: Combine elegantly into one sheet for performance.
  var _sprites = {
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
    },
    bullets: {
      "images": [loader.getResult("bullets")],
      "frames": [
        [2, 2, 63, 74],
        [67, 2, 63, 74],
        [132, 2, 63, 74],
        [197, 2, 63, 74],
        [262, 2, 63, 74],
        [327, 2, 75, 75],
        [2, 79, 75, 75],
        [79, 79, 75, 75],
        [156, 79, 75, 75],
        [233, 79, 75, 75],
        [310, 79, 75, 75],
        [2, 156, 75, 75],
        [79, 156, 75, 75],
        [156, 156, 75, 75],
        [233, 156, 22, 72],
        [257, 156, 22, 72],
        [281, 156, 22, 72],
        [305, 156, 22, 72],
        [329, 156, 75, 75],
        [2, 233, 75, 75],
        [79, 233, 75, 75],
        [156, 233, 75, 75],
        [233, 233, 75, 75],
        [310, 233, 75, 75],
        [2, 310, 75, 75],
        [79, 310, 75, 75],
        [156, 310, 75, 75],
        [233, 310, 38, 38],
        [273, 310, 38, 38],
        [313, 310, 38, 38],
        [353, 310, 38, 38]
      ],
      "animations": {
        "big_orange_muzzle":[0, 4],
        "blue_bullet":      [5, 8],
        "blue_muzzle":      [9, 13],
        "circle_muzzle":    [14, 17],
        "orange_bullet":    [18, 21],
        "orange_muzzle":    [22, 26],
        "spin_bullet":      [27, 30]
      }
    }
  };

  function _loadSprite(sprite, action){
    var spritesheet = new createjs.SpriteSheet(_sprites[sprite]);
    return new createjs.Sprite(spritesheet, action);
  }

  this.unit = function(enemy){
    return _loadSprite(enemy, "idle")
  };

  this.bullet = function(effect){
    return _loadSprite("bullets", effect)
  }


}