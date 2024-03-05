const display = document.getElementById('result');

function appendToResult(value) {
    document.getElementById('result').value += value;


}

function clearResult() {
    document.getElementById('result').value = '';
}
function deleteFromDisplay() {
    document.getElementById('result').value = document.getElementById('result').value.slice(0, -1);
}


function calculateResults() {
    const expression = document.getElementById('result').value;

    try {
        const result = eval(expression)
        document.getElementById('result').value = result


    } catch (error) {
        document.getElementById('result').value = 'Error';


    }
}
// function showCalculations () {
// document.getElementById('input').textContent = calculation;
// }

// showCalculations() 