function darkMode(){

  var elements = document.getElementsByClassName('list');
  for(let i=0; i<=elements.length; i++){
      elements[i].style.backgroundColor = "black";
      elements[i].style.color = "white"
  }

}
function lightMode(){
    var elements2 = document.getElementsByClassName('list');
  for(let i=0; i<=elements2.length; i++){
      elements2[i].style.backgroundColor = "white";
      elements2[i].style.color = "black"
  }  
}