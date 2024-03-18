// Create a variable that holds the <li> element with the class
// “start-here”. Use traverse methods to complete these tasks:
let liStartHere = document.querySelector("li.start-here");

// 1. Change the text from “title 2” to “main title”
liStartHere.textContent = "main title";

// 2. Add another subtitle with the text “subtitle 4”
let liSecond = liStartHere.nextElementSibling;
let ulInner = liSecond.firstElementChild;
let subtitle4 = document.createElement("li");
subtitle4.textContent = "subtitle 4";
ulInner.appendChild(subtitle4);

// 3. Delete the last <li> element from the list.
let ulOuter = liStartHere.parentElement;
let liLast = ulOuter.lastElementChild;
ulOuter.removeChild(liLast);

// 4. Change the <title> element text to “Master Of The Dom”.
let title = document.querySelector("title");
title.textContent = "Master Of The Dom";

// 5. Change the text of the <p> element ot something else of your
let p = document.querySelector("p");
p.textContent = "All You Need Is Love";

