const Words = ["fuction", "int", "boolen","String", "void", "which", "nothing", "var", "namespace", "char", "switch", "false", "true", "count", "private", "values"]
var wordSequence = [];
var Timer = null;
const timer = document.querySelector(".timer")
const bottom = document.querySelector(".bottom")
const reportCard = document.querySelector(".report-card")
var timerStart = false;
const Input = document.querySelector("input")
const text = document.querySelector(".text");
const retryButton = document.querySelectorAll(".retry");
var indexOfWordSequence = 0;
var word = 0;
var wrongWord = 0;
var time = 1;
fillWords(text)
// timer
var sec = document.querySelector(".sec")
var min = document.querySelector(".min")


Input.addEventListener("keyup", (e)=>{
    let value = Input.value
    if(e.keyCode == 32){
        let offSetCurr = wordSequence[indexOfWordSequence].offsetTop;
        if(value.slice(0, value.length) !== wordSequence[indexOfWordSequence].innerText){
            wordSequence[indexOfWordSequence].style.color = "rgb(241, 79, 79)";
            wrongWord++;
        }
        wordSequence[indexOfWordSequence].style.background =  "transparent";
        indexOfWordSequence++;
        Input.value = "";
        value = "";
        if(wordSequence[indexOfWordSequence].offsetTop != offSetCurr){
            let i = 0;
            while(i != indexOfWordSequence){
                wordSequence[i++].remove();
            }
        }
        word++;
    }
    if(value != wordSequence[indexOfWordSequence].innerText.slice(0, value.length))wordSequence[indexOfWordSequence].style.background = "rgb(241, 79, 79)";
    else wordSequence[indexOfWordSequence].style.background =  "#282828";
})


//loop randome words 
function fillWords(element){
    let size = Words.length - 1;
    for(let i = 0; i < 1500; i++){
        let newSpan = document.createElement("span");
        let index = (Math.random() * size).toFixed(0);
        newSpan.innerText += Words[index] + " ";
        element.append(newSpan)
    }
    wordSequence = document.querySelectorAll("span");
}

const keys = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

const timestamps = [];

timestamps.unshift(getTimestamp());


function targetRandomKey() {
  const key = document.getElementById(getRandomKey());
  key.classList.add("selected");
  let start = Date.now()
}

function getTimestamp() {
  return Math.floor(Date.now() / 1000)
}

document.addEventListener("keyup", event => {
  const keyPressed = String.fromCharCode(event.keyCode);
  const keyElement = document.getElementById(keyPressed);
  const highlightedKey = document.querySelector(".selected");
  
  keyElement.classList.add("hit")
  keyElement.addEventListener('animationend', () => {
    keyElement.classList.remove("hit")
  })
  
  if (keyPressed === highlightedKey.innerHTML) {
    timestamps.unshift(getTimestamp());
    const elapsedTime = timestamps[0] - timestamps[1];
    console.log(`Character per minute ${60/elapsedTime}`)
    highlightedKey.classList.remove("selected");
    targetRandomKey();
  } 
})

targetRandomKey();


