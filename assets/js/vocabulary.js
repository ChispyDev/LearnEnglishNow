/**
 * @author Jose Antonio Lopez Perez - ChispyDev
 */

/**
 * Possible random list size
 */
let wordsListCount = 100;
/**
 * Possible random words
 */
let wordsList = [];



/**
 * getPossibleWords method is used to fill the possible random words list
 */
async function getPossibleWords() {
    wordsList = await getRandomWord(wordsListCount);
    //console.log(wordsList);
}

async function getRandomWord(number) {
    const endPoint = "https://random-word-api.herokuapp.com/word";
    const endPointNumber = endPoint + "?number=" + number;
    try {
        const response = await fetch(endPointNumber);
        if (!response.ok) {
            console.log("Se ha producido un error al obtener la palabra");
            return [];
        }
        const wordArray = await response.json();
        return wordArray;
    } catch (error) {
        console.log("Se ha producido un error:", error);
        return [];
    }
}

function checkWord(){
    const inputElem =  document.getElementById("worldInput");

    if(inputElem.value==wordsList[0]){
        console.log("Correct! ");
    }else{
        console.log("No! ");
        clearInput();
    }

}
function nextWord(){
    console.log("Generating new word...")
    if(wordsList.length == 0){
        getPossibleWords();
    }else{
        wordsList.shift()
    }
    clearInput()
    console.log("New word:" +wordsList[0])
}
function clearInput(){
    console.log("Cleaning input area...");
    const inputElem =  document.getElementById("worldInput");
    inputElem.value = "";

}
getPossibleWords();
//api for audios "https://dictionaryapi.dev/"
