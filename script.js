let happyBtn = document.getElementById("happy");
let multiplesBtn = document.getElementById("4multiples");
let oddNumBtn = document.getElementById("oddNum");
let sum50 = document.getElementById("sum50");
let sum100 = document.getElementById("sum100");

happyBtn.addEventListener("click", happy);
multiplesBtn.addEventListener("click", multiples);
oddNumBtn.addEventListener("click", oddNum);
sum50.addEventListener("click", calcSum50);
sum100.addEventListener("click", calcSum100);

function happy() {
    for(let n = 1; n <= 500; n++) {
        console.log("I'm so happy!");
    }
}

function multiples() {
    for(let n = 4; n<= 800; n+=4) {
        console.log(n);
    }
}

function oddNum() {
    for(let n = 11; n<= 55; n+=2) {
        console.log(n)
    }
}

function calcSum50() {
    let total = 50/2 * (50 + 1);
    console.log("The sum of all integers to 50 is:" + total);
}

function calcSum100() {
    let total = 100/2 * (100 + 1);
    console.log("The sum of all integers to 100 is:" + total);
}

