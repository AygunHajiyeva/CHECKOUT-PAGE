let plus1 = document.querySelector(".plus1");
let minus1 = document.querySelector(".minus1");
let p1 = document.querySelector(".p1");
let total = document.querySelector(".total-cost");

let plus2 = document.querySelector(".plus2");
let minus2 = document.querySelector(".minus2");
let p2 = document.querySelector(".p2");

let cost = 0;
let backbag = 54.99;
let shoes = 74.99;
let num1 = 0;
let num2 = 0;

plus1.addEventListener("click", add1);
minus1.addEventListener("click", subs1);

plus2.addEventListener("click", add2);
minus2.addEventListener("click", subs2);

let sum = function () {
    cost = (num1 * backbag + num2 * shoes + 19);
    if (num1 == 0 && num2 == 0) {
        cost = 0;
    }

    cost = Math.round(cost * 100) / 100
    total.innerHTML = "$" + cost;

};

function add1() {
    num1 += 1;
    p1.innerHTML = num1;
    sum();
}

function subs1() {
    if (num1 > 0) {
        num1 -= 1;
    }
    p1.innerHTML = num1;
    sum();
}

function add2() {
    num2 += 1;
    p2.innerHTML = num2;
    sum();
}

function subs2() {
    if (num2 > 0) {
        num2 -= 1;
    }
    p2.innerHTML = num2;
    sum();
}