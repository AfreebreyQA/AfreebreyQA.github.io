"use strict";

let _ = require("lodash");

function checkDuplicate(array,item){
    for(let key in array){
        if (array[key] == item){
            return true;
        }
    }
    return false;
}

function removeDuplicates(_arr){
    
}