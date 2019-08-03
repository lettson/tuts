document.getElementById("link").onclick=function(){
  var x=window.confirm("Do you wanna go to ..?")
  if(x){
      var y = prompt("please insert your age")
      if(y==""){
        document.getElementById("link").href="#"
        document.getElementById("text").innerHTML="please insert your age"
      }else if(!y){
        document.getElementById("link").href="#"
        document.getElementById("text").innerHTML="please insert your age"
      }else if(isNaN(y)){
        document.getElementById("link").href="#"
        document.getElementById("text").innerHTML="please insert your age"
      }else if(y<18){
        document.getElementById("link").href="#"
        document.getElementById("text").innerHTML="sorry, you are not allowed to go"
      }else{
        document.getElementById("link").href="https://www.google.com"
      } 
    }else{
      document.getElementById("link").href="#"
    }
  }
