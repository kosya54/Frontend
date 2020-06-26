(function () {
    var array = [1, 5, 9, 88, 22, 48, 97, 1, 4, 55, 4, 9, 545];
    console.log("Изначальный массив:");
    console.log(array.toString());

    array.sort(function (a, b) {
        return b - a;
    });

    console.log();
    console.log("Сортировка по убыванию:");
    console.log(array.toString());

    console.log();
    console.log("Подмассив первых 5 элементов:");
    console.log(array.slice(0, 5).toString());

    console.log();
    console.log("Подмассив последних 5 элементов:");
    console.log(array.slice(-5).toString());

    var result = array.reduce(function (sum, elem) {
        if (elem % 2 === 0) {
            sum += elem;
        }
        return sum;
    }, 0);

    console.log();
    console.log("Сумма четных элементов массива:");
    console.log(result);
}());

(function () {
    var array1 = [];
    for (var i = 1; i <= 100; i++) {
        array1.push(i);
    }

    var array2 = array1.filter(function (elem) {
        if (elem % 2 === 0) {
            return true;
        }
    }).map(function (elem) {
        return Math.pow(elem, 2);
    });

    console.log();
    console.log("Массив квадратов четных чисел:");
    console.log(array2.toString());
}());



