var x=document.getElementById("input")
var n=document.getElementById("progress")

document.getElementById("show").onclick=function(){
  if(this.checked){
    x.setAttribute("type","text")
  }else{
    x.setAttribute("type","password")
  }
}

x.oninput=function(){
  if(x.value.length==0 || x.value.length<6){
    n.style.width="0%"
  }else if(x.value.length==6 || x.value.length<10){
    n.style.width="20%"
    n.innerHTML="20%"
  }else if(x.value.length==10 || x.value.length<15){
    n.style.width="50%"
    n.innerHTML="50%"
  }else if(x.value.length==15 || x.value.length<20){
    n.style.width="75%"
    n.innerHTML="75%%"
  }
  else if(x.value.length==20){
    n.style.width="100%"
    n.innerHTML="100%%"
  }
}