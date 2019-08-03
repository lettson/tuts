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
  "audio/001.wav",
  "audio/002.wav",
  "audio/003.wav",
  "audio/004.wav",
  "audio/005.wav",
  "audio/006.wav",
  "audio/007.wav",
  "audio/008.wav",
  "audio/009.wav",
  "audio/010.wav",
  "audio/011.wav",
  "audio/012.wav",
  "audio/013.wav",
  "audio/014.wav",
  "audio/015.wav",
  "audio/016.wav",
  "audio/017.wav",
  "audio/018.wav",
  "audio/019.wav",
  "audio/020.wav",
  "audio/021.wav",
  "audio/022.wav",
  "audio/023.wav",
  "audio/024.wav",
  "audio/025.wav",
  "audio/026.wav",
  "audio/027.wav",
  "audio/028.wav",
  "audio/029.wav",
  "audio/030.wav",
  "audio/031.wav",
  "audio/032.wav",
  "audio/033.wav",
  "audio/034.wav",
  "audio/035.wav",
  "audio/036.wav",
  "audio/037.wav",
  "audio/038.wav",
  "audio/039.wav",
  "audio/040.wav",
  "audio/041.wav",
  "audio/042.wav",
  "audio/043.wav",
  "audio/044.wav",
  "audio/045.wav",
  "audio/046.wav",
  "audio/047.wav",
  "audio/048.wav",
  "audio/049.wav",
  "audio/050.wav",
  "audio/051.wav",
  "audio/052.wav",
  "audio/053.wav",
  "audio/054.wav",
  "audio/055.wav",
  "audio/056.wav",
  "audio/057.wav",
  "audio/058.wav",
  "audio/059.wav",
  "audio/060.wav",
  "audio/061.wav",
  "audio/062.wav",
  "audio/063.wav",
  "audio/064.wav",
  "audio/065.wav",
  "audio/066.wav",
  "audio/067.wav",
  "audio/068.wav",
  "audio/069.wav",
  "audio/070.wav",
  "audio/071.wav",
  "audio/072.wav",
  "audio/073.wav",
  "audio/074.wav",
  "audio/075.wav",
  "audio/076.wav",
  "audio/077.wav",
  "audio/078.wav",
  "audio/079.wav",
  "audio/080.wav",
  "audio/081.wav",
  "audio/082.wav",
  "audio/083.wav",
  "audio/084.wav",
  "audio/085.wav",
  "audio/086.wav",
  "audio/087.wav",
  "audio/088.wav",
  "audio/089.wav",
  "audio/090.wav",
  "audio/091.wav",
  "audio/092.wav",
  "audio/093.wav",
  "audio/094.wav",
  "audio/095.wav",
  "audio/096.wav",
  "audio/097.wav",
  "audio/098.wav",
  "audio/099.wav"
  ];

const abcLetters = abcLv;

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

