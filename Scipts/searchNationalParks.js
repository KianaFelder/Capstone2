"use strict";

// Element variables
const displayParksContainer = document.getElementById("displayParksContainer");
const locationSearchBtn = document.getElementById("locationSearchBtn");
const parkTypeSearchBtn = document.getElementById("parkTypeSearchBtn");
const locationDropdown = document.getElementById("locationDropdown");
const parkTypeDropdown = document.getElementById("parkTypeDropdown");

window.onload = init;

function init() {
    locationSearchBtn.onclick = radioBtnClicked;
    parkTypeSearchBtn.onclick = radioBtnClicked;
    locationDropdown.onchange = dropdownSelector;
    parkTypeDropdown.onchange = dropdownSelector;
};

// Functions to handle radio button clicks
function radioBtnClicked() {


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
        let option = new Option(parkLocation);
        locationDropdown.appendChild(option);
    }

}


// Functions to display park type dropdowns
function displayParkTypeDropdown() {

    for (let i = 0; i < parkTypesArray.length; i++) {
        let parkType = parkTypesArray[i];
        let option = new Option(parkType.name);
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
        let listOfTypesOfParks = nationalParksArray.filter(nationalPark => nationalPark.LocationName === selectedParkType);
        typeInfoContainer(listOfTypesOfParks);
    }
    
}

// Function to create park info container
function parkInfoContainer(listOfParks) {
    listOfParks.forEach(park => {
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
            `;

        accordionBody.innerHTML = accordionBodyHTML;

        flushCollapseDiv.appendChild(accordionBody);

        getAccordionItem.appendChild(flushCollapseDiv);
    });
};

function typeInfoContainer(listOfTypesOfParks) {
    listOfTypesOfParks.forEach(park => {
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
