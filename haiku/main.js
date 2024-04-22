// Parallax Scroll 

let stars = document.getElementById('stars');
let wave = document.getElementById('wave');


window.addEventListener('scroll', function(){
      let value = window.scrollY;
      stars.style.left = value * 0.3 + 'px';
      wave.style.top = value * 0.75 + 'px';
      })


// Color changing text

const text = document.querySelector('h2');
text.style.color = '#ffffff';

window.addEventListener('scroll', function() {
      const scrollPosition = window.pageYOffset;
      const maxScrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const colorTransition = scrollPosition / maxScrollHeight;

      const red = Math.floor(255 * (1 - colorTransition) + 32 * colorTransition);
      const green = Math.floor(255 * (1 - colorTransition) + 25 * colorTransition);
      const blue = Math.floor(255 * (1 - colorTransition) + 97 * colorTransition);

      const hexColor = '#' + red.toString(16).padStart(2, '0') + green.toString(16).padStart(2, '0') + blue.toString(16).padStart(2, '0');

      text.style.color = hexColor;
});


// Phrase change when cursor hovers over

      function changeText(element) {
            element.textContent = "We sail together.";
      }

      function resetText(element) {
            element.textContent = "I sail all alone.";
      }