let n = 10;

let fib1 = 0;
let fib2 = 1;

let fib = 0;
console.log(fib1);

for (let i = 1; i < n; i = i + 1) 
{
	console.log(fib1, fib2, fib);
	fib = fib1 + fib2;
	fib1 = fib2;
	fib2 = fib;


}

console.log(fib1);