var slide=["https://upload.wikimedia.org/wikipedia/commons/d/dc/Skyscrapers_of_Shinjuku_2009_January_%28revised%29.jpg","https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fannabel%2Ffiles%2F2018%2F02%2FLouisville_Skyline-1200x801.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmYgCYMBVF6JM3SOaihnLI0vjroOrYUA1aDvWxHka34O26mm3X","https://amp.businessinsider.com/images/5b9137e10ce5f5b27e8b4a0c-750-562.jpg","https://www.thebalancecareers.com/thmb/7RNbnMgqp7sHt5i7kAwvwtNKbG4=/3865x2576/filters:no_upscale():max_bytes(150000):strip_icc()/high-angle-view-of-lower-east-side-manhattan-downtown--new-york-city--usa-640006562-5ae52a273de423003776ae2e.jpg"]
var i=0
function changeImage(){
  document.getElementById("slideshow").setAttribute("src",slide[i])
  if(i<slide.length-1){
    i++
  }else{
    i=0
  }
  setTimeout(changeImage,2000)
}
changeImage()