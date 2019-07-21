function letterOutput(){
  var letters = [].slice.call(buttonDiv.querySelectorAll('.abc-button'), 0);
//  var audios = [].slice.call(audioButtonDiv.querySelectorAll('.abc-audio-btn'), 0);
  buttonDiv.addEventListener('click', function(e) {
  var index = letters.indexOf(e.target)
//  var index2 = audios.indexOf(e.target)
    if(index !== -1) {
      document.getElementById("abc-letter").innerHTML=(abcLetters[index].toUpperCase());
//      document.getElementById("abc-audio-btns").innerHTML=(soundBtns[index2]);
    }
//      createButtons2()
  });
}
letterOutput();

function createButtons2(){
  //creating buttons from query
  for(i = 0; i < (soundBtns.length); i++) {
    var button = document.createElement("button");
    button.innerHTML = soundBtns[i].toUpperCase();
    button.classList.add("abc-audio-btn");
    audioButtonDiv.appendChild(button);
  }
}



var buttonDiv = document.getElementById("abc-buttons");
var audioButtonDiv = document.getElementById("abc-audio-btns");