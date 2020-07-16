(function () {
var people = [{name: "Василий", lastName: "Васильев", age: 39},
              {name: "Евгений", lastName: "Греф", age: 20},
              {name: "Анжелика", lastName: "Варум", age: 34},
              {name: "Владимир", lastName: "Пу", age: 15},
              {name: "Исаак", lastName: "Розенфельд", age: 69},
              {name: "Дмитрий", lastName: "Лукинский", age: 80},
              {name: "Марсель", lastName: "Валиев", age: 101},
              {name: "Мирон", lastName: "Люфт", age: 19},
              {name: "Юлия", lastName: "Аксенова", age: 18},
              {name: "Анастасия", lastName: "Фургал", age: 29}];

function getAvgAge(people) {
    return (_.chain(people)
             .pluck("age")
             .reduce(function(ageSum, age) {
                 return ageSum + age;
            }, 0)) / _.size(people);
}

function getPeopleByAge(people) {
    return _.chain(people)
            .sortBy("age")
            .filter(function(human) {
                return human.age >= 20 && human.age <= 30;
            })
            .pluck("name");
}

function addFullName(people) {
    return _.each(people, function(human) {
        return human.fullName = human.name + " " + human.lastName;
    });
}

function showPeople(people) {
    _.each(people, function(human) {
        console.log(human);
    });
}

console.log("Средний возраст всех людей:");
console.log(getAvgAge(people));

console.log("Люди от 20 до 30 лет:");
console.log(getPeopleByAge(people));

console.log("Добавляем всем людям fullName:");
addFullName(people);
showPeople(people);
}());
