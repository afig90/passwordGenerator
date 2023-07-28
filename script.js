// Assignment Code
let generateBtn = document.querySelector("#generate");


let lowerAlphabetExample = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


let upperAlphabetExample = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


let specialCharacters = ['!', '#', '$', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~']

let passwordBase = []


// let howMany = prompt("How many Characters in your password?")
// console.log("value of howMany:", howMany)
// console.log(typeof howMany)
// console.log(typeof parseInt(howMany), howMany)
// howmany = parseInt(howMany)

//function getPassword(){

function generatePassword() {

    let length = prompt("enter desired password length:")


    if (isNaN(length) || length < 8 || length > 120) {
        alert("Please eneter a password length between 8 and 128 characters.");
        return "Couldn't make password"
    }


    //build a string based off of random characters//

    if (confirm("Do you want Lowercase letters in your password?")) {
        console.log("user chose lower")
        //so we have the lowercase letters for them
        // put the lowercase letters into the password base
        passwordBase = passwordBase.concat(lowerAlphabetExample)
        console.log(passwordBase)
    }

    if (confirm("Do you want Upper letters in your password?")){

        passwordBase = passwordBase.concat(upperAlphabetExample)
        console.log(passwordBase)
    }

    if (confirm("Do you want numbers in your password?")){
        passwordBase = passwordBase.concat(numbers)
        console.log(passwordBase)
    }

    if (confirm("Do you want Special Characters in your password?")){

        passwordBase = passwordBase.concat(specialCharacters)
        console.log(passwordBase)
    }
    // }if (confirm("Do you want Numbers letters in your password?")){
    //     console.log("user chose numbers")
    // }if (confirm("Do you want Special Characters in your password?")){
    //     console.log("user chose special")
    // }

    //if the passwordBase is till empty then return "couldn't make password"


    let password = "";

    for (let i = 0; i < length; i++) {
        let randomIndex =  Math.floor(Math.random() *    passwordBase.length);
        password += passwordBase[randomIndex];


    }

    return password


    //return "Password Sample";
}


//get password();
//attempts//

//function generatePassword(length){

// let charset = "";

//  return password;
//}
//let password =generatePassword(8,128);
//console.log(password);.




function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");

    passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
// var word = "HDSFds"
// var anotherThing = 345
// var isSomething = true
// var person = {
//     name: "Amanda", 
//     age: 5,
//     alias: "The Joker"
// }
// var arrayTwo = [person]
// var arrayExample = ["A",person, word,{lol:"hi", sad: "happy"}, "C",arrayTwo]

// console.log(arrayExample[1].alias.toUpperCase())
// console.log(person.name.toUpperCase())
// console.log(arrayExample[5][0].name.toUpperCase())
// console.log(typeof word)
// console.log(typeof anotherThing)
// console.log(typeof isSomething)
// console.log(typeof isArray)
// console.log(typeof person)
// console.log(Array.isArray(isArray))
// console.log(Array.isArray(person))



function getName() {
    console.log("Getting name")
    if ("hi" === "hi") {
        console.log("They're equal!")
        return "Alex"
    }
    console.log("I'm running to Amanda!")
    return "Amanda"
}

var username = getName()

console.log("MY username: ", username)

