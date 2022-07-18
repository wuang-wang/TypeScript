type typePoint = {
    x: number;
    y: number;
};

function printCoord(pt: typePoint) {
    console.log(pt);
}

printCoord({
    x: 100,
    y: 200,
});

// 扩展
type typeAnimal = {
    name: string;
};
type typeBear = typeAnimal & {
    honey: boolean;
};
const typeBear: typeBear = {
    name: 'winie',
    honey: false,
};
console.log(typeBear);