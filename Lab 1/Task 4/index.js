const lodash = require('lodash')

// Показує версію lodash
console.log("Версія lodash:", lodash.VERSION)

// Повертає суму двох чисел, або ще може повертати string
console.log("Сума двух чисел:", lodash.add(2, 9))

const array1 = ["Hello", "World"]
const array2 = ["I'm", "from", "Ukraine"]
const value = 1

// Конкатенація двох масивів та значення
const hello = lodash.concat(array1, array2, value)

console.log("Конкатенація переміних:", hello)

const array4 = [1, 2, 3]
const array5 = ["one", "two", "three"]
const array6 = [true, false, true]

// Створення масиву групованих значень по індексу
const zipped = lodash.zip(array4, array5, array6)

console.log("Груповий масив:", zipped)

// Повертає розмір строки або масиву
console.log("Розмір переміної:", lodash.size(array5))

