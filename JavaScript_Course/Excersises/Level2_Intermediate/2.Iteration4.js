let outputDiv;
let output;

function divide3(_num, _count = 0) {

    let anOutput = document.createElement("p");
    if (_num == 1) {
        anOutput.innerHTML = "Dividing has reached 1 <br> It took " + _count + " iterations <br>";
        output.appendChild(anOutput);
        
        console.log("Dividing has reached 1");
        console.log("It took " + _count + " iterations");
        return;
    }
    if (_num % 3 == 0) {
        anOutput.innerHTML = "Dividing " + _num + " by 3";
        output.appendChild(anOutput);
        console.log("Dividing " + _num + " by 3");
        console.log(_num / 3);
        _count++;
        divide3(_num / 3, _count);
    }
    else if ((_num + 1) % 3 == 0) {
        anOutput.innerHTML = "Adding 1 to " + _num + " then dividing by 3";
        output.appendChild(anOutput);
        console.log("Adding 1 to " + _num + " then dividing by 3");
        console.log((_num + 1) / 3);
        _count++;
        divide3((_num + 1) / 3, _count);
    }
    else {
        anOutput.innerHTML = "Subtracting 1 to " + _num + " then dividing by 3";
        output.appendChild(anOutput);
        console.log("Subtracting 1 to " + _num + " then dividing by 3");
        console.log((_num - 1) / 3);
        _count++;
        divide3((_num - 1) / 3, _count);
    }
}

function submit() {
    outputDiv = document.getElementById("outputDiv")

    if (output = document.getElementById("document")) {
        outputDiv.removeChild(output);
    }

    output = document.createElement("div");
    output.setAttribute("id", "output");

    let num = document.getElementById("input").value;
    divide3(num);

    outputDiv.appendChild(output);
}