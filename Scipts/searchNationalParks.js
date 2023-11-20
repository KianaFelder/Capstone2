"use strict";

// Element variables
const displayParksContainer = document.getElementById("displayParksContainer");
const locationSearchBtn = document.getElementById("locationSearchBtn");
const parkTypeSearchBtn = document.getElementById("parkTypeSearchBtn");
const locationDropdown = document.getElementById("locationDropdown");
const parkTypeDropdown = document.getElementById("parkTypeDropdown");

// Functions to handle radio button clicks
function radioBtnClicked() {
    clearContainer();

    if (locationSearchBtn.checked) {
        displayLocationDropdown();
    } else if (parkTypeSearchBtn.checked) {
        displayParkTypeDropdown();
    }
}

// Functions to display dropdowns
function displayLocationDropdown() {
    dropdownReset(locationDropdown, "Select a state", locationsArray);
    parkTypeDropdown.style.display = "none";
}

function displayParkTypeDropdown() {
    dropdownReset(parkTypeDropdown, "Select the type of park", parkTypesArray);
    locationDropdown.style.display = "none";
}

// Function to reset dropdown options
function dropdownReset(dropdown, defaultText, dataArray) {
    dropdown.style.display = "block";
    dropdown.innerHTML = `<option value="">${defaultText}</option>`;

    for (let data of dataArray) {
        let option = document.createElement("option");
        option.value = data;
        option.innerText = data;
        dropdown.appendChild(option);
    }

    dropdown.value = "";
}

// Function to handle dropdown selection
function dropdownSelection() {
    clearContainer();

    if (locationSearchBtn.checked) {
        let stateSelection = locationDropdown.value;
        let parksList = filterParksByState(stateSelection);
        parkInfoContainer(parksList);
    } else if (parkTypeSearchBtn.checked) {
        let parkTypeSelection = parkTypeDropdown.value;
        let typeList = filterParksByType(parkTypeSelection);
        parkInfoContainer(typeList);
    }
}

// function dropdownSelector() {
//     clearContainer();

//     if (locationSearchBtn.checked) {
//         let stateOfLocation = locationDropdown.value;
//         let parkList = filterParksByState(stateOfLocation);
//         parkInfoDisplay(parkList);
//     } else if (parkTypeSearchBtn.checked) {
//         let parkTypeSelector = parkTypeDropdown.value;
//         let parkTypeList = filterParksByType(parkTypeSelector);
//         parkInfoDisplay(parkTypeList);
//     }
// }

// Functions to filter parks by state or type
function filterParksByState(state) {
    return nationalParksArray.filter(nationalPark => nationalPark.State === state);
}

function filterParksByType(type) {
    return nationalParksArray.filter(nationalPark => nationalPark.LocationName.includes(type));
}

// Function to create park info container
function parkInfoContainer(parksList) {
    parksList.forEach(park => {
        let getAccordionItem = createAccordionItem(park);
        displayParksContainer.appendChild(getAccordionItem); // Replace parkContainer with displayParksContainer
    });
}

// function parkInfoContainer(parksList) {
//     parksList.forEach(park => {
//         let getAccordionItemDiv = createAccordionItem(park);
//         displayParksContainer.appendChild(getAccordionItemDiv);
//     });
// }

// Function to create accordion item
function createAccordionItem(park) {
    let getAccordionItem = document.createElement("div");
    getAccordionItem.className = "accordion-item";

    let headerOfAccordion = createAccordionHeader(park);
    getAccordionItem.appendChild(headerOfAccordion);

    let flushCollapseDiv = createCollapseDiv(park);
    getAccordionItem.appendChild(flushCollapseDiv);

    return getAccordionItem;
}

// Function to create accordion header
function createAccordionHeader(park) {
    let headerOfAccordion = document.createElement("h2");
    headerOfAccordion.className = "accordion-header";

    let displayBtn = createAccordionButton(park);
    headerOfAccordion.appendChild(displayBtn);

    return headerOfAccordion;
}

// Function to create accordion button
function createAccordionButton(park) {
    let accordionBtn = document.createElement("button");
    accordionBtn.className = "accordion-button collapsed";
    accordionBtn.type = "button";
    accordionBtn.setAttribute("data-bs-toggle", "collapse");

    let targetId = "flush-collapse-" + park.LocationID;
    accordionBtn.setAttribute("data-bs-target", "#" + targetId);
    accordionBtn.setAttribute("aria-expanded", "false");
    accordionBtn.setAttribute("aria-controls", targetId);
    accordionBtn.innerText = park.LocationName;

    return accordionBtn;
}

// Function to create collapse div
function createCollapseDiv(park) {
    let flushCollapseDiv = document.createElement("div");
    flushCollapseDiv.id = "flush-collapse-" + park.LocationID;
    flushCollapseDiv.className = "accordion-collapse collapse";
    flushCollapseDiv.setAttribute("data-bs-parent", "#parkContainer");

    let accordionBody = document.createElement("div");
    accordionBody.className = "accordion-body";

    let accordionBodyHTML = `
        <p><strong>Location ID:</strong> ${park.LocationID}</p>
        <p><strong>Location Name:</strong> ${park.LocationName}</p>
        <p><strong>Address:</strong> ${park.Address}</p>
        <p><strong>City:</strong> ${park.City}</p>
        <p><strong>State:</strong> ${park.State}</p>
        <p><strong>Zip Code:</strong> ${park.ZipCode}</p>
        <p><strong>Phone:</strong> ${park.Phone}</p>
        <p><strong>Fax:</strong> ${park.Fax}</p>
        <p><strong>Latitude:</strong> ${park.Latitude}</p>
        <p><strong>Longitude:</strong> ${park.Longitude}</p>
        <p><strong>Visit:</strong> <a href="${park.Visit}" target="_blank">${park.Visit}</a></p>
    `;

    accordionBody.innerHTML = accordionBodyHTML;
    flushCollapseDiv.appendChild(accordionBody);

    return flushCollapseDiv;
}

// Function to clear park container
function clearContainer() {
    displayParksContainer.innerHTML = "";
}

// Event binding
window.onload = function () {
    locationSearchBtn.onclick = handleRadioClicked;
    parkTypeSearchBtn.onclick = handleRadioClicked;
    locationDropdown.onchange = dropdownSelector;
    parkTypeDropdown.onchange = dropdownSelector;
};
