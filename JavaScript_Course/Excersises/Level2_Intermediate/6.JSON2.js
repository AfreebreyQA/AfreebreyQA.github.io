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
            let results = [];
            for (let key in JSON2Data) {
                let currentItem = JSON2Data[key];
                for (let keyS in currentItem) {
                    let itemMember = currentItem[keyS];
                    if (itemMember.includes(searchTerm)) {
                        results.push(currentItem);
                        break;
                    }
                }
            }

            outputResults(results);

        }

    }
    else {
        console.log("Must Load Data first");
    }
}

function outputResults(_results) {
    let output;
    if (output = document.getElementById("JSON2Results")) {
        output.parentElement.removeChild(output);
    }

    output = document.createElement("div");
    output.id = "JSON2Results";

    for (let key in _results) {
        let outputItem = document.createElement("p");
        let currentItem = _results[key];
        for (let key in currentItem) {
            outputItem.appendChild(document.createTextNode(currentItem[key]));
            outputItem.appendChild(document.createElement("br"));
        }
        outputItem.appendChild(document.createElement("br"));
        output.appendChild(outputItem);
    }
    document.getElementById("JSON2Output").appendChild(output);
}