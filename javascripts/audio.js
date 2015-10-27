function stop() {
    source.stop(context.currentTime); // stop the source immediately
}

$(document).ready(function() {

//******************** WEB AUDIO FUNCTION *********************

function WebAudio (variable, path, buttonClass) {
  
  var context = new AudioContext(); // Create and Initialize the Audio Context
  var variable; // Create the Sound 
  var getSound = new XMLHttpRequest(); // Load the Sound with XMLHttpRequest
  getSound.open("GET", path, true); // Path to Audio File
  getSound.responseType = "arraybuffer"; // Read as Binary Data
  getSound.onload = function() {
    context.decodeAudioData(getSound.response, function(buffer){
      variable = buffer; // Decode the Audio Data and Store it in a Variable
    });
  }
  getSound.send(); // Send the Request and Load the File
  
  //window.addEventListener("click", click); // Create Event Listener for KeyDown
  
  $(buttonClass).click(function() {
    console.log("event", event);
    console.log("you clicked a sound button!");
    var playSound = context.createBufferSource(); // Declare a New Sound
        playSound.buffer = variable; // Attatch our Audio Data as it's Buffer
        playSound.connect(context.destination);  // Link the Sound to the Output
        playSound.start(0); // Play the Sound Immediately
    })


};


new WebAudio("letThemFight", "././audio/UnderTheSea.m4a", ".battle");
new WebAudio("letThemFight", "././audio/Fight.mp3", ".battle");
new WebAudio("attackButton", "././audio/girlAttack.mp3", ".attack");

// Tell the Source when to play
function playSound() {
    source.start(context.currentTime); // play the source immediately
}





});