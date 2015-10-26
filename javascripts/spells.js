/*
  Base spell function that defines name, damage, damage type
 */
var Spell = function() {
  this.name = "";
  this.damage = 0;

  this.damageTypes = ["voodoo", "singing", "wind", "freezing"];
  this.type = "";

  this.toString = function() {
    return this.name + " of " + this.type + " for " + this.damage + " damage!";
  }
};

/*
  An elemental sphere that can be cast by a magical class
 */
var Magic = function() {
  this.name = "Magic";
  this.damage = Math.floor(Math.random() * 10 + 10);

  var random = Math.round(Math.random() * (this.damageTypes.length - 1));
  this.type = this.damageTypes[random];
};
Magic.prototype = new Spell();