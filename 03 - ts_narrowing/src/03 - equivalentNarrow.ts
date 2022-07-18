// 等值缩小
// 全等
function doSth(str1: string | null, str2: string | number) {
    if (str1 === str2) {
        str1.toUpperCase();
        str2.toLowerCase();
    }
}

// 不等（这一点需要注意）
function doSth1(value: number | null | undefined, x: number) {
    if (value != null) {
        // 这里的 null 替换成 undefined 结果也是一样的！
        value *= x;
        console.log(value);
    }
}
doSth1(100, 5); // 500
doSth1(null, 5); // 什么也不打印
doSth1(undefined, 5); // 注意：这个也是什么也不打印！已自动将其过滤！
