const rippleButton = document.getElementById('rippleButton');
const rippleContainer = document.getElementById("rippleContainer");

rippleButton.addEventListener('click', generateContainers);

function generateContainers () {
// new element for ripple effect
        const square = document.createElement('div');
        square.classList.add('square');

        // generate random color for square
const randomColor = generateRandomColor();
square.style.backgroundColor = randomColor;



rippleContainer.appendChild(square);
    }






  function generateRandomColor() {
    // for a random hexadecimal color code
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
