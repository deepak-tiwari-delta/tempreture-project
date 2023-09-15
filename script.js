function convert(unit) {
    if (unit === 'celsius') {
        const celsius = parseFloat(document.getElementById('celsius').value);
        const fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('fahrenheit').value = isNaN(fahrenheit) ? '' : fahrenheit.toFixed(2);
    } else if (unit === 'fahrenheit') {
        const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
        const celsius = (fahrenheit - 32) * 5/9;
        document.getElementById('celsius').value = isNaN(celsius) ? '' : celsius.toFixed(2);
    }
}

// Optional: Convert initial values if present
convert('celsius');
