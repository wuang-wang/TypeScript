"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Left"] = 0] = "Left";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Right"] = 2] = "Right";
    Direction[Direction["Up"] = 1] = "Up";
})(Direction || (Direction = {}));
console.log(Direction.Left);
console.log(Direction.Down);
console.log(Direction.Right);
console.log(Direction.Up);
