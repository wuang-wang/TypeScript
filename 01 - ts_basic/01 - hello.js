"use strict";
function greet(name, date) {
    console.log(`hello,${name};今天是${date.toLocaleString()}`);
}
greet('吾昂王', new Date());
