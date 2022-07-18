"use strict";
// 真值缩小
function padLeft(padding, input) {
    if (typeof padding === "number") {
        return new Array(padding + 1).join(" ") + input;
    }
    return padding + input;
}
console.log(padLeft(10, "哈哈哈"));
console.log(padLeft("大哥", "刘备"));
function getUserOnlineMessage(numUsersOnline) {
    if (numUsersOnline) { // 如果此处 numUsersOnline 的值为0、NaN、""（空字符串）、On（bigint零的版本）、null、undefined，则为 false
        return `现在共有 ${numUsersOnline} 人在线！`;
    }
    return "现在无人在线！";
}
getUserOnlineMessage(12);
