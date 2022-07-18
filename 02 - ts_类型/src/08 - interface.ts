interface interfacePoint {
    x: number;
    y: number;
}
function printInterfaceCoord(pt: interfacePoint) {
    console.log(pt);
}
printInterfaceCoord({
    x: 12,
    y: 67,
});

// 扩展接口
interface Animal {
    name: string;
}
interface Bear extends Animal {
    honey: boolean;
}
const bear: Bear = {
    name: 'tom',
    honey: true,
};
console.log(bear);

// 向现有类型中添加字段
interface MyWindow {
    count: number;
}
interface MyWindow {
    title: string;
}
const w: MyWindow = {
    title: 'hello ts',
    count: 100,
};
console.log(w);

