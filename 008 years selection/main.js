  function years(start,end){
    document.write("<select>")
    for(var i = start; i<=end; i++){
      document.write("<option>"+i+"</option>")
    }
    document.write("</select>")
  }
years(1,100)
years(2000,2019)