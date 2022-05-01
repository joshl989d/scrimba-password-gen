let passOneElem = document.getElementById("pass-one-el")
let passTwoElem = document.getElementById("pass-two-el")
let passThreeElem = document.getElementById("pass-three-el")
let passFourElem = document.getElementById("pass-four-el")

let lowercase = "abcdefghijklmnopqrstuvwxyz" 
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let digits = "0123456789"

let alphabet = lowercase + uppercase + digits
let passwordLength = 10

function myRandomNum() {
    let randomNum = Math.floor( Math.random()* alphabet.length)
    return randomNum
}

function genPass() {
    let passwordOne = ""
    let passwordTwo = ""
    let passwordThree = ""
    let passwordFour = ""
    
    for (let i = 0; i < passwordLength; i++) {
        passwordOne += alphabet[myRandomNum()] 
        passwordTwo += alphabet[myRandomNum()]
        passwordThree += alphabet[myRandomNum()]
        passwordFour += alphabet[myRandomNum()]

        passOneElem.textContent = passwordOne
        passTwoElem.textContent = passwordTwo
        passThreeElem.textContent = passwordThree
        passFourElem.textContent = passwordFour
    }
}