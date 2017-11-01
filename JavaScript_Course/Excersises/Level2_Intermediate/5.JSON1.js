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
