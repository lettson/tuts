var character=document.getElementById("textarea")
var counter=document.getElementById("counter")
var max=character.maxLength
character.oninput=function(){
  counter.innerHTML=max-character.value.length
  if(counter.innerHTML==0){
    counter.style.display="none";
  }else{
    counter.style.display="block"
  }
}