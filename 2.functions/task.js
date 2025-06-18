
//ЗАДАЧА 1

function getArrayParams(...arr) {
	if (arr.length === 0) return {};   //ПРОВЕРКА НА НАЛИЧИЕ ЭЛЕМЕНТОВ ДЛЯ ВВОДА

	let max = -Infinity;
	let min = Infinity;
	let sum = 0;

	for (i = 0; i < arr.length; i++) {

		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}

		sum = sum + arr[i];
	}

	let avg = Number((sum / arr.length).toFixed(2));   // вычислям среднее значение

	return {
		min,
		max,
		avg
	};

}


//ЗАДАЧА 2, функция 1

function summElementsWorker(...arr) { //1
	if (arr.length === 0) return 0;   //ПРОВЕРКА НА НАЛИЧИЕ ЭЛЕМЕНТОВ ДЛЯ ВВОДА

	let sum = 0;
	for (i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;

}


//ЗАДАЧА 2, функция 2

function differenceMaxMinWorker(...arr) { //2
	if (arr.length === 0) return 0;    //ПРОВЕРКА НА НАЛИЧИЕ ЭЛЕМЕНТОВ ДЛЯ ВВОДА

	let max = -Infinity;
	let min = Infinity;
	let sum;
	for (i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) min = arr[i];

		sum = max - min;
	}

	return sum;
}


//ЗАДАЧА 2, функция 3

function differenceEvenOddWorker(...arr) { //3
	if (arr.length === 0) return 0;   //ПРОВЕРКА НА НАЛИЧИЕ ЭЛЕМЕНТОВ ДЛЯ ВВОДА
	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	return sumEvenElement - sumOddElement;

}

//ЗАДАЧА 2, функция 4

function averageEvenElementsWorker(...arr) { //4
	if (arr.length === 0) return 0;   //ПРОВЕРКА НА НАЛИЧИЕ ЭЛЕМЕНТОВ ДЛЯ ВВОДА
	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}

	let div = sumEvenElement / countEvenElement;

	return div;

}


//ЗАДАЧА 3

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	const result = [];

	for (let i = 0; i < arrOfArr.length; i++) {
		let totalResult = func(...arrOfArr[i]);
		result.push(totalResult);

		if (totalResult > maxWorkerResult) {
			maxWorkerResult = totalResult;
		}
	}

	return maxWorkerResult;
}