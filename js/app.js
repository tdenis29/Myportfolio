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

// messager 

const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const email = document.getElementById('emailField')
const send = document.getElementById("send");

send.addEventListener('click', () => {
  // ensure user and message fields are filled out
  if (user.value === "" && message.value === "" && email.value === "") {
  alert("Please fill out user, email and message fields before sending");
  } else if (user.value === "" ) {
  alert("Please fill out user field before sending");
  } else if (message.value === "" ) {
  alert("Please fill out message field before sending");
  } else if (email.value === "") {
  alert("Please enter your email")
  } else {
  alert(`Hello ${user.value}, Thank you for your email!`);
  }
  });

// Animated landing.

const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -150px 0px" 
};

const appear = new IntersectionObserver
(function(entries, appear) {
entries.forEach(entry => {
    if(!entry.isIntersecting){
      return
    } else{
      entry.target.classList.add('appear');
      appear.unobserve(entry.target)
    }
  });
}, appearOptions);


faders.forEach(fader => {
  appear.observe(fader);
})

















// with aos
// const $backTop = $(".back-to-top");
// const isHidden = "is-hidden";

// AOS.init({
//   offset: 200,
//   delay: 50,
//   once: true
// });

/*$('a[data-toggle="pill"]').on("shown.bs.tab", e => {
  AOS.refresh();
});*/

// $(window).on("scroll", function() {
//   const $this = $(this);
//   if ($this.scrollTop() + $this.height() == $(document).height()) {
//     $backTop.removeClass(isHidden);
//   } else {
//     $backTop.addClass(isHidden);
//   }
// });

// $backTop.on("click", () => {
//   $("html, body").animate({ scrollTop: 0 }, "slow");
//   return false;
// });