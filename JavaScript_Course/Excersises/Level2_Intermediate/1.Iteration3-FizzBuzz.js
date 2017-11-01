function fizzBuzz(_num, _div1, _div2) {
    for (let i = 1; i <= _num; i++) {
        if (i % _div1 == 0 & i % _div2 == 0) {
            console.log("FizzBuzz");
            continue;
        }
        else if(i% _div1 == 0){
            console.log("Fizz");
        }
        else if(i%_div2 == 0){
            console.log("Buzz");
        }
        else{
            console.log(i);
        }
    }
}

function submit(){
    let num = document.getElementById("num").value;
    let div1= document.getElementById("div1").value;
    let div2= document.getElementById("div2").value;

    fizzBuzz(num,div1,div2);
}