const main = document.getElementById("mainContain");

const mainDiv = document.createElement("div");
mainDiv.className = "mainDiv";

const colors = ["red", "blue", "green", "yellow"];

const sounds = {
  red: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
  blue: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
  green: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),
  yellow: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"),
};

colors.forEach((color) => {
  const button = document.createElement("button");
  button.id = color;
  button.className = "colorButton";
  mainDiv.appendChild(button);
});
console.log(colors);


const startButton = document.createElement("button");
startButton.id = "startButton";
startButton.textContent = "Start Game";

main.appendChild(mainDiv);
main.appendChild(startButton);

let sequence = [];
let playerSequence = [];
let level = 0;
function startGame() {
  playerSequence = [];
  sequence = [];
  nextlevel();
}
function nextlevel() {
  const nextColor = colors[Math.floor(Math.random() * 4)];
  sequence.push(nextColor);
  console.log(sequence);
  flashColor(nextColor);
}
function flashColor(color) {
    const button = document.getElementById(color);
    console.log(button);
    button.style.animation = `ajillah${color.indexOf(color)+1} 1s linear`;
    setTimeout(() => {
       button.style.animation = "none"; 
    }, 1000);
}

startButton.addEventListener("click", startGame);
