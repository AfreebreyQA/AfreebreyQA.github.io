let JSONData;

function logData(data) {
    for (let key in data) {
        let currentData = data[key];
        if (typeof currentData === "object") {
            console.log(key, ":");
            logData(currentData);
        }
        else {
            console.log(key, ":", currentData);
        }
    }
    console.log("");
}

function DisplayData() {
document.getElementById("JSON1").removeChild(document.getElementById("getDataButton"));

    document.getElementById("squadNameOutput").innerHTML = JSONData["squadName"];
    document.getElementById("homeTownOutput").innerHTML = JSONData["homeTown"];
    document.getElementById("formedOutput").innerHTML = JSONData["formed"];
    document.getElementById("secretBaseOutput").innerHTML = JSONData["secretBase"];
    document.getElementById("activeOutput").innerHTML = JSONData["active"];
    let members = JSONData["members"]
    for (let key in members) {
        // store current member
        let member = members[key];

        let aMemberDiv = document.createElement("div");
        aMemberDiv.setAttribute("name", aMemberDiv);
        // iterate through member attribute
        for (let membersKey in member) {
            let memberAttribute = member[membersKey]
            let attributeTitle = document.createElement("h3");
            attributeTitle.innerHTML = membersKey;
            aMemberDiv.appendChild(attributeTitle);
            // if dealing with member's power
            if (membersKey == "powers") {
                let powers = memberAttribute;
                let powerDiv = document.createElement("div");
                for (power in powers) {
                    let thisPower = powers[power];
                    let thisPowerOutput = document.createTextNode(thisPower);
                    powerDiv.appendChild(thisPowerOutput);
                    powerDiv.appendChild(document.createElement("br"));
                }
                aMemberDiv.appendChild(powerDiv);
                aMemberDiv.appendChild(document.createElement("br"));
            }
            else {
                let attributOutput = document.createTextNode(member[membersKey]);
                aMemberDiv.appendChild(attributOutput);
            }
        }

        document.getElementById("JSONDisplayDiv").appendChild(aMemberDiv);
    }




}

function JSON1() {
    let requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json";
    let request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = "json";
    request.send();
    request.onload = function () {
        JSONData = request.response;
        logData(request.response)
        DisplayData();
    }
}
