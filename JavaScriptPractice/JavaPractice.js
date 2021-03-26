"use strict";

//exerciseOne();
//helloWorldone();
//helloWorld();

function helloWorld(){
    console.log("Hello world!");
    //alert("Hello world!!!!");
    let response = prompt("Hello what?");

    if(response === "world"){
        alert("Good morning!");
    }
    else if (response === "there"){
        alert("Hey yourself!");
    }
    else{
        console.log("Look over here!");
        let stuffVariable = ("What does that mean?");

        displayStuff(stuffVariable);

    }
}
function reverseString(){
    let wordToBeReversed = getString();
    let reversedString = wordToBeReversed.split('').reverse().join('');
    displayStuff(reversedString);
}
function getString(){
    let wordToBeReversed = prompt("Enter your word to be reversed.");
    return wordToBeReversed;
}
function capitalizeTwoWordsTwo(){
    let wordsToCapitalize = prompt("Enter the words you want capitalized. Limit two.");
    wordsToCapitalize.toString();
    let indexOfSpace = wordsToCapitalize.indexOf(" ");
    let indexOfSecondWord = indexOfSpace+1;
    let firstLetterOfString = wordsToCapitalize.charAt(0);
    let upperCaseFirstLetter = firstLetterOfString.toUpperCase();
    let secondLetter = wordsToCapitalize.charAt(indexOfSecondWord);
    let capitalizedSecondLetter = secondLetter.toUpperCase();
    wordsToCapitalize.replace(firstLetterOfString, upperCaseFirstLetter);
    wordsToCapitalize.replace(secondLetter, capitalizedSecondLetter);
    displayCapitalizedWords(wordsToCapitalize);
}
function capitalizeTwoWords(){
    let wordsToCapitalize = prompt("Enter the words you want capitalized. Limit two.");
    wordsToCapitalize.toString();
    let indexOfSpace = wordsToCapitalize.indexOf(" ");
    let indexOfSecondWord = indexOfSpace+1;
    let firstLetterOfString = wordsToCapitalize.charAt(0);
    let capitalFirstLet = firstLetterOfString.toUpperCase();
    var newString = wordsToCapitalize.replace(firstLetterOfString, capitalFirstLet);
    let secondLetterOfString = wordsToCapitalize.charAt(indexOfSecondWord);
    let capitalSecondLetter = secondLetterOfString.toUpperCase();
    var newStringTwo = newString.replace(secondLetterOfString, capitalSecondLetter);

    displayCapitalizedWords(newStringTwo);

}
function compressString(){
    let stbc = prompt("Enter some characters.");
    let stringTbc = stbc.toString();
     let unique = findUniqueChars(stringTbc);
    

    displayCompressedWords(unique);
}
function findUniqueChars(string)
{
 var stringTwo = string;
 var uniqueCharacters = "";
 for (var x = 0 ; x < stringTwo.length ; x++){
    if (uniqueCharacters.indexOf(stringTwo.charAt(x)) == -1){
        uniqueCharacters += stringTwo[x]; 
    }
 }
   return uniqueCharacters;
}  

function displayStuff(stuff){
    document.getElementById("JSpractice").innerHTML = stuff;
}
function displayCapitalizedWords(words){
    document.getElementById("capitalizedWords").innerHTML = words;
}
function displayCompressedWords(letters){
    document.getElementById("compressedString").innerHTML = letters;
}


//let stringToBeReversed = inputOne;
//let lengthOfString = stringToBeReversed.length;
//let displayVariableValue = toString(lengthOfString);
//console.log("Length of string" + `${displayVariableValue}`);