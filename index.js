// Your code goes here
function changeText(text) {
  const p = document.querySelector('p');
  p.textContent = text;
}

// Test the function
changeText('JavaScript is so cool. It lets me add text to my page programmatically.');
console.log(document.querySelector('p').textContent);

// Add event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
  changeText('This is really cool!');
});