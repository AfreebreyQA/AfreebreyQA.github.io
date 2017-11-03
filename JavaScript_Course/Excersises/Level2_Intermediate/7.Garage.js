"use strict";

let registeredCars = [];
let notCheckedInCars = [];
let checkedInCars = [];

const repairCost = 40;
const VAT = .2;

function init() {
    // Example Cars
    let car1 = {
        plateNum: "hw1ahjl",
        model: "Volvo",
        faultNum: 0
    }

    let car2 = {
        plateNum: "hw013BH",
        model: "Kia",
        faultNum: 2
    }


    registeredCars.push(car1);
    notCheckedInCars.push(car1);

    registeredCars.push(car2);
    checkedInCars.push(car2);

    updateUI();
}


// User Interface update functions

function updateUI() {

    let checkInCarSelect = document.getElementById("checkInCarSelect");
    let isCheckBoxTicked = document.getElementById("checkInPlateFilterBox").checked;

    // Clears the select element
    while (checkInCarSelect.hasChildNodes()) {
        checkInCarSelect.removeChild(checkInCarSelect.lastChild)
    }


    if (isCheckBoxTicked) {
        // adds all cars not checked in, into select element
        addCarListToDropDown(notCheckedInCars, checkInCarSelect);
    } else {
        // adds previous cars into select element
        addCarListToDropDown(registeredCars, checkInCarSelect);
    }

    let dropDownBoxes = [];
    dropDownBoxes = document.getElementsByName("garageCarList");

    // Loop through all dropdown of cars in garage
    for (let i = 0; i < dropDownBoxes.length; i++) {

        // Clears the select element
        while (dropDownBoxes[i].hasChildNodes()) {
            dropDownBoxes[i].removeChild(dropDownBoxes[i].lastChild)
        }

        addCarListToDropDown(checkedInCars,dropDownBoxes[i]);

    }
}

// Utility Functions

function addCarListToDropDown(_carList, _dropDown){
    for (let car in _carList) {
        let option = document.createElement("option");
        option.setAttribute("value", _carList[car].plateNum);
        option.innerHTML = _carList[car].plateNum;
        _dropDown.appendChild(option);
    }
}

function getCarFrom(_plateNum, _carList){
    for (let car in _carList) {
        if (_carList[car].plateNum == _plateNum) {
            return _carList[car];
        }
    }
    return false;
}

function removeCarFrom(_plateNum, _carList) {
    let carIndex;
    for (let car in _carList) {
        if (_carList[car].plateNum == _plateNum) {
            carIndex = car;
            _carList.splice(carIndex, 1);
        }
    }
}

// Functions for buttons

function checkInCar() {
    //variables for user feedback input validation
    let _plateNumInput = document.getElementById("checkInPlateNumInput");
    let _faultNumInput = document.getElementById("checkInFaultNumInput");

    //reset input boxes to initial colour (May have been changed on previous input attempt)
    _faultNumInput.setAttribute("style", "background-color:initial");

    // variables to store user input
    let _plateNum = _plateNumInput.options[_plateNumInput.selectedIndex].value;
    let _faultNum;

    if (!(_faultNum = _faultNumInput.value)) {
        _faultNumInput.setAttribute("style", "background-color:#ff9999");
        return; // remove if reverting back to manual typing to check in
    }


    // check if car is already checked in
    if (getCarFrom(_plateNum,checkedInCars)) {
        alert("Car already checked in");
        return;
    }

    // check in car
    let myCar = getCarFrom(_plateNum, registeredCars);
    checkedInCars.push(myCar);

    removeCarFrom(myCar.plateNum,notCheckedInCars);

    updateUI();
    updateCheckedInCarDropDowns(myCar.plateNum);
}


