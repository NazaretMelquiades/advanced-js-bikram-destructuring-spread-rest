const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

const [, ana] = empleados;

console.log(ana); // { name: "Ana", email: "Ana@gmail.com" }

//ejercicio 2
const empleados2 = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

const [Luis, ,] = empleados; // destructuring de array
console.log(Luis);
//const emailLuis = Luis.email;
//const emailLuis = Luis["email"];
const { email: emailLuis } = Luis; // destructuring de objeto
console.log(emailLuis);

//ejercicio 3
let a = 5;
let b = 3;

[a, b] = [b, a];

console.log(a); // 3
console.log(b); // 5

//ejercicio 4
const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
};

const maximaHoy = HIGH_TEMPERATURES.today;
const maximaManana = HIGH_TEMPERATURES.tomorrow;
console.log(maximaHoy);
console.log(maximaManana);

//ejercicio 5
function sumEveryOther(...nums) {
    let total = 0;

    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
    }
    return total;
};

//ejercicio 6
function addOnlyNums(...arr) {
    const arrayFiltrado = arr.filter(elemento => (typeof elemento === "number"));
    return arrayFiltrado.reduce((a, b) => (a + b));
};

//ejercicio 7
function countTheArgs(...args) {
    return args.length;

}

console.log(countTheArgs("gato", "perro", "pollo", "oso"));

//ejercicio 8
function combineTwoArrays(arr1, arr2) {
    return [...arr1, ...arr2];

}

//ejercicio 9
function onlyUniques(...args) {
    return [...new Set(args)];

}

//ejercicio 10
function combineAllArrays(...arr) {
    return arr.reduce((a, b) => [...a, ...b]);

}

console.log(combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]));
console.log(combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]));

//ejercicio 11
function sumAndSquare(...num) {
    return num.map(num => num ** 2)
        .reduce((a, b) => a + b, 0);

}











