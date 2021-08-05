/*
    File: example.js
    GUI Assignment: Document Object Model - Example
    Matt Zagame, UMass Lowell Computer Science, Matt_Zagame@student.uml.edu
    All rights reserved. May be freely copied or excerpted for educational
    purposes with credit to the author.
    Updated by MZ on August 4th, 2021 at 8:30 PM
*/

// ADD NEW ITEM TO END OF LIST
document.getElementById("four").insertAdjacentHTML("afterend",
"<li id=\"five\">cream</li>");

// ADD NEW ITEM START OF LIST
document.getElementById("one").insertAdjacentHTML("beforebegin",
"<li id=\"zero\">kale</li>");

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var listItems = document.getElementsByTagName("li");
for (let i = 0; i < listItems.length; i++) {
    listItems[i].classList.add("cool");
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
document.getElementById("header").nextElementSibling.insertAdjacentHTML
("beforeend", "<span>" + listItems.length + "</span>");