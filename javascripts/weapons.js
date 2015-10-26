var Weapon = function() {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;

  this.toString = function() {
    return this.name;
  }
};

var Fish = function() {
  this.name = "fish";
  this.damage = 4;
  this.hands = 2;
};
Fish.prototype = new Weapon();

var Hair = function() {
  this.name = "hair";
  this.damage = 14;
  this.hands = 2;
};
Hair.prototype = new Weapon();

var Books = function() {
  this.name = "books";
  this.damage = 18;
  this.hands = 2;
};
Books.prototype = new Weapon();

var Tiger = function() {
  this.name = "tiger";
  this.damage = 18;
  this.hands = 2;
};
Tiger.prototype = new Weapon();

var BowArrow = function() {
  this.name = "bow and arrow";
  this.damage = 18;
  this.hands = 2;
};
BowArrow.prototype = new Weapon();

