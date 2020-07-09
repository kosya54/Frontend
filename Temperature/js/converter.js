function ready() {
    var degreesInput = document.querySelector('input[name="celsius"]');

    degreesInput.addEventListener("input", function (event) {
        var enteredDegrees = degreesInput.value;

        if (!Number(enteredDegrees) && enteredDegrees !== '' && enteredDegrees !== '0') {
            alert("Введите число.");

            return;
        }

        document.querySelector('input[name="fahrenheit"]').value = (Number(enteredDegrees) * 9 / 5) + 32;
        document.querySelector('input[name="kelvin"]').value = Number(enteredDegrees) + 273.15;
    });
}

document.addEventListener("DOMContentLoaded", ready);
