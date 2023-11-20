"use strict";

// Element variables
const displayParksContainer = document.getElementById("displayParksContainer");
const locationSearchBtn = document.getElementById("locationSearchBtn");
const parkTypeSearchBtn = document.getElementById("parkTypeSearchBtn");
const locationDropdown = document.getElementById("locationDropdown");
const parkTypeDropdown = document.getElementById("parkTypeDropdown");

window.onload = function () {
    locationSearchBtn.onclick = radioBtnClicked();
    parkTypeSearchBtn.onclick = radioBtnClicked();
    locationDropdown.onchange = dropdownSelector();
    parkTypeDropdown.onchange = dropdownSelector();
};

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

    for (let i = 0; i < locationsArray.length; i++) {
        let parkLocation = locationsArray[i];
        let option = new Option(parkLocation.name,);
        locationDropdown.appendChild(option);
    }

    locationDropdown.value = "";
}
// Functions to display park type dropdowns
function displayParkTypeDropdown() {

    for (let i = 0; i < parkTypesArray.length; i++) {
        let parkType = parkTypesArray[i];
        let option = new Option(parkType.name,);
        parkTypeDropdown.appendChild(option);
    }

    parkTypeDropdown.value = "";
}

// Function to handle dropdown selection
function dropdownSelector() {
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
        let getAccordionItem = document.createElement("div");
        getAccordionItem.className = "accordion-item";

        displayParksContainer.appendChild(getAccordionItem);

        let accordionHeader = document.createElement("h2");
        accordionHeader.className = "accordion-header";

        getAccordionItem.appendChild(accordionHeader);

        let btn = document.createElement("button");
        btn.className = "accordion-button collapsed";
        btn.type = "button";
        btn.setAttribute("data-bs-toggle", "collapse");

        let targetId = "flush-collapse-" + park.LocationID;

        btn.setAttribute("data-bs-target", "#" + targetId);
        btn.setAttribute("aria-expanded", "false");
        btn.setAttribute("aria-controls", targetId);

        let btnTextNode = document.createTextNode(park.LocationName);
        btn.appendChild(btnTextNode);

        accordionHeader.appendChild(btn);

        let flushCollapseDiv = document.createElement("div");
        flushCollapseDiv.id = targetId;
        flushCollapseDiv.className = "accordion-collapse collapse"
        flushCollapseDiv.setAttribute("data-bs-parent", "#displayParksContainer");

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
            <p><strong>Visit:</strong> <a href=""> ${park.Visit}</a></p>
            `
            
            accordionBody.innerHTML = accordionBodyHTML;
            
            flushCollapseDiv.appendChild(accordionBody);
            
            getAccordionItem.appendChild(flushCollapseDiv);
        });
    };
// function parkInfoContainer(parksList) {
//     parksList.forEach(park => {
//         let getAccordionItem = createAccordionItem(park);
//         displayParksContainer.appendChild(getAccordionItem);
//     });
// }
