"use strict";
function printAll(str) {
    if (typeof str === 'object') {
        // for(const s of str){
        // }
    }
    else if (typeof str === 'string') {
    }
    else {
    }
}
function padLeft(padding, input) {
    if (typeof padding === "number") {
        return new Array(padding + 1).join(" ") + input;
    }
    return padding + input;
}
console.log(padLeft(10, "哈哈哈"));
console.log(padLeft("大哥", "刘备"));
