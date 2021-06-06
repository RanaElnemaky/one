
var getusername = prompt("Hello! who are your?");

console.log(getusername);

document.getElementById("username").innerText = getusername;

//toolitip//
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  $('#example').tooltip(options)