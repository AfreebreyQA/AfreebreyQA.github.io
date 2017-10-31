function triples(myString = "") {
    count = 0
    for (let i = 0; i < myString.length - 2; i++) {
        if (myString[i] === myString[i + 1] && myString[i] === myString[i + 2]) {
            count++;
        }
    }
    console.log(count)
}