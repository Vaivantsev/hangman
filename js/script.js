import {ruswords} from "./words.js"
let okbutton = document.getElementById("okbutton")
let words = ["house","computer","elephant","travel","fox","box"]
words = ruswords
 let secretWord = words[Math.floor(Math.random()*words.length)]
let shifr = document.getElementById("shifr")
let image = document.getElementsByClassName("picture")[0]
let input = document.getElementsByClassName("input")[0]
let rules = document.getElementsByTagName("p")[0]
let letters = "" 
let imgNumber = 0
let newButton = document.getElementsByClassName("newButton")[0]
let h2 = document.getElementsByTagName("h2")[0]
let settings = document.getElementsByClassName("settings")[0]
let modal = document.getElementsByClassName("modal")[0]
let multiplayer = document.getElementsByClassName("multiplayer")[0]
let wordModal = document.getElementsByClassName("wordModal")[0]
let submitWord = document.getElementsByClassName("submitWord")[0]
let onlyButton = document.getElementsByClassName("onlyButton")[0]
let submit = document.getElementsByClassName("submit")[0]
let singleMode = true



shifr.innerHTML = "*".repeat(secretWord.length)
console.log(rules);
input.select()

onlyButton.onclick = function (event){
    event.preventDefault();
    h2.innerHTML = "Виселица"
    singleMode = true
}

newButton.onclick = function (event){
    console.log("слово маленьоке");
    event.preventDefault();
    image.src = "img/hangman0" + ".png"
    h2.innerHTML = "Виселица"
    secretWord = words[Math.floor(Math.random()*words.length)]
    shifr.innerHTML = "*".repeat(secretWord.length)
    input.value = ""
    okbutton.disabled = false
    rules.innerHTML = "вводи букву и нажимай проверить"
    letters = ""
    imgNumber = 0
    if(singleMode==false){
        wordModal.style.transform="translateY(+0%)"
    }
}

submitWord.onclick = function (event){
    event.preventDefault();
    secretWord = submit.value
    shifr.innerHTML = "*".repeat(secretWord.length)
    if(submit.value != ""){
        wordModal.style.transform="translateY(-100%)"
    }
    image.src = "img/hangman0" + ".png"
}
multiplayer.onclick = function (event){
    event.preventDefault();
    h2.innerHTML = "Виселица. Режим мультиплеер"
    wordModal.style.transform="translateY(+0%)"
    singleMode = false
}

modal.onclick = function (event){
    event.preventDefault();
    modal.style.transform="translateY(-100%)"
    
}

settings.onclick = function (event){
    event.preventDefault();
    console.log(modal);
    modal.style.transform="translateY(+0%)"
    // if(secretWord.length<7){
    //     for (let i=1;i<11;i=i+1){
    //         console.log("слово маленьоке")
    //     }
    // }
    // else{
    //     for (let i=1;i<11;i=i+1){
    //         console.log("слово большое")
    //     }
    // }
}

okbutton.onclick = function (event) {
    // чтобы не обновлялась страница
    event.preventDefault();
    console.log(input.value);
    if (!letters.includes(input.value)){
        letters = letters + " " + input.value
    }
    rules.innerHTML = ("использованные буквы: " + letters)
    
    if (secretWord.includes(input.value)) {
        let newShifr = ""
        for (let i = 0; secretWord.length > i; i = i + 1) {
            console.log(secretWord[i]);
            if (input.value == secretWord[i]) {
                newShifr = newShifr + input.value
            }
            else {
                newShifr = newShifr + shifr.innerHTML[i]
            }
        }

        console.log(newShifr)
        shifr.innerHTML = newShifr
        if (shifr.innerHTML == secretWord){
            okbutton.disabled = true
            h2.innerHTML = "Виселица. Ты выиграл , секретное слово было " + secretWord
        } 
    }
        else {
        console.log("буквы нету")
        imgNumber = imgNumber + 1
        image.src = "img/hangman" + imgNumber + ".png"
    }
    input.select()
    input.value = ""
        if (imgNumber == 6){
        okbutton.disabled = true
        h2.innerHTML = "Виселица. Ты проиграл, секретное слово было " + secretWord
    }
    else{

    }
    


    }


 //for (let i = ха; i < 5; i = i + 1) {
  //  console.log(i); }

 //for (let i = 16; i > 257; i = i * 2) {
 //    console.log(i);
//}
// for (let i = 0; i.length < 9;  )
