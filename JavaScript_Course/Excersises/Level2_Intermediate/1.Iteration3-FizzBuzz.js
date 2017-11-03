function fizzBuzz(_num, _div1, _div2) {

    let outputDiv = document.getElementById("outputDiv");

    let output;
    if (output = document.getElementById("output")) {
        outputDiv.removeChild(output);
    }
    output = document.createElement("div");
    output.setAttribute("id", "output");
    for (let i = 1; i <= _num; i++) {
        let anOutput;
        anOutput = i;

        if (i % _div1 == 0) {
            anOutput = "Fizz";
        }
        if (i % _div2 == 0) {
            anOutput = "Buzz";
        }
        if (i % _div1 == 0 & i % _div2 == 0) {
            anOutput = "FizzBuzz";
        }

        output.appendChild(document.createTextNode(anOutput));
        output.appendChild(document.createElement("br"));
    }
    outputDiv.appendChild(output);
}

function submit() {
    let num = document.getElementById("num").value;
    let div1 = document.getElementById("div1").value;
    let div2 = document.getElementById("div2").value;

    fizzBuzz(num, div1, div2);
}