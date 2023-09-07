const inputTemperature = document.getElementById('inputTemperature');
const outputTemperature = document.getElementById('outputTemperature');

inputTemperature.addEventListener('input', updateTemperatures);

function updateTemperatures() {
    const inputValue = parseFloat(inputTemperature.value);

    if (!isNaN(inputValue)) {
        const fahrenheit = (inputValue * 9 / 5) + 32;
        const celsius = (inputValue - 32) * 5 / 9;

        outputTemperature.innerText = `Result: ${inputValue} °C = ${fahrenheit.toFixed(2)} °F | ${inputValue} °F = ${celsius.toFixed(2)} °C`;
    } else {
        outputTemperature.innerText = 'Result: Invalid input';
    }
}
