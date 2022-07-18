"use strict";
// 定义必传参数类型
function printObjectCoord(pt) {
    console.log('x值为：' + pt.x);
    console.log('y值为：' + pt.y);
}
printObjectCoord({
    x: 22,
    y: 12,
});
// 定义可选参数类型
function printName(name) {
    var _a;
    console.log('first值为：' + name.first);
    console.log('last值为：' + ((_a = name.last) === null || _a === void 0 ? void 0 : _a.toLowerCase()));
}
printName({
    first: '吾昂王',
});
