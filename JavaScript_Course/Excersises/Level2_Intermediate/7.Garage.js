"use strict";

let previousCars = [];
let checkedInCars = [];

function init() {
    let car = {
        plateNum: "hw1ahjl",
        model: "Volvo",
        faultNum: 3
    }
    previousCars.push(car);

    let previousCarsDropDown = document.getElementById("checkInPlateNumInput");
    for (let i = 0; i < previousCars.length; i++) {
        let option = document.createElement("option");
        option.setAttribute("value", previousCars[i].plateNum);
        option.innerHTML = previousCars[i].plateNum;
        previousCarsDropDown.appendChild(option);
    }
}

function updateCheckInDropDown() {

    let previousCarsDropDown = document.getElementById("checkInPlateNumInput");

    // Clears the select element
    while (previousCarsDropDown.hasChildNodes()) {
        previousCarsDropDown.removeChild(previousCarsDropDown.lastChild)
    }

    // adds all available cars into select element
    for (let i = 0; i < previousCars.length; i++) {
        let option = document.createElement("option");
        option.setAttribute("value", previousCars[i].plateNum);
        option.innerHTML = previousCars[i].plateNum;
        previousCarsDropDown.appendChild(option);
    }
}

function checkIfInGarage(_plateNum) {
    for (let i = 0; i < checkedInCars.length; i++) {
        if (checkedInCars[i].plateNum == _plateNum) {
            return true;
        }
    }
    return false;
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
    for (let i = 0; i < previousCars.length; i++) {
        if (newCar.plateNum === previousCars[i].plateNum) {
            alert("Car is already registered")
            return;
        }
    }

    // Adds car to previous cars
    previousCars.push(newCar);
    updateCheckInDropDown();

    let previousCarsDropDown = document.getElementById("checkInPlateNumInput");
    for (let i = 0; i < previousCarsDropDown.options.length; i++) {
        if (previousCarsDropDown.options[i].value == newCar.plateNum) {
            previousCarsDropDown.selectedIndex = i;
        }
    }
    document.getElementById("checkInFaultNumInput").value = newCar.faultNum;

}


function checkInCar() {
    //variables for user feedback input validation
    let _plateNumInput = document.getElementById("checkInPlateNumInput");
    let _faultNumInput = document.getElementById("checkInFaultNumInput");

    //reset input boxes to initial colour (May have been changed on previous input attempt)
    //_plateNumInput.setAttribute("style", "background-color:initial");
    _faultNumInput.setAttribute("style", "background-color:initial");

    // variables to store user input
    let _plateNum;
    let _faultNum;

    // validate inpute
    let validInput = true;

    // if (!(_plateNum = _plateNumInput.value)) {
    //     _plateNumInput.setAttribute("style", "background-color:#ff9999");
    //     validInput = false;
    // }
    if (!(_faultNum = _faultNumInput.value)) {
        _faultNumInput.setAttribute("style", "background-color:#ff9999");
        validInput = false;
        return; // remove if reverting back to manual typing to check in
    }
    // if (!validInput) { return; }

    // let carIndex;

    // check if car is already registered
    // let alreadyRegistered = false;
    // for (let i = 0; i < previousCars.length; i++) {
    //     if (previousCars[i].plateNum == _plateNum) {
    //         carIndex = i;
    //         alreadyRegistered = true;
    //         break;
    //     }
    // }
    // if (!alreadyRegistered) {
    //     return;
    // }


    // check if car is already checked in
    let alreadyCheckedIn = false;
    for (let i = 0; i < checkedInCars.length; i++) {
        if (checkedInCars[i].plateNum == _plateNum) {
            alreadyCheckedIn = true;
            break;
        }
    }
    if (alreadyCheckedIn) {
        return;
    }

    // check in car


}