function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperatureInput').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    let result;

    if (fromUnit === toUnit) {
        result = temperature;
    } else if (fromUnit === 'celsius') {
        if (toUnit === 'fahrenheit') {
            result = (temperature * 9/5) + 32;
        } else if (toUnit === 'kelvin') {
            result = temperature + 273.15;
        }
    } else if (fromUnit === 'fahrenheit') {
        if (toUnit === 'celsius') {
            result = (temperature - 32) * 5/9;
        } else if (toUnit === 'kelvin') {
            result = (temperature - 32) * 5/9 + 273.15;
        }
    } else if (fromUnit === 'kelvin') {
        if (toUnit === 'celsius') {
            result = temperature - 273.15;
        } else if (toUnit === 'fahrenheit') {
            result = (temperature - 273.15) * 9/5 + 32;
        }
    }

    // Display the result in the textarea
    document.getElementById('resultOutput').value = `Result: ${result.toFixed(2)} ${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}`;
}
