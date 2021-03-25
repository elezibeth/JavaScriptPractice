"use strict";

//exerciseOne();
//helloWorldone();
helloWorld();

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
function displayStuff(stuff){
    document.getElementById("JSpractice").innerHTML = stuff;
}



//let stringToBeReversed = inputOne;
//let lengthOfString = stringToBeReversed.length;
//let displayVariableValue = toString(lengthOfString);
//console.log("Length of string" + `${displayVariableValue}`);