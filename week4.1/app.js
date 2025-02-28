
// function getValue() {
//     const box1Value = document.getElementById('box1').value;
//     const box2Value = document.getElementById('box2').value;
//     return parseInt(box1Value) + parseInt(box2Value);

// const { response } = require("express");

// }
function getValue() {
    const box1Value = document.getElementById('box1').value;
    const box2Value = document.getElementById('box2').value;
    fetch(`http://localhost:3000/sum?a=${box1Value}&b=${box2Value}`)
        .then(function (response) {
            response.text()
                .then(function (data) {
                    document.getElementById('result').innerText = data;
                })
        })
}

async function getValue2() {
    const box1Value = document.getElementById('box1').value;
    const box2Value = document.getElementById('box2').value;
    const response = await fetch(`http://localhost:3000/sum?a=${box1Value}&b=${box2Value}`)
    const data = await response.text();
    document.getElementById('result').innerText = data;
}

async function calculateInterest(){
    const principal = document.getElementById('principal').value;
    const rate = document.getElementById('rate').value;
    const time = document.getElementById('time').value;
    const response = await fetch(`http://localhost:3000/interest?principal=${principal}&rate=${rate}&time=${time}`);
    const data = await response.json();
    document.getElementById('interest').innerText = data.interest;
    document.getElementById('total').innerText = data.total;
}

