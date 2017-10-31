'use strict';

//JSON2 Data Global
let JSON2Data;

function div(num) {
    console.log(num);
    if (num === 1) {
        return;
    }
    if (num % 3 === 0) {
        div(num / 3);
    }
    else if ((num + 1) % 3 === 0) {
        div((num + 1) / 3)
    }
    else {
        div(num - 1);
    }
}

function triples(myString = "") {
    count = 0
    for (let i = 0; i < myString.length - 2; i++) {
        if (myString[i] === myString[i + 1] && myString[i] === myString[i + 2]) {
            count++;
        }
    }
    console.log(count)
}


function DOM1Create() {
    let para = document.createElement("p")
    para.id = "ActivePara";
    para.innerHTML = "Click Submit to change this text";
    document.getElementById("DOM1Para").appendChild(para);
}

function DOM1Submit() {
    console.log("Replacing Paragraph");
    let text = document.getElementById("DOM1TextBox").value;
    let para = document.getElementById("ActivePara")
    para.innerHTML = text;
    para.id = "";
}
function DOM1Reset() {
    console.log("Reseting Paragraph");
    document.getElementById("DOM1Para").innerHTML = "<p></p>";
}

function DisplayData(data) {
    for (let key in data) {
        let currentData = data[key];
        if (typeof currentData === "object") {
            console.log(key, ":");
            DisplayData(currentData);
        }
        else {
            console.log(key, ":", currentData);
        }
    }
    console.log("");
}



function JSON1() {
    let requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json";
    let request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = "json";
    request.send();
    request.onload = function () {
        DisplayData(request.response)
    }
}

function JSON2() {
    let requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json";
    let request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = "json";
    request.send();
    request.onload = function () {
        JSON2Data = request.response
        //DisplayData(JSON2Data)
    }
}

function JSON2Search() {
    if (JSON2Data) {
        let searchTerm;
        if (searchTerm = document.getElementById("JSON2SearchBox").value) {
            let Results = [];
            for (let key in JSON2Data) {
                let currentItem = JSON2Data[key];
                for (let keyS in currentItem) {
                    let itemMember = currentItem[keyS];
                    if (itemMember.includes(searchTerm)) {
                        Results.push(currentItem);
                        break;
                    }
                }
            }

            let output;
            if (output = document.getElementById("JSON2Output")) {
                output.parentElement.removeChild(output);
            }

            output = document.createElement("div");
            output.id = "JSON2Output";

            for (let key in Results) {
                let outputItem = document.createElement("p");
                let currentItem = Results[key];
                for (let key in currentItem) {
                    outputItem.appendChild(document.createTextNode(key + ": " + currentItem[key]));
                    outputItem.appendChild(document.createElement("br"));
                }
                outputItem.appendChild(document.createElement("br"));
                output.appendChild(outputItem);
            }
            document.getElementById("JSON2").appendChild(output);
        }

    }
    else {
        console.log("Must Load Data first");
    }
}