const abcLetters = ["a","ā","b","c","č","d","e","ē","f","g","ģ","h","i","ī","j","k","ķ","l","ļ","m","n","ņ","o","p","r","s","š","t","u","ū","v","z","ž"];



function output(){
  //creating buttons from query
  for(i = 0; i < (abcLetters.length); i++) {
    var button = document.createElement("button");
    button.innerHTML = abcLetters[i].toUpperCase();
    button.classList.add("abc-button");
    var buttonDiv = document.getElementById("abc-buttons");
    buttonDiv.appendChild(button);

    //selecting which button clicked _ then select which letter by index
    var letters = [].slice.call(buttonDiv.querySelectorAll('.abc-button'), 0);
    buttonDiv.addEventListener('click', function(e) {
     var index = letters.indexOf(e.target)
     if(index !== -1) {
       document.getElementById("abc-letter").innerHTML=(abcLetters[index].toUpperCase());
     }
   });
    
  }
}



output()
