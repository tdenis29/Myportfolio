// Scroll Spy didnt work with attributes
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#nav'
});
// random color 
const noLike = document.getElementById('nolikeBtn')
const body = document.querySelector('body');
const div = document.getElementById('colorDiv');
const newColor = document.getElementById('newBtn')
const colorbutton = document.getElementById('likeBtn');
const hex = ['1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'
]

let hexanum = "#";

newColor.addEventListener('click', changeBackground);


function changeBackground() {
  if(hexanum.length > 1) {
    hexanum = "#";
  }
 for (i = 0; i < 6; i++) {
hexanum += hex[Math.floor(Math.random() * hex.length)]
div.style.backgroundColor = hexanum;
 }};

colorbutton.addEventListener('click', e => {
  body.style.backgroundColor = hexanum;
 
});
noLike.addEventListener('click', e => {
  body.style.backgroundColor = "#f2f5ea";
});




