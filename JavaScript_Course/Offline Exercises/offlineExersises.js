function doubleChar(_str) {
    let _doubleChar = "";
    for (let i = 0; i < _str.length; i++) {
        _doubleChar = _doubleChar + _str[i] + _str[i];
    }
    return _doubleChar;
}

function task1() {
    let input = document.getElementById("task1Input").value;
    console.log(doubleChar(input));
}


function evenlySpaced(_num1, _num2, _num3) {
    nums = [_num1, _num2, _num3];
    nums.sort();
    if (nums[1] - nums[0] === nums[2] - nums[1]) {
        return true;
    }
    return false;
}

function task3() {
    let num1 = document.getElementById("task3Input1").value;
    let num2 = document.getElementById("task3Input2").value;
    let num3 = document.getElementById("task3Input3").value;
    console.log(evenlySpaced(num1, num2, num3));
}

function nTwice(_str, _num) {
    let firstN = _str.substring(0, _num);
    let lastN = _str.substring(_str.length - _num, _str.length);
    return firstN + lastN;
}

function task4() {
    let str = document.getElementById("task4String").value;
    let num = document.getElementById("task4Num").value;

    console.log(nTwice(str, num));
}

function endsLy(_str) {
    if (_str.substring(_str.length - 2, _str.length) == "ly") {
        return true;
    }
    return false;
}

function task5() {
    let str = document.getElementById("task5Input").value;
    console.log(endsLy(str));
}


/// Not complete ///
function fibonacci(_num) {
    let val = 0;
    if (_num > 1) {
        val += fibonacci(_num - 1);
    }
    else {
        val = 1;
    }
    return val;
}

function task7()
{
    let number = parseInt(document.getElementById("task7Input").value);
    fibonacci(number);
}
//////////////////////