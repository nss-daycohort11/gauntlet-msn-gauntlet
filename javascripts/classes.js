/*
  Base function for a player, or enemy, class (profession)
 */
var PlayerClass = function() {
  this.name = "Princess";
  this.healthBonus = 0;
  this.strengthBonus = 0;
  this.intelligenceBonus = 0;
  this.magical = true;

  this.toString = function() {
    return this.name;
  }
};

PlayerClass.prototype = new Princess();
/*
    CLASSIC PRINCESSES
      - Pocahontas
      - Jasmine
      - Belle
      - Ariel
 */
var ClassicPrincesses = function() {
  this.healthBonus = 20;
  this.strengthBonus = 10;
};
ClassicPrincesses.prototype = new PlayerClass();


var Pocahontas = function() {
  this.name = "Pocahontas";
  this.healthBonus = this.healthBonus + 25;
  this.strengthBonus = this.strengthBonus + 30;
  this.health = this.health + this.healthBonus;
};
Pocahontas.prototype = new ClassicPrincesses();


var Jasmine = function() {
  this.name = "Jasmine";
  this.healthBonus = this.healthBonus + 20;
  this.strengthBonus = this.strengthBonus + 10;
  this.health = this.health + this.healthBonus;
};
Jasmine.prototype = new ClassicPrincesses();


var Belle = function() {
  this.name = "Belle";
  this.healthBonus = this.healthBonus + 35;
  this.strengthBonus = this.strengthBonus + 20;
  this.health = this.health + this.healthBonus;
};
Belle.prototype = new ClassicPrincesses();


var Ariel = function() {
  this.name = "Ariel";
  this.healthBonus = this.healthBonus + 10;
  this.strengthBonus = this.strengthBonus + 40;
  this.health = this.health + this.healthBonus;
};
Ariel.prototype = new ClassicPrincesses();


/*
    NEW PRINCESSES
      - Elsa
      - Tiana
      - Rapunzel
      - Merida
 */
var NewPrincesses = function() {
  this.name = "New Princess";
  this.magical = true;
  this.healthBonus = this.healthBonus - 10;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 20;
  this.health = this.health + this.healthBonus;
};
NewPrincesses.prototype = new PlayerClass();


var Elsa = function() {
  this.name = "Elsa";
  this.healthBonus = this.healthBonus + 5;
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 20;
  this.health = this.health + this.healthBonus;
};
Elsa.prototype = new NewPrincesses();


var Tiana = function() {
  this.name = "Tiana";
  this.healthBonus = this.healthBonus - 15;
  this.strengthBonus = this.strengthBonus - 25;
  this.intelligenceBonus = this.intelligenceBonus + 40;
  this.health = this.health + this.healthBonus;
};
Tiana.prototype = new NewPrincesses();


var Rapunzel = function() {
  this.name = "Rapunzel";
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 10;
  this.health = this.health + this.healthBonus;
};
Rapunzel.prototype = new NewPrincesses();


var Merida = function() {
  this.name = "Merida";
  this.healthBonus = this.healthBonus - 5;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 30;
  this.health = this.health + this.healthBonus;
};
Merida.prototype = new NewPrincesses();


