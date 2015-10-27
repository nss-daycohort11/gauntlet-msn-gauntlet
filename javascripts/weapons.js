var Weapon = function() {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;

  this.toString = function() {
    return this.name;
  }
};

var Fish = function() {
  this.name = "fish slap";
  this.damage = 15;
  this.hands = 2;
};
Fish.prototype = new Weapon();

var Hair = function() {
  this.name = "hair pull";
  this.damage = 23;
  this.hands = 2;
};
Hair.prototype = new Weapon();

var Books = function() {
  this.name = "book throw";
  this.damage = 28;
  this.hands = 2;
};
Books.prototype = new Weapon();

var Tiger = function() {
  this.name = "tiger";
  this.damage = 35;
  this.hands = 2;
};
Tiger.prototype = new Weapon();

var BowArrow = function() {
  this.name = "bow and arrow";
  this.damage = 31;
  this.hands = 2;
};
BowArrow.prototype = new Weapon();