function createNewCar() {
    //variables for user feedback input validation
    let _plateNumInput = document.getElementById("createPlateNumInput");
    let _modelInput = document.getElementById("createModelInput");

    //reset input boxes to initial colour (May have been changed on previous input attempt)
    _plateNumInput.setAttribute("style", "background-color:initial");
    _modelInput.setAttribute("style", "background-color:initial");

    //Storing user input
    let _plateNum;
    let _model;

    // Validates Input
    let validInput = true;
    if (!(_plateNum = _plateNumInput.value)) {
        _plateNumInput.setAttribute("style", "background-color:#ff9999");
        validInput = false;
    }
    if (!(_model = _modelInput.value)) {
        _modelInput.setAttribute("style", "background-color:#ff9999");
        validInput = false;
    }
    if (!validInput) { return; }


    // Create new car object from user input to be pushed to previous car array
    let newCar = {
        plateNum: _plateNum,
        model: _model,
        faultNum: 0
    }

    // check if car is already a previous car
    for (let i = 0; i < registeredCars.length; i++) {
        if (newCar.plateNum === registeredCars[i].plateNum) {
            alert("Car is already registered")
            return;
        }
    }

    // Adds car to previous cars
    notCheckedInCars.push(newCar);
    registeredCars.push(newCar);
    updateUI();

    // Makes the dropdown menu automatically select the added car
    let checkInCarSelect = document.getElementById("checkInPlateNumInput");
    for (let i = 0; i < checkInCarSelect.options.length; i++) {
        if (checkInCarSelect.options[i].value == newCar.plateNum) {
            checkInCarSelect.selectedIndex = i;
        }
    }
}

function checkOutCar() {
    let checkOutCarSelect = document.getElementById("checkOutCarSelect");
    let _plateNum = checkOutCarSelect.options[checkOutCarSelect.selectedIndex].value;

    // check in car
    let myCar = getCarFrom(_plateNum,checkedInCars);

    // adds car to list of not checked in cars
    notCheckedInCars.push(myCar);

    // removes car from checked in car
    removeCarFrom(myCar.plateNum,checkedInCars);

    // updates UI
    updateCheckedInCarDropDowns();
    updateUI();
}

function displayCarInfo() {
    // reference to select
    let viewSelect = document.getElementById("viewCarSelect");

    // get car information
    let _plateNum = viewSelect.options[viewSelect.selectedIndex].value;
    let myCar = getCarFrom(_plateNum, checkedInCars);

    let displayDiv = document.getElementById("viewCarOutputDiv");
    let output;

    // clears the output
    if (output = document.getElementById("viewCarOutput")) {
        displayDiv.removeChild(output)
    }

    output = document.createElement("p");
    output.setAttribute("id", "viewCarOutput")
    for (let key in myCar) {
        output.appendChild(document.createTextNode(`${key} : ${myCar[key]}`));
        output.appendChild(document.createElement("br"));
    }

    displayDiv.appendChild(output);

}

function showBill(){
    // reference to select
    let billSelect = document.getElementById("billCarSelect");

    // get car information
    let _numPlate = billSelect.options[billSelect.selectedIndex].value;
    let mycar = getCarFrom(_numPlate,checkedInCars);

    let outputDiv = document.getElementById("carBillOutputDiv");

    let output;

    if(output = document.getElementById("carBillOutput")){
        outputDiv.removeChild(output);
    }

    output = document.createElement("div");
    output.setAttribute("id","carBillOutput");

    output.appendChild(document.createTextNode(`Number of Faults: ${mycar.faultNum}`));
    output.appendChild(document.createElement("br"));
    output.appendChild(document.createTextNode(`Cost of each repair = ${repairCost}`));
    output.appendChild(document.createElement("br"));
    output.appendChild(document.createTextNode(`Sub Total = ${mycar.faultNum*repairCost}`));
    output.appendChild(document.createElement("br"));
    output.appendChild(document.createTextNode(`VAT = ${VAT}`));
    output.appendChild(document.createElement("br"));
    output.appendChild(document.createTextNode(`Total = ${(mycar.faultNum*repairCost)*(1 + VAT)}`));

    outputDiv.appendChild(output);

}