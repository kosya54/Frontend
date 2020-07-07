(function () {
    var country = [
        {
            name: "Russia",
            cities: [{
                name: "Moscow",
                population: 11920000
            }, {
                name: "Novosibirsk",
                population: 1511000
            }, {
                name: "Kazan",
                population: 1169000
            }]
        }, {
            name: "Japan",
            cities: [{
                name: "Gamagori",
                population: 80693
            }, {
                name: "Shinshiro",
                population: 47527
            }, {
                name: "Nisshin",
                population: 88419
            }]
        }, {
            name: "Commonwealth of Australia",
            cities: [{
                name: "Ballarat",
                population: 101588
            }, {
                name: "Canberra",
                population: 410301
            }, {
                name: "Perth",
                population: 2059484
            }, {
                name: "Meekatharra",
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

    console.log(getCountryMaxCity(country)[0].name);
    console.log(getCountrySummary(country));
}());
