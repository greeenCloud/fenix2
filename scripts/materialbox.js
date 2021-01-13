document.getElementById("defaultOpen").click(); 

document.addEventListener('DOMContentLoaded', function() {
var elems = document.querySelectorAll('.materialboxed');
var instances = M.Materialbox.init(elems, 200);
});