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
    for(let n = 55; n >= 11; n -= 2) {
        console.log(n)
    }
}

function calcSum50() {
    let total = 0
    for(let num = 5; num <= 50; num++) {
        total += num
    }
    
    console.log("The sum of all integers to 50 starting at 5:" + total);
}

function calcSum100() {
    let total = 0
    for (let num = 10; num <= 100; num+= 10) {
        total += num
    }
    console.log("The sum of all integers to 100 (counting by 10):" + total);
}

