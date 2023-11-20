"use strict";

// Element variables
const mountainDropdown = document.getElementById("mountainDropdown");

window.onload = init;

function init() {
    mountainDropdown.onchange = dropdownSelector;
};

// Functions to display dropdowns
function mountainDropdown() {
    for (let i = 0; i < locationsArray.length; i++) {
        let parkLocation = locationsArray[i];
        let option = new Option(parkLocation);
        locationDropdown.appendChild(option);
    }

}


// Functions to display park type dropdowns
function displayParkTypeDropdown() {

    for (let i = 0; i < parkTypesArray.length; i++) {
        let parkType = parkTypesArray[i];
        let option = new Option(parkType);
        parkTypeDropdown.appendChild(option);
    }

}


// Function to handle dropdown selection
function dropdownSelector() {

    if (locationSearchBtn.checked) {
        let selectedState = locationDropdown.value;
        let listOfParks = nationalParksArray.filter(nationalPark => nationalPark.State === selectedState);
        parkInfoContainer(listOfParks);
    } else if (parkTypeSearchBtn.checked) {
        let selectedParkType = parkTypeDropdown.value;
        let listOfTypesOfParks = nationalParksArray.filter(nationalPark => nationalPark.LocationName.includes(selectedParkType));
        typeInfoContainer(listOfTypesOfParks);
    }
    
}
};