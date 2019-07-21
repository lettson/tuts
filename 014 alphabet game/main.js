const abcLv = ["a","ā","b","c","č","d","e","ē","f","g","ģ","h","i","ī","j","k","ķ","l","ļ","m","n","ņ","o","p","r","s","š","t","u","ū","v","z","ž"];

const abcRu = ["а","б","в","г","д","е","ё","ж","з","и","й","к","л","м","н","о","п","р","с","т","у","ф","х","ц","ч","ш","щ","ъ","ы","ь","э","ю","я"];

const soundBtns = ["s1","s2","s3"];

const abcLvSound = ["a1","a2","a3","ā1","ā2","ā3","b1","b2","b3","c1","c2","c3","č1","č2","č3","d1","d2","d3","e1","e2","e3","ē1","ē2","ē3","f1","f2","f3","g1","g2","g3","ģ1","ģ2","ģ3","h1","h2","h3","i1","i2","i3","ī1","ī2","ī3","j1","j2","j3","k1","k2","k3","ķ1","ķ2","ķ3","l1","l2","l3","ļ1","ļ2","ļ3","m1","m2","m3","n1","n2","n3","ņ1","ņ2","ņ3","o1","o2","o3","p1","p2","p3","r1","r2","r3","s1","s2","s3","š1","š2","š3","t1","t2","t3","u1","u2","u3","ū1","ū2","ū3","v1","v2","v3","z1","z2","z3","ž1","ž2","ž3","a1","a2","a3","ā1","ā2","ā3","b1","b2","b3","c1","c2","c3","č1","č2","č3","d1","d2","d3","e1","e2","e3","ē1","ē2","ē3","f1","f2","f3","g1","g2","g3","ģ1","ģ2","ģ3","h1","h2","h3","i1","i2","i3","ī1","ī2","ī3","j1","j2","j3","k1","k2","k3","ķ1","ķ2","ķ3","l1","l2","l3","ļ1","ļ2","ļ3","m1","m2","m3","n1","n2","n3","ņ1","ņ2","ņ3","o1","o2","o3","p1","p2","p3","r1","r2","r3","s1","s2","s3","š1","š2","š3","t1","t2","t3","u1","u2","u3","ū1","ū2","ū3","v1","v2","v3","z1","z2","z3","ž1","ž2","ž3","a1","a2","a3","ā1","ā2","ā3","b1","b2","b3","c1","c2","c3","č1","č2","č3","d1","d2","d3","e1","e2","e3","ē1","ē2","ē3","f1","f2","f3","g1","g2","g3","ģ1","ģ2","ģ3","h1","h2","h3","i1","i2","i3","ī1","ī2","ī3","j1","j2","j3","k1","k2","k3","ķ1","ķ2","ķ3","l1","l2","l3","ļ1","ļ2","ļ3","m1","m2","m3","n1","n2","n3","ņ1","ņ2","ņ3","o1","o2","o3","p1","p2","p3","r1","r2","r3","s1","s2","s3","š1","š2","š3","t1","t2","t3","u1","u2","u3","ū1","ū2","ū3","v1","v2","v3","z1","z2","z3","ž1","ž2","ž3"];

const abcLetters = abcLv;

var buttonDiv = document.getElementById("abc-buttons");
var audioButtonDiv = document.getElementById("abc-audio-btns");

function createButtons(){
  //creating buttons from query
  for(i = 0; i < (abcLetters.length); i++) {
    var button = document.createElement("button");
    button.innerHTML = abcLetters[i].toUpperCase();
    button.classList.add("abc-button");
    buttonDiv.appendChild(button);
  }
}
createButtons()

function createButtons2(){
  //creating buttons from query
  for(i = 0; i < (soundBtns.length); i++) {
    var button = document.createElement("button");
    button.innerHTML = soundBtns[i].toUpperCase();
    button.classList.add("abc-audio-btn");
    audioButtonDiv.appendChild(button);
  }
}

function output1(){
  var letters = [].slice.call(buttonDiv.querySelectorAll('.abc-button'), 0);
  var audios = [].slice.call(audioButtonDiv.querySelectorAll('.abc-audio-btn'), 0);
  buttonDiv.addEventListener('click', function(e) {
  var index = letters.indexOf(e.target)
  var index2 = audios.indexOf(e.target)
    if(index !== -1) {
      document.getElementById("abc-letter").innerHTML=(abcLetters[index].toUpperCase());
      document.getElementById("abc-audio-btns").innerHTML=(soundBtns[index2]);
    }
      createButtons2()

  
    var even = document.querySelectorAll(".abc-audio-btn a:nth-child(0)").innerHTML=abcLvSound[((index+1)*3)-3].toUpperCase();
    var even1 = document.querySelectorAll(".abc-audio-btn a:nth-child(0)").innerHTML=abcLvSound[((index+1)*3)-2].toUpperCase();
    var even2 = document.querySelectorAll(".abc-audio-btn a:nth-child(0)").innerHTML=abcLvSound[((index+1)*3)-1].toUpperCase();
    console.log(even)
    console.log(even1)
    console.log(even2)
  });

 
  
}
output1();

