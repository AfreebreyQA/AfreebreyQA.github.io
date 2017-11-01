function divide3(_num, _count = 0) {
    if (_num == 1) {
        console.log("Dividing has reached 1");
        console.log("It took " + _count + " iterations");
        return;
    }
    if (_num % 3 == 0) {
        console.log("Dividing " + _num + " by 3");
        console.log(_num / 3);
        _count++;
        divide3(_num / 3, _count);
    }
    else if ((_num + 1) % 3 == 0) {
        console.log("Adding 1 to " + _num + " then dividing by 3");
        console.log((_num + 1) / 3);
        _count++;
        divide3((_num + 1) / 3, _count);
    }
    else {
        console.log("Subtracting 1 to " + _num + " then dividing by 3");
        console.log((_num - 1) / 3);
        _count++;
        divide3((_num - 1) / 3, _count);
    }
}

function submit(){
    let num = document.getElementById("input").value;
    divide3(num);
}