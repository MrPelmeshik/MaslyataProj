// 1
let admin, name;

// 1.1
name = "Джон";

// 1.2
admin = name;

// 1.3
alert(admin);


// 2
for (let i = 2; i <= 10; i = i + 2) {
    console.log(i);
}


// 3
let i = 2;
while (i <= 10) {
    console.log(i);
    i = i + 2;
}


// 4
let c = prompt("Введите число больше 100");
while (x <= 100) {
    c = prompt("Повторите попытку. Введите число больше 100");
}


// 5
let age = prompt("Введите возраст");

function checkAge(age) {
    return age >= 14 && age <= 90;
}

if (checkAge(age)) {
    alert("True");
} else {
    alert("False");
}


// 6
age = prompt("Введите возраст");
if (!checkAge(age)) {
    alert("True");
} else {
    alert("False");
}


// 7
// ????


// 8
function makeNegative(num) {
    return num > 0 ? num * -1 : num;
}

let num = prompt("Введите число");
nym = makeNegative(num);
alert(num);


// 9
function isDivisible(n, x, y) {
    return n % x == 0 && n % y == 0;
}

let n = prompt("Введите число №1");
let x = prompt("Введите число №2");
let y = prompt("Введите число №3");
if (isDivisible(n, x, y)) {
    alert(`n = ${n}, x = ${x}, y = ${y} => true because ${n} is divisible by ${x} and ${y}`);
} else {
    alert(`n = ${n}, x = ${x}, y = ${y} => false because ${n} is neither divisible by ${x} and ${y}`);
}


// 10
function sum (numbers) {
    let sum = 0;

    if(numbers.length > 0)
        numbers.forEach(number => sum += number);

    return sum;
};

let arr = [1, 5.2, 4, 0, -1];
alert(`sum(${arr}) = ${sum(arr)}`);

arr = [];
alert(`sum(${arr}) = ${sum(arr)}`);

arr = [-2.398];
alert(`sum(${arr}) = ${sum(arr)}`);
