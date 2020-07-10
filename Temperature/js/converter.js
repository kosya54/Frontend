function ready() {
    var degreesInput = document.querySelector('input[name="celsius"]');

    degreesInput.addEventListener("input", function (event) {
        var enteredChar = this.value.charAt(this.value.length - 1);
        var invalidDataClass = "red-border";

        if (isNaN(parseFloat(enteredChar))) {
            this.classList.add(invalidDataClass);

            return;
        }

        if (this.classList.contains(invalidDataClass)) {
            this.classList.remove(invalidDataClass);
        }

        var enteredDegrees = parseFloat(this.value);
        document.querySelector('input[name="fahrenheit"]').value = ((enteredDegrees * 9 / 5) + 32).toFixed(2);
        document.querySelector('input[name="kelvin"]').value = (enteredDegrees + 273.15).toFixed(2);
    });
}

document.addEventListener("DOMContentLoaded", ready);
