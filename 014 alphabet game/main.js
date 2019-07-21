const abcLv = ["a","ā","b","c","č","d","e","ē","f","g","ģ","h","i","ī","j","k","ķ","l","ļ","m","n","ņ","o","p","r","s","š","t","u","ū","v","z","ž"];

const abcRu = ["а","б","в","г","д","е","ё","ж","з","и","й","к","л","м","н","о","п","р","с","т","у","ф","х","ц","ч","ш","щ","ъ","ы","ь","э","ю","я"];

const soundBtns = ["s1","s2","s3"];

const imgs = ["img1"];

const imgsListLV = ["https://images.saatchiart.com/saatchi/995116/art/4051071/3120924-AEOMJSOX-6.jpg",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#",
"#"
]

const abcLvSound = [
  "https://actions.google.com/sounds/v1/alarms/bugle_tune.ogg",
  "https://actions.google.com/sounds/v1/ambiences/crickets_with_distant_traffic.ogg",
  "https://actions.google.com/sounds/v1/alarms/dinner_bell_triangle.ogg",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#",
  "#"
  ];

const abcLetters = abcRu;

var abcButtons = document.getElementById("abc-buttons");
var audioButtons =document.getElementById("abc-audio-btns")
var abcImgs = document.getElementById("abc-imgs")


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
    button.innerHTML = "&#9658";
    button.classList.add("abc-audio-button");
    audioButtons.appendChild(button);
  }
}

function createImg(){
  for(i = 0; i < (imgs.length); i++) {
    var abcImg = document.createElement("img");
    abcImg.classList.add("letter-image");
    abcImgs.appendChild(abcImg);
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

  var imgChildCount = document.getElementById("abc-imgs").childElementCount;

  console.log(letterIndex)

  
 if(imgChildCount>=1){  
 }else{
    createImg()
 }

  var abcImg = document.getElementById("abc-imgs");
  abcImg.querySelector(":nth-child(1)").setAttribute("src",imgsListLV[letterIndex]);

  var abcImgChildSrc = document.getElementById("abc-imgs");
  abcImgSrc = abcImgChildSrc.querySelector(":nth-child(1)").getAttribute("src")
 
  console.log(abcImgSrc)

  var abcNewImg = new Image();
  abcNewImg.src=abcImgSrc
  
  // Audio btn code below
  
  if(audioButtonsCount>=3){  
  }else{
    createAudioButtons()
  }

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

