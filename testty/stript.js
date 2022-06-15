const Words = ["bharat", "bose", "chandrashekhar","hind", "gopal", "neelkanthay", "maharana", "gandhi", "vikramaditya", "tanaji", "mahadev", "shastriji", "shivaji", "ram", "krishna", "suheldev"]
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
    else wordSequence[indexOfWordSequence].style.background =  "red";
})



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



