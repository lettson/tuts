function getTime(){
  var x=new Date()
  document.getElementById("clock").innerHTML=x.toLocaleTimeString()
}
function getDays(){
  var x=new Date();
  var d1=x.getDate();
  var d2=21;

  var difference = d2- d1;
  document.getElementById('days').innerHTML=difference+" "+"days left";
}

setInterval(getTime,1000)
setTimeout(getTime,0)
getDays()