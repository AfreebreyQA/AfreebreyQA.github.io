let _ = require("lodash");


function wordCount(_str){
    let wordArr  = _.split(_str, " ");
    return wordArr.length;
}

function arrayLast(_arr){
    let lastElement = _.last(_arr);
    return lastElement;
}

function isEven(_int){
    if(_int %2 == 0){
        return true;
    }
    else{
        return false;
    }
}

function reverseName(_str){
    let wordArr = _.split(_str, " ");
    wordArr = _.reverse(wordArr);
    let reversedName = _.join(wordArr, " ");
    return reversedName;
}

function alphebeticalString(_str){
    let charArr = _.split(_str, "");

    return _.join(charArr.sort(),"");
}

function getSmallest(_intArr){
    return _.min(_intArr);
}

