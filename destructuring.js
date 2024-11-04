let foo = ["one", "two", "three"];

// без деструктурирования
let one = foo[0];
let two = foo[1];
let three = foo[2];

// с деструктурированием
let [a, b, c] = foo;

console.log (a, b, c);