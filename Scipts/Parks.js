"use strict";

const displayParks = document.getElementById("displayParks");
const locationDropDown = document.getElementById("locationDropDown");
const parkTypeDropDown = document.getElementById("parktypeDropDown");

window.onload = init;

function init(){
    const searchBtn = document.getElementById
    searchBtn.onclick = searchBtnClicked;
}

function displayLocationDropDown() {
   // let listOfParks = getParkInfo();

    for (let state of locationsArray){
        let option = document.createElement("option");
        option.value = state;
        option.innerText; 
        locationDropDown.appendChild(option);
    }
}

function displayParkTypeDropDown() {
    for (let parkTypes of parkTypesArray){
        let option = document.createElement("option");
        option.value = parkTypes;
        option.innerText;
        parkTypeDropDown.appendChild(option);
    }
}

function searchBtnClicked () {
    displayParks.innerHTML = "";
    let locationSelection = locationDropDown.value;

    let parkTypeSelection = parkTypeDropDown.value;
    if (locationSelection) {
        let searchInfo = nationalParksArray.filter(park => park.State == locationSelection);
        for (let park of searchInfo) {
            getDisplayParksContainer(park);
            if(parkTypeSelection) {
                for (let park of nationalParksArray) {
                    if (park.LocationEND.includes(parkTypeSelection)) {
                        getDisplayParksContainer(park,parkTypeSelection);
                    }
                }
            }
        }
    }
}


function getDisplayParksContainer(location) {

    let accordionItemDiv = document.createElement("div");
    accordionItemDiv.className = "accordion-item";

    displayParks.appendChild(accordionItemDiv);

    let accordionHeader = document.createElement("h2");
    accordionHeader.className = "accordion-header";

    accordionItemDiv.appendChild(accordionHeader);

    let btn = document.createElement("button");
    btn.className = "accordion-button collapsed";
    btn.type = "button";
    btn.setAttribute("data-bs-toggle", "collapse");

    let targetId = "flush-collapse-" + location.LocationID;

    btn.setAttribute("data-bs-target", "#" + targetId);
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-controls", targetId);

    let btnTextNode = document.createTextNode(location.LocationName);
    btn.appendChild(btnTextNode);

    accordionHeader.appendChild(btn);

    let flushCollapseDiv = document.createElement("div");
    flushCollapseDiv.id = targetId;
    flushCollapseDiv.className = "accordion-collapse collapse"
    flushCollapseDiv.setAttribute("data-bs-parent", "#displayPark");

    let accordionBody = document.createElement("div");
    accordionBody.className = "accordion-body";

    let accordionBodyHTML = `
        <p><strong>Location ID:</strong> ${location.LocationID}</p>
        <p><strong>Location Name:</strong> ${location.LocationName}</p>
        <p><strong>Address:</strong> ${location.Address}</p>
        <p><strong>City:</strong> ${location.City}</p>
        <p><strong>State:</strong> ${location.State}</p>
        <p><strong>Zip Code:</strong> ${location.ZipCode}</p>
        <p><strong>Phone:</strong> ${location.Phone}</p>
        <p><strong>Fax:</strong> ${location.Fax}</p>
        <p><strong>Latitude:</strong> ${location.Latitude}</p>
        <p><strong>Longitude:</strong> ${location.Longitude}</p>
    `;
    accordionBody.innerHTML = accordionBodyHTML;

    flushCollapseDiv.appendChild(accordionBody);

    accordionItemDiv.appendChild(flushCollapseDiv);

};

// "use strict";

// let displayParks = document.getElementById("")
// let locationSearchBtn = document.getElementById("locationSearch");
// let parkTypeSearchBtn = document.getElementById("parkTypeSearch");
// let dropdownLocation = document.getElementById("dropdownLocation");
// let dropdownParkType = document.getElementById("dropdownParkType");

// window.onload = init;

// function init() {
    
// locationSearchBtn.onchange = radioBtnClicked;
// parkTypeSearchBtn.onchange = radioBtnClicked;
// locationDropDown.onchange = selectDropdown;
// parktypeDropDown.onchange = selectDropdown;
// };

// function radioBtnClicked() { 

//     if(locationSearchBtn.checked){
//         showLocationDD();
//     }
//     else if(parkTypeSearchBtn){
//         showParkTypeDD();
//     }
// }

// function selectDropdown() {
    
// }