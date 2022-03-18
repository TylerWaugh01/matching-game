
// global variables
let numberOfDogs = 5; 
let petDogs = 0;
let score = 0;
let currentTime = 30
const scoreDisplay = document.getElementById('score-display')
const theLeftSide = document.getElementById("leftSide");
const theRightSide = document.getElementById("rightSide");
const dogArray = ['dog-1.png', 'dog-2.png', 'dog-3.png', 'dog-4.png'];
const timeLeft = document.querySelector('#timer')
// sounds
const gameMusic = document.getElementById('game-music');
const dogBark = document.getElementById('bark-sound');

// buttons
const startGameButton = document.getElementById('startGameButton');
const restartGameButton = document.getElementById('restartGameButton');

// start event listener
startGameButton.addEventListener('click', startGame);

// game start

function startGame() {
  generateDogs();
  startGameMusic();
  startGameButton.disabled = 'true';
  let countDownTimerId = setInterval(countDown, 1000)
  
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
  theLeftSide.lastChild.addEventListener('click',startDogBark);
  document.querySelector('#gameContainer').addEventListener('click',gameOver); 
}

function startGameMusic(){
  gameMusic.play();
}

function stopGameMusic(){
  gameMusic.pause();
  gameMusic.currentTime = 0
}

function startDogBark() {
  dogBark.play();
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
  score += 1; 
  scoreDisplay.innerHTML = score

}

function gameOver () {
  stopGameMusic();
  // clearCountDown();
  // score = 0;
  alert("Game Over!");
  document.querySelector('#gameContainer').removeEventListener('click',gameOver); 
  
  while (theLeftSide.firstChild) {
    theLeftSide.removeChild(theLeftSide.firstChild);
}
while (theRightSide.firstChild) {
  theRightSide.removeChild(theRightSide.firstChild);
}
  theLeftSide.lastChild.removeEventListener('click',nextLevel);
}

function countDown() {
  currentTime--
  timeLeft.textContent = currentTime
 
  if (currentTime == 0) {
    clearInterval(countDownTimerId)
    alert('GAME OVER! Your final score is ' + score)
  }
 
 }

 function clearCountDown() {
  clearInterval(countDownTimerId)
 }
 
 



