// Create a webpage that has some text and two buttons with ‘+’ and ‘-‘ 
// Clicking the ‘+’ button should increase the text’s font-size and clicking the ‘-‘ should decrease it.
// Limit the font size to be between 6px and 100px.

pText = document.querySelector("p");
btnPlus = document.querySelector("input.plus");
btnMinus = document.querySelector('input.minus');

const minFontSize = 6;
const maxFontSize = 100;

let currFontSize = 25;

btnPlus.addEventListener("click",increaseFont);
btnMinus.addEventListener("click",decreaseFont);

function increaseFont(event){
    if (currFontSize<maxFontSize)
    {
        currFontSize++;
        pText.style.fontSize = `${currFontSize}px`;
    }    
}

function decreaseFont(event){
    if (currFontSize>minFontSize)
    {
        currFontSize--;
        pText.style.fontSize = `${currFontSize}px`;
    }    
}