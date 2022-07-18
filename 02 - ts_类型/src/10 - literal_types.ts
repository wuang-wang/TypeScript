// 字符串类型
let testString = 'hello world';
testString = 'hello ts';

const constantString = 'hello world';
// constantString = ''

let x: 'hello' = 'hello'; // 设置x的值必须为 hello 字符串
// x = 'hello1';

// 数字类型
function compare(a: string, b: string): 1 | 0 | -1 {
    return a === b ? 0 : a > b ? 1 : -1;
}

// 文字和其他类型结合
interface Options {
    width: number;
}
function configure(x: Options | 'auto') {
    console.log(x);
}
configure({ width: 100 });
configure('auto');
// configure('auto1')

// 布尔文字类型
let booleanTrue: true = true;
let booleanFalse: false = false;
