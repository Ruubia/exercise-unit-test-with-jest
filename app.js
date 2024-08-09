// One euro is:
//let oneEuroIs = {
//    "JPY": 156.5, // japan yen
//    "USD": 1.07, // us dollar
//    "GBP": 0.87, // british pound
//}

// 1 euro = 1.07 dolares
// 1 euro = 156.5 yenes
// 1.07 dolares = 156.5 yenes
// 1 dolares = 146.53064 yenes

// 1 euro = 156.5 yenes
// 1 euro = 0.87 pounds
// 156.5 yenes = 0.87 pounds
// 1 yen = 0.0053466587

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// declaramos la funcion para convertir de dolares a yenes

const fromDollarToYen = function(valueInDollar) {
    // convertimos el valor a dolares
    let valueInYen = valueInDollar * 146.53064;
    // retornamos el valor
    return valueInYen;
}

// declaramos la funcion que conviete yenes a pounds

const fromYenToPound = function(valueInYen) {
    // convertimos el valor a dolares
    let valueInPound = valueInYen *  0.0053466587;
    // retornamos el valor
    return valueInPound;
}

// esta es mi función que suma dos números
const sum = (a, b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7, 3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = {
    sum,
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};