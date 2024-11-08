"use strict";
const sumArray = (value) => {
    const info = value.reduce((acc, current) => {
        return acc + current;
    }, 0);
    return info;
};
const result = sumArray([1, 2, 3, 4, 5]);
console.log(result);
