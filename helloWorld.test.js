// helloWorld.test.js

const sayHello = require('./helloWorld');

test('debería retornar "Hola Mundo"', () => {
    expect(sayHello()).toBe("Hola Mundo");
});
