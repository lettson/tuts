document.getElementById("submit").onclick=function(){
  var rows=document.getElementById('rows').value
  var columns=document.getElementById("columns").value
  if(rows=="" || rows==null){
    rows=3
  }
  if(columns=="" || columns==null){
    columns=3
  }
  var output="<table border='1' cellpadding='5' cellspacing='0'>"

  function createTable(rows,columns){
    for(var i=1;i<=rows;i++){
      output=output+"<tr>"
      for(var j=1;j<=columns;j++){
        output=output+'<td><input class="input" type="text" placeholder="insert your data"></td>'
      }
      output=output+"</tr>"
    }
    output=output+"</table>"
    document.getElementById("container").innerHTML=output
  }
  createTable(rows,columns)
}