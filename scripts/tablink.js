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