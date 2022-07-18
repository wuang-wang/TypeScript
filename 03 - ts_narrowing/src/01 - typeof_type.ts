// 类型缩小
function printAll(str: string | string[] | null) {
    if (typeof str === 'object') {
        // for(const s of str){

        // }
    } else if (typeof str === 'string') {
    } else {
    }
}

// 真值缩小
function padLeft(padding: number | string, input: string): string {
    if(typeof padding === "number") {
        return new Array(padding + 1).join(" ") + input
    }
    return padding + input
}
console.log(padLeft(10, "哈哈哈"))
console.log(padLeft("大哥", "刘备"))

function getUserOnlineMessage (numUsersOnline: number) {
    if (numUsersOnline) { // 如果此处 numUsersOnline 的值为0、NaN、""（空字符串）、On（bigint零的版本）、null、undefined，则为 false
        return `现在共有 ${numUsersOnline} 人在线！`
    }
    return "现在无人在线！"
}
getUserOnlineMessage(12)

// 等值缩小
// 全等
function doSth(str1: string | null, str2: string | number) {
    if (str1 === str2) {
        str1.toUpperCase()
        str2.toLowerCase()
    }
}

// 不等（这一点需要注意）
function doSth1(value: number | null | undefined, x: number) {
    if(value != null){ // 这里的 null 替换成 undefined 结果也是一样的！
        value *= x
        console.log(value)
    }
}
doSth1(100, 5) // 500
doSth1(null, 5) // 什么也不打印
doSth1(undefined, 5) // 注意：这个也是什么也不打印！已自动将其过滤！