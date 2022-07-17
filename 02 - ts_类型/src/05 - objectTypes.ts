// 定义必传参数类型
function printCoord(pt: { x: number; y: number }) {
    console.log('x值为：' + pt.x);
    console.log('y值为：' + pt.y);
}

printCoord({
    x: 22,
    y: 12,
});

// 定义可选参数类型
function printName(name: { first: string; last?: string }) {
    console.log('first值为：' + name.first);
    console.log('last值为：' + name.last?.toLowerCase());
}

printName({
    first: '吾昂王',
});
