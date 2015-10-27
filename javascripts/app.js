$(document).ready(function() {

  /*
    Test code to generate a human player and an orc player
   */
  // var warrior = new Princess();
  // warrior.setWeapon(new Fish());
  // warrior.generateClass();  // This will be used for "Surprise me" option
  // console.log(warrior.toString());

  // var orc = new Fighter();
  // orc.generateClass();
  // orc.setWeapon(new Hair());
  // console.log(orc.toString());

  /*
    Test code to generate a spell
   */
  // var spell = new Magic();
  // console.log("spell: ", spell.toString());


  /*
    END OF TEST CODE

    Show the initial view that accepts player name
   */
  $("#fight").hide();
  $("#battleground").hide();
  $("#player-setup").show();


  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;

    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--weapon":
        moveAlong = ($("#player-name").val() !== "");
        break;
    }

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }
  });

  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });

//***********************SELECT PRINCESS*********************
var Player1 = {};

  $(".pocahontas").click(function(e) {
    Player1 = new Pocahontas();
  console.log(Player1);
  });
  $(".jasmine").click(function(e) {
    Player1 = new Jasmine();
  console.log(Player1);
  });
  $(".belle").click(function(e) {
    Player1 = new Belle();
  console.log(Player1);
  });
  $(".ariel").click(function(e) {
    Player1 = new Ariel();
  console.log(Player1);
  });
  $(".elsa").click(function(e) {
    Player1 = new Elsa();
  console.log(Player1);
  });
  $(".tiana").click(function(e) {
    Player1 = new Tiana();
  console.log(Player1);
  });
  $(".rapunzel").click(function(e) {
    Player1 = new Rapunzel();
  console.log(Player1);
  });
  $(".merida").click(function(e) {
    Player1 = new Merida();
  console.log(Player1);
  });

//******************SELECT WEAPONS*******************
  $(".fish").click(function() {
    Player1.weapon = new Fish();
    $("#weapon-select").hide();
    $("#fight").show();
    console.log(Player1);
  });

  $(".hair").click(function() {
    Player1.weapon = new Hair();
    $("#weapon-select").hide();
    $("#fight").show();
    console.log(Player1);
  });

  $(".books").click(function() {
    Player1.weapon = new Books();
    $("#weapon-select").hide();
    $("#fight").show();
    console.log(Player1);
  });

  $(".tiger").click(function() {
    Player1.weapon = new Tiger();
    $("#weapon-select").hide();
    $("#fight").show();
    console.log(Player1);
  });

  $(".bowarrow").click(function() {
    Player1.weapon = new BowArrow();
    $("#weapon-select").hide();
    $("#fight").show();
    console.log(Player1);
  });

//*****************LETS FIGHT GENERATES OPPONENT ****************
var Player2 = {};
  $(".battle").click(function() {
    Player2 = new Fighter();
    Player2.generateClass();
    // Player2.weapon = new Tiger();
    console.log(Player2.class.name);

    if (Player2.class.name === "Pocahontas") {
      Player2.weapon = new BowArrow();
    }
    if (Player2.class.name === "Tiana") {
      Player2.weapon = new Fish();
    }
    if (Player2.class.name === "Jasmine") {
      Player2.weapon = new Tiger();
    }
    $("#fight").hide();
    $("#player-setup").hide();
    $("class-select").hide();
    $("#weapon-select").hide();
    $("#battleground").show();
    $("#magic-button").show();

    console.log(Player2);
    console.log("Initial player1 health", Player1.health);
    console.log("Initial player1 damage", Player1.weapon.damage);
    console.log("Initial player2 health", Player2.class.health);
    console.log("Initial player2 damage", Player2.weapon.damage);
    console.log("player 1 name", Player1.name);
//*****************SEND NAMES OF PRINCESSES TO DIVS*****************
    $("#player1-name").html(Player1.name + ":");
    $("#player2-name").html("Evil " + Player2.class.name + ":");
    $("#health1").val(Player1.health);
    $("#health2").val(Player2.class.health);
  });
//************************ATTACK BUTTON**************************

  $(".attack").click(function() {
    Player1.health = Player1.health - Player2.weapon.damage;
    Player2.class.health = Player2.class.health - Player1.weapon.damage;
    if (Player1.health <= 0) {
      alert("The Evil Princess Won.");
      $("#battleground").hide();
      $("#player-setup").show();
    }
    if (Player2.class.health <= 0) {
      alert("You Win!!!");
      $("#battleground").hide();
      $("#player-setup").show();
    }
    $("#health1").val(Player1.health);
    $("#health2").val(Player2.class.health);
    $("#to-string").html(Player1.toString());
    console.log("player 1 to string", Player1);
    console.log("player1 health", Player1.health);
    console.log("player1 damage", Player1.weapon.damage);
    console.log("player2 health", Player2.class.health);
    console.log("player2 damage", Player2.weapon.damage);
  });
//*****************USE MAGIC BUTTON***********************

  $("#magic-button").click(function() {
    $(this).hide();
    var magic = new Magic();
    Player2.class.health = Player2.class.health - magic.damage;
    if (Player2.class.health <= 0) {
      alert("You Win!!!");
      $("#battleground").hide();
      $("#player-setup").show();
    }
    $("#health1").val(Player1.health);
    $("#health2").val(Player2.class.health);
    console.log(magic.damage);
    console.log("player2 health", Player2.class.health);
  });















});