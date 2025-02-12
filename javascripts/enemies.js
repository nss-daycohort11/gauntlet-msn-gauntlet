var Fighter = function() {
  this.health = this.health + 20;
  this.species = "fighter";
  this.allowedClasses = ["Pocahontas", "Tiana", "Jasmine"];

  this.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];
    // Composes the corresponding player class into the player object
    this.class = new window[randomClass]();
    return this.class;
  }
};
Fighter.prototype = new EnemyPrincess();

