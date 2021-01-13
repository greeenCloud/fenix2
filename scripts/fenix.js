
/*SLIDER*/
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems, 3000);
});
/*ENDSLIDER*/

/*TOPNAV*/
   function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
/*TOPNAV*/

/*MINI-GALERIJA*/
function miniGallerry(aboutUs,elmnt,color) {
    var i, tablinks, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
      for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(aboutUs).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  
  document.getElementById("defaultOpen").click(); 

  document.addEventListener('DOMContentLoaded', function() {
var elems = document.querySelectorAll('.materialboxed');
var instances = M.Materialbox.init(elems, 200);
});
/*END-MINI-GALERIJA*/

