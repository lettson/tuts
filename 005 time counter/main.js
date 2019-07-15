var end=new Date('July 31, 2019 23:59:00').getTime();
function Timer(){
  var start=new Date().getTime()
  var difference=end-start

  var hours=Math.trunc(Math.floor(difference%(24**60*60*60*1000))/(60*60*1000))
  var minutes=Math.trunc(Math.floor(difference%(60*60*1000))/(60*1000))
  var seconds=Math.trunc(Math.floor(difference%(60*1000))/(1000))
  document.getElementById("counter").innerHTML=hours+":"+minutes+":"+seconds;
    if(difference<0){
      document.getElementById('counter').innerHTML=""
      document.getElementById("badge").style.display="block"
      document.getElementById("button").style.pointerEvents="none"
    }
}
setInterval(Timer,1000);
setTimeout(Timer,0)