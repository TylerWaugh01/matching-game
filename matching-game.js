
// global variables
let numberOfDogs = 5;
const theLeftSide = document.getElementById("leftSide");
const theRightSide = document.getElementById("rightSide");
const dogArray = ['dog-1.png', 'dog-2.png', 'dog-3.png', 'dog-4.png'];

// buttons
const startButton = document.getElementById('startGameButton');

// start event listener
startGameButton.addEventListener('click', startGame);

// game start

function startGame() {
  generateDogs();
  startButton.disabled = 'true';
}


function generateDogs() {
    for (let i = 0; i < numberOfDogs; i++) {
    let dog = document.createElement('img');
    let randomDog = Math.floor(Math.random() * dogArray.length); 
    dog.src = 'images/' + dogArray[randomDog];
    
    
    let randomTop = Math.floor(Math.random() * 400) + 1; 
    let randomLeft = Math.floor(Math.random() * 400) + 1; 
    dog.style.top = randomTop + 'px';
    dog.style.left = randomLeft + 'px';
    theLeftSide.appendChild(dog);  
  }
  let leftSideImages = theLeftSide.cloneNode(true);
  leftSideImages.removeChild(leftSideImages.lastChild);
  theRightSide.appendChild(leftSideImages)
  theLeftSide.lastChild.addEventListener('click',nextLevel);
  document.body.addEventListener('click',gameOver);

}

function nextLevel() {
  event.stopPropagation();
  numberOfDogs += 5;
  while (theLeftSide.firstChild) {
    theLeftSide.removeChild(theLeftSide.firstChild);
  }
  while (theRightSide.firstChild) {
    theRightSide.removeChild(theRightSide.firstChild);
  }
  generateDogs();
}

function gameOver () {
  alert("Game Over!");
  theLeftSide.lastChild.removeEventListener('click',nextLevel);
  document.body.removeEventListener('click',gameOver);
}



