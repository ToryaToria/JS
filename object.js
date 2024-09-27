//фссоуиативные массивы, словари(мапы)

let processorPrice = {
	'i5': 5000,
	'i7': 10000,
};

let displayPrice = {
	13: 5000,
	15: 10000,
}

let memoryPrice = {
 8: 3000, 
 16: 4000,
}

// создание объкта через функцию
let buildComputer = function (memory, display, processor) {
	let computer = {
		basicPrice: 5000,
		processor: processor,
		display: display,
		memory: memory,

		// свойство-функция - метод объекта
		getDescription: function () {
			return 'компьютер с процессором ' + this.processor + ', диагональю ' + this.display + ', оперативной памятью ' + this.memory;
		},

		getPrice: function () {
			return this.basicPrice + processorPrice[this.processor] + displayPrice[this.display] + memoryPrice[this.memory];
		},
// computer заменила на this
// ключи-переменные должны быть в []


	};
	return computer;
}

	let myComputer = buildComputer(8, 13, 'i7');

	console.log('В корзине ' + myComputer.getDescription() + ' стоимостью ' + myComputer.getPrice());  //вызовсвойства-функции 

