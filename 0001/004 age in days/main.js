var firstDiv = document.querySelector('#firstDiv');
var secondDiv = document.querySelector('#secondDiv');
var button = document.querySelector('#button');
var container = document.querySelector('#container');

// Set color to purple
firstDiv.style.marginBottom = '10px';
firstDiv.style.marginLeft = '10px';
secondDiv.style.marginLeft = '10px';

button.style.marginTop = '10px';

container.style.backgroundColor = 'yellow';



function takeName(name){
  name=document.getElementById("input_1").value
  return name;
}
function takeAge(age){
  age=document.getElementById("input_2").value
  return age*365
}
document.getElementById("button").onclick=function(){
  var x=takeName()
  var y =takeAge()
  if(x && y){
    document.getElementById("container").innerHTML=x+" Your age in days is "+y+" days"
  }else
    alert("please insert your name and age")
}