let timeout;
function debounceDiv() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        getValue3()
    }, 500);
}
async function getValue3() {
    const box1Value = document.getElementById('b1').value;
    const box2Value = document.getElementById('b2').value;
    const response = await fetch(`http://localhost:3000/sum?a=${box1Value}&b=${box2Value}`)
    const data = await response.text();
    document.getElementById('result1').innerText = data;
}
