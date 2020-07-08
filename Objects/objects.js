(function () {
    var country = [
        {
            name: "Россия",
            cities: [{
                name: "Москва",
                population: 11920000
            }, {
                name: "Новосибирск",
                population: 1511000
            }, {
                name: "Казань",
                population: 1169000
            }]
        }, {
            name: "Япония",
            cities: [{
                name: "Гамагори",
                population: 80693
            }, {
                name: "Шинширо",
                population: 47527
            }, {
                name: "Нишин",
                population: 88419
            }]
        }, {
            name: "Австралия",
            cities: [{
                name: "Балларат",
                population: 101588
            }, {
                name: "Канберра",
                population: 410301
            }, {
                name: "Перт",
                population: 2059484
            }, {
                name: "Микатарра",
                population: 708
            }]
        }
    ];

    function getCountryMaxCity(country) {
        var maxCountCity = 0;
        country.forEach(function (elem) {
            if (elem.cities.length > maxCountCity) {
                maxCountCity = elem.cities.length;
            }
        });

        return country.filter(function (elem) {
            return elem.cities.length === maxCountCity;
        });
    }

    function getCountrySummary(country) {
        var countrySammary = {};

        country.forEach(function (elem) {
            countrySammary[elem.name] = elem.cities.reduce(function (sum, citiesElem) {
                return sum + citiesElem.population;
            }, 0);
        });

        return countrySammary;
    }

    function showCountry(country) {
        var countryMaxCity = getCountryMaxCity(country);

        if (countryMaxCity.length > 1) {
            console.log("Страны с максимальным количеством городов:");
        } else {
            console.log("Страна с максимальным количеством городов:");
        }

        for (var i = 0; i < countryMaxCity.length; i++) {
            console.log(countryMaxCity[i].name + ": " + countryMaxCity[i].cities.length);
        }
    }

    function showCountrySummary(country) {
        var countrySummary = getCountrySummary(country);

        console.log("Название страны: суммарная численность по стране.");
        for (var key in countrySummary) {
            console.log(key + ": " + countrySummary[key]);
        }
    }

    showCountry(country);
    showCountrySummary(country);
}());
