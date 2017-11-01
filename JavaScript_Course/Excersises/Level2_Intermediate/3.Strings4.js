function triples(_str = "") {
    count = 0
    for (let i = 0; i < _str.length - 2; i++) {
        if (_str[i] === _str[i + 1] && _str[i] === _str[i + 2]) {
            count++;
        }
    }
    console.log(count)
}

function submit1(){
    let str = document.getElementById("input").value;
    triples(str)
}