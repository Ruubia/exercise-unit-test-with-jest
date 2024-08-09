// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

// test para funcion de dolares a yenes
test("One dollar should be 146.53064 yens", function() {
    // importo la funcion desde app.js
    const {
        fromDollarToYen
    } = require('./app.js')

    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(3.5)).toBe(512.75); //1 dollar son 146,5 yenes dolares, entonces 3.5 dolares deberian ser = (3.5 * 146.5)
})
test("One yen should be 0.0053466587 punds", function() {
    // importo la funcion desde app.js
    const {
        fromYenToPound
    } = require('./app.js')

    // hago mi comparacion (la prueba)
    expect(fromYenToPound(3.5)).toBe(0.0187145); //1 yen son 0.005347 punds, entonces 3.5 yenes deberian ser = (3.5 * 0.005347)
})