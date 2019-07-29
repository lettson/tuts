

var nextClickCount = 0;
  function clickCount() {
    nextClickCount += 1
    if (nextClickCount>0){
      document.getElementById("next").innerHTML="Nākamais >";
      document.getElementById("output-container").classList.remove("d-none");
    }else{

    }
  }

var words = [
["Ze","me"],
["Jū","ra"],
["Ka","ķis"],
["Die","na"],
["Pa","pīrs"],
["Sko","la"],
["Sli","das"],
["Zie","ma"],
["Lū","pas"],
["Mai","ze"],
["For","ma"],
["Krā","sa"],
["Su","la"],
["Mā","sa"],
["Brā","lis"],
["Po","ga"],
["Lī","me"],
["Gri","ķi"],
["Pu","tra"],
["Uz","vārds"],
["Gul","ta"]
];

var wordsSounds = [
  ["sounds/001.wav","sounds/002.wav","sounds/003.wav"],
  ["sounds/004.wav","sounds/005.wav","sounds/006.wav"],
  ["sounds/007.wav","sounds/008.wav","sounds/009.wav"],
  ["sounds/010.wav","sounds/011.wav","sounds/012.wav"],
  ["sounds/013.wav","sounds/014.wav","sounds/015.wav"],
  ["sounds/016.wav","sounds/017.wav","sounds/018.wav"],
  ["sounds/019.wav","sounds/020.wav","sounds/021.wav"],
  ["sounds/022.wav","sounds/023.wav","sounds/024.wav"],
  ["sounds/025.wav","sounds/026.wav","sounds/027.wav"],
  ["sounds/028.wav","sounds/029.wav","sounds/030.wav"],
  ["sounds/031.wav","sounds/032.wav","sounds/033.wav"],
  ["sounds/034.wav","sounds/035.wav","sounds/036.wav"],
  ["sounds/037.wav","sounds/038.wav","sounds/039.wav"],
  ["sounds/040.wav","sounds/041.wav","sounds/042.wav"],
  ["sounds/043.wav","sounds/044.wav","sounds/045.wav"],
  ["sounds/046.wav","sounds/047.wav","sounds/048.wav"],
  ["sounds/049.wav","sounds/050.wav","sounds/051.wav"],
  ["sounds/052.wav","sounds/053.wav","sounds/054.wav"],
  ["sounds/055.wav","sounds/056.wav","sounds/057.wav"],
  ["sounds/058.wav","sounds/059.wav","sounds/060.wav"],
  ["sounds/061.wav","sounds/062.wav","sounds/063.wav"],
  ["sounds/064.wav","sounds/065.wav","sounds/066.wav"]  
];

function textOutputAndClicks(){
  textOutput();
  clickCount();
}

/*next output */
function textOutput(){
  var i = Math.floor((Math.random() * (words.length)) + 0)
  var x = words[i];
  var a = x[0];
  var b = x[1];
  document.getElementById("syllableOne").innerHTML=a
  document.getElementById("syllableTwo").innerHTML=b;
  
  var z = wordsSounds[i];
  var k = z[0];
  var l = z[1];
  var m = z[2];
  document.querySelector("#audio-btns button:nth-child(1)").children[0].setAttribute("src",k);
  document.querySelector("#audio-btns button:nth-child(2)").children[0].setAttribute("src",l);
  document.querySelector("#audio-btns button:nth-child(3)").children[0].setAttribute("src",m);
}
document.getElementById("next").addEventListener("click", textOutputAndClicks);


/* audio play*/
var audio1 = document.getElementById("audioOne");
var audio2 = document.getElementById("audioTwo");
var audio3 = document.getElementById("audioThree");

function playOne(){
  audio1.play();
  audio2.pause();
  audio3.pause();
  audio2.currentTime = 0;
  audio3.currentTime = 0;
}

function playTwo(){
  audio2.play();
  audio1.pause();
  audio3.pause();
  audio1.currentTime = 0;
  audio3.currentTime = 0;
}

function playThree(){
  audio3.play();
  audio1.pause();
  audio2.pause();
  audio1.currentTime = 0;
  audio1.currentTime = 0;
}

/*-----------------------------*/

/* highlight on click */
function highlight(obj){
  var orig = obj.style.color;
  obj.style.color = '#f00';
  setTimeout(function(){
       obj.style.color = orig;
  }, 500);
}
function hilightOne(){
  highlight(document.getElementById('syllableOne'));
}
function hilightTwo(){
  highlight(document.getElementById('syllableTwo'))
}
function hilightBoth(){
  hilightOne();
  hilightTwo()
}


function hilightAndPlayOne(){
  hilightOne();
  playOne();
}
function hilightAndPlayTwo(){
  hilightTwo();
  playTwo();
}
function hilightAndPlayThree(){
  hilightBoth();
  playThree();
}

document.querySelector("#audio-btns button:nth-child(1)").addEventListener("click", hilightAndPlayOne);
document.querySelector("#audio-btns button:nth-child(2)").addEventListener("click", hilightAndPlayTwo);
document.querySelector("#audio-btns button:nth-child(3)").addEventListener("click", (hilightAndPlayThree));










