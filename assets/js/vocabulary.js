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
getPossibleWords();

function checkWord(){
    console.log("Checking word...")
}
function nextWord(){
    console.log("Generating new word...")
}
function clearInput(){
    console.log("Cleaning input area...")
}
