// Get the modal
let modal = document.getElementById("myModal");
// Get button
let btn = document.getElementById("email");
// get close
let span = document.getElementsByClassName("btn-close")[0];

var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
    keyboard: false
  })
btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }}