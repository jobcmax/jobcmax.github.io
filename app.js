const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let name = month[d.getMonth()];
document.getElementById("app").innerHTML = "(Im doing a challenge called " + name + ". Its where i go through everyday of " + name + ".)";