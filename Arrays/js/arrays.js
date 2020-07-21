(function () {
    function sortDesc(array) {
        return array.sort(function (a, b) {
            return b - a;
        });
    }

    function getFirstSubarray(array, number) {
        return array.slice(0, number);
    }

    function getLastSubarray(array, number) {
        return array.slice(-number);
    }

    function getEvenSum(array) {
        return array.filter(function (e) {
            return e % 2 === 0;
        }).reduce(function (sum, e) {
            return sum + e;
        }, 0);
    }

    function getArraySquaresEvenNumbers() {
        var array = [];
        for (var i = 1; i <= 100; i++) {
            array.push(i);
        }

        return array.filter(function (e) {
            return e % 2 === 0;
        }).map(function (e) {
            return Math.pow(e, 2);
        });
    }

    var array = [1, 5, 9, 88, 22, 48, 97, 1, 4, 55, 4, 9, 545];

    console.log("Сортировка по убыванию");
    console.log(sortDesc(array));

    console.log("Подмассив первых 5 элементов");
    console.log(getFirstSubarray(array, 5));

    console.log("Подмассив последних 5 элементов");
    console.log(getLastSubarray(array, 5));

    console.log("Сумма четных элементов массива");
    console.log(getEvenSum(array));

    console.log("Массив квадратов четных чисел");
    console.log(getArraySquaresEvenNumbers(array));
}());
