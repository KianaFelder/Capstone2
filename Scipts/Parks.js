"use strict";

let displayParks = document.getElementById("")
let locationSearchBtn = document.getElementById("locationSearch");
let parkTypeSearchBtn = document.getElementById("parkTypeSearch");
let dropdownLocation = document.getElementById("dropdownLocation");
let dropdownParkType = document.getElementById("dropdownParkType");

window.onload = init;

function init() {
    
locationSearchBtn.onclick = radioBtnClicked;
parkTypeSearchBtn.onclick = radioBtnClicked;
locationDropDown.onclick = selectDropdown;
parktypeDropDown.onclick = selectDropdown;
};

function radioBtnClicked() { 

    if(locationSearchBtn.checked){
        showLocationDD();
    }
    else if(parkTypeSearchBtn)
}

function selectDropdown() {
    
}