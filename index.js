let passOneElem = document.getElementById("pass-one-el")
let passTwoElem = document.getElementById("pass-two-el")
let passThreeElem = document.getElementById("pass-three-el")
let passFourElem = document.getElementById("pass-four-el")
let lengthInputEl = document.getElementById("length-input-el")

let lowercase = "abcdefghijklmnopqrstuvwxyz" 
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let digits = "0123456789"
let specialChars = "!@#$%^&*"

let alphabet = lowercase + uppercase + digits + specialChars
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
    let passwordLength = lengthInputEl.value

    for (let i = 0; i < passwordLength; i++) {
        passwordOne += alphabet[myRandomNum()] 
        passwordTwo += alphabet[myRandomNum()]
        passwordThree += alphabet[myRandomNum()]
        passwordFour += alphabet[myRandomNum()]

        passOneElem.value = passwordOne
        passTwoElem.value = passwordTwo
        passThreeElem.value = passwordThree
        passFourElem.value = passwordFour
    }
}