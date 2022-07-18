"use strict";
// 字符串类型
let testString = 'hello world';
testString = 'hello ts';
const constantString = 'hello world';
// constantString = ''
let x = 'hello'; // 设置x的值必须为 hello 字符串
// x = 'hello1';
// 数字类型
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
function configure(x) {
    console.log(x);
}
configure({ width: 100 });
configure('auto');
// configure('auto1')
// 布尔文字类型
let booleanTrue = true;
let booleanFalse = false;
