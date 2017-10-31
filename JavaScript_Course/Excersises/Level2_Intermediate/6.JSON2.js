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