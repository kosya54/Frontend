var fahrenheitOutput = document.querySelector("input[name=\"fahrenheit\"]");
var kelvinOutput = document.querySelector("input[name=\"kelvin\"]");

document.addEventListener("DOMContentLoaded", function () {
    var degreesInput = document.querySelector("input[name=\"celsius\"]");

    degreesInput.addEventListener("input", function () {
        var enteredChar = this.value.charAt(this.value.length - 1);
        var invalidDataClass = "red-border";

        if (isNaN(parseFloat(enteredChar)) || isNaN(parseFloat(this.value))) {
            this.classList.add(invalidDataClass);

            fahrenheitOutput.value = "";
            kelvinOutput.value = "";

            return;
        }

        this.classList.remove(invalidDataClass);

        var enteredDegrees = parseFloat(this.value);
        fahrenheitOutput.value = ((enteredDegrees * 9 / 5) + 32).toFixed(2);
        kelvinOutput.value = (enteredDegrees + 273.15).toFixed(2);
    });
});