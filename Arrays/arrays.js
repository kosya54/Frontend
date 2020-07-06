(function () {
    var array = [1, 5, 9, 88, 22, 48, 97, 1, 4, 55, 4, 9, 545];

    function sortDesc(array) {
        return array.sort(function (a, b) {
            return b - a;
        });
    }

    function getFirstSubarray(array) {
        return array.slice(0, 5);
    }

    function getLastSubarray(array) {
        return array.slice(-5);
    }
    
    function getEvenSum(array) {
        return array.reduce(function (sum, elem) {
            if (elem % 2 === 0) {
                sum += elem;
            }

            return sum;
        }, 0);
    }

    function getArraySquaresEvenNumbers(array) {
        var array = [];
        for (var i = 1; i <= 100; i++) {
            array.push(i);
        }

        return array.filter(function (elem) {
            return elem % 2 === 0;
        }).map(function (elem) {
            return Math.pow(elem, 2);
        });
    }

    console.log("Сортировка по убыванию");
    console.log(sortDesc(array).toString());

    console.log("Подмассив первых 5 элементов");
    console.log(getFirstSubarray(array).toString());

    console.log("Подмассив последних 5 элементов");
    console.log(getLastSubarray(array).toString());

    console.log("Сумма четных элементов массива");
    console.log(getEvenSum(array).toString());

    console.log("Массив квадратов четных чисел");
    console.log(getArraySquaresEvenNumbers(array).toString());
}());
