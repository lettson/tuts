const abcLv = ["a","ā","b","c","č","d","e","ē","f","g","ģ","h","i","ī","j","k","ķ","l","ļ","m","n","ņ","o","p","r","s","š","t","u","ū","v","z","ž"];

const abcRu = ["а","б","в","г","д","е","ё","ж","з","и","й","к","л","м","н","о","п","р","с","т","у","ф","х","ц","ч","ш","щ","ъ","ы","ь","э","ю","я"];

const soundBtns = ["s1","s2","s3"];

const abcLvSound = ["https://actions.google.com/sounds/v1/alarms/bugle_tune.ogg",
"https://actions.google.com/sounds/v1/ambiences/crickets_with_distant_traffic.ogg",
"https://actions.google.com/sounds/v1/alarms/dinner_bell_triangle.ogg",
"ā1","ā2","ā3","b1","b2","b3","c1","c2","c3","č1","č2","č3","d1","d2","d3","e1","e2","e3","ē1","ē2","ē3","f1","f2","f3","g1","g2","g3","ģ1","ģ2","ģ3","h1","h2","h3","i1","i2","i3","ī1","ī2","ī3","j1","j2","j3","k1","k2","k3","ķ1","ķ2","ķ3","l1","l2","l3","ļ1","ļ2","ļ3","m1","m2","m3","n1","n2","n3","ņ1","ņ2","ņ3","o1","o2","o3","p1","p2","p3","r1","r2","r3","s1","s2","s3","š1","š2","š3","t1","t2","t3","u1","u2","u3","ū1","ū2","ū3","v1","v2","v3","z1","z2","z3","ž1","ž2","ž3","a1","a2","a3","ā1","ā2","ā3","b1","b2","b3","c1","c2","c3","č1","č2","č3","d1","d2","d3","e1","e2","e3","ē1","ē2","ē3","f1","f2","f3","g1","g2","g3","ģ1","ģ2","ģ3","h1","h2","h3","i1","i2","i3","ī1","ī2","ī3","j1","j2","j3","k1","k2","k3","ķ1","ķ2","ķ3","l1","l2","l3","ļ1","ļ2","ļ3","m1","m2","m3","n1","n2","n3","ņ1","ņ2","ņ3","o1","o2","o3","p1","p2","p3","r1","r2","r3","s1","s2","s3","š1","š2","š3","t1","t2","t3","u1","u2","u3","ū1","ū2","ū3","v1","v2","v3","z1","z2","z3","ž1","ž2","ž3","a1","a2","a3","ā1","ā2","ā3","b1","b2","b3","c1","c2","c3","č1","č2","č3","d1","d2","d3","e1","e2","e3","ē1","ē2","ē3","f1","f2","f3","g1","g2","g3","ģ1","ģ2","ģ3","h1","h2","h3","i1","i2","i3","ī1","ī2","ī3","j1","j2","j3","k1","k2","k3","ķ1","ķ2","ķ3","l1","l2","l3","ļ1","ļ2","ļ3","m1","m2","m3","n1","n2","n3","ņ1","ņ2","ņ3","o1","o2","o3","p1","p2","p3","r1","r2","r3","s1","s2","s3","š1","š2","š3","t1","t2","t3","u1","u2","u3","ū1","ū2","ū3","v1","v2","v3","z1","z2","z3","ž1","ž2","ž3"];

const abcLetters = abcLv;

var abcButtons = document.getElementById("abc-buttons");
var audioButtons =document.getElementById("abc-audio-btns")


function createAbcButtons(){
  //creating buttons from query
  for(i = 0; i < (abcLetters.length); i++) {
    var button = document.createElement("button");
    button.innerHTML = abcLetters[i].toUpperCase();
    button.classList.add("abc-button");
    abcButtons.appendChild(button);
  }
}
createAbcButtons()

function createAudioButtons(){
  for(i = 0; i < (soundBtns.length); i++) {
    var button = document.createElement("button");
    button.innerHTML = "Aud"+i;
    button.classList.add("abc-audio-button");
    audioButtons.appendChild(button);
  }
}

var buttonLetters = [].slice.call(abcButtons.querySelectorAll('.abc-button'), 0);


abcButtons.addEventListener('click', function(e) {

  var letterIndex = buttonLetters.indexOf(e.target)
    if(letterIndex !== -1) {
      document.getElementById("abc-letter").innerHTML=(abcLetters[letterIndex].toUpperCase());
    }
  var audioButtonsIndex = ((letterIndex+1)*3);
  var audioButtonsCount = document.getElementById("abc-audio-btns").childElementCount;

  //console.log(audioButtonsCount)

  if(audioButtonsCount>=3){  
  }else{
    createAudioButtons()
  }

  //var audioFirstChild = new Audio();
  var audioFirstChild = document.querySelector("#abc-audio-btns button:nth-child(1)").setAttribute("src",abcLvSound[((letterIndex+1)*3)-3]);
  var audioSecondChild = document.querySelector("#abc-audio-btns button:nth-child(2)").setAttribute("src",abcLvSound[((letterIndex+1)*3)-2]);
  var audioThirdChild = document.querySelector("#abc-audio-btns button:nth-child(3)").setAttribute("src",abcLvSound[((letterIndex+1)*3)-1]);

  var audioFirstChildSrc = document.querySelector("#abc-audio-btns button:nth-child(1)").getAttribute("src")
  var audioSecondChildSrc = document.querySelector("#abc-audio-btns button:nth-child(2)").getAttribute("src")
  var audioThirdChildSrc = document.querySelector("#abc-audio-btns button:nth-child(3)").getAttribute("src")
 
  var audio1 = new Audio();
  audio1.src=audioFirstChildSrc
  var audio2 = new Audio();
  audio2.src=audioSecondChildSrc
  var audio3 = new Audio();
  audio3.src=audioThirdChildSrc

  document.querySelector("#abc-audio-btns button:nth-child(1)").addEventListener('click', function() {
  audio1.play();
  audio2.pause();
  audio3.pause();
  audio2.currentTime = 0;
  audio3.currentTime = 0;
  });
  document.querySelector("#abc-audio-btns button:nth-child(2)").addEventListener('click', function() {
  audio2.play();
  audio1.pause();
  audio3.pause();
  audio1.currentTime = 0;
  audio3.currentTime = 0;
  });
  document.querySelector("#abc-audio-btns button:nth-child(3)").addEventListener('click', function() {
  audio3.play();
  audio1.pause();
  audio2.pause();
  audio1.currentTime = 0;
  audio1.currentTime = 0;
  });
  

  });

