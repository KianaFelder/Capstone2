"use strict";

// Element variables
const mountainDropdown = document.getElementById("mountainDropdown");

window.onload = init;

function init() {
    displayMountainDropdown();
    dropdownSelector();
    mountainDropdown.onchange = dropdownSelector;
};

// Functions to display dropdowns
function displayMountainDropdown() {
    let mountainDropdown = document.getElementById("mountainDropdown");

    mountainsArray.forEach(mt =>{ let newOption = new Option(mt.name);

        mountainDropdown.appendChild(newOption);
    })
};


// Function to handle dropdown selection
function dropdownSelector() {
    let mtSelection = mountainDropdown.value;
    for( let j = 0; j < mountainsArray.length; j++) {
        if (mtSelection === mountainsArray[j].name) {
            newMtSelected (mountainsArray[j]);
            break;
        }
    }
    
};

function newMtSelected(mountain) {
    let mtName = document.getElementById("mountainName");
    let mtElevation = document.getElementById("elevation");
    let mtEffort = document.getElementById("effort");
    let mtInfo = document.getElementById("desc");
    let mountainImage = document.getElementById("mountainImage");
    
    mountainImage.src = "../images/" + mountain.img;
    mtInfo.innerText = mountain.desc;
    mtName.innerText = mountain.name;
    mtElevation.innerText = mountain.elevation;
    mtEffort.innerText = "Climbing Effect" + mountain.effort;

};