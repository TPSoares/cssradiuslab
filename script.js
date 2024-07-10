// script.js

document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('box');
    const copyBtn = document.getElementById('copy-css');
    const cssOutput = document.getElementById('css-output');

    const inputs = [
        { id: 'tl-radius', prop: 'borderTopLeftRadius', valueId: 'tl-value' },
        { id: 'tr-radius', prop: 'borderTopRightRadius', valueId: 'tr-value' },
        { id: 'bl-radius', prop: 'borderBottomLeftRadius', valueId: 'bl-value' },
        { id: 'br-radius', prop: 'borderBottomRightRadius', valueId: 'br-value' }
    ];

    inputs.forEach(input => {
        const rangeInput = document.getElementById(input.id);
        const valueDisplay = document.getElementById(input.valueId);

        rangeInput.addEventListener('input', () => {
            const value = rangeInput.value + '%';
            box.style[input.prop] = value;
            valueDisplay.textContent = rangeInput.value;
            updateCSSOutput();
        });
    });

    function updateCSSOutput() {
        const cssText = `
            border-top-left-radius: ${box.style.borderTopLeftRadius};
            border-top-right-radius: ${box.style.borderTopRightRadius};
            border-bottom-left-radius: ${box.style.borderBottomLeftRadius};
            border-bottom-right-radius: ${box.style.borderBottomRightRadius};
        `;
        cssOutput.value = cssText.trim();
    }

    copyBtn.addEventListener('click', () => {
        cssOutput.select();
        document.execCommand('copy');
        alert('CSS copied to clipboard!');
    });

    // Initialize the CSS output with default values
    updateCSSOutput();
});
